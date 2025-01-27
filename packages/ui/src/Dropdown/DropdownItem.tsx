import { ComponentPropsWithoutRef } from "react";

import { itemStyle } from "@/Dropdown/Dropdown.style";
import { useDropdownContext } from "@/Dropdown/context";

interface DropdownItemProps extends ComponentPropsWithoutRef<"li"> {
  onSelect?: () => void;
}

/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
const DropdownItem = ({ onSelect, children, ...props }: DropdownItemProps) => {
  const { close } = useDropdownContext();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter") {
      onSelect?.();

      close();
    }
  };

  return (
    <li
      css={itemStyle}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={() => {
        onSelect?.();
        close();
      }}
      {...props}
    >
      {children}
    </li>
  );
};

export default DropdownItem;
