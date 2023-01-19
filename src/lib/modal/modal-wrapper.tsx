import React, { PropsWithChildren } from "react";
import modal from "..";
import { NotPropsModal } from "./@type";

const onClick = (e: React.MouseEvent) => {
  e.stopPropagation();
};

export const ModalWrapper = ({
  children,
  id,
  backgroundCloseable,
}: PropsWithChildren<Pick<NotPropsModal, "id" | "backgroundCloseable">>) => {
  const onBackgroundClick = (e: React.MouseEvent) => {
    if (backgroundCloseable) {
      modal.close(id);
    }
  };
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onBackgroundClick}
    >
      <div style={{ display: "contents" }} onClick={onClick}>
        {children}
      </div>
    </div>
  );
};
