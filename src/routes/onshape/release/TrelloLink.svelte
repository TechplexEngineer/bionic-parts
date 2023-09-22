<script lang="ts">

    export let boardId: string;

    export let classes = "btn-outline-primary";

    export let title: string = "Opens in a new tab";

    import BiBoxArrowUpRight from '~icons/bi/box-arrow-up-right'

</script>

<a class="btn {classes}" href={`https://trello.com/b/${boardId}`} target="_blank" title={title}>
    <slot>Open Trello</slot>
    <BiBoxArrowUpRight/>
</a>

