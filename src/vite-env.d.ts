/// <reference types="vite/client" />

declare global {
  interface WindowEventMap {
    keydown: KeyboardEvent;
  }
}
