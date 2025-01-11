/* eslint-disable react-hooks/exhaustive-deps */
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { containerStyle } from "@/Toast/Toast.style";
import { Timeout } from "@/types";
import { IcCaution, IcSuccess } from "@tiki/icon";

export interface ToastProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "error" | "success" | "default";
  showDuration?: number;
  onClose?: () => void;
}

const Toast = ({ variant, children, showDuration = 3000, onClose, ...props }: ToastProps) => {
  const [isRendered, setIsRendered] = useState(true);
  const [isShown, setIsShown] = useState(true);

  const showRef = useRef<Timeout>();
  const hideRef = useRef<Timeout>();

  const Icon = () => {
    if (variant === "error") return <IcCaution width={16} height={16} />;
    if (variant === "success") return <IcSuccess width={16} height={16} />;
    return null;
  };

  const handleHide = () => {
    hideRef.current = setTimeout(() => {
      setIsRendered(false);

      onClose?.();

      clearTimeout(showRef.current);
    }, 600);
  };

  useEffect(() => {
    showRef.current = setTimeout(() => {
      setIsShown(false);

      handleHide();
    }, showDuration);

    return () => clearTimeout(hideRef.current);
  }, [showDuration]);

  return (
    isRendered &&
    createPortal(
      <div role="alert" aria-live="assertive" css={containerStyle(isShown)} {...props}>
        <span>{children}</span>
        <Icon />
      </div>,
      document.getElementById("toast-container") as Element
    )
  );
};

export default Toast;
