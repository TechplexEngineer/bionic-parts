<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Onshape"/>
</svelte:head>

<script lang="ts">
    import Project from '$lib/Project.svelte';
    import {Modal} from "sveltestrap";
    import {enhance} from '$lib/form';
    import type {GetDocumentResponse} from "$lib/OnshapeAPI/GetDocumentResponse";
    import type {GetElementsInDocumentResponse} from '$lib/OnshapeAPI/GetElementsInDocument';

    // populated with data from the get endpoint

    export let doc: GetDocumentResponse;
    export let elements: GetElementsInDocumentResponse;


    let elementsByType = elements.reduce((prev, cur) => {

        let type = cur.type;
        if (cur.type.toLowerCase() == "application" && cur.dataType == "OnshapeAPI-app/drawing") {
            type = "Drawing";
        }

        if (!(type in prev)) {
            prev[type] = [];
        }

        prev[type].push(cur)
        return prev
    }, {});

    const defaultShow = ["Assembly", "Drawing"];

    const filters: { [key: string]: boolean } = Object.keys(elementsByType).reduce((prev, type) => {
        prev[type] = false;
        // return {[type]: false}
        return prev
    }, {});
    // console.log(filters);
    for (let filterType in filters) {
        filters[filterType] = defaultShow.includes(filterType);
    }

    let newProjectModalOpen = false;
    const newProjectModalToggle = () => (newProjectModalOpen = !newProjectModalOpen);

    let textareaValue = "";
</script>


<section>
    <div class="row">
        <div class="col-2">
            <!-- Some Other Action -->
        </div>
        <div class="col-8">
            <h1>Onshape</h1>
        </div>
        <div class="col-2">
            <a href="https://cad.onshape.com/documents/{doc.id}/w/{doc.defaultWorkspace.id}" class="btn btn-success"
               target="_blank">Open In Onshape</a>
        </div>
    </div>


    <h2>Doc: {doc.name}</h2>
    <ul>
        <li>did: {doc.id}</li>
        <li>wid: {doc.defaultWorkspace.id}</li>
    </ul>

    <div>
        <h3>Filters</h3>
        <div class="row">
            {#each Object.keys(elementsByType) as type, idx}
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="check-{idx}" bind:checked={filters[type]}>
                        <label class="form-check-label" for="check-{idx}">
                            {type}
                        </label>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="row">

        <div class="col">

            {#each [...new Map(Object.entries(elementsByType))] as [key, elements]}
                {#if filters[key]}
                    <h3>{key}</h3>
                    <ul>
                        {#each elements as element}
                            <li class="mt-2">
                                <button class="btn btn-sm btn-secondary" on:click={()=>{
                                    textareaValue = JSON.stringify(element, null, 4)
                                }}
                                >Inspect
                                </button>
                                <a href="https://cad.onshape.com/documents/{doc.id}/w/{doc.defaultWorkspace.id}/e/{element.id}"
                                   target="_blank" class="btn btn-success btn-sm">Open In Onshape</a>
                                {#if key == "Assembly"}
                                    <a href="/onshape/bom?did={doc.id}&wid={doc.defaultWorkspace.id}&eid={element.id}"
                                       class="btn btn-primary btn-sm">Bom</a>
                                {:else if key == "Drawing"}
                                    <a href="/onshape/drawing?did={doc.id}&wid={doc.defaultWorkspace.id}&eid={element.id}"
                                       class="btn btn-primary btn-sm">View</a>
                                    <a href="/onshape/drawing/download?did={doc.id}&wid={doc.defaultWorkspace.id}&eid={element.id}"
                                       class="btn btn-warning btn-sm">Download</a>
                                {/if}
                                {element.name}
                            </li>
                        {/each}
                    </ul>
                {/if}
            {/each}
        </div>
        <div class="col" style="min-height: 60vh;">
            <textarea class="form-control w-100 h-100" disabled bind:value={textareaValue}></textarea>
        </div>
    </div>


</section>

<style>

</style>
