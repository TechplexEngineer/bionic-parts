<script lang="ts">
	import { routes } from "$lib/routes";

	function blankIfExt(link: string) {
		return link.startsWith('http') ? '_blank' : '';
	}
</script>

<div class="container mt-4">
	<h1>Welcome to Bionic Tools</h1>

	<div class="wrapper">
		{#each routes as panel}

				<div class="card">
					<div class="card-body">
						<h5 class="card-title">{panel.title}</h5>
						<p class="card-text">{panel.description}</p>
						<a href={panel.link} target={blankIfExt(panel.link)} class="btn btn-primary">Go</a>
					</div>
				</div>
		{/each}
	</div>
</div>

<style>
	a[target='_blank']::after {
		margin: 0 3px 0 5px;
		content: '↗';
	}
	.card {
		margin: 10px;
	}
	.wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
