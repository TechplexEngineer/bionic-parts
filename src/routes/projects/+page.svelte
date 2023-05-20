<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Manufacturing Projects"/>
</svelte:head>

<script lang="ts">
    import Project from './Project.svelte';
    import Modal from './Modal.svelte';
    import {enhance} from '$app/forms';
    import type { PageData } from './$types';


    // populated with data from the get endpoint
    export let data: PageData;

    let projects = [];
    $: projects = data.projects;

    let newProjectModalOpen = false;
    const newProjectModalToggle = () => (newProjectModalOpen = !newProjectModalOpen);
</script>

<div class="container">
    <div class="row">
        <div class="col-2">
            <!-- Some Other Action -->
        </div>
        <div class="col-8">
            <h1>Projects</h1>
        </div>
        <div class="col-2">
            <div class="btn btn-success" on:click={newProjectModalToggle} on:keypress={newProjectModalToggle}>New Project</div>
        </div>
    </div>


    <div class="row">
        {#each projects as project}
            <div class="col mb-2" style="max-width: 330px">
                <Project {project}/>
            </div>
        {/each}
    </div>


    <Modal header="Create new Project" isOpen={newProjectModalOpen} toggle={newProjectModalToggle}>
        <form
                class="new"
                action="/projects"
                method="post"
                enctype="multipart/form-data"
                id="createProjectForm"
                use:enhance
        >
            <div class="mb-3">
                <label for="projectName" class="form-label">Name *</label>
                <input type="text" class="form-control" id="projectName" name="projectName" required>
            </div>

            <div class="mb-3">
                <label for="partPrefix" class="form-label">Part Number Prefix *</label>
                <input type="text" class="form-control" id="partPrefix" name="partPrefix" required>
            </div>

            <div class="mb-3">
                <label for="projectPhoto" class="form-label">Cover Image</label>
                <input class="form-control" type="file" name="projectPhoto" id="projectPhoto">
            </div>

        </form>
        <div slot="footer">
            <button type="submit" form="createProjectForm" class="btn btn-success mb-3 float-end" formaction="/?create">Create</button>
        </div>
    </Modal>
</div>

<style>

</style>
