<script>
    import Select from "svelte-select";

    const items = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    let typeValue = items[0];
</script>
<div class="container">
    <h1>Flash Message</h1>

    <form action="/flash" method="POST">
        <div class="mb-3">
            <label class="form-label">Type</label>
            <Select name="type" items={items} showChevron bind:value={typeValue}></Select>
        </div>
        <div class="mb-3">
            <label class="form-label">Message</label>
            <input class="form-control" type="text" name="message" value="test message">
        </div>

        <input type="submit" class="btn btn-primary">
    </form>

</div>