<script lang="ts">
    import Select from 'svelte-select';
    import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
    import {createEventDispatcher} from 'svelte';
    import type {PartRelease} from "./PartRelease";
    import SpinButton from "$lib/SpinButton.svelte";
    import {FormLabsPrinterMaterials, Machines, MfgMethods, Printers, PrusaPrinterMaterials} from "./options";
    import type {ProjectModel} from "$lib/schema";

    const dispatch = createEventDispatcher();

    export let selectedPart: BTPartMetadataInfo;
    export let subsystemName: string;

    export let selectedProject: ProjectModel;

    const enumToSelectOptions = (e: any) => {
        return Object.keys(e).map((key) => {
            return {value: key, label: e[key]};
        });
    };
    let qty: number; //bound to the value of the select


    let mfgMethod: { value: any, label: string, created?: boolean }; //bound to the value of the select
    let mfgMethods: { value: any, label: string, created?: boolean }[] = enumToSelectOptions(MfgMethods);


    let machinesUsed: { value: any, label: string}; //bound to the value of the select
    const machinesAvailable = enumToSelectOptions(Machines);


    const printersAvailable = enumToSelectOptions(Printers)
    let printerUsed: { value: any, label: string}; //bound to the value of the select


    const getMaterialsAvailableForPrinter = (printerUsed: Printers) => {
        switch (printerUsed) {
            case Printers.Prusa:
                return enumToSelectOptions(PrusaPrinterMaterials);
            case Printers.FormLabs:
                return enumToSelectOptions(FormLabsPrinterMaterials);
            default:
                return [];
        }
    }

    let printerMaterialUsed: { value: any, label: string}; //bound to the value of the select
    $: printerMaterialsAvailable = getMaterialsAvailableForPrinter(printerUsed?.label as any);

    let cotsLink: string; //bound to the value of the input field


    // https://stackoverflow.com/a/34064434/429544
    function htmlDecode(input: string): string {
        const doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent as string;
    }

    let notes = htmlDecode(`What stock should be used?
    - ${selectedPart.material?.displayName || ''}

How should the part be made, what steps should be followed?
    1.&nbsp;
    2.&nbsp;
    3.&nbsp;`);

    const handleSubmit = (): Promise<void> => {
        if (typeof qty !== "number") {
            alert("Please enter a number for the quantity");
            return;
        }
        if (mfgMethod == MfgMethods.Cots && !cotsLink) {
            alert("Please enter a link where the part can be purchased");
            return;
        }
        //@todo do any validation here
        dispatch("submit", {
            part: selectedPart,
            qty: qty,
            mfgMethod: mfgMethod?.label,
            machinesUsed: machinesUsed?.map((m) => m.label),
            printerUsed: printerUsed?.label,
            printerMaterialUsed: printerMaterialUsed?.label,
            cotsLink: cotsLink,

            // machinesUsed: machinesUsed?.map((m) => m.value),
            notes: notes,
            subsystemName: subsystemName,
            projectId: parseInt(selectedProject.id as string) //@todo
        } satisfies Omit<PartRelease, 'params'>)
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 10 * 1000); // units are milliseconds
        });
    }


</script>
<h1>Part Release</h1>
<div class="mb-3">
    <div class="row">
        <div class="col">
            <strong>Current Part:</strong> {selectedPart?.name} {selectedPart?.partNumber || ''}
        </div>
        <div class="col">
            <strong>Subsystem:</strong> {subsystemName}
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="mb-3">
            <label for="qty" class="form-label">Quantity:</label>
            <input type="number" class="form-control" id="qty" placeholder="Please enter a number" bind:value={qty}
                   required>
        </div>
    </div>
    <div class="col">
        <div class="mb-3">
            <label for="mfgMethod" class="form-label">Manufacturing Method:</label>
            <Select id="mfgMethod" items={mfgMethods} bind:value={mfgMethod}></Select>
        </div>
    </div>
</div>


{#if mfgMethod?.label === MfgMethods.Machined}
    <div class="mb-3">
        <label for="machines" class="form-label">Machines Used (select all)</label>
        <Select id="machines" items={machinesAvailable} bind:value={machinesUsed} multiple></Select>
    </div>
{/if}

{#if mfgMethod?.label === MfgMethods.Printed}
    <div class="row">
        <div class="col">
            <div class="mb-3">
                <label for="printer" class="form-label">Printer</label>
                <Select id="printer" items={printersAvailable} bind:value={printerUsed}></Select>
            </div>
        </div>
        <div class="col">
            <div class="mb-3">
                <label for="material" class="form-label">Material</label>
                <Select id="material" items={printerMaterialsAvailable} bind:value={printerMaterialUsed}></Select>
            </div>
        </div>
    </div>
{/if}

{#if mfgMethod?.label === MfgMethods.Cots}
    <div class="mb-3">
        <label for="link" class="form-label">Purchase Link</label>
        <input type="text" class="form-control" id="link" placeholder="http://mcmaster.com/..."
               bind:value={cotsLink}>
    </div>
{/if}

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