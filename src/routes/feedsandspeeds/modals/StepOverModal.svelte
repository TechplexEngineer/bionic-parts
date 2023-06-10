<script>
    import Modal from "$lib/Modal.svelte";

    export let isOpen = false;

</script>

<Modal header="Step Over" bind:isOpen={isOpen}>

    <p><code>Step Over</code> is how much new material to cut on each pass.</p>

    <p>The calculator sets the step over as 45% of the tool diameter as standard however this can be changed depending
        on the geometric strategy used for pocketing. The maximum value you can use is 50% when rastering a pocket
        although we've found that 45% creates a better finish. When doing concentric outlines you are limited by the
        most acute angle in the outline (if it is 90 degrees then any more than about 30% (there's an exact number for
        this) will leave little uncut areas behind.</p>

</Modal>

