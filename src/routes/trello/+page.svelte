<script lang="ts">
    import type {PageData} from "./$types";
    import type {Board} from "$lib/trelloAPI/api/models";
    import Select from "svelte-select";

    export let data: PageData;

    const boards: Board[] = data.boards.map(b => b['200']);

    let items = boards.map(b => {
        return (b.lists || []).map(l => {
            return {
                value: l.id,
                label: l.name,
                group: b.name
            }
        })
    }).flat()
    let value;

    console.log("boards", boards);
</script>

<Select {items} groupBy={(item) => item.group} bind:value/>

<h1>Hello world</h1>
<ul>
    {#each data.boards as board}
        <li>{board['200'].name}
            <ul>

                <!--                    <pre>{JSON.stringify(board['200'].lists, null, 2)}</pre>-->
                {#each board['200'].lists as list}
                    <li>{list.name}</li>
                {/each}

            </ul>
        </li>
    {/each}
</ul>