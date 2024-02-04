
<script lang="ts">
    import type {PageData} from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	import * as flashModule from 'sveltekit-flash-message/client';
    
    import FormErrors from "$lib/superform/FormErrors.svelte";
	import SuperForm from "$lib/superform/SuperForm.svelte";
	import TextField from "$lib/superform/TextField.svelte";
    import Submit from "$lib/superform/Submit.svelte";
	import { orderRequestSchema } from './orderRequestSchemea';


    export let data: PageData;

    const form = superForm(data.form, {
        validators: orderRequestSchema,
        validationMethod: "onblur", //onblur only works if use:enhance is setup
        // defaultValidator: "keep"
        flashMessage: {
            module: flashModule,
        }
    });

    //console.log('orderRequestSchema.shape', Object.entries(orderRequestSchema.shape));
    


</script>


<div class="container">
    <h1>Add item to Order Sheet</h1>

	<FormErrors {form}/>

	<SuperForm {form}>
        {#each Object.entries(orderRequestSchema.shape) as [field, def]}
            <div class="row">
                <div class="col">
                    <TextField {form} field={field} type={def.meta?.field?.type || "text"}>
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