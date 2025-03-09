<script lang="ts">
</script>

<div class="container">
	<h1>Configure Pit Display</h1>
	<form method="get" action="/pit">
		<div class="form-group">
			<label for="eventKeyInput">Event Key:</label>
			<input type="text" id="eventKeyInput" class="form-control" name="eventKey" />
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
</div>
