<script>
    import Modal from "$lib/Modal.svelte";
    import ToolDiameter from "./ToolFlutes.svg";

    export let isOpen = false;

</script>

<Modal header="Tool Flutes" bind:isOpen={isOpen}>

    <img src={ToolDiameter} alt="Tool Flutes" class="img-fluid float-end w-50">
    <p><code>Flutes</code> are the spiraled part of the end mill which allow for cutting on the edge. The number of
        flutes can be counted by looking at the tip of the end mill and counting each cutting surface. For example, the
        photo shows a end mill with four flutes.</p>

    <p>For CNC Routers you typically want fewer flutes as the spindles run much faster than conventional milling
        machines. For example our Velox router's max speed is 18,000 RPM whereas the bridgeport mills max speed is 5,000
        RPM.</p>
    
</Modal>