import clsx from "clsx";
import { ModalWrapper } from "./modal-wrapper";
import { useModal } from "./modal.hook";

export const ModalContainer = () => {
  const modals = useModal();

  if (modals.size === 0) return null;

  return (
    <div className={clsx("dev-waca__react-modal--container-visible")}>
      {Array.from(modals.values()).map(
        ([Modal, { id, backgroundCloseable, props }]) => (
          <ModalWrapper
            key={id}
            id={id}
            backgroundCloseable={backgroundCloseable}
          >
            <Modal {...props} id={id} />
          </ModalWrapper>
        )
      )}
    </div>
  );
};
