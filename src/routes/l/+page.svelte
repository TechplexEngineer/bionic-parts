<script lang="ts">
	import { page } from '$app/stores';
	import QrCode from '../qrcode/QRCode.svelte';
	import { links } from './links';

    import {buildShortLinkUrl as buildUrl} from './links';
</script>

<svelte:head>
	<title>Link Shortener : Bionic Parts</title>
	<meta name="description" content="Quick links for Team 4909" />
</svelte:head>

<div class="container mt-4">
	<h1>Links</h1>
	<div class="row">
		{#each Object.entries(links) as [name, item]}
			<div class="card col-md-2">
                <a href={buildUrl(name, $page.url)} class="card-img-top" title={buildUrl(name, $page.url)} target="_blank">
                    <QrCode value={buildUrl(name, $page.url)} />
                </a>
				<!-- <img src="..." class="card-img-top" alt="..." /> -->
				<div class="card-body pt-0">
					<h5 class="card-title">{name}</h5>
                    {item.desc}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.qrcode {
		width: 0.6in;
		max-width: 0.6in;
	}
	.outline {
		outline: 1px dashed black;
	}
</style>
