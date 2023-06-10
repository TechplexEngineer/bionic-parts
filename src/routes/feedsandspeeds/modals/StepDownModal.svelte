<script>
    import Modal from "$lib/Modal.svelte";

    export let isOpen = false;

</script>

<Modal header="Step Down" bind:isOpen={isOpen}>

    <p><code>Step Down</code> is the depth of each layer of machining.</p>

    <p>The step down should be less than the diameter of the tool for soft materials such as plastics and wood. For hard
        materials such as metals, step down should be less than half of the diameter of the tool.</p>

</Modal>

