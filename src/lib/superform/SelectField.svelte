<script lang="ts">
    import Select from "svelte-select";
    import {formFieldProxy, type SuperForm} from "sveltekit-superforms/client";
    import type {AnyZodObject} from "zod";
    import type {FormPathLeaves, ZodValidation} from "sveltekit-superforms";
    import {z} from "zod";


    type T = $$Generic<AnyZodObject>;

    export let form: SuperForm<ZodValidation<T>, unknown>;
    export let field: FormPathLeaves<z.infer<T>>;

    const {value, errors, constraints} = formFieldProxy(form, field);

    // $: console.log("constraints", $constraints)
    // $: console.log("errors", $errors)

    //@todo can't determine required based on constraints
</script>

<Select {...$$restProps} bind:value={$value}/>
{#if $errors}<span class="invalid-feedback d-block">{$errors}</span>{/if}