#!/usr/bin/env python3
"""
Minimal HTTP server that accepts a DXF file + cutting parameters
and returns generated G-code.

POST /process
  - multipart/form-data with:
      file:               DXF file (required)
      material_thickness: float, inches (required)
      tool_diameter:      float, inches (default: 0.157 = 4mm)
      material:           plywood | aluminum | polycarbonate (default: plywood)
      units:              inch | mm (default: inch)

Returns JSON:
  { success, gcode, filename, errors, warnings, stats }
"""

import os
import re
import tempfile
from http.server import HTTPServer, BaseHTTPRequestHandler
import json

from frc_cam_postprocessor import FRCPostProcessor
from team_config import TeamConfig


def parse_multipart(headers, body: bytes):
    """Parse multipart/form-data without the deprecated cgi module."""
    content_type = headers.get("Content-Type", "")
    match = re.search(r"boundary=(.+)", content_type)
    if not match:
        return {}, {}
    boundary = match.group(1).strip().encode()

    fields = {}
    files = {}

    for part in body.split(b"--" + boundary):
        if part in (b"", b"--", b"--\r\n", b"\r\n"):
            continue
        part = part.strip(b"\r\n")
        if b"\r\n\r\n" not in part:
            continue
        raw_headers, raw_body = part.split(b"\r\n\r\n", 1)
        # strip trailing boundary closer
        if raw_body.endswith(b"\r\n"):
            raw_body = raw_body[:-2]

        header_str = raw_headers.decode("utf-8", errors="replace")
        disp_match = re.search(r'name="([^"]+)"', header_str)
        if not disp_match:
            continue
        name = disp_match.group(1)

        if "filename=" in header_str:
            files[name] = raw_body
        else:
            fields[name] = raw_body.decode("utf-8")

    return fields, files


class Handler(BaseHTTPRequestHandler):

    def do_POST(self):
        if self.path != "/process":
            self._respond(404, {"error": "Not found"})
            return

        content_type = self.headers.get("Content-Type", "")
        if "multipart/form-data" not in content_type:
            self._respond(400, {"error": "Content-Type must be multipart/form-data"})
            return

        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        fields, files = parse_multipart(self.headers, body)

        if "file" not in files:
            self._respond(400, {"error": "Missing 'file' field with DXF data"})
            return

        if "material_thickness" not in fields:
            self._respond(400, {"error": "Missing required field 'material_thickness'"})
            return

        thickness = float(fields["material_thickness"])
        tool_dia = float(fields.get("tool_diameter", "0.157"))
        material = fields.get("material", "plywood")
        units = fields.get("units", "inch")

        # Optional JSON config matching TEAM_6238_DEFAULTS structure
        config = None
        if "config" in fields:
            try:
                config = TeamConfig(json.loads(fields["config"]))
            except (json.JSONDecodeError, ValueError) as e:
                self._respond(400, {"error": f"Invalid config JSON: {e}"})
                return

        tmp = tempfile.NamedTemporaryFile(suffix=".dxf", delete=False)
        try:
            tmp.write(files["file"])
            tmp.close()

            pp = FRCPostProcessor(
                material_thickness=thickness,
                tool_diameter=tool_dia,
                units=units,
                config=config,
            )
            pp.apply_material_preset(material)
            pp.load_dxf(tmp.name)
            pp.transform_coordinates("bottom-left", 0)
            pp.identify_perimeter_and_pockets()
            pp.classify_holes()
            result = pp.generate_gcode()

            self._respond(200, result.to_dict())
        except Exception as e:
            self._respond(500, {"error": str(e)})
        finally:
            os.unlink(tmp.name)

    def _respond(self, code, body):
        payload = json.dumps(body).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    server = HTTPServer(("0.0.0.0", port), Handler)
    print(f"Listening on http://0.0.0.0:{port}")
    print("POST /process  (multipart/form-data: file, material_thickness, tool_diameter, material, units)")
    server.serve_forever()
