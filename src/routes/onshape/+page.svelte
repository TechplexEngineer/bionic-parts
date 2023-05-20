<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">

</div>

<script lang="ts">
    import {page} from "$app/stores";
    import Select from 'svelte-select';

    //bound to the text area
    let outputValue = JSON.stringify($page.form, null, 4);

    let resourceItems = ["documents", "metadata", "parts", "partstudios", "translation"].sort();//.map(i=>({value:i, label:i}))
    let resourceValue = "parts";

    let wvmItems = [
        {value: 'w', label: 'W'},
        {value: 'v', label: 'V'},
        {value: 'm', label: 'M'},
    ];
    let wvmValue = "v";

    let reqTypeItems = ["get", "post"];
    let reqTypeValue = "get";
</script>

<form method="POST" action="?/runQuery">
    <div class="container-fluid">
<!--        <div class="row">-->
<!--            <div class="col-2">-->
<!--                <a href="/onshape/{$page.url.searchParams.get('did')}" class="btn btn-info">Back to Document</a>-->
<!--            </div>-->
<!--            <div class="col-8">-->
<!--                <h1>Onshape API Tester</h1>-->
<!--            </div>-->
<!--            <div class="col-2">-->
<!--                &lt;!&ndash; Some Other Action &ndash;&gt;-->
<!--            </div>-->
<!--        </div>-->

        <!--    <h2>Doc: {doc.name}</h2>-->
        <!--    <ul>-->
        <!--        <li>did: {doc.id}</li>-->
        <!--        <li>wid: {doc.defaultWorkspace.id}</li>-->
        <!--    </ul>-->

        <div class="row">

            <div class="col-md-2">
                <label for="resourceInput" class="form-label">Resource</label>
                <Select items={resourceItems} bind:value={resourceValue} isCreatable={true} id="resourceInput"></Select>
                <input type="hidden" name="resource" value={resourceValue.value}>
            </div>
            <div class="col-md-2">
                <label for="did" class="form-label">DocumentID</label>
                <input type="text" class="form-control" id="did" name="did" value="da2bc7f409791a8720b27217">
            </div>
            <div class="col-md-2">
                <label class="form-label" for="wvmInput">W-V-M</label>
                <Select items={wvmItems} bind:value={wvmValue} id="wvmInput"></Select>
                <input type="hidden" name="wvm" value={wvmValue.value}>
            </div>
            <div class="col-md-2">
                <label for="wvmidInput" class="form-label">WvmID</label>
                <input type="text" class="form-control" id="wvmidInput" name="wvmid" value="64f8366f6a92b0a27756bb6c">
            </div>
            <div class="col-md-2">
                <label for="eid" class="form-label">ElementID</label>
                <input type="text" class="form-control" id="eid" name="eid" value="dfc0766722250803423263f8">
            </div>
            <div class="col-md-2">
                <label for="SubResourceInput" class="form-label">SubResource</label>
                <input type="text" class="form-control" id="SubResourceInput" name="subresource">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label" for="requestTypeInput">Request Type</label>
                <Select items={reqTypeItems} bind:value={reqTypeValue} id="requestTypeInput"></Select>
                <input type="hidden" name="httpMethod" value={reqTypeValue.value}>
            </div>
            <div class="col">
                <label class="form-label" for="sendItBtn">&nbsp;</label>
                <button type="submit" class="btn btn-success d-block" id="sendItBtn">Send It</button>
                <!--                <div class="btn btn-success d-block">Send It</div>-->
            </div>

        </div>

        <div class="row">
            <div class="col">
                <label class="form-label" for="bodyInput">Body</label>
                <textarea class="form-control w-100 h-100" disabled={reqTypeValue.value=="get"} name="body" id="bodyInput">{`{}`}</textarea>
            </div>
            <div class="col" style="min-height: 60vh;">
                <label class="form-label" for="output">Output</label>
                <textarea class="form-control w-100 h-100" disabled bind:value={outputValue} id="output"></textarea>
            </div>
        </div>

    </div>
</form>

<style>

</style>
