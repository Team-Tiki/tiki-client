import { backgroundStyle, dialogStyle } from "@/Modal/Modal.style";
import { ReactNode, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
}

const ModalWrapper = ({ isOpen, children, onClose }: ModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      const widthWithoutScrollbar = document.body.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.maxWidth = `${widthWithoutScrollbar}px`;

      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.maxWidth = "100vw";

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    isOpen &&
    createPortal(
      <>
        <div aria-hidden={true} onClick={() => onClose?.()} css={backgroundStyle} />
        <dialog onClick={(e) => e.stopPropagation()} css={dialogStyle}>
          {children}
        </dialog>
      </>,
      document.body,
    )
  );
};

export default ModalWrapper;
