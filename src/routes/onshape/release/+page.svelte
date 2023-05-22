<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>


<script lang="ts">
    import type {PageData} from './$types';
    import {PartReleaseState} from "$lib/common";
    import {enhance} from '$app/forms';
    import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";

    export let data: PageData;

    let errorMessage = null;
    $: errorMessage = ("error" in data) ? data.error : undefined

    let isVersion = false;
    $: isVersion = data.searchParams.wv == "v";


    // =================================

    let page;


    // Parse query parameters
    let params: OnshapeFrameQueryParams = data.searchParams

    // Listen for clicks and post a message to the Onshape client
    page?.addEventListener('click', function () {

    }, true);

    const windowClick = () => {
        var message = {
            documentId: params.did,
            workspaceId: params.wvid,
            elementId: params.eid,
            messageName: 'closeFlyoutsAndMenus'
        };
        window.parent.postMessage(message, '*');
        console.log("Click! Sending message to Onshape client.", message);
    }

    const handlePostMessage = function (e) {
        console.log("Post message received in application extension.");
        console.log("e.origin = " + e.origin);

        // Verify the origin matches the server iframe src query parameter
        if (params.server === e.origin) {
            console.log("Message safe and can be handled as it is from origin '"
                + e.origin +
                "', which matches server query parameter '"
                + params.server + "'.");
            if (e.data && e.data.messageName) {
                console.log("Message name = '" + e.data.messageName + "'");
            } else {
                console.log("Message name not found. Ignoring message.");
            }
        } else {
            console.log("Message NOT safe and should be ignored.");
        }
    };

    console.log("globalThis", globalThis.addEventListener("message", handlePostMessage, false));

</script>

<svelte:window on:message={handlePostMessage} on:click={windowClick}/>

<div class="text-column" bind:this={page}>
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
                    <!--                    <th>State</th>-->
                    <!--                    <th>Id</th>-->
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
                        <!--                        <td>{part.state}</td>-->
                        <!--                        <td>{part.id}</td>-->
                        <td>
                            {#if part.state === PartReleaseState.NeverReleased}
                                <button form={part.id} class="btn btn-info btn-sm" formaction="?/release" type="submit">
                                    Release
                                </button>
                            {:else if part.state === PartReleaseState.Released}
                                {'No Actions'}
                            {:else if part.state === PartReleaseState.ChangedSinceLastRelease}
                                <button form={part.id} class="btn btn-info btn-sm" formaction="?/re_release"
                                        type="submit">
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
