<svelte:head>
    <title>Project</title>
    <meta name="description" content="Project"/>
</svelte:head>

<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

</script>

<div class="container">
    <div class="row">
        <div class="col-2">
            <!-- Some Other Action -->
        </div>
        <div class="col-8">
            <h1>Project</h1>
        </div>
        <div class="col-2">
<!--            <div class="btn btn-success" on:click={newProjectModalToggle} on:keypress={newProjectModalToggle}>New Project</div>-->
        </div>
    </div>
    Parts that have been released
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Id</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td></td>
        </tr>
        </tbody>
    </table>




</div>

<style>

</style>
