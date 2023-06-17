<script lang="ts">

    export let boardId: string;

    export let classes = "btn-outline-primary";

    export let title: string | undefined;

</script>

<a class="btn {classes}" href={`https://trello.com/b/${boardId}`} target="_blank" title={title}>
    <slot>Open Trello</slot>
</a>

<style>
    a[target="_blank"]::after {
        margin: 0 3px 0 5px;
        content: "↗";
    }
</style>