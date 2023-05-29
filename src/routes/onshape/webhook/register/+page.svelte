<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
    let headers = Object.keys(data.webhooks[0])
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
        {#each data.webhooks as webhook}
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