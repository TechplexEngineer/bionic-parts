<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	import * as flashModule from 'sveltekit-flash-message/client';

	import FormErrors from '$lib/superform/FormErrors.svelte';
	import SuperForm from '$lib/superform/SuperForm.svelte';
	import TextField from '$lib/superform/TextField.svelte';
	import Submit from '$lib/superform/Submit.svelte';
	import { orderRequestSchema } from './orderRequestSchemea';

	export let data: PageData;

	const form = superForm(data.form, {
		validators: orderRequestSchema,
		validationMethod: 'onblur', //onblur only works if use:enhance is setup
		// defaultValidator: "keep"
		flashMessage: {
			module: flashModule
		}
	});

	//console.log('orderRequestSchema.shape', Object.entries(orderRequestSchema.shape));
</script>

<div class="container">
	<div class="row mb-4">
		<div class="col">
            <h1>Add item to Order Sheet</h1>
        </div>
		<div class="col-2 d-flex flex-column">
			<div class="mt-auto ms-auto">
				<a class="btn btn-success" href="https://docs.google.com/spreadsheets/d/1BGMXljo7L7N766PpeVszUuOC9rf_mTWG5kIJSzcwGbo/edit#gid=1432125071" target="_blank">Open Order Sheet</a>
			</div>
		</div>
	</div>

	<div class="row" />
	

	<FormErrors {form} />

	<SuperForm {form}>
		{#each Object.entries(orderRequestSchema.shape) as [field, def]}
			<div class="row">
				<div class="col">
					<TextField {form} {field} type={def.meta?.field?.type || 'text'}>
						{def.meta?.label || field}
					</TextField>
				</div>
			</div>
		{/each}
		<!-- <div class="row">
			<div class="col">
				<TextField {form} field="name"></TextField>
			</div>
			<div class="col">
				<TextField {form} field="email"></TextField>
			</div>
		</div> -->

		<Submit {form} class="btn btn-primary mt-2">Submit</Submit>
	</SuperForm>
</div>
