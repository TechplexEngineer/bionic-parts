<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Manufacturing Projects"/>
</svelte:head>

<script lang="ts">
    import Project from './Project.svelte';
    import type {PageData} from './$types';


    // populated with data from the get endpoint
    export let data: PageData;

    let projects = [];
    $: projects = data.projects;


</script>

<div class="container mt-4">

    <div class="row mb-4">

        <div class="col">
            <h1>Projects</h1>
        </div>
        <div class="col-2 d-flex flex-column">
            <div class="mt-auto ms-auto">
                <a class="btn btn-success" href="/projects/create">
                    New Project
                </a>
            </div>
        </div>
    </div>

    <p>Projects group multiple Onshape documents and describe where parts from those documents go when released.</p>


    <div class="row">
        {#each projects as project}
            <div class="col mb-2">
                <Project {project}/>
            </div>
        {/each}
    </div>
</div>

<style>

</style>
