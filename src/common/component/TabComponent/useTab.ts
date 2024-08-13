import { useState } from 'react';

export const useTab = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  //   const handleTab = (tabId: number) => {
  //     setSelectedTab(tabId)
  //   };
  return { selectedTab, setSelectedTab };
  //   return { state: selectedTab, setState: setSelectedTab };
};
