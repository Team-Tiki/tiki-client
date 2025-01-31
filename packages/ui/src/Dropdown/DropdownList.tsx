import { ComponentPropsWithoutRef } from "react";

import { listStyle } from "@/Dropdown/Dropdown.style";
import { useDropdownContext } from "@/Dropdown/context";

type DropdownListProps = ComponentPropsWithoutRef<"ul">;

const DropdownList = ({ children, ...props }: DropdownListProps) => {
  const { isOpen } = useDropdownContext();

  return (
    isOpen && (
      <ul css={listStyle} {...props}>
        {children}
      </ul>
    )
  );
};

export default DropdownList;
