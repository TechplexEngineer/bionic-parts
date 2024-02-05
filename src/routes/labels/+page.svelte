<script lang="ts">
    import { page } from '$app/stores';
	import QrCode from '../qrcode/QRCode.svelte';

    interface Item {
        name: string;
        partNumber?: string;
		vendor?: string;
        quantity: number;
    }

	const items: Item[] = [
    ];

    const itemsToReplicate: Item[] = [
        {
			name: `#9 Drill Bits [12 pk]`,
			partNumber: "DWDCO9P12",
			vendor: 'amz',
			quantity: 1
		},
		{
			name: `#9 Drill Bit Extended Length`,
			partNumber: '3096A319',
			vendor: 'mcm',
			quantity: 2
		},

		{
			name: `#7 Drill Bits [12 pk]`,
			partNumber: 'KFD7P12',
			vendor: 'amz',
			quantity: 1
		},
		{
			name: `#7 Drill Bit Extended Length`,
			partNumber: '3096A317',
			quantity: 2
		},

		{
			name: `#21 Drill Bits [12 pk]`,
			partNumber: 'KFD21P12',
			vendor: 'amz',
			quantity: 1
		},
		{
			name: `#21 Drill Bit Extended Length`,
			partNumber: '3096A333',
			vendor: 'mcm',
			quantity: 2
		},

		{
			name: `F Drill Bits [12 pk]`,
			partNumber: 'KFDFP12',
			vendor: 'amz',
			quantity: 1
		},
		{
			name: `F Drill Bit Extended Length`,
			vendor: 'mcm',
			partNumber: '3110A56',
			quantity: 2
		}
        
    ];

    for (const item of itemsToReplicate) {
        for (let i = 0; i < 3; i++) {
            items.push(item);
        }
        
    }

	// for (let i = 0; i < 35; i++) {
	// 	items.push({
	// 		name: `Item ${i}`,
	// 		partNumber: '12345',
	// 		quantity: 1
	// 	});
	// }
	// console.log('items', Math.ceil(items.length / 30));

    const buildUrl = (item: Item, currentUrl: URL) => {
        
        const address = new URL(currentUrl.origin + "/order");
        address.searchParams.append("i", item.name);
        item.partNumber && address.searchParams.append("pn", item.partNumber);
		item.vendor && address.searchParams.append("v", item.vendor);
        address.searchParams.append("q", item.quantity.toString());
        return address.toString();
    }
</script>

{#each [...Array(Math.ceil(items.length / 30)).keys()] as pageIdx}
	<div class="page">
		{#each items.slice(pageIdx * 30, (pageIdx + 1) * 30) as item}
			<div class="label justify-content-between">

				<div class="vert-center me-2 flex-grow-1 align-self-center">
                    <span class="fw-bold">{item.name}</span>
                    <br>
                    <span class="fw-lighter">Add to Order Sheet</span>
				</div>
                <a class="qrcode align-self-center" href={buildUrl(item, $page.url)} target="_blank">
                    <QrCode value={buildUrl(item, $page.url)} />
                </a>
        
			</div>
		{/each}
		<div class="page-break" />
	</div>
{/each}

<style lang="scss">
	.qrcode {
		width: .6in;
        min-width: .6in;
        
		// float: right;
	}

	// Avery 5160 labels
	// Dimensions per: https://www.worldlabel.com/Templates/wl-ol875Word.htm
	.page {
		display: grid;
		grid-template-columns: 2.625in 2.625in 2.625in;
		grid-column-gap: 0.14in;

		width: 8.5in; // paper width
		padding-top: 0.5in; //Top Margin
		padding-bottom: 0.5in; //Top Margin
		padding-left: 0.21975in; //Side Margin
		// outline: 1px dotted;
	}

	.label {
		box-sizing: border-box;
		/* Avery 5160 labels */
		width: 2.625in; // Label Width
		height: 1in; //Label Height

		float: left;

		// text-align: center;
		overflow: hidden;

		outline: 1px dotted; //outline doesn't occupy space like border does

		// align-items: center;
		// justify-content: center;

		display: flex;
		border-radius: 0.125in;

        padding: .1in;
	}

	.vert-center {
		display: inline-block;
		vertical-align: middle;
		// line-height: normal;
	}

	.page-break {
		clear: left;
		display: block;
		page-break-after: always;
	}
</style>
