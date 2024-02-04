<script>
    import '../app.scss';

    import {initFlash} from 'sveltekit-flash-message/client';
    import {page} from '$app/stores';

    const flash = initFlash(page);
</script>

{#if $flash}
	{@const flashClass = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes($flash.type) ? `alert-${$flash.type}` : 'alert-primary'}
	<div class="alert {flashClass} m-2" role="alert">
		{$flash.message}
	</div>
{/if}
<slot/>

<style>
    :global(body) {
        --color-bg-0: rgb(202, 216, 228);
        --color-bg-1: hsl(209, 36%, 86%);
        --color-bg-2: hsl(224, 44%, 95%);
        background-attachment: fixed;
        background-color: var(--color-bg-1);
        background-size: 100vw 100vh;
        background-image: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, .75) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
    }
</style>
