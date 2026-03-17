<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';

	let statboticsEventKey = '';
	let nexusEventKey = '';

	function syncKeys() {
		nexusEventKey = statboticsEventKey;
	}
</script>

<Navbar />

<div class="container">
	<h1>Configure Pit Display</h1>
	<form method="get" action="/pit">
		<div class="form-group">
			<label for="eventKeyInput">Statbotics Event Key:</label>
			<input
				type="text"
				id="eventKeyInput"
				class="form-control"
				name="statboticsEventKey"
				bind:value={statboticsEventKey}
				on:input={syncKeys}
			/>
		</div>
		<div class="form-group">
			<label for="nexusEventKeyInput">Nexus Event Key:</label>
			<input
				type="text"
				id="nexusEventKeyInput"
				class="form-control"
				name="nexusEventKey"
				bind:value={nexusEventKey}
			/>
		</div>
		<div class="form-group">
			<label for="teamNumberInput">Team Number:</label>
			<input type="number" id="teamNumberInput" class="form-control" min="1" name="teamNumber" />
		</div>
		<!-- <div class="form-group">
				<label for="intervalInput">Update Interval (ms):</label>
				<input
					type="number"
					id="intervalInput"
					class="form-control"
					bind:value={$preferences.updateIntervalMs}
					min="1000"
					step="1000"
				/>
			</div> -->
		<div>
			<button class="btn btn-success">Save</button>
		</div>
	</form>
	<hr />
	<div>
		There are a few simulation event keys that can be used when there isn't an active event being
		played:
		<ul>
			<li>SIM</li>
			<li>SIM-RED</li>
			<li>SIM-PLAYOFF</li>
		</ul>
	</div>
</div>
