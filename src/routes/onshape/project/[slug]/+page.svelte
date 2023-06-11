<svelte:head>
    <title>Project</title>
    <meta name="description" content="Project"/>
</svelte:head>

<script lang="ts">
    const debug = true;
    import type {PageData} from './$types';

    export let data: PageData;

</script>

<div class="container">

    <div class="row">
        <div class="col">
            <h1>Project: <small>{data.project.name}</small></h1>
        </div>
        <div class="col-2">
            <!--            <div class="btn btn-success" on:click={newProjectModalToggle} on:keypress={newProjectModalToggle}>New Project</div>-->
        </div>
    </div>

    {#if debug}
        <a href="http://localhost:5173/onshape/release?&did=da2bc7f409791a8720b27217&wv=v&wvid=e6dfc5a88fdafa4560bfa609&eid=dfc0766722250803423263f8&cfg=List_QUDRhyBNPXwmGx%3DDefault&companyId=cad&server=https%3A%2F%2Fcad.onshape.com&userId=56c1e0aae4b0692ed2011ddb&clientId=NWC5Z62NUDURZNITX2RAOSNQUB2LSDOZ46RISQA%3D&locale=en-US"
           class="btn btn-outline-primary">Open Part Release</a>
    {/if}

    <code class="card p-2">
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </code>

    <!--    Parts that have been released-->
    <!--    <table class="table table-striped">-->
    <!--        <thead>-->
    <!--        <tr>-->
    <!--            <th>Name</th>-->
    <!--            <th>Source Element (Assembly or Part Studio)</th>-->
    <!--            <th>Source Document</th>-->
    <!--            <th>Version</th>-->
    <!--            <th>Id</th>-->
    <!--            <th>Status</th>-->
    <!--        </tr>-->
    <!--        </thead>-->
    <!--        <tbody>-->
    <!--        {#each data.parts as part}-->
    <!--        <tr>-->
    <!--            <td>{part.name}</td>-->
    <!--            <td></td>-->
    <!--            <td></td>-->
    <!--            <td>{part.releasedVersion}</td>-->
    <!--            <td>{part.partId}</td>-->
    <!--        </tr>-->
    <!--        {/each}-->
    <!--        </tbody>-->
    <!--    </table>-->


</div>

<style>

</style>
