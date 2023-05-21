<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Manufacturing Projects"/>
</svelte:head>

<script lang="ts">
    // import type { PageData } from './$types';
    import {enhance} from '$app/forms';

    // populated with data from the get endpoint
    // export let data: PageData;

</script>

<div class="container">
    <div class="row mb-4">
        <div class="col-2">
            <!-- Some Other Action -->
        </div>
        <div class="col-8">
            <h1>Projects</h1>
        </div>
        <div class="col-2 d-flex flex-column">
            <div class="mt-auto ms-auto">

            </div>
        </div>
    </div>
</div>

<form method="POST" use:enhance>
    <button type="submit" formaction="?/create" class="btn btn-primary">Create</button>
</form>

<style>

</style>
