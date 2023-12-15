<svelte:head>
	<title>Part Release</title>
	<meta name="description" content="Release parts from Onshape to Trello"/>
</svelte:head>

<script lang="ts">
    import type {PageData} from './$types';
    import PartList from "./PartList.svelte";
    import Options from "./Options.svelte";
    import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
    import type {PartRelease} from "./PartRelease";
    import NoProjects from "./NoProjects.svelte";
    import type {ProjectModel} from "$lib/schema";
    import AddToExistingProject from "./AddToExistingProject.svelte";

    export let data: PageData;

    let errorMessage: string | undefined = undefined;
    $: errorMessage = ("error" in data) ? data.error : undefined

    enum Stages {
        partlist,
        options
    }

    // state machine current state
    let stage: Stages = Stages.partlist;

    let selectedPart: BTPartMetadataInfo | null = null;

    const handleReleaseClick = ({detail: {part, searchParams}}) => {
        selectedPart = part;
        stage = Stages.options; // move to next state
    }
    const handleReReleaseClick = ({detail: {part, searchParams}}) => {
        selectedPart = part;
        stage = Stages.options; // move to next state
    }
    let partReleaseCount = 0;
    const handleSubmit = async ({detail}: { detail: PartRelease }) => {
        stage = Stages.partlist; // back to part list (Putting this before the fetch makes the UI seem snappier even though the trello api is slow)
        partReleaseCount += 1;
        const res = await fetch('?/release', {
            method: 'POST',
            body: JSON.stringify({
                ...detail,
                params: data.searchParams
            } satisfies PartRelease),
        });
        //@todo handle errors
        
    }

    let activeProjects: ProjectModel[] = [];

    // filter to projects with data.searchParams.did as a member
    $:activeProjects = data.projects.filter(p => {
        const found = p.data.onshape.docIds.includes(data.searchParams.did);
        // console.log(`checking if ${JSON.stringify(data.searchParams.did)} is in ${JSON.stringify(p.data.onshape.docIds)} => ${found}`)
        return found
    }) || [];

    let selectedProject: ProjectModel | null = null;

    $: selectedProject = ((activeProjects) => {
        if (activeProjects?.length === 1) {
            return activeProjects[0];
        } else {
            return null;
        }
    })(activeProjects)

</script>

<div class="container-fluid mt-4">


	{#if errorMessage}
		<h1>Part Release</h1>
		<span class="text-danger">{errorMessage}</span>

		<p class="mt-4 fw-bold">To select a version:</p>
		<ol>
			<li>Click the Versions and History button (
				<svg xmlns="http://www.w3.org/2000/svg" style="width: 20px;height: 20px;">
					<path fill-rule="evenodd" clip-rule="evenodd"
					      d="M0 5c0-2.205 1.794-4 4-4s4 1.795 4 4a4.007 4.007 0 01-3 3.873v4.075c.568-.297 1.242-.448 2-.448h1.5c.888 0 1.27-.344 1.426-.812a2 2 0 111.914.128C11.51 13.402 10.6 14.5 8.5 14.5H7c-.573 0-1.279.243-1.68.997a2 2 0 11-2.32-.23V8.873A4.007 4.007 0 010 5zm20-3H10v2h10V2zm-6.007 5H20v2h-6.007V7zM20 12h-6.007v2H20v-2zm-10 5h10v2H10v-2zM4 7.5a2.5 2.5 0 10.001-4.999A2.5 2.5 0 004 7.5z"
					      fill="currentColor"></path>
				</svg>
				) from just beneath the Onshape logo at the top left of the
				window.

			</li>
			<li>Choose an existing version or create a new version which includes the parts you wish to release.</li>
			<li>Re-Open this release tool.</li>
		</ol>
	{:else}
		<!--doing in page routing so we don't have to be careful to maintain the query string params and-->
		<!--so we can add an onshape selector which requires postmessage-->
		{#if data?.projects?.length === 0}
			<!--User does not have access to any projects-->
			<NoProjects/>
		{:else if activeProjects?.length > 1}
			<!-- Document is in multiple projects -->
			<h1>Document is in more than one project</h1>
			<p>Error: This is not currently supported. Sorry.</p>
		{:else if selectedProject}
			{#if stage === Stages.partlist}
            {#key partReleaseCount}
				<PartList
						parts={data?.parts}
						tabName={data?.tabName}
						project={selectedProject}
						on:release={handleReleaseClick}
						on:rerelease={handleReReleaseClick}
				></PartList>
            {/key}
			{:else if stage === Stages.options}
				<Options
						selectedPart={selectedPart}
						subsystemName={data.subsystemName}
						selectedProject={selectedProject}
						on:cancel={()=>{stage = Stages.partlist; selectedPart = null;}}
						on:submit={handleSubmit}
				></Options>
			{/if}
		{:else}
			<!--User has access to projects, but none of them have this doc in them-->
			<AddToExistingProject
					onshapeDocId={data.searchParams.did}
					projects={data.projects}
			/>
		{/if}

	{/if}
</div>
<style>
    :global(body) {
        background: #f8f9fa;
    }
</style>