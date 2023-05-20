<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>



<script lang="ts">
	import type { PageData } from './$types';
	import {PartReleaseState} from "$lib/common";
	import { enhance } from '$app/forms';

	export let data: PageData;
	console.log("data", data);

	let isVersion = data.searchParams.wv == "v";
	let parts = data.parts;


</script>

<div class="text-column">
	<h1>Part Release</h1>

	{#if isVersion}
		Here is a list of parts that can be released to manufacturing:
		<table class="table table-striped">
			<thead>
			<tr>
				<th>Name</th>
				<th>State</th>
				<th>Id</th>
				<th>Actions</th>
			</tr>
			</thead>
			{#each parts as part}
			<tr>
				<td>{part.name}
				<form id={part.id} method="POST" use:enhance>
					<input type="hidden" name="partId" value={part.id}>
				</form>
				</td>
				<td>{part.state}</td>
				<td>{part.id}</td>
				<td>
					{#if part.state === PartReleaseState.NeverReleased}
						<button form={part.id} class="btn btn-info btn-sm" formaction="?/release">Release</button>
					{:else if part.state === PartReleaseState.Released}
						{'No Actions'}
					{:else if part.state === PartReleaseState.ChangedSinceLastRelease}
						<button form={part.id} class="btn btn-info btn-sm" formaction="?/re_release">Re-Release</button>
					{/if}
				</td>
			</tr>
			{/each}
		</table>
	{:else}
		<span class="text-danger">Please choose a version to release, then you can choose parts to release.</span>
	{/if}
</div>
