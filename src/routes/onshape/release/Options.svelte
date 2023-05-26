<script lang="ts">
    import Select from 'svelte-select';
    import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
    import {createEventDispatcher} from 'svelte';
    import type {PartRelease} from "./PartRelease";
    import SpinButton from "$lib/SpinButton.svelte";

    const dispatch = createEventDispatcher();

    export let selectedPart: BTPartMetadataInfo

    const enumToSelectOptions = (e: any) => {
        return Object.keys(e).map((key) => {
            return {value: key, label: e[key]};
        });
    };
    let qty; //bound to the value of the select

    enum MfgMethods {
        //key = value (shown to user)
        Machined = 'Machined',
        Printed = '3D Printed',
        Cots = 'Purchased',
        Magic = 'Magic'
    }

    let mfgMethod; //bound to the value of the select
    let mfgMethods: { value: any, label: string, created?: boolean }[] = enumToSelectOptions(MfgMethods);

    enum Machines {
        //key = value (shown to user)
        Lathe = 'Lathe',
        Mill = 'Mill',
        DrillPress = 'Drill Press',
        LaserCutter = 'Laser Cutter',
        WaterJet = 'Water Jet',
        CNCMill = 'CNC Mill (Velox/Tormach)',
        CNCLathe = 'CNC Lathe',
        Router = 'Router',
        Bandsaw = 'Bandsaw',
        TableSaw = 'Table Saw',
        ChopSaw = 'Chop Saw',
    }

    let machinesUsed; //bound to the value of the select
    let machinesAvailable = enumToSelectOptions(Machines);

    enum Printers {
        //key = value (shown to user)
        Prusa = 'Prusa',
        FormLabs = 'Ultimaker',
    }

    let notes = `What stock should be used?
    -
How should the part be made, what steps should be followed?
    1.
    2.
    3. `;

    const handleSubmit = (e) => {
        //@todo do any validation here
        dispatch("submit", {
            part: selectedPart,
            qty: qty,
            mfgMethod: mfgMethod?.value,
            // machinesUsed: machinesUsed?.map((m) => m.value),
            notes: notes
        } satisfies PartRelease)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 10*1000); // units are miliseconds
        });
    }


</script>
<h1>Part Release</h1>
<div class="mb-3">
    <strong>Current Part:</strong> {selectedPart?.name} {selectedPart?.partNumber || ''}
</div>
<div class="row">
    <div class="col">
        <div class="mb-3">
            <label for="qty" class="form-label">Quantity to make:</label>
            <input type="number" class="form-control" id="qty" placeholder="Please enter a number" bind:value={qty}>
        </div>
    </div>
    <div class="col">
        <div class="mb-3">
            <label for="mfgMethod" class="form-label">Manufacturing Method:</label>
            <Select id="mfgMethod" items={mfgMethods} bind:value={mfgMethod}></Select>
        </div>
    </div>
</div>


<!--{#if mfgMethod?.value === MfgMethods.Machined}-->
<!--    <div class="mb-3">-->
<!--        <label for="machines" class="form-label">Machines Used (select all)</label>-->
<!--        <Select id="machines" items={machinesAvailable} bind:value={machinesUsed} multiple></Select>-->
<!--    </div>-->
<!--{/if}-->

<div class="mb-3">
    <label for="notes" class="form-label">Notes:</label>
    <textarea class="form-control" id="notes" rows="8" bind:value={notes}></textarea>
</div>

<div class="d-flex justify-content-between">
    <button class="btn btn-warning" on:click={() => dispatch("cancel")}>Cancel</button>
    <SpinButton class="btn-success" onClick={handleSubmit}>Send part to Trello</SpinButton>
<!--    <button class="btn btn-success" on:click=>Send part to Trello</button>-->
</div>

<style>
    .form-label {
        font-weight: bold;
    }
</style>