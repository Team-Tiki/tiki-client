import { ComponentPropsWithoutRef } from "react";

import { DropdownContext } from "@/Dropdown/context";
import { containerStyle } from "@/Dropdown/Dropdown.style";
import Label from "@/Label/Label";
import { useOutsideClick, useOverlay } from "@tiki/utils";

interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  label?: string;
}

const Dropdown = ({ children, label, ...props }: DropdownProps) => {
  const { isOpen, close, open, toggle } = useOverlay();

  const ref = useOutsideClick(close);

  return (
    <DropdownContext.Provider value={{ open, close, toggle, isOpen }}>
      <div ref={ref} css={containerStyle} {...props}>
        {label && <Label id={label}>{label}</Label>}
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
