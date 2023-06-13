<script lang="ts">
    import Modal from "$lib/Modal.svelte";

    export let isOpen = false;

    export let queryState = "";

    import MultipleInput from "./MultipleInput.svelte";
    import {backlogListId_2024, boardId_2024} from "$lib/trello";

    let values = {};
    if (import.meta.env.VITE_DEBUG) {
        values = {
            name: 'Part Release Testing',
            slug: 'prt',
            onshapeDocId: 'da2bc7f409791a8720b27217',
            onshapeTeamId: '5bccf2e222e4bf1493e21d19',
            mainAssembly: {did: "da2bc7f409791a8720b27217", eid: '664a9bb3abb6cc5366dcb48c'},
            trelloBoard: "6468e2101517f18d3231250f", //boardId_2024,
            trelloList: "6468e280779ad802bb3775d4", //backlogListId_2024,
        }
    }


</script>

<Modal header="Create new Project" bind:isOpen={isOpen}>
    <form
            method="POST"
            enctype="multipart/form-data"
            id="createProjectForm"
            action="/onshape/projects"
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
            <label for="trelloBoardInput" class="form-label">Trello Board *</label>
            <input type="text" class="form-control" id="trelloBoardInput" name="trelloBoardId" required
                   placeholder="" value={values?.trelloBoard || ""}>
        </div>

        <div class="mb-3">
            <label for="trelloListInput" class="form-label">Trello List *</label>
            <input type="text" class="form-control" id="trelloListInput" name="trelloListId" required
                   placeholder="" value={values?.trelloList || ""}>
        </div>

        <MultipleInput label="Onshape Documents *"
                       fieldNamePrefix="onshapeDoc"
                       placeholder="5d24311f47dcaa70f7ba005c"
                       inputs={[{id:0, value:values.onshapeDocId}]}
        />

        <h4>Access</h4>

        <MultipleInput label="Onshape Teams *"
                       fieldNamePrefix="onshapeTeamsWrite"
                       placeholder="5bccf2e222e4bf1493e21d19"
                       inputs={[{id:0, value:values?.onshapeTeamId}]}
        />

        {#if queryState}
            <input type="hidden" name="queryState" value={queryState}>
        {/if}


    </form>
    <div slot="footer">
        <button type="submit" form="createProjectForm" class="btn btn-success mb-3 float-end">Create
        </button>
    </div>
</Modal>