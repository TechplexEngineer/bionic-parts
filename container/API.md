# PenguinCAM Server API

`POST /process` — Convert a DXF file to G-code.

Content-Type: `multipart/form-data`

## Fields

| Field | Type | Required | Default | Description |
|---|---|---|---|---|
| `file` | file | yes | — | DXF file |
| `material_thickness` | float | yes | — | Material thickness (inches) |
| `tool_diameter` | float | no | `0.157` | Tool diameter (inches). 0.157 = 4mm |
| `material` | string | no | `plywood` | `plywood`, `aluminum`, or `polycarbonate` |
| `units` | string | no | `inch` | `inch` or `mm` |
| `config` | JSON string | no | — | Machine/team config (see below) |

## Response

```json
{
  "success": true,
  "gcode": "...",
  "filename": "output_20260410_180336.nc",
  "errors": [],
  "warnings": [],
  "stats": {
    "num_holes": 84,
    "num_pockets": 0,
    "has_perimeter": true,
    "total_lines": 1994,
    "cycle_time_seconds": 308.66,
    "cycle_time_display": "5m 8s",
    "cutting_time": "4m 48s",
    "rapid_time": "9s",
    "dwell_time": "10s"
  }
}
```

On error: `{"error": "message"}` with appropriate HTTP status.

## Config

Optional JSON overriding any subset of the defaults. Omitted keys fall back to built-in defaults.

```json
{
  "team": {
    "number": 6238,
    "name": "Popcorn Penguins"
  },
  "machine": {
    "name": "Generic CNC Router",
    "manufacturer": "Generic",
    "controller": "Generic",
    "dimensions": { "x_max": 50.0, "y_max": 50.0, "z_max": 8.0 },
    "park_position": { "x": 0.5, "y": 0.5, "z": -0.5 },
    "coolant": "Air"
  },
  "machining": {
    "z_reference": {
      "sacrifice_board_depth": 0.008,
      "clearance_height": 0.5
    },
    "tabs": {
      "enabled": true,
      "width": 0.25,
      "height": 0.1,
      "spacing": 6.0,
      "remove_tabs": true
    },
    "fixturing": { "pause_before_perimeter": false },
    "holes": {
      "detection_tolerance": 0.02,
      "min_millable_multiplier": 1.2
    },
    "default_tool": { "diameter": 0.157 }
  },
  "materials": {
    "plywood": {
      "name": "Plywood",
      "spindle_speed": 18000,
      "feed_rate": 75.0,
      "ramp_feed_rate": 50.0,
      "plunge_rate": 35.0,
      "ramp_angle": 20.0,
      "ramp_start_clearance": 0.150,
      "stepover_percentage": 0.65,
      "helix_radius_multiplier": 0.75,
      "max_slotting_depth": 0.4,
      "tab_width": 0.25,
      "tab_height": 0.15
    }
  }
}
```

## Example

```bash
curl -X POST http://localhost:3000/process \
  -F "file=@part.dxf" \
  -F "material_thickness=0.25" \
  -F "material=plywood" \
  -F 'config={"machine":{"dimensions":{"x_max":48,"y_max":48}}}' \
  | python3 -m json.tool
```

## Running

```bash
python server.py            # default port 3000
PORT=8080 python server.py  # custom port
```
