<script lang="ts">
    import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
    import {PartReleaseState} from "./PartReleaseState";
    import {fixType} from "$lib/util";
    import type {Part} from "./part";
    import {page} from "$app/stores";
    import {createEventDispatcher, onMount} from 'svelte';
    import type {ProjectModel} from "$lib/schema";
    import TrelloLink from "./TrelloLink.svelte";
	import type { PartStatusRequest } from "./PartStatusRequest";
    import { applyAction, deserialize } from '$app/forms';
	import type { ActionResult } from "@sveltejs/kit";

    const dispatch = createEventDispatcher();

    export let parts: Part[] = [];
    export let tabName: string;

    onMount(() => {
        
        for (const part of parts) {
            console.log('part', part);
            
            fetch('?/partState', {
                method: 'POST',
                body: JSON.stringify({
                    parts: [part],
                } satisfies PartStatusRequest),
            })
        .then(async res => {
                const result: ActionResult = deserialize(await res.text());
                if (result.type === 'success') {
                    console.log('data', result.data);
                    for (const part of result.data as any) {
                        const match = parts.find(p => {
                            console.log('checking match', p.part.id, part.part.part.id);
                            
                            return p.part.id === part.part.part.id
                        });
                        if (!match) {
                            console.log('no match', part.part);
                            continue;
                        }
                        console.log('old', parts[parts.indexOf(match)]);
                        console.log('new', part.state);
                        
                        
                        parts[parts.indexOf(match)].state = part.state;
                        
                        // match.state = result.data?.state;
                    }
                    parts = [...parts];
                }
            });
        //     // part.state = PartReleaseState.NeverReleased;
        }
    });

    export let project: ProjectModel;

    const handleReleaseClick = (part: BTPartMetadataInfo) => {
        // $page.url.searchParams
        return () => {
            dispatch('release', {
                part,
                searchParams: $page.url.searchParams
            });
        }
    }
    const handleReReleaseClick = (part: BTPartMetadataInfo) => {
        // $page.url.searchParams
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
        <TrelloLink boardId={project?.data.trello.boardId}/>
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
                {:else}
                    {'loading...'}
                {/if}
            </td>
        </tr>
    {/each}
    </tbody>
</table>

