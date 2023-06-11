<script lang="ts">
    import {enhance} from '$app/forms';
    import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
    import {PartReleaseState} from "./PartReleaseState";
    import {fixType} from "$lib/util";
    import type {Part} from "./part";
    import {page} from "$app/stores";
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let parts: Part[];
    export let tabName: string;

    const handleReleaseClick = (part: BTPartMetadataInfo) => {
        $page.url.searchParams
        return () => {
            dispatch('release', {
                part,
                searchParams: $page.url.searchParams
            });
        }
    }
    const handleReReleaseClick = (part: BTPartMetadataInfo) => {
        $page.url.searchParams
        return () => {
            dispatch('rerelease', {
                part,
                searchParams: $page.url.searchParams
            });
        }
    }
</script>
<div class="d-flex justify-content-between">
    <h1>Part List: <small>{tabName}</small></h1>

    <div>
        <a class="btn btn-outline-primary" href="@todo" target="_blank">Open Trello</a>
    </div>
</div>

Here is a list of parts that can be released to manufacturing:
<table class="table table-striped">
    <thead>
    <tr>
        <th>Name</th>
        <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    {#each parts as p}
        {@const obj = fixType(parts, p)}
        <tr>
            <td><span title="{obj.part.id} - {obj.part.partId}">{obj.part.name}</span></td>
            <td>
                {#if obj.state === PartReleaseState.NeverReleased}
                    <button class="btn btn-info btn-sm" on:click={handleReleaseClick(obj.part)} type="button">
                        Release
                    </button>
                {:else if obj.state === PartReleaseState.Released}
                    {'No Actions'}
                {:else if obj.state === PartReleaseState.ChangedSinceLastRelease}
                    <button class="btn btn-info btn-sm" on:click={handleReReleaseClick(obj.part)} type="button">
                        Re-Release
                    </button>
                {/if}
            </td>
        </tr>
    {/each}
    </tbody>
</table>

<style>
    a[target="_blank"]::after {
        margin: 0 3px 0 5px;
        content: "↗";
    }
</style>