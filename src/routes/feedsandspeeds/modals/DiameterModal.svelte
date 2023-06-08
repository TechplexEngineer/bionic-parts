<script>
    import Modal from "$lib/Modal.svelte";
    import ToolDiameter from "./ToolDiameter.svg";

    export let isOpen = false;

</script>

<Modal header="Tool Diameter" bind:isOpen={isOpen}>

    <img src={ToolDiameter} alt="Tool Diameter" class="img-fluid float-end w-50">
    <p>The <code>Tool Diameter</code> is specified by the tool manufacturer, also known as the <code>Cutting
        Diameter</code>.</p>

    <p><strong>Through cutting and profiling</strong> - a good rule of thumb is to keep the diameter equal to or larger
        than 1/6 of the
        material thickness, as this allows you to use full passes without having problems due to the end mill deflecting
        under cutting loads. For example, if you are cutting 3/4" thick material, the smallest end mill used for cutting
        or
        profiling would be 1/8".</p>

    <p><strong>Pocketing</strong> - to mill a pocket, you can save a lot of time by first "clearing" the majority of the
        material with a larger end mill and then running a second program to finish cutting the pocket edges that
        couldn't be reached by the larger cutter. To clear the pocket, you typically want to use the largest diameter
        tool that you have, which works with the material that you're cutting and fits inside the pocket. Then, use the
        largest diameter tool that works with the outline of the pocket for finishing, taking note of the minimum radius
        of the outline path that results.</p>
</Modal>