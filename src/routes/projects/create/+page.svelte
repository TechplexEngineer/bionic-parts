<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Manufacturing Projects"/>
</svelte:head>

<script lang="ts">
    import type {PageData} from './$types';
    import MultipleInputField from "$lib/superform/MultipleInputField.svelte";
    import {createProjectSchema} from "./createProject.schema";
    import {superForm} from "sveltekit-superforms/client";
    import * as flashModule from 'sveltekit-flash-message/client';
    import TextField from "$lib/superform/TextField.svelte";
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
    import Submit from "$lib/superform/Submit.svelte";
    import FormErrors from "$lib/superform/FormErrors.svelte";
    import SelectField from "$lib/superform/SelectField.svelte";

    // populated with data from the get endpoint
    export let data: PageData;

    const form = superForm(data.form, {
        validators: {
            name: (name) => name.length < 3 ? 'Name must be at least 3 characters' : null,
            trelloBoardAndList: (selection) => selection.value.board.length < 3 ? 'Please select a Trello List' : null,
            documents: (document) => (document && document.match(/https:\/\/[^.]+\.onshape.com\/documents\/[0-9a-f]+/)) ? null : 'Please enter a valid Onshape Document URL'

        },
        validationMethod: "onblur", //onblur only works if use:enhance is setup
        // defaultValidator: "keep"
        flashMessage: {
            module: flashModule,
        },
        dataType: "json"
    });

    // Snapshots preserve user input on reload and navigation
    const {capture, restore, enhance, form: formData} = form;
    // export const snapshot = {capture, restore};

    let trelloListChoices = data.trelloBoards.map(b => {
        return (b.lists || []).map(l => {
            return {
                value: {board: b.id, list: l.id},
                label: l.name,
                group: b.name
            }
        })
    }).flat();

    let onshapeTeamChoices = data.onshapeTeams!.map(t => {
        return {
            value: t.id,
            label: t.name
        }
    });


    let queryState = "";


</script>

<div class="container mt-4">

	<div class="row mb-4">

		<div class="col">
			<h1>New Project</h1>
		</div>
		<div class="col-2 d-flex flex-column">
			<div class="mt-auto ms-auto">
				<a class="btn btn-outline-success" href="/projects">
					All Projects
				</a>
			</div>
		</div>
	</div>

	<FormErrors {form}/>

	<form method="post" use:enhance>

		<div class="row d-flex mb-4">
			<div class="col">
				<div class="card mb-3 h-100">
					<div class="card-header">
						<span class="fs-5">1. Project</span>
					</div>
					<div class="card-body">
						<TextField {form} field="name" placeholder="Charged Up 2023">
							Project Name <span class="text-danger">*</span>
						</TextField>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					<div class="card-header">
                        <span class="fs-5">
                            2. Project Access
                        </span>
					</div>
					<div class="card-body">
						<p>Optionally share this project with other Onshape users.
							Users on teams selected can release parts in this project.</p>

						<label class="form-label">Share With</label>
						<SelectField {form} field="onshapeTeamsWrite"
						             items={onshapeTeamChoices} labelField="label" valueField="value"
						             class="form-control" name="onshapeTeamsWrite"
						             placeholder="Onshape Teams" required={false} showChevron multiple/>
					</div>
				</div>
			</div>
		</div>


		<div class="row d-flex">
			<div class="col-lg-6">
				<div class="card">
					<div class="card-header">
						<span class="fs-5">2. Documents</span>
					</div>
					<div class="card-body">

						<p>When parts are released from these Onshape documents, cards are created at Release
							Destination.</p>

						<MultipleInputField {form} field="documents"
						                    placeholder="Document(s) to include in project"
						>Onshape Documents
						</MultipleInputField>
						<p>Documents can be added later when releasing a part.</p>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card h-100">
					<div class="card-header">
						<span class="fs-5">3. Release Destination</span>
					</div>
					<div class="card-body">
						<p>Cards will be created on the selected Trello list when a part is released.</p>

						<label class="form-label">Trello List <span class="text-danger">*</span></label>
						<SelectField {form} field="trelloBoardAndList"
						             items={trelloListChoices}
						             groupBy={(item) => item.group}
						             class="form-control" name="trelloBoardAndList"
						             placeholder="Please select destination Trello List"
						             required={true}
						             showChevron/>
					</div>
				</div>
			</div>
		</div>


		<div class="mt-3">
			<SuperDebug data={$formData}/>
		</div>


		{#if queryState}
			<input type="hidden" name="queryState" value={queryState}>
		{/if}
		<div class="d-flex justify-content-between mt-3">
			<a class="btn btn-outline-primary" href="/projects">
				Cancel
			</a>
			<Submit form={form}>Create</Submit>
		</div>
		<!--		<button type="submit" form="createProjectForm" class="btn btn-success mb-3 float-end">-->
		<!--			Create-->
		<!--		</button>-->
	</form>
</div>

<style>
    label.form-label {
        font-weight: bold;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
    }

    .row > [class*='col-'] {
        display: flex;
        flex-direction: column;
    }
</style>
