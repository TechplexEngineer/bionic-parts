<script lang="ts">
    import type {AnyZodObject} from "zod";
    import type {SuperForm} from "sveltekit-superforms/client";
    import type {ZodValidation} from "sveltekit-superforms";

    type T = $$Generic<AnyZodObject>;

    export let form: SuperForm<ZodValidation<T>, unknown>;

    const {delayed} = form;
    export let labelWorking = "Submitting";
</script>


<button type="submit" class="btn btn-primary" {...$$restProps}>

	{#if $delayed}
		{labelWorking}
		<div class="spinner-border spinner-border-sm text-light" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	{:else}
		<slot/>
	{/if}
</button>