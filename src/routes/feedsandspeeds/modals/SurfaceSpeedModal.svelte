<script>
    import Modal from "$lib/Modal.svelte";
    import SurfaceSpeed from "./SurfaceSpeed.svg";
    import SurfaceSpeeds from "../SurfaceSpeeds.svelte";

    export let isOpen = false;

</script>

<Modal header="Surface Speed" bind:isOpen={isOpen}>

    <img src={SurfaceSpeed} alt="Surface Speed" class="img-fluid float-end w-50">
    <p><code>Surface Speed</code> is the linear speed that each tool edge will travel at, through your material while
        cutting.</p>

    <p>The maximum surface speed is determined by a combination of the nature of the material that you are cutting, and
        the nature of the material that your end mill is made of. Since end mills are typically quite expensive, you
        probably don't want to determine this experimentally. Most end mill manufacturers have done this work and
        publish lists of optimal surface speeds for various materials, using their end mills. For most end mill
        materials and surface coating combinations with the same description (eg. "titanium nitride (TiN) coated
        carbide"), maximum surface speeds are similar across manufacturers. Usually, the surface speeds listed by end
        mill manufacturers are maximum speeds, and it works well to cut at or below this speed (a few materials actually
        have a minimum surface speed for proper cutting, but this is relatively rare). You should start any new job at
        50% (or less) of this maximum, in order to be able to observe any problems and pause the machine before a
        hazardous situation occurs - while surface speed is independent of feed rate in principle, using typical chip
        loads results in a tendency for feed rate to scale with surface speed.</p>

    <SurfaceSpeeds/>

</Modal>