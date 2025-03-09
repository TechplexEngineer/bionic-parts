<div class="flex-grid">
	<div class="col">
		<div class="bin">
			<img src="bionics-logo.svg" alt="Bionics Logo" class="logo" />
		</div>
	</div>
	<div class="col">
		<div class="bin">Sponsors</div>
	</div>
	<div class="col bin">Match Queue</div>
</div>

<div class="bin">
	<h2>Now Queueing</h2>
	<ul>
		<li>Match 1: In 5 mins</li>
		<li>Match 2: In 15 mins</li>
	</ul>
</div>
<div class="bin">
	<h2>GSD EPA</h2>
	<table>
		<tbody>
			<tr>
				<td>1.</td>
				<td>4909</td>
				<td>59.1</td>
			</tr>
			<tr>
				<td>2.</td>
				<td>4909</td>
				<td>59.1</td>
			</tr>
			<tr>
				<td>3.</td>
				<td>4909</td>
				<td>59.1</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="bin">
	<h2>Next Match</h2>

	<div class="d-flex flex-wrap justify-content-center w-100">
		<!-- SUMMARY SECTION -->

		<StatboticsNextMatch />
	</div>
</div>

<style>
	.flex-grid {
		display: flex;
	}
	.col {
		flex: 1;
	}
	:global(body) {
		background-color: #154733 !important;
		background-image: none !important;
	}
	.bin {
		border: 1px solid #fff;
		border-radius: 5px;
		color: #fff;
		padding: 10px;
		display: inline-block;
	}
	.logo {
		width: 200px;
		/* height: 100px; */
	}
</style>
