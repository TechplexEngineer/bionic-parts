import type {Action} from 'svelte/action';

export const click: Action<HTMLButtonElement> = ((node, callback) => {
    node.addEventListener('click', callback)
    node.addEventListener('keypress', callback)

    return {
        destroy() {
            node.removeEventListener('click', callback)
            node.removeEventListener('keypress', callback)
        }
    }
});