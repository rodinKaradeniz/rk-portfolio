import { useSyncExternalStore } from "react";

// Tiny shared flag: true once the intro loader has been removed (or skipped)
let introDone = false;
const listeners = new Set();

export const markIntroDone = () => {
  if (introDone) return;
  introDone = true;
  listeners.forEach((listener) => listener());
};

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useIntroDone = () =>
  useSyncExternalStore(
    subscribe,
    () => introDone,
    () => false,
  );
