<script lang="ts">
    import type {MachiningParams} from "./machiningParams";
    import SpindleSpeedModal from "./modals/SpindleSpeedModal.svelte";
    import FeedRateModal from "./modals/FeedRateModal.svelte";
    import PlungeFeedRateModal from "./modals/PlungeFeedRateModal.svelte";
    import StepOverModal from "./modals/StepOverModal.svelte";
    import StepDownModal from "./modals/StepDownModal.svelte";

    export let machiningParams: MachiningParams;

    let spindleSpeedModalOpen = false;
    let feedRateModalOpen = false;
    let plungeFeedRateModalOpen = false;
    let stepOverModalOpen = false;
    let stepDownModalOpen = false;

</script>

<h2>Results</h2>

{#if Object.values(machiningParams).includes(NaN)}
    <span>Results will be shown when all parameters are entered.</span>
{:else}
    <table class="table table-striped">
        <tbody>
        <tr>
            <th>Spindle Speed</th>
            <td>{machiningParams.spindleSpeedRPM}</td>
            <td>(rpm)</td>
            <td>
                <div class="btn btn-outline-primary" on:click={() => {spindleSpeedModalOpen = true;}}>Details</div>
                <SpindleSpeedModal bind:isOpen={spindleSpeedModalOpen}/>
            </td>
        </tr>
        <tr>
            <th>X/Y Feed Rate</th>
            <td>{machiningParams.feedRateIPM}</td>
            <td>(inches/min)</td>
            <td>
                <div class="btn btn-outline-primary" on:click={() => {feedRateModalOpen = true;}}>Details</div>
                <FeedRateModal bind:isOpen={feedRateModalOpen}/>
            </td>
        </tr>
        <tr>
            <th>Plunge (Z) feed rate</th>
            <td>{machiningParams.plungeRateIPM}</td>
            <td>(inches/min)</td>
            <td>
                <div class="btn btn-outline-primary" on:click={() => {plungeFeedRateModalOpen = true;}}>Details</div>
                <PlungeFeedRateModal bind:isOpen={plungeFeedRateModalOpen}/>
            </td>
        </tr>
        <tr>
            <th>Step Over</th>
            <td>{machiningParams.stepOverIn}</td>
            <td>(inches)</td>
            <td>
                <div class="btn btn-outline-primary" on:click={() => {stepOverModalOpen = true;}}>Details</div>
                <StepOverModal bind:isOpen={stepOverModalOpen}/>
            </td>
        </tr>
        <tr>
            <th>Step Down</th>
            <td>{machiningParams.stepDownIn}</td>
            <td>(inches)</td>
            <td>
                <div class="btn btn-outline-primary" on:click={() => {stepDownModalOpen = true;}}>Details</div>
                <StepDownModal bind:isOpen={stepDownModalOpen}/>
            </td>
        </tr>
        </tbody>
    </table>
{/if}