import { HTMLAttributes, ReactNode, forwardRef } from "react";

import { useOutsideClick } from "@tiki/utils";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  onClose: () => void;
}

const Menu = ({ children, onClose, ...props }: MenuProps) => {
  const ref = useOutsideClick(onClose);

  return (
    <div ref={ref} css={{ position: "relative" }} {...props}>
      {children}
    </div>
  );
};

export default forwardRef(Menu);
