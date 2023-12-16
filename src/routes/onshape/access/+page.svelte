<svelte:head>
    <title>Get access to Bionic Parts</title>
    <meta name="description" content="About this app"/>
</svelte:head>



<script lang="ts">
    // import {page} from "$app/stores";
    // import Select from 'svelte-select';

    // //bound to the text area
    // let outputValue = JSON.stringify($page.form, null, 4);

    // let resourceItems = ["documents", "metadata", "parts", "partstudios", "translation"].sort();//.map(i=>({value:i, label:i}))
    // let resourceValue = "parts";

    // let wvmItems = [
    //     {value: 'w', label: 'W'},
    //     {value: 'v', label: 'V'},
    //     {value: 'm', label: 'M'},
    // ];

    // let reqTypeItems = ["get", "post"];
    // let reqTypeValue = "get";

    // console.log('$page.url.searchParams', Array.from($page.url.searchParams.entries()));
    


    // const did = $page.url.searchParams.get('did') || "da2bc7f409791a8720b27217";
    // let wvmValue = $page.url.searchParams.get('wv') || "v";
    // const wvid = $page.url.searchParams.get('wvid') || "64f8366f6a92b0a27756bb6c";
    // const eid = $page.url.searchParams.get('eid') || "dfc0766722250803423263f8";
</script>

<form method="POST" action="?/access">
    <div class="container-fluid">
        

        <div class="row">


            <div class="col-md-2">
                <label for="did" class="form-label">Onshape User Email</label>
                <input type="email" class="form-control" id="email" name="email">
            </div>
 
        </div>
        <div class="row">

            <div class="col">
                <label class="form-label" for="sendItBtn">&nbsp;</label>
                <button type="submit" class="btn btn-success d-block" id="sendItBtn">Send It</button>
            </div>
    
        </div>

    </div>
</form>

<style>

</style>