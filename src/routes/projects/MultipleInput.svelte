<script lang="ts">

    export let label: string;
    export let fieldNamePrefix: string;
    export let placeholder = "";
    export let isRequired = true;

    export let inputs = [{id: 0}]; //@todo this should be a map
    export let counter = inputs.length;

    const handleRemove = (index) => {
        inputs = [
            ...inputs.filter((input) => input.id !== index)
        ];
    };
</script>

<div class="mb-3">
    <div class="d-flex justify-content-between">
        <label class="form-label">{label}</label>
        <div class="btn btn-outline-success"
             on:click={() => {inputs = [...inputs, {id: counter++}]}}>Add
        </div>
    </div>
    {#each inputs as input, index (input.id)}
        <div class="input-group mt-2">
            <input type="text" class="form-control" name={`${fieldNamePrefix}[${input.id}]`}
                   placeholder={placeholder} required={isRequired}
                   value={input?.value || ""}>
            {#if inputs.length !== 1}
                <button class="btn btn-outline-danger" type="button"
                        on:click={()=>{handleRemove(input.id)}}>
                    Remove
                </button>
            {/if}
        </div>
    {/each}
</div>

