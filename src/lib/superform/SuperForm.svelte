<script lang="ts">
    export let form;

    const {enhance} = form;
</script>

<form method="post" use:enhance>
    <slot></slot>
</form>