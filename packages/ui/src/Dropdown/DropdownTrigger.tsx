import { useDropdownContext } from "@/Dropdown/context";
import { Children, cloneElement, isValidElement, PropsWithChildren, ReactElement } from "react";

type DropdownTriggerProps = PropsWithChildren & {
  variant?: "button" | "input";
};

const DropdownTrigger = ({ variant = "button", children }: DropdownTriggerProps) => {
  const { isOpen, toggle, open, close } = useDropdownContext();

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          switch (variant) {
            case "button": {
              return cloneElement(child as ReactElement, {
                isOpen,
                onClick: toggle,
              });
            }
            case "input": {
              return cloneElement(child as ReactElement, {
                isOpen,
                onFocus: open,
                onBlur: () => setTimeout(close, 0),
              });
            }
          }
        }
      })}
    </>
  );
};

export default DropdownTrigger;
