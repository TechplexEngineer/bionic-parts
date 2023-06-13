<script>
    import NewProjectModal from "../projects/NewProjectModal.svelte";
    import {page} from "$app/stores";

    let newProjectModalOpen = true;
</script>
<div class="container">
    <h1>No Projects</h1>
    <p>This onshape document is not associated with any trello board. To release parts, first create a
        project.</p>


    <NewProjectModal bind:isOpen={newProjectModalOpen} queryState={$page.url.searchParams}></NewProjectModal>
</div>