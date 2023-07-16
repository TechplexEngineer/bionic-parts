<script lang="ts">
    import type {z, AnyZodObject} from 'zod';
    import type {ZodValidation, FormPathLeaves} from 'sveltekit-superforms';
    import {formFieldProxy, type SuperForm} from 'sveltekit-superforms/client';

    type T = $$Generic<AnyZodObject>;

    export let form: SuperForm<ZodValidation<T>, unknown>;
    export let field: FormPathLeaves<z.infer<T>>;

    const {value, errors, constraints} = formFieldProxy(form, field);
</script>

<label class="form-label fw-bold">
	{field}
</label>
<input
		name={field}
		class="form-control"
		type="text"
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