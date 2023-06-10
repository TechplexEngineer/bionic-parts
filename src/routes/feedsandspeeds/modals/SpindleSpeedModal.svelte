<script>
    import Modal from "$lib/Modal.svelte";

    export let isOpen = false;

</script>

<Modal header="Spindle Speed" bind:isOpen={isOpen}>

    <p><code>Spindle Speed</code> is the speed in revolutions per minute that the cutting tool is spinning.</p>

    <p>Spindle Speed (RPM) = [ Surface Speed (ft/min) * 12 ] / [ PI * Tool Diameter (in) ]</p>

</Modal>

