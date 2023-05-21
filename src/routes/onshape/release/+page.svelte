<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>


<script lang="ts">
    import type {PageData} from './$types';
    import {PartReleaseState} from "$lib/common";
    import {enhance} from '$app/forms';

    export let data: PageData;

    let errorMessage = null;
    $: errorMessage = ("error" in data) ? data.error : undefined

    let isVersion = false;
    $: isVersion = data.searchParams.wv == "v";

</script>

<div class="text-column">
    <h1>Part Release</h1>

    {#if errorMessage}
        <span class="text-danger">ERROR: {errorMessage}</span>
    {:else}

        {#if isVersion}
            Here is a list of parts that can be released to manufacturing:
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>State</th>
                    <th>Id</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {#each data.parts as part}
                    <tr>
                        <td>{part.name}
                            <form id={part.id} method="POST" use:enhance>
                                <input type="hidden" name="partId" value={part.id}>
                                <input type="hidden" name="partName" value={part.name}>
                                <input type="hidden" name="versionId" value={data.searchParams.wvid}>
                                <input type="hidden" name="iframeParams" value={JSON.stringify(data.searchParams)}>
                            </form>
                        </td>
                        <td>{part.state}</td>
                        <td>{part.id}</td>
                        <td>
                            {#if part.state === PartReleaseState.NeverReleased}
                                <button form={part.id} class="btn btn-info btn-sm" formaction="?/release" type="submit">
                                    Release
                                </button>
                            {:else if part.state === PartReleaseState.Released}
                                {'No Actions'}
                            {:else if part.state === PartReleaseState.ChangedSinceLastRelease}
                                <button form={part.id} class="btn btn-info btn-sm" formaction="?/re_release" type="submit">
                                    Re-Release
                                </button>
                            {/if}
                        </td>
                    </tr>
                {/each}
                </tbody>
            </table>
        {:else}
            <span class="text-danger">Please choose a version to release, then you can choose parts to release.</span>
        {/if}
    {/if}
</div>
