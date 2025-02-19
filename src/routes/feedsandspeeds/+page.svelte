<svelte:head>
    <title>{routes.find(r => r.link == $page.url.pathname)?.title} : Bionic Parts</title>
    <meta name="description" content={routes.find(r => r.link == $page.url.pathname)?.description}/>
</svelte:head>

<script lang="ts">

    import type {MachiningParams} from "./machiningParams";
    import Results from "./Results.svelte";
    import DiameterModal from "./modals/DiameterModal.svelte";
    import FlutesModal from "./modals/FlutesModal.svelte";
    import SurfaceSpeedModal from "./modals/SurfaceSpeedModal.svelte";
    import ChipLoadModal from "./modals/ChipLoadModal.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import { routes } from "$lib/routes";
	import { page } from "$app/stores";

    const calcMachiningPrams = ({toolDiameterIn, surfaceSpeedFPM, chipLoadIPT, numFlutes}: {
        toolDiameterIn: number,
        surfaceSpeedFPM: number,
        chipLoadIPT: number,
        numFlutes: number
    }): MachiningParams => {
        const spindleSpeedRPM = Math.round(surfaceSpeedFPM / (Math.PI * (1 / 12) * toolDiameterIn));
        const feedRateIPM = Math.round(spindleSpeedRPM * numFlutes * chipLoadIPT);
        const plungeRateIPM = feedRateIPM / 2;
        const stepOverIn = 0.45 * toolDiameterIn;
        const stepDownIn = toolDiameterIn / 2;

        return {
            spindleSpeedRPM,
            feedRateIPM,
            plungeRateIPM,
            stepOverIn,
            stepDownIn,
        };
    }

    // variables bound to input controls
    let toolDiameterIn:number;
    let numFlutes:number;
    let surfaceSpeedFPM:number;
    let chipLoadIPT:number;

    let diameterModalOpen = false;
    let flutesModalOpen = false;
    let surfaceSpeedModalOpen = false;
    let chipLoadModalOpen = false;

</script>

<Navbar/>

<div class="container mt-4">
    <h1>Feeds and Speeds calculator</h1>

    <div class="card mt-4">
        <div class="card-body">
            <h2>Tool Geometry</h2>

            <div class="mb-3">
                <label for="toolDiam" class="form-label">Tool Diameter (inches)</label>
                <div class="input-group mb-3">
                    <input type="number" id="toolDiam" class="form-control" bind:value={toolDiameterIn}>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => toolDiameterIn=.125}>.125"
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => toolDiameterIn=.25}>.25"
                    </button>
                    <button class="btn btn-outline-primary" on:click={() => diameterModalOpen=true}>Details</button>
                </div>
                <DiameterModal bind:isOpen={diameterModalOpen}/>
            </div>

            <div class="mb-3">
                <label for="numFlutes" class="form-label">Number of Flutes (integer)</label>
                <div class="input-group mb-3">
                    <input type="number" id="numFlutes" class="form-control" bind:value={numFlutes}>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => numFlutes=1}>1</button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => numFlutes=2}>2</button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => numFlutes=3}>3</button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => numFlutes=4}>4</button>
                    <button class="btn btn-outline-primary" on:click={() => flutesModalOpen=true}>Details</button>
                </div>
                <FlutesModal bind:isOpen={flutesModalOpen}/>
            </div>

            <h2>Parameters</h2>

            <div class="mb-3">
                <label for="sfm" class="form-label">Surface Speed (feet/min)</label>
                <div class="input-group mb-3">
                    <input type="number" id="sfm" class="form-control" bind:value={surfaceSpeedFPM}>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => surfaceSpeedFPM=200}>200
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => surfaceSpeedFPM=300}>300
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => surfaceSpeedFPM=400}>400
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => surfaceSpeedFPM=500}>500
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => surfaceSpeedFPM=600}>600
                    </button>
                    <button class="btn btn-outline-primary" on:click={() => surfaceSpeedModalOpen=true}>Details</button>
                </div>
                <SurfaceSpeedModal bind:isOpen={surfaceSpeedModalOpen}/>
            </div>

            <div class="mb-3">
                <label for="ipt" class="form-label">Chip Load (inches per tooth)</label>
                <div class="input-group mb-3">
                    <input type="number" id="ipt" class="form-control" bind:value={chipLoadIPT}>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.001}>.001"
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.002}>.002"
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.003}>.003"
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.004}>.004"
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.005}>.005
                    </button>
                    <button class="btn btn-outline-primary" on:click={() => chipLoadModalOpen=true}>Details</button>
                </div>
                <ChipLoadModal bind:isOpen={chipLoadModalOpen}/>

            </div>

            <Results machiningParams={calcMachiningPrams({toolDiameterIn, surfaceSpeedFPM, chipLoadIPT, numFlutes})}/>

        </div>
    </div>
</div>