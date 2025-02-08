<script lang="ts">
	import KanbanCard from './KanbanCard.svelte';
    import * as XLSX from 'xlsx';
  

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

    const numPerPage = 2;

    const fileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			const data = e.target.result;
			const workbook = XLSX.read(data, { type: 'binary' });
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];
			const rows = XLSX.utils.sheet_to_json(sheet);

			cards = rows.map(r => {
				return {
					name: r['Product Name'],
					desc: r['Description'],
					pn: r['Part Number'],
					minQty: r['Reorder Point'],
					reorderQty: r['Reorder QTY'],
					location: r['Location'],
					department: r['Department'],
					img: r['Image Link'],
					link: r['Product Link'],
					rev: r['Revision Number'],
					revDate: r['Revision Date']
				};
			})

			console.log();
		};
		reader.readAsArrayBuffer(file);
	};
</script>

<div class="no-print">
	<div class="mb-3">
		<label for="formFile" class="form-label">Upload a CSV or XLSX</label>
		<input class="form-control" type="file" id="formFile" on:change={fileChange} />
	</div>
</div>

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
		.no-print, .no-print *
		{
			display: none !important;
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
