import { useDropdownContext } from "@/Dropdown/context";
import { Children, cloneElement, isValidElement, PropsWithChildren, ReactElement } from "react";

type DropdownTriggerProps = PropsWithChildren;

const DropdownTrigger = ({ children }: DropdownTriggerProps) => {
  const { isOpen, toggle } = useDropdownContext();

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement, {
            isOpen,
            onClick: toggle,
          });
        }
      })}
    </>
  );
};

export default DropdownTrigger;
