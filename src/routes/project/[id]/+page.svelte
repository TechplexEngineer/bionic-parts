<svelte:head>
    <title>Project</title>
    <meta name="description" content="Project"/>
</svelte:head>

<script lang="ts">
    import TrelloLink from "../../onshape/release/TrelloLink.svelte";

    import type {PageData} from './$types';

    export let data: PageData;

</script>

<div class="container">

    <div class="d-flex mb-2 mt-4">
        <h1 class="flex-fill" title="ID: {data.project.id}">Project:
            <small>{data.project.name}</small>
        </h1>
        <div>
            <TrelloLink boardId={data.project.data.trello.boardId} classes="btn-outline-primary"
                        title="Parts released from this project are sent to this trello board.">Trello
            </TrelloLink>
            <a href="/projects" class="btn btn-outline-primary">All Projects</a>
        </div>

    </div>

    <div class="row mt-4">

        {#each data.docs as doc}
            <div class="col mb-3">
                <div class="card h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg">
                    <div class="card-header" title="Onshape Document"><h2 class="mx-2 mt-2 mb-4">{doc.name}</h2></div>
                    <div class="d-flex flex-column h-100 p-5 py-2 text-shadow-1">

                        <img src="/onshape/thumbnails?url={doc?.thumbnail.sizes.find(t => t.size === '300x300').href}"
                             alt="" style="max-width: 300px" class="bg-light p-1 rounded-2 mx-auto">

                    </div>
                    <div class="card-footer text-end mb-2">
                        <a href="https://cad.onshape.com/documents/{doc.id}"
                           target="_blank" class="btn btn-success">Open in Onshape</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>


    <!--    <code class="card p-2">-->
    <!--        <pre>{JSON.stringify(data, null, 2)}</pre>-->
    <!--    </code>-->

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
    a[target="_blank"]::after {
        margin: 0 3px 0 5px;
        content: "↗";
    }

    .text-shadow-1 {
        text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
    }

    .card-cover {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
</style>
