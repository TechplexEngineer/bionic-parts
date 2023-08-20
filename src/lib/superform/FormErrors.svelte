<script lang="ts">
    import type {AnyZodObject} from "zod";
    import type {SuperForm} from "sveltekit-superforms/client";
    import type {ZodValidation} from "sveltekit-superforms";

    type T = $$Generic<AnyZodObject>;

    export let form: SuperForm<ZodValidation<T>, unknown>;

    const {allErrors, message} = form;
</script>


{#if $allErrors.length}
	<div class="alert alert-danger" role="alert">
		<strong>Error: Unable to submit due to {$allErrors.length > 1 ? "these errors" : "this error"}:</strong>
		<ul class="mb-0">
			{#each $allErrors as error}
				<li>
					<b>{error.path}:</b>
					{error.messages.join('. ')}
				</li>
			{/each}
		</ul>
	</div>
{/if}

{#if $message}
	<div class="alert alert-primary">{$message}</div>
{/if}