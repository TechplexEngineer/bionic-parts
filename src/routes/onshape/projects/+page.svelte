<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Manufacturing Projects"/>
</svelte:head>

<script lang="ts">
    import Project from './Project.svelte';
    import Modal from '$lib/Modal.svelte';
    import type {PageData} from './$types';
    import NewProjectModal from "./NewProjectModal.svelte";

    // populated with data from the get endpoint
    export let data: PageData;

    let projects = [];
    $: projects = data.projects;

    let newProjectModalOpen = false;


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
            <div class="col mb-2" style="max-width: 350px">
                <Project {project}/>
            </div>
        {/each}
    </div>

    <NewProjectModal bind:isOpen={newProjectModalOpen}></NewProjectModal>
</div>

<style>

</style>
