<script lang="ts">
    import { page } from '$app/stores';
	import { links } from '../l/links';
	import QrCode from '../qrcode/QRCode.svelte';
	import {buildShortLinkUrl} from '../l/links';

    interface Item {
        name: string;
        partNumber?: string;
		vendor?: string;
        quantity: number;
		location?: string;
    }



    const items: Item[] = [
        {
			name: `#9 Drill Bits [12 pk]`,
			partNumber: "DWDCO9P12",
			vendor: 'amz',
			quantity: 1,
			location: "Husky Tool Box"
		},
		{
			name: `#9 Drill Bit Extended Length`,
			partNumber: '3096A319',
			vendor: 'mcm',
			quantity: 2,
			location: "Husky Tool Box"
		},

		{
			name: `#7 Drill Bits [12 pk]`,
			partNumber: 'KFD7P12',
			vendor: 'amz',
			quantity: 1,
			location: "Husky Tool Box"
		},
		{
			name: `#7 Drill Bit Extended Length`,
			partNumber: '3096A317',
			quantity: 2,
			location: "Husky Tool Box"
		},

		{
			name: `#21 Drill Bits [12 pk]`,
			partNumber: 'KFD21P12',
			vendor: 'amz',
			quantity: 1,
			location: "Husky Tool Box"
		},
		{
			name: `#21 Drill Bit Extended Length`,
			partNumber: '3096A333',
			vendor: 'mcm',
			quantity: 2,
			location: "Husky Tool Box"
		},

		{
			name: `F Drill Bits [12 pk]`,
			partNumber: 'KFDFP12',
			vendor: 'amz',
			quantity: 1,
			location: "Husky Tool Box"
		},
		{
			name: `F Drill Bit Extended Length`,
			vendor: 'mcm',
			partNumber: '3110A56',
			quantity: 2,
			location: "Husky Tool Box"
		}
        
    ];

    const buildOrderUrl = (item: Item, currentUrl: URL) => {
        
        const address = new URL(currentUrl.origin + "/order");
        address.searchParams.append("i", item.name);
        item.partNumber && address.searchParams.append("pn", item.partNumber);
		item.vendor && address.searchParams.append("v", item.vendor);
        address.searchParams.append("q", item.quantity.toString());
        return address.toString();
    }

	const labels: {title: string, subtitle?: string, qrCodeValue?: string}[] = [
		// {
		// 	title: "",
		// 	subtitle: "",
		// 	qrCodeValue: ""
		// }
	];
	for (const item of items) {
		labels.push({
			title: item.name,
			subtitle: `Add to Order Sheet`,
			qrCodeValue: buildOrderUrl(item, $page.url)
		});
		if (item.location) {
			labels.push({
				title: item.name,
				subtitle: `Restock From ${item.location}`,
				qrCodeValue: undefined //buildOrderUrl(item, $page.url)
			});
		}
	}

	for (const [key, {title, link, desc}] of Object.entries(links)) {
		labels.push({
			title: title || "",
			subtitle: desc,
			qrCodeValue: buildShortLinkUrl(key, $page.url)
		});
		
	}
</script>

{#each [...Array(Math.ceil(labels.length / 30)).keys()] as pageIdx}
	<div class="page">
		{#each labels.slice(pageIdx * 30, (pageIdx + 1) * 30) as item}
			<div class="label justify-content-between">

				<div class="vert-center me-2 flex-grow-1 align-self-center">
                    <span class="fw-bold">{@html item.title}</span>
					{#if item.subtitle}
                    <br>
                    <span class="fw-lighter">{item.subtitle}</span>
					{/if}
				</div>
				{#if item.qrCodeValue}
                <a class="qrcode align-self-center" href={item.qrCodeValue} target="_blank">
                    <QrCode value={item.qrCodeValue} />
                </a>
				{/if}
        
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
