<script lang="ts">
    import type {PageData} from './list/$types';

    export let data: PageData;

    const webhooks = data.webhooks.filter(w => !w.url?.includes("production-drawing-"));

    let headers =  ["id", "documentId", "url", "events", "droppedEventCount", "description", "data"/*, "createdBy"*/];
    // let headers = Object.keys(webhooks[0]).filter(h => !["companyId", "projectId", "externalSessionId", "folderId", "href", "name", "isTransient", "viewRef"].includes(h));
    //  //
    console.log('headers', headers);
    
</script>

<div class="container-fluid">
    <table class="table table-striped">
        <thead>
        <tr>
            {#each headers as header}
                <th>{header}</th>
            {/each}
        </tr>
        </thead>
        <tbody>
        {#each webhooks as webhook}
            <tr>
                {#each headers as header}
                    {@const value = webhook[header]}
                    <td>
                        {#if typeof value === 'object'}
                            <pre>{JSON.stringify(value, null, 2)}</pre>
                        {:else}
                            {value}
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
</div>