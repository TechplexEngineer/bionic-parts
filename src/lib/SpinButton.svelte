<script lang="ts">/**
 * ClickHandler expects a function which returns a promise.
 * While waiting for the promise to resolve a loader is shown on the button.
 * @param evt
 */
function toClassName(value) {
    let result = '';

    if (typeof value === 'string' || typeof value === 'number') {
      result += value;
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        result = value.map(toClassName).filter(Boolean).join(' ');
      } else {
        for (const key in value) {
          if (value[key]) {
            result && (result += ' ');
            result += key;
          }
        }
      }
    }

    return result;
  }
function classnames(...args): string {
    return args.map(toClassName).filter(Boolean).join(' ');
  }

export let onClick = async function (evt): Promise<void> {
    return;
}

let className = '';
export {className as class};

$: classes = classnames(
    className,
    'btn',
    'align-middle'
);


// internal component state
let isLoading = false;

async function onClickWrap(evt) {
    if (typeof onClick !== 'function') {
        console.warn("clickHandler should be a function")
    }
    isLoading = true;
    await onClick(evt);
    isLoading = false;
}
</script>


<button class={classes} class:disabled={isLoading} on:click={onClickWrap}>
    <slot>Button Name Slot</slot>
    {#if isLoading}
        <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    {/if}
</button>