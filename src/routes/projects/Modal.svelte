<script lang="ts">
    export let header = 'Modal title';
    export let isOpen = false;
    export let toggle = () => {
        isOpen = !isOpen;
    }
    export let backdrop = true;
</script>

<div class="modal fade" class:show={isOpen} class:d-block={isOpen} id="exampleModal" tabindex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <slot name="header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{header}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            on:click={toggle}></button>
                </slot>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <button type="button" class="btn btn-secondary" on:click={toggle}>Close</button>
                </slot>
            </div>
        </div>
    </div>
</div>
{#if backdrop && isOpen}
    <div class="modal-backdrop fade show"></div>
{/if}