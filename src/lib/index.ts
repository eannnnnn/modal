import { eventUtil } from "./event";
import "./index.css";
import type { Modal, ModalRoot as _ModalRoot } from "./modal/@type";
import { MODAL_EVENT_TYPE } from "./modal/modal.const";

const modal: Modal = {
  open(component, ...args) {
    const option = args[0];
    const id = option?.id ?? Math.floor(Math.random() * 100000).toString(16);
    eventUtil.emit(MODAL_EVENT_TYPE.OPEN, component, { ...option, id });
    return id;
  },
  close(id?: string) {
    eventUtil.emit(MODAL_EVENT_TYPE.CLOSE, id);
  },
  clear() {
    eventUtil.emit(MODAL_EVENT_TYPE.CLEAR);
  },
};

export default modal as Modal;
export type ModalRoot<T = any> = _ModalRoot<T>;
export { ModalContainer } from "./modal/modal.container";
