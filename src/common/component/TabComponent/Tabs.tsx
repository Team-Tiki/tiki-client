import { ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return <nav>{children}</nav>;
};

export default Tabs;
