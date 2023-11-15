<script lang="ts">
    import type {PageData} from './$types';

    export let page: PageData;
</script>

<pre>{JSON.stringify(page, null, 2)}</pre>