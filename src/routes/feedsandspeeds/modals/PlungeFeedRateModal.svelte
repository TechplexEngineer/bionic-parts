<script>
    import Modal from "$lib/Modal.svelte";

    export let isOpen = false;

</script>

<Modal header="Plunge Feed Rate" bind:isOpen={isOpen}>

    <p><code>Plunge Feed rate</code> is the speed at which the machine moves the machining spindle vertically through
        the part.</p>

    <p>In general, a plunge rate should be less than 50% of the feed rate, due to typical end mill design. End mills are
        designed to cut more efficiently in lateral directions, rather than vertically (like a drill bit). Therefore, a
        gentler plunge rate helps to keep the temperature down and avoid damage to the tool. Remember that when plunge
        cutting, the surface speed will vary across the radius of the end mill, all the way to zero at the very center.
        For this reason, all plunge cuts should be ramped - there must be some xy travel while plunging. This means that
        using a smaller diameter end mill to profile or pocket a vertical hole as a cutout will work much better than
        trying to drill with a larger end mill.</p>

</Modal>

