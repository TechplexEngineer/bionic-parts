<script>
    import Modal from "$lib/Modal.svelte";
    import ChipLoad from "./ChipLoad.svg";
    import ChipLoads from "../ChipLoads.svelte"; //@todo

    export let isOpen = false;

</script>

<Modal header="Chip Load" bind:isOpen={isOpen}>

    <img src={ChipLoad} alt="Tool Diameter" class="img-fluid float-end w-50">
    <p><code>Chip load</code> per tooth is the appropriate amount of material that one cutting edge of the tool should
        remove in a single revolution. </p>

    <p>Chip load is usually between 0.001" and 0.010", with exact maximum chipload determined by end mill manufacturers
        based on the end mill and stock material characteristics, like surface speed.</p>

    <p>Most prototyping work on any material can be done well with a chipload of 0.005" for roughing passes and 0.002"
        for finishing passes. Even the sharpest blades have some roundness to the blade edge and just rub against the
        stock material before the pressure is high enough for it to start cutting. With the smallest chiploads (like
        0.001" or even 0.002"), it is possible for the blade to just mash the material underneath and never create a
        chip, especially if the end mill is dull. If this happens, you must use a larger chipload to prevent overheating
        (including fire!), because a significant amount of the heat generated during the cutting process is ejected with
        the chips!</p>

    <ChipLoads/>
</Modal>