<script lang="ts">
    import TextField from "$lib/superform/TextField.svelte";
    import {superForm, formFieldProxy} from 'sveltekit-superforms/client'
    import type {PageData} from './$types';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
    import {schema} from "./schema";
    import * as flashModule from 'sveltekit-flash-message/client';

    export let data: PageData;

    const form = superForm(data.form, {
        validators: schema,
        validationMethod: "onblur", //onblur only works if use:enhance is setup
        // defaultValidator: "keep"
        flashMessage: {
            module: flashModule,
        }
    });

    // Snapshots preserve user input on reload and navigation
    const {capture, restore, enhance, message, errors, allErrors, delayed} = form;
    export const snapshot = {capture, restore};

    // for the SuperDebug component
    const f = form.form

</script>

<div class="container">
	<h1>Superforms Test</h1>

	{#if $allErrors.length}
		<div class="alert alert-danger" role="alert">
			<strong>Error: Unable to submit due to these errors:</strong>
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

	<form method="post" use:enhance>
		<div class="row">
			<div class="col">
				<TextField {form} field="name"></TextField>
			</div>
			<div class="col">
				<TextField {form} field="email"></TextField>
			</div>
		</div>

		<button type="submit" class="btn btn-primary mt-2">

			{#if $delayed}
				Submitting
				<div class="spinner-border spinner-border-sm text-light" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			{:else}
				Submit
			{/if}
		</button>
	</form>

	<div class="mt-3">
		<SuperDebug data={$f}/>
	</div>
</div>

