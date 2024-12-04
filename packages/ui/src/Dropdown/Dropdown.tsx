import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

import { containerStyle } from "@/Dropdown/Dropdown.style";
import Label from "@/Label/Label";

interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  label?: string;
}

const Dropdown = ({ children, label, ...props }: DropdownProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} css={containerStyle} {...props}>
      {label && <Label id={label}>{label}</Label>}
      {children}
    </div>
  );
};

export default forwardRef(Dropdown);
