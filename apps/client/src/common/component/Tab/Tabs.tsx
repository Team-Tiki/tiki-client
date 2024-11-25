import { ComponentPropsWithoutRef } from 'react';

type TabsProps = ComponentPropsWithoutRef<'nav'>;

const Tabs = ({ children, ...props }: TabsProps) => {
  return <section {...props}>{children}</section>;
};

export default Tabs;
