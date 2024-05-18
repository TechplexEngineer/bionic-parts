<script lang="ts">
    import type { PageData } from './$types';
    import Navbar from '$lib/Navbar.svelte';
    
    export let data: PageData;

    let labelChoices = [
        {
            name: 'Address Label [1-1/8" x 3-1/2"]',
            width: 1.125,
            height: 3.5,
            sku: '30252'
        },
        {
            name: 'File Folder Labels (2-Up) [9/16" x 3-7/16"]',
            width: 0.5625,
            height: 3.4375,
            twoUp: true,
            sku: '30277',
        },
        {
            name: 'White Shipping Labels [2 1/8" x 4"]',
            width: 2.125,
            height: 4,
            sku: '30323'
        }
    ]
</script>

<Navbar/>