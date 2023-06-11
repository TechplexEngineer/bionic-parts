<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Manufacturing Projects"/>
</svelte:head>

<script lang="ts">
    import Project from './Project.svelte';
    import Modal from '$lib/Modal.svelte';
    import type {PageData} from './$types';

    // populated with data from the get endpoint
    export let data: PageData;

    let projects = [];
    $: projects = data.projects;

    let newProjectModalOpen = false;

    let onshapeDocInputs = [{id: 0}];
    let onshapeDocInputCounter = 1;

    const handleRemove = (index) => {
        onshapeDocInputs = [
            ...onshapeDocInputs.filter((input) => input.id !== index)
        ];
    };

    const debug = true;
    let values = {};
    if (debug) {
        values = {
            name: 'Part Release Testing',
            slug: 'prt',
            onshapeDocId: 'https://cad.onshape.com/documents/da2bc7f409791a8720b27217',
            mainAssembly: {did: "da2bc7f409791a8720b27217", eid: '664a9bb3abb6cc5366dcb48c'},
            trello: "https://trello.com/b/OGUJmSaG/design-to-manufacturing"
        }
    }

</script>

<div class="container mt-4">

    <div class="row mb-4">

        <div class="col">
            <h1>Projects</h1>
        </div>
        <div class="col-2 d-flex flex-column">
            <div class="mt-auto ms-auto">
                <div class="btn btn-success" on:click={()=>newProjectModalOpen=true}
                     on:keypress={()=>newProjectModalOpen=true}>
                    New Project
                </div>
            </div>
        </div>
    </div>

    <p>Projects group multiple Onshape documents and describe where parts from those documents go when released.</p>


    <div class="row">
        {#each projects as project}
            <div class="col mb-2" style="max-width: 330px">
                <Project {project}/>
            </div>
        {/each}
    </div>


    <Modal header="Create new Project" bind:isOpen={newProjectModalOpen}>
        <form
                method="POST"
                enctype="multipart/form-data"
                id="createProjectForm"
                action="?/create"
        >
            <div class="mb-3">
                <label for="projectName" class="form-label">Name *</label>
                <input type="text" class="form-control" id="projectName" name="name" required
                       placeholder="Charged Up 2023" value={values?.name || ""}>
            </div>

            <div class="mb-3">
                <label for="slugInput" class="form-label">Slug * (Short Project Name)</label>
                <input type="text" class="form-control" id="slugInput" name="slug" required placeholder="23chargedup"
                       value={values?.slug || ""}>
            </div>

            <div class="mb-3">
                <div class="d-flex justify-content-between">
                    <label class="form-label">Onshape Documents *</label>
                    <div class="btn btn-outline-success"
                         on:click={() => {onshapeDocInputs = [...onshapeDocInputs, {id: onshapeDocInputCounter++}]}}>Add
                    </div>
                </div>

                {#each onshapeDocInputs as input, index (input.id)}
                    <div class="input-group mt-2">
                        <input type="text" class="form-control" name={`onshapeDoc[${input.id}]`}
                               placeholder="https://cad.onshape.com/documents/5d24311f47dcaa70f7ba005c/..." required
                               value={values?.onshapeDocId || ""}>
                        {#if onshapeDocInputs.length !== 1}
                            <button class="btn btn-outline-danger" type="button"
                                    on:click={()=>{handleRemove(input.id)}}>
                                Remove
                            </button>
                        {/if}
                    </div>
                {/each}
            </div>

            <div class="mb-3">
                <label for="trelloInput" class="form-label">Trello Board *</label>
                <input type="text" class="form-control" id="trelloInput" name="trelloBoardId" required
                       placeholder="https://trello.com/b/OGUJmSaG/..." value={values?.trello || ""}>
            </div>

        </form>
        <div slot="footer">
            <button type="submit" form="createProjectForm" class="btn btn-success mb-3 float-end">Create
            </button>
        </div>
    </Modal>
</div>

<style>

</style>
