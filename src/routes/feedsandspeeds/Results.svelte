<script lang="ts">
    import type {MachiningParams} from "./machiningParams";

    export let machiningParams: MachiningParams;


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
                <div class="btn btn-outline-primary">Details</div>
            </td>
        </tr>
        <tr>
            <th>X/Y Feed Rate</th>
            <td>{machiningParams.feedRateIPM}</td>
            <td>(inches/min)</td>
            <td>
                <div class="btn btn-outline-primary">Details</div>
            </td>
        </tr>
        <tr>
            <th>Plunge (Z) feed rate</th>
            <td>{machiningParams.plungeRateIPM}</td>
            <td>(inches/min)</td>
            <td>
                <div class="btn btn-outline-primary">Details</div>
            </td>
        </tr>
        <tr>
            <th>Stepover</th>
            <td>{machiningParams.stepOverIn}</td>
            <td>(inches)</td>
            <td>
                <div class="btn btn-outline-primary">Details</div>
            </td>
        </tr>
        <tr>
            <th>Stepdown</th>
            <td>{machiningParams.stepDownIn}</td>
            <td>(inches)</td>
            <td>
                <div class="btn btn-outline-primary">Details</div>
            </td>
        </tr>
        </tbody>
    </table>
{/if}