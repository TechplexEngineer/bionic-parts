<script lang="ts">
    export let items: string[] = [];
    export let activeItem = "";
</script>

<ul class="list-group">
    {#each items as item}
        <li class="list-group-item" 
            on:click={() => activeItem=item}
            on:keydown={(e) => e.key === "Enter" ? activeItem=item : null}
            class:active={activeItem == item}
        >{item}</li>
    {/each}
</ul>