import { HTMLAttributes, ReactNode } from 'react';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Menu = ({ children, ...props }: MenuProps) => {
  return <div {...props}>{children}</div>;
};

export default Menu;
