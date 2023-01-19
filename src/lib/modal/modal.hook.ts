import React, {
  useEffect,
  useLayoutEffect as _useLayoutEffect,
  useState,
} from "react";
import { ModalRoot } from "..";
import { eventUtil } from "../event";
import { NotPropsModal } from "./@type";
import { MODAL_EVENT_TYPE } from "./modal.const";

const isSSR = typeof window === "undefined";
const useLayoutEffect = isSSR ? useEffect : _useLayoutEffect;
export const useModal = () => {
  const [modals, setModals] = useState(
    new Map<string, [React.FC, NotPropsModal & { props?: any }]>([])
  );

  useLayoutEffect(() => {
    const onOpen = ([component, option]: [ModalRoot, NotPropsModal]) => {
      setModals((prev) => new Map(prev).set(option.id!, [component, option]));
      option.onOpen?.();
    };
    const onClose = ([id]: [string?]) => {
      setModals((prev) => {
        const lastIndex = prev.size - 1;
        const modalId = id ?? Array.from(prev.keys())[lastIndex];
        prev.get(modalId)?.[1].onClose?.();
        const newModals = new Map(prev);
        newModals.delete(modalId);
        return newModals;
      });
    };
    const onClear = () => {
      setModals(() => new Map());
    };

    eventUtil
      .on(MODAL_EVENT_TYPE.OPEN, onOpen)
      .on(MODAL_EVENT_TYPE.CLOSE, onClose)
      .on(MODAL_EVENT_TYPE.CLEAR, onClear);
    return () => {
      onClear();
      eventUtil
        .off(MODAL_EVENT_TYPE.OPEN, onOpen)
        .off(MODAL_EVENT_TYPE.CLOSE, onClose)
        .off(MODAL_EVENT_TYPE.CLEAR, onClear);
    };
  }, []);

  return modals;
};
