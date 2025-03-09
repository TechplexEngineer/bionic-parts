import { persisted } from 'svelte-persisted-store'

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const preferences = persisted('preferences', {
   teamNumber: 4909,
   eventKey: "",
   updateIntervalMs: 30 * 1000
});