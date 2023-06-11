<script>
    import Modal from "$lib/Modal.svelte";
    import StepOver from "./Stepover.svg";


    export let isOpen = false;

</script>

<Modal header="Step Over" bind:isOpen={isOpen}>

    <img src={StepOver} alt="Showing an end mill in a piece of stock with step over illustrated"
         class="img-fluid float-end w-50">
    <p><code>Step Over</code> is the offset distance between two tool path cuts.</p>

    <p>The calculator sets the step over as 45% of the tool diameter as standard however this can be changed depending
        on the geometric strategy used for pocketing. The maximum value you can use is 50% when milling a pocket. A
        better finish can be achieved using a 45% step over.</p>

    <p>See <a href="https://www.grzsoftware.com/blog/choose-stepover/" target="_blank">this article by GRZ Software</a>
        for information on choosing a step over when using a ball end mill.</p>

</Modal>

