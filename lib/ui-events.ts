// Tiny event bus so server-rendered buttons can open client-side UI (sheet, menu)
// without a global store or a context provider.

export type UiEvent = "open-lead" | "open-menu" | "menu-state";

export function emit(name: UiEvent, detail?: unknown): void {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

export function on(name: UiEvent, fn: (detail: unknown) => void): () => void {
  const handler = (e: Event) => fn((e as CustomEvent).detail);
  window.addEventListener(name, handler);
  return () => window.removeEventListener(name, handler);
}
