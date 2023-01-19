export const MODAL_EVENT_TYPE = {
  OPEN: "@dev.waca/modal/open",
  CLOSE: "@dev.waca/modal/close",
  CLEAR: "@dev.waca/modal/clear",
} as const;

export type MODAL_EVENT_TYPE =
  typeof MODAL_EVENT_TYPE[keyof typeof MODAL_EVENT_TYPE];
