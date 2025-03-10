<script lang="ts">
	export let value: number | string;
	export let prefix: string = '';
	export let desc: string = '';
	export let color: string = 'rgb(13, 110, 253)';
</script>

<span class="text-center badge py-2" style="background-color: {color};">
	<div class="fs-4">{value}</div>
	<div class="mt-2 fw-lighter">{prefix}<br />{@html desc}</div>
</span>

<!-- h-auto p-2 flex flex-col justify-center items-center text-center rounded-lg -->

<style>
	.badge {
		width: 8rem;
		height: 72px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		border-radius: 0.5rem;
	}
</style>
