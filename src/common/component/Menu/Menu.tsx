import { ReactNode } from 'react';

export interface MenuProps {
  children: ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  return <div>{children}</div>;
};

export default Menu;
