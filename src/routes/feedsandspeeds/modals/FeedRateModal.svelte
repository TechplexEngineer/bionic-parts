<script>
    import Modal from "$lib/Modal.svelte";

    export let isOpen = false;

</script>

<Modal header="Feed Rate" bind:isOpen={isOpen}>

    <p><code>Feed rate</code> is the speed at which the machine moves the machining spindle across the part.</p>

    <p>Feed Rate (in/min) = Spindle Speed (RPM) * Number of Flutes * Chip Load (in/flute)</p>

</Modal>

