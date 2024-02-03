
<script lang="ts" generics="T extends AnyZodObject">

    // generics, see: https://github.com/dummdidumm/rfcs/blob/ts-typedefs-within-svelte-components/text/ts-typing-props-slots-events.md

    import type {z, AnyZodObject} from 'zod';
    import type {ZodValidation, FormPathLeaves} from 'sveltekit-superforms';
    import {formFieldProxy, type SuperForm} from 'sveltekit-superforms/client';

    // type T = $$Generic<AnyZodObject>;

    export let form: SuperForm<ZodValidation<T>, unknown>;
    export let field: FormPathLeaves<z.infer<T>>;

    export let type = "text"; // beware hack below `{...{type: type}}`: https://stackoverflow.com/questions/57392773/error-type-attribute-cannot-be-dynamic-if-input-uses-two-way-binding/75298645#75298645


    const {value, errors, constraints} = formFieldProxy(form, field);
</script>

<label class="form-label fw-bold">
	<slot>
		{field}
	</slot>
</label>
<input
		name={field}
		class="form-control"
		{...{type: type}}
		aria-invalid={$errors ? 'true' : undefined}
		bind:value={$value}
		{...$constraints}
		{...$$restProps}
/>

{#if $errors}<span class="invalid-feedback d-block">{$errors}</span>{/if}

<style lang="scss">
  input[aria-invalid="true"] {
    //background-color: #f8d7da;
    border-color: red;
  }
</style>