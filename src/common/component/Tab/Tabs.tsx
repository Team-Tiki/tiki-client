import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface TabsProps extends ComponentPropsWithoutRef<'nav'> {
  children: ReactNode;
}

const Tabs = ({ children, ...props }: TabsProps) => {
  return <section {...props}>{children}</section>;
};

export default Tabs;
