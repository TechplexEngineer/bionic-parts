<script lang="ts">
	const panels = [
		{
			title: 'Feed and Speed calculator',
			description: 'Use to calculate feeds and speeds for CNC machining.',
			link: '/feedsandspeeds'
		},
		{
			title: '1678 Tool Database',
			description: 'Feeds and Speeds published by FRC 1678, Citrus Circuits.',
			link: 'https://docs.google.com/spreadsheets/d/115sOf7gw1nv_ZooKCAiivwwFtCRomxCifUcU8_FmLUY/edit#gid=0'
		},
		{
			title: 'Bionic Parts Projects',
			description:
				'Projects group multiple Onshape documents and describe where parts from those documents go when released.',
			link: '/projects'
		},
		{
			title: 'QR Code Generator',
			description: 'Tool to generate QR Codes',
			link: '/qrcode'
		},
		{
			title: 'Kanban Generator',
			description: 'Tool to Kanban Codes',
			link: '/kanban'
		}
	];

	function blankIfExt(link) {
		return link.startsWith('http') ? '_blank' : '';
	}
</script>

<div class="container mt-4">
	<h1>Welcome to Bionic Parts</h1>

	<div class="row mt-4">
		{#each panels as panel}
			<div class="col">
				<div class="card" style="width: 24rem;">
					<div class="card-body">
						<h5 class="card-title">{panel.title}</h5>
						<p class="card-text">{panel.description}</p>
						<a href={panel.link} target={blankIfExt(panel.link)} class="btn btn-primary">Go</a>
					</div>
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
</style>
