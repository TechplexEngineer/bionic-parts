

<Navbar/>

<div class="container mt-4">
	<h1>Bionic CAM Tool</h1>

	<div class="card mt-4">
		<div class="card-body">
			<h5 class="card-title">Upload & Configure</h5>

			<div class="mb-3">
				<label for="fileUpload" class="form-label">Upload File (DXF/SVG)</label>
				<input class="form-control" type="file" id="fileUpload" accept=".dxf,.svg" bind:files={uploadFiles} />
			</div>

			<div class="mb-3">
				<label for="materialType" class="form-label">Material Type</label>
				<select class="form-select" id="materialType" bind:value={materialType}>
					<option value="Plywood">Plywood</option>
					<option value="Aluminum">Aluminum</option>
					<option value="Polycarbonate">Polycarbonate</option>
				</select>
			</div>

			<div class="mb-3">
				<label for="materialThickness" class="form-label">Material Thickness (inches)</label>
				<input type="number" class="form-control" id="materialThickness" step="0.001" bind:value={materialThickness} />
			</div>

			<div class="mb-3">
				<label for="toolDiameter" class="form-label">Tool Diameter (inches)</label>
				<input type="number" class="form-control" id="toolDiameter" step="0.001" bind:value={toolDiameter} />
			</div>

			<div class="d-flex gap-2">
				<button class="btn btn-primary" on:click={generateProgram} disabled={generating}>
					{generating ? 'Generating...' : 'Generate Program'}
				</button>
				<button class="btn btn-success" on:click={downloadGcode} disabled={!gcodeReady}>
					Download G-Code
				</button>
			</div>

			{#if errorMessage}
				<div class="alert alert-danger mt-3">{errorMessage}</div>
			{/if}
			{#if successMessage}
				<div class="alert alert-success mt-3">{successMessage}</div>
			{/if}
		</div>
	</div>
</div>


<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";

	let uploadFiles: FileList | undefined;
	let materialType = 'Plywood';
	let materialThickness = 0.25;
	let toolDiameter = 0.157;
	let generating = false;
	let gcodeReady = false;
	let jobId = '';
	let errorMessage = '';
	let successMessage = '';

	async function generateProgram() {
		errorMessage = '';
		successMessage = '';
		gcodeReady = false;

		if (!uploadFiles || uploadFiles.length === 0) {
			errorMessage = 'Please select a file to upload.';
			return;
		}

		generating = true;

		try {
			const formData = new FormData();
			formData.append('file', uploadFiles[0]);
			formData.append('material_type', materialType);
			formData.append('material_thickness', materialThickness.toString());
			formData.append('tool_diameter', toolDiameter.toString());

			const response = await fetch('/cam/generate', {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				const err = (await response.json()) as { detail?: string };
				throw new Error(err.detail || 'Failed to generate program');
			}

			const data = (await response.json()) as { job_id: string };
			jobId = data.job_id;
			gcodeReady = true;
			successMessage = 'Program generated successfully. Ready to download.';
		} catch (e: any) {
			errorMessage = e.message || 'An unexpected error occurred.';
		} finally {
			generating = false;
		}
	}

	async function downloadGcode() {
		errorMessage = '';

		try {
			const response = await fetch(`/cam/download/${jobId}`);

			if (!response.ok) {
				const err = (await response.json()) as { detail?: string };
				throw new Error(err.detail || 'Failed to download G-Code');
			}

			const blob = await response.blob();
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `${jobId}.gcode`;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		} catch (e: any) {
			errorMessage = e.message || 'An unexpected error occurred.';
		}
	}
</script>
