<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Manufacturing Projects"/>
</svelte:head>

<script lang="ts">

    import type {PageData} from './$types';
    import MultipleInput from "../MultipleInput.svelte";
    import Select from "svelte-select";

    // populated with data from the get endpoint
    export let data: PageData;

    let trelloListChoices = data.trelloBoards.map(b => {
        return (b.lists || []).map(l => {
            return {
                value: {board: b.id, list: l.id},
                label: l.name,
                group: b.name
            }
        })
    }).flat();

    let onshapeTeamChoices = data.onshapeTeams!.map(t => {
        return {
            value: t.id,
            label: t.name
        }
    })

    $: console.log("trelloBoardAndList", trelloBoardAndList);


    let queryState = "";


    // form bound variables
    let name = "";
    let slug = "";
    let onshapeDocIds = "";
    let onshapeTeamIds = "";
    let trelloBoardAndList = undefined;
    const setValues = (project) => {
        trelloBoardAndList = {board: "", list: ""};
        name = project.name;
        slug = project.slug;
        onshapeDocIds = project.onshapeDocIds;
        onshapeTeamIds = project.onshapeTeamIds;
        trelloBoardAndList.board = project.trelloBoardId;
        trelloBoardAndList.list = project.trelloListId;
    }

    let projects = [];
    const debug = false; //import.meta.env.VITE_DEBUG
    if (debug) {
        const convert = (input) => {
            return input.map((i, idx) => ({id: idx, value: i}))
            // [{id:0, value:values.onshapeDocId}]
        }
        const team4909 = convert(['5bccf2e222e4bf1493e21d19']);
        projects = [
            // {
            //     name: 'Part Release Testing',
            //     slug: 'prt',
            //     onshapeDocIds: convert(['da2bc7f409791a8720b27217']),
            //     onshapeTeamIds: team4909,
            //     mainAssembly: {did: "da2bc7f409791a8720b27217", eid: '664a9bb3abb6cc5366dcb48c'},
            //     trelloBoardId: "6468e2101517f18d3231250f", //boardId_2024,
            //     trelloListId: "6468e280779ad802bb3775d4", //backlogListId_2024,
            // },
            {
                name: 'Equinox - 2023 Charged Up',
                slug: "2023",
                onshapeDocIds: convert(['658f927b92496d6e1d48f734', '4ea26e79e54813afbedeac75', '8a5c1e82b8ee360e344bae3f', '1160e05bce038d95370ba3b7', '616204c430ecab0324dcddd9']),
                onshapeTeamIds: team4909,
                mainAssembly: {did: '616204c430ecab0324dcddd9', eid: '046763c2f9e0b227050e2182'},
                trelloBoardId: "646f6a980ee46d8ee0d73e88", //https://trello.com/b/ue6HoQnO/api-testing
                trelloListId: "6489a9fca9344dd4cf8d8cc7"
            },
            {
                name: 'Pandora - 2022 Rapid React',
                slug: "2022",
                onshapeDocIds: convert(['ef5af647c02e3b8511615776']),
                onshapeTeamIds: team4909,
                mainAssembly: {did: 'ef5af647c02e3b8511615776', eid: '0cf335002fd47035deb8fc5a'},
                trelloBoardId: "646f6a980ee46d8ee0d73e88", //https://trello.com/b/ue6HoQnO/api-testing
                trelloListId: "6489a9fca9344dd4cf8d8cc7"
            },
            {
                name: 'Putney Shed',
                slug: "shed",
                onshapeDocIds: convert(['2088a3e0bb9aac1250987e2f', '7e1538310bd669aa384247d7', 'c57cc05e4ed47c6254e67f34', '61bafcdc50dec80b93789acb', '752127334c726821ec2ba5b5', '47b0a8f30dcf78147ad7fa4e']),
                onshapeTeamIds: team4909,
                mainAssembly: {did: '47b0a8f30dcf78147ad7fa4e', eid: 'f346ac940af13018d5b7467c'},
                trelloBoardId: "646f6a980ee46d8ee0d73e88", //https://trello.com/b/ue6HoQnO/api-testing
                trelloListId: "6489aa02af01296cf7c69e38"
            },
            {
                name: 'Superpit',
                slug: "pit23",
                onshapeDocIds: convert(['784f8ba95c876288b27f8cb3']),
                onshapeTeamIds: team4909,
                mainAssembly: {did: '784f8ba95c876288b27f8cb3', eid: '25458a243f4f90ffbefdd000'},
                trelloBoardId: "646f6a980ee46d8ee0d73e88", //https://trello.com/b/ue6HoQnO/api-testing
                trelloListId: "6489aa0603b39ff56bd4182b"

            }
        ]
    }


