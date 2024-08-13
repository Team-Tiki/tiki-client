import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface TabsProps extends ComponentPropsWithoutRef<'nav'> {
  children: ReactNode;
}

const Tabs = ({ children, ...props }: TabsProps) => {
  return <nav {...props}>{children}</nav>;
};

export default Tabs;
