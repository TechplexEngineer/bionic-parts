<script lang="ts">
	import type {ProjectModel} from "$lib/schema";
	import BiBoxArrowUpRight from '~icons/bi/box-arrow-up-right'
	import TrelloLink from "./TrelloLink.svelte";
	import {page} from "$app/stores";

	export let projects: ProjectModel[];
	export let onshapeDocId: string;

	$: queryState = $page.url.searchParams;

	let newProjectModalOpen = false;

</script>


<h3>Error: The current document does not belong to a project.</h3>
<h5>There are 2 options:</h5>
<ol>
	<li>add the current document to an exising project you have
		access to
	</li>
	<li>create a new project</li>
</ol>


<div class="row mt-4">
	<div class="col-md-6 col-12">
		<div class="card">
			<h2 class="card-header fs-4">
				Existing Projects
			</h2>
			<div class="card-body">

				<table class="table-hover table-striped table-sm">
					<thead>
					<tr>
						<th>Project Name</th>
						<th>Trello Board</th>
						<th>Actions</th>
					</tr>
					</thead>
					<tbody>
					{#each projects as project}
						<tr>
							<td>{project.name}</td>
							<td>
								<TrelloLink boardId={project?.data?.trello?.boardId}
								            classes="btn-outline-primary btn-sm"/>
							</td>
							<td>
								<form action="/projects?/addDoc2Project" method="POST">
									<input type="hidden" name="projectId" value={project.id}>
									<input type="hidden" name="onshapeDocId" value={onshapeDocId}>
									{#if queryState}
										<input type="hidden" name="queryState" value={queryState}>
									{/if}
									<button class="btn btn-primary btn-sm">Select
									</button>
								</form>
							</td>
						</tr>
					{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-12 mt-4">
		<div class="card">
			<h2 class="card-header fs-4">
				Create a new project
			</h2>
			<div class="card-body">
				<a href="/projects/create" target="_blank" class="btn btn-primary" title="opens in a new tab">
					Create New Project
					<BiBoxArrowUpRight/>
				</a>
			</div>
		</div>

	</div>
</div>