</script>

<div class="container mt-4">

    <div class="row mb-4">

        <div class="col">
            <h1>New Project</h1>
        </div>
        <div class="col-2 d-flex flex-column">
            <div class="mt-auto ms-auto">
                <a class="btn btn-outline-success" href="/projects">
                    All Projects
                </a>
            </div>
        </div>
    </div>

    <form
            method="POST"
            enctype="multipart/form-data"
            id="createProjectForm"
            action="/projects/create?/createProject"
    >

        {#if debug}
            <div class="mb-3">
                <h5>Prefill with data</h5>
                {#each projects as project}
                    <button class="btn btn-primary me-1" type="button"
                            on:click={() => setValues(project)}>{project.name}</button>
                {/each}
            </div>
        {/if}

        <div class="row">
            <div class="mb-3 col-lg-6">
                <label for="projectName" class="form-label">Project Name *</label>
                <input type="text" class="form-control" id="projectName" name="name" required
                       placeholder="Charged Up 2023" bind:value={name}>
            </div>

            <div class="mb-3 col-lg-6">
                <label for="slugInput" class="form-label">Slug * (Short Project Name)</label>
                <input type="text" class="form-control" id="slugInput" name="slug" required placeholder="23chargedup"
                       bind:value={slug}>
            </div>
        </div>

        <h4>Parts from these documents:</h4>
        <p></p>

        <MultipleInput label="Onshape Documents"
                       fieldNamePrefix="onshapeDoc"
                       bind:inputs={onshapeDocIds}
        />

        <h4>Are released to this Trello board list:</h4>

        <Select items={trelloListChoices} groupBy={(item) => item.group} bind:value={trelloBoardAndList}
                name="trelloBoardAndList" showChevron/>

        <!--        <div class="mb-3">-->
        <!--            <label for="trelloBoardInput" class="form-label">Trello Board *</label>-->
        <!--            <input type="text" class="form-control" id="trelloBoardInput" name="trelloBoardId" required-->
        <!--                   placeholder="" bind:value={trelloBoard}>-->
        <!--        </div>-->

        <!--        <div class="mb-3">-->
        <!--            <label for="trelloListInput" class="form-label">Trello List *</label>-->
        <!--            <input type="text" class="form-control" id="trelloListInput" name="trelloListId" required-->
        <!--                   placeholder="" bind:value={trelloList}>-->
        <!--        </div>-->

        <h4 class="mt-2">Onshape users on these teams can release parts in this project:</h4>

        <MultipleInput label="Onshape Teams"
                       fieldNamePrefix="onshapeTeamsWrite"
                       placeholder="5bccf2e222e4bf1493e21d19"
                       options={onshapeTeamChoices}
                       bind:inputs={onshapeTeamIds}
        />

        {#if queryState}
            <input type="hidden" name="queryState" value={queryState}>
        {/if}

        <a class="btn btn-outline-primary" href="/projects">
            Cancel
        </a>
        <button type="submit" form="createProjectForm" class="btn btn-success mb-3 float-end">
            Create
        </button>
    </form>
</div>

<style>

</style>