import { ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return <aside>{children}</aside>;
};

export default Tabs;
