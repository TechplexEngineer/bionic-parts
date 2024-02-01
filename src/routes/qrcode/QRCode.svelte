<script lang="ts">
  import { onMount } from 'svelte';
  import QRcode from 'qrcode'


  export let errorCorrection = "L";
  export let background = "#fff";
  export let color = "#000";
  export let size = "200";
  export let value = "";
  export let padding = 0;
  export let className = "qrcode";

  async function generateQrCode(value: string) {    
    return await QRcode.toDataURL(value);
  }

  $: generateQrCode(value);
    
  onMount(() => {
    generateQrCode(value);
  });

</script>

{#await generateQrCode(value)}
	<p>...waiting</p>
{:then dataUrl}
	<img src={dataUrl} alt={value} class={className}/>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
