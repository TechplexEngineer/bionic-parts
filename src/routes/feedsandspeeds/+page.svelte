<script lang="ts">

    import type {MachiningParams} from "./machiningParams";
    import Results from "./Results.svelte";

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
    let toolDiameterIn;
    let numFlutes;
    let surfaceSpeedFPM;
    let chipLoadIPT;
</script>

<div class="container">
    <h1>Feeds and Speeds calculator</h1>

    <div class="card">
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
                    <div class="btn btn-outline-primary">Details</div>
                </div>
            </div>

            <div class="mb-3">
                <label for="numFlutes" class="form-label">Number of Flutes (integer)</label>
                <div class="input-group mb-3">
                    <input type="number" id="numFlutes" class="form-control" bind:value={numFlutes}>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => numFlutes=1}>1</button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => numFlutes=2}>2</button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => numFlutes=3}>3</button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => numFlutes=4}>4</button>
                    <div class="btn btn-outline-primary">Details</div>
                </div>
            </div>

            <h2>Parameters</h2>

            <div class="mb-3">
                <label for="sfm" class="form-label">Surface Speed (feet/min)</label>
                <div class="input-group mb-3">
                    <input type="number" id="sfm" class="form-control" bind:value={surfaceSpeedFPM}>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => surfaceSpeedFPM=200}>200
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => surfaceSpeedFPM=400}>400
                    </button>
                    <div class="btn btn-outline-primary">Details</div>
                </div>
            </div>

            <div class="mb-3">
                <label for="ipt" class="form-label">Chip Load (inches per tooth)</label>
                <div class="input-group mb-3">
                    <input type="number" id="ipt" class="form-control" bind:value={chipLoadIPT}>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.001}>.001"
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.002}>.002"
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.004}>.004"
                    </button>
                    <button class="btn btn-outline-secondary" type="button" on:click={() => chipLoadIPT=.005}>.005
                    </button>
                    <div class="btn btn-outline-primary">Details</div>
                </div>

            </div>

            <Results machiningParams={calcMachiningPrams({toolDiameterIn, surfaceSpeedFPM, chipLoadIPT, numFlutes})}/>

        </div>
    </div>
</div>