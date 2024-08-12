import { useState } from 'react';

export const useTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return { state: selectedTab, setState: setSelectedTab };
};
