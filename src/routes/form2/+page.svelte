<script lang="ts">
    import TextField from "$lib/superform/TextField.svelte";
    import {superForm} from 'sveltekit-superforms/client'
    import type {PageData} from './$types';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
    import * as flashModule from 'sveltekit-flash-message/client';
    import FormErrors from "$lib/superform/FormErrors.svelte";
    import Submit from "$lib/superform/Submit.svelte";
    import {schema} from "../form/schema";

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

	<FormErrors {form}/>

	<form method="post" use:enhance>
		<div class="row">
			<div class="col">
				<TextField {form} field="name"></TextField>
			</div>
			<div class="col">
				<TextField {form} field="email"></TextField>
			</div>
		</div>

		<Submit {form} class="btn btn-primary mt-2">Submit</Submit>
	</form>

	<div class="mt-3">
		<SuperDebug data={$f}/>
	</div>
</div>

