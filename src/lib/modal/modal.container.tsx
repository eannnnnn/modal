import clsx from "clsx";
import { ModalWrapper } from "./modal-wrapper";
import { useModal } from "./modal.hook";

export const ModalContainer = () => {
  const modals = useModal();

  return (
    <div
      className={clsx({
        "dev-waca__react-modal--container-visible": modals.size > 0,
        "dev-waca__react-modal--container-hidden": modals.size === 0,
      })}
    >
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
