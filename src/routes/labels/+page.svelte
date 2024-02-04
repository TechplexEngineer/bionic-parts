
<div class="page">
    {#each Array(30) as _}
        <div class="label">
            <div class="inner">
                Human readable
            </div>
        </div>
    {/each}
    <div class="page-break" />
</div>

<style lang="scss">
    // Avery 5160 labels
    // Dimensions per: https://www.worldlabel.com/Templates/wl-ol875Word.htm
	.page {
        display: grid;
        grid-template-columns: 2.625in 2.625in 2.625in;
        grid-column-gap: 0.14in;

		width: 8.5in; // paper width
		padding-top: .5in; //Top Margin
        padding-bottom: .5in; //Top Margin
        padding-left: .21975in; //Side Margin
        outline: 1px dotted;
	}

    
	.label {
		/* Avery 5160 labels */
		width: 2.625in; // Label Width
		height: 1in; //Label Height

        /*Horizontal Gap*/
		// margin-right: 0.14in;
		
        

		float: left;

		text-align: center;
		overflow: hidden;

		outline: 1px dotted;
		/* outline doesn't occupy space like border does */
	}

	.page-break {
		clear: left;
		display: block;
		page-break-after: always;
	}

	.inner {
		display: inline-block;
		vertical-align: middle;
		line-height: normal;
	}
</style>
