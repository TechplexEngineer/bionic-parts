<script lang="ts">
	import { page } from '$app/stores';
	import { routes } from '$lib/routes';
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Bionic Tools</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
        {#each routes as panel}
          <a
            href={panel.link}
            target={panel.link.startsWith('http') ? '_blank' : ''}
            class="nav-link {panel.link === $page.url.pathname ? 'active' : ''}"
            title="{panel.description}"
          >
            {panel.title}
          </a>
				{/each}
				<!-- <a class="nav-link active" aria-current="page" href="/">Home</a>
				<a class="nav-link" href="feedsandspeeds">Feed &amp; Speed</a>
				<a class="nav-link" href="projects">Projects</a>
				<a class="nav-link" href="qrcode">QR Generator</a>
				<a class="nav-link" href="labels">Dymo Label</a> -->
			</div>
		</div>
	</div>
</nav>
