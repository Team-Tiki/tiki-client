import { createContext, useContext } from "react";

export const useDropdownContext = () => {
  const ctx = useContext(DropdownContext);

  if (ctx === undefined) throw new Error("it should be under dropdown provider");

  return ctx;
};

type DropdownContextProps = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
};

export const DropdownContext = createContext<DropdownContextProps>({} as DropdownContextProps);
