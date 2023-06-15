<svelte:head>
    <title>Part Release</title>
    <meta name="description" content="Release parts from Onshape to Trello"/>
</svelte:head>

<script lang="ts">
    import type {PageData} from './$types';

    import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
    import PartList from "./PartList.svelte";
    import Options from "./Options.svelte";
    import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
    import type {PartRelease} from "./PartRelease";
    import NoProjects from "./NoProjects.svelte";
    import type {ProjectModel} from "$lib/schema";
    import AddToExistingProject from "./AddToExistingProject.svelte";

    export let data: PageData;

    let errorMessage = null;
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
    const handleSubmit = async ({detail}: { detail: PartRelease }) => {
        stage = Stages.partlist; // back to part list (Putting this before the fetch makes the UI seem snappier even though the trello api is slow)
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

</script>

<div class="container-fluid mt-4">


    {#if errorMessage}
        <h1>Part Release: <small>{data.tabName}</small></h1>
        <span class="text-danger">ERROR: {errorMessage}</span>
    {:else}
        <!--doing in page routing so we don't have to be careful to maintain the query string params and-->
        <!--so we can add an onshape selector which requires postmessage-->
        {#if data?.projects?.length === 0}
            <!--User does not have access to any projects-->
            <NoProjects/>
        {:else if activeProjects?.length > 1}
            <!-- Document is in multiple projects -->
            <h1>More than one project</h1>
        {:else if activeProjects?.length === 1}

            {#if stage === Stages.partlist}
                <PartList
                        parts={data?.parts}
                        tabName={data?.tabName}
                        project={data?.projects[0]}
                        on:release={handleReleaseClick}
                        on:rerelease={handleReReleaseClick}
                ></PartList>
            {:else if stage === Stages.options}
                <Options
                        selectedPart={selectedPart}
                        subsystemName={data.subsystemName}
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