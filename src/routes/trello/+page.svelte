<script lang="ts">
    import PageData = App.PageData;

    export let data: PageData;
</script>

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