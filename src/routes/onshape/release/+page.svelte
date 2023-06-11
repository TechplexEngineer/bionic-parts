<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>


<script lang="ts">
    import type {PageData} from './$types';

    import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
    import PartList from "./PartList.svelte";
    import Options from "./Options.svelte";
    import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
    import type {PartRelease} from "./PartRelease";
    import {page} from "$app/stores";

    export let data: PageData;

    console.log("data", data);

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
                params: Object.fromEntries($page.url.searchParams) as unknown as OnshapeFrameQueryParams
            } satisfies PartRelease),
        });

    }


</script>

<div class="container-fluid mt-4">


    {#if errorMessage}
        <h1>Part Release: <small>{data.tabName}</small></h1>
        <span class="text-danger">ERROR: {errorMessage}</span>
    {:else}
        {#if stage === Stages.partlist}
            <PartList
                    parts={data.parts}
                    tabName={data.tabName}
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

    {/if}
</div>
<style>
    :global(body) {
        background: #f8f9fa;
    }
</style>