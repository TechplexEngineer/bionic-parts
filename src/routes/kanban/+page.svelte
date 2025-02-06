<script lang="ts">
    import { page } from '$app/stores';
	import { links } from '../l/links';
	import QrCode from '../qrcode/QRCode.svelte';
	import {buildShortLinkUrl} from '../l/links';
	import KanbanCard from './KanbanCard.svelte';

    // interface Item {
    //     name: string;
    //     partNumber?: string;
	// 	vendor?: string;
    //     quantity: number;
	// 	location?: string;
    // }



    // const items: Item[] = [
    //     {
	// 		name: `#9 Drill Bits [12 pk]`,
	// 		partNumber: "DWDCO9P12",
	// 		vendor: 'amz',
	// 		quantity: 1,
	// 		location: "Husky Tool Box"
	// 	},
	// 	{
	// 		name: `#9 Drill Bit Extended Length`,
	// 		partNumber: '3096A319',
	// 		vendor: 'mcm',
	// 		quantity: 2,
	// 		location: "Husky Tool Box"
	// 	},

	// 	{
	// 		name: `#7 Drill Bits [12 pk]`,
	// 		partNumber: 'KFD7P12',
	// 		vendor: 'amz',
	// 		quantity: 1,
	// 		location: "Husky Tool Box"
	// 	},
	// 	{
	// 		name: `#7 Drill Bit Extended Length`,
	// 		partNumber: '3096A317',
	// 		quantity: 2,
	// 		location: "Husky Tool Box"
	// 	},

	// 	{
	// 		name: `#21 Drill Bits [12 pk]`,
	// 		partNumber: 'KFD21P12',
	// 		vendor: 'amz',
	// 		quantity: 1,
	// 		location: "Husky Tool Box"
	// 	},
	// 	{
	// 		name: `#21 Drill Bit Extended Length`,
	// 		partNumber: '3096A333',
	// 		vendor: 'mcm',
	// 		quantity: 2,
	// 		location: "Husky Tool Box"
	// 	},

	// 	{
	// 		name: `F Drill Bits [12 pk]`,
	// 		partNumber: 'KFDFP12',
	// 		vendor: 'amz',
	// 		quantity: 1,
	// 		location: "Husky Tool Box"
	// 	},
	// 	{
	// 		name: `F Drill Bit Extended Length`,
	// 		vendor: 'mcm',
	// 		partNumber: '3110A56',
	// 		quantity: 2,
	// 		location: "Husky Tool Box"
	// 	}
        
    // ];

    let cards = [
		{
			name: `4" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 4" Inch Long - UV Resistant Nylon - 18 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct208`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-C',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/ct208-kable-kontrol-4-inch-18-lbs-black-cable-ties.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=15',
			rev: '1',
			revDate: '2 Feb 25'
		},
		{
			name: `8" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 8" Inch Long - UV Resistant Nylon - 50 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct209`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-B',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/kable-kontrol-black-cable-zip-ties-ct209-1.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=54',
			rev: '1',
			revDate: '2 Feb 25'
		},{
			name: `4" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 4" Inch Long - UV Resistant Nylon - 18 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct208`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-C',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/ct208-kable-kontrol-4-inch-18-lbs-black-cable-ties.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=15',
			rev: '1',
			revDate: '2 Feb 25'
		},
		{
			name: `8" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 8" Inch Long - UV Resistant Nylon - 50 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct209`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-B',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/kable-kontrol-black-cable-zip-ties-ct209-1.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=54',
			rev: '1',
			revDate: '2 Feb 25'
		},{
			name: `4" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 4" Inch Long - UV Resistant Nylon - 18 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct208`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-C',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/ct208-kable-kontrol-4-inch-18-lbs-black-cable-ties.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=15',
			rev: '1',
			revDate: '2 Feb 25'
		},
		{
			name: `8" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 8" Inch Long - UV Resistant Nylon - 50 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct209`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-B',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/kable-kontrol-black-cable-zip-ties-ct209-1.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=54',
			rev: '1',
			revDate: '2 Feb 25'
		},{
			name: `4" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 4" Inch Long - UV Resistant Nylon - 18 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct208`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-C',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/ct208-kable-kontrol-4-inch-18-lbs-black-cable-ties.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=15',
			rev: '1',
			revDate: '2 Feb 25'
		},
		{
			name: `8" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 8" Inch Long - UV Resistant Nylon - 50 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct209`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-B',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/kable-kontrol-black-cable-zip-ties-ct209-1.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=54',
			rev: '1',
			revDate: '2 Feb 25'
		}
	];

    // const buildOrderUrl = (item: Item, currentUrl: URL) => {
        
    //     const address = new URL(currentUrl.origin + "/order");
    //     address.searchParams.append("i", item.name);
    //     item.partNumber && address.searchParams.append("pn", item.partNumber);
	// 	item.vendor && address.searchParams.append("v", item.vendor);
    //     address.searchParams.append("q", item.quantity.toString());
    //     return address.toString();
    // }

	// const labels: {title: string, subtitle?: string, qrCodeValue?: string}[] = [
	// 	// {
	// 	// 	title: "",
	// 	// 	subtitle: "",
	// 	// 	qrCodeValue: ""
	// 	// }
	// ];
	// for (const item of items) {
	// 	labels.push({
	// 		title: item.name,
	// 		subtitle: `Add to Order Sheet`,
	// 		qrCodeValue: buildOrderUrl(item, $page.url)
	// 	});
	// 	if (item.location) {
	// 		labels.push({
	// 			title: item.name,
	// 			subtitle: `Restock From ${item.location}`,
	// 			qrCodeValue: undefined //buildOrderUrl(item, $page.url)
	// 		});
	// 	}
	// }

	// for (const [key, {title, link, desc}] of Object.entries(links)) {
	// 	labels.push({
	// 		title: title || "",
	// 		subtitle: desc,
	// 		qrCodeValue: buildShortLinkUrl(key, $page.url)
	// 	});
		
	// }

    const numPerPage = 2;
</script>

{#each [...Array(Math.ceil(cards.length / numPerPage)).keys()] as pageIdx}
	<div class="page">
		{#each cards.slice(pageIdx * numPerPage, (pageIdx + 1) * numPerPage) as card}
			<div class="label">
                <KanbanCard card={card} />

			</div>
		{/each}
		
	</div>
{/each}

<style lang="scss">

	.page {
		// display: grid;
		// grid-template-columns: 4in 4in;
		// grid-column-gap: 0.14in;

		width: 8.5in; // paper width
		padding-top: 0.5in; //Top Margin
		padding-bottom: 0.5in; //Top Margin
		padding-left: 0.21975in; //Side Margin
		outline: 1px dotted;

        break-inside: avoid;
	}

    @media print {
        .page {
            outline: none;
        }
    }

	.label {
        display: inline-block;
		box-sizing: border-box;
		
		// width: 4in; // Label Width
		// height: 6in; //Label Height

		outline: 1px dotted; //outline doesn't occupy space like border does
        border-radius: 5px;
        margin-right: 10px;
	}

    // .page:first-child .label {
    //     margin-left: -5px;
    // }

	.vert-center {
		display: inline-block;
		vertical-align: middle;
		// line-height: normal;
	}

    // .qrcode {
	// 	width: .6in;
    //     min-width: .6in;
        
	// 	// float: right;
	// }

    
</style>
