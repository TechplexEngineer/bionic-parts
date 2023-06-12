<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    import MultipleInput from "./MultipleInput.svelte";

    export let isOpen = false;


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

<Modal header="Create new Project" bind:isOpen={isOpen}>
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
            <label for="trelloInput" class="form-label">Trello Board *</label>
            <input type="text" class="form-control" id="trelloInput" name="trelloBoardId" required
                   placeholder="https://trello.com/b/OGUJmSaG/..." value={values?.trello || ""}>
        </div>

        <MultipleInput label="Onshape Documents *"
                       fieldNamePrefix="onshapeDoc"
                       placeholder="https://cad.onshape.com/documents/5d24311f47dcaa70f7ba005c/..."
                       inputs={[{id:0, value:"https://cad.onshape.com/documents/da2bc7f409791a8720b27217/w/997b8fe669ef3a2ee893ee0e/e/dfc0766722250803423263f8"}]}
        />

        <h4>Access</h4>

        <MultipleInput label="Onshape Teams *"
                       fieldNamePrefix="onshapeTeamsWrite"
                       placeholder="5bccf2e222e4bf1493e21d19"
                       inputs={[{id:0, value:"5bccf2e222e4bf1493e21d19"}]}
        />


    </form>
    <div slot="footer">
        <button type="submit" form="createProjectForm" class="btn btn-success mb-3 float-end">Create
        </button>
    </div>
</Modal>