import { signal, computed } from "@preact/signals";

export const foundStates = signal([]);

export const numberOfStates = computed(() => {
  return foundStates.value.length;
})