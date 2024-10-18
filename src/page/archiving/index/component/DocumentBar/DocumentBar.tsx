import { ForwardedRef, forwardRef, useState } from 'react';

import { Tab } from '@/common/component/Tab';

import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import Selected from '@/page/archiving/index/component/DocumentBar/Selected/Selected';
import Total from '@/page/archiving/index/component/DocumentBar/Total/Total';
import { Block } from '@/page/archiving/index/type/blockType';

interface DocumentBarProps {
  selectedBlock?: Block;
  onClose: () => void;
}

const DocumentBar = ({ selectedBlock, onClose }: DocumentBarProps, ref: ForwardedRef<HTMLDivElement>) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  return (
    <aside css={containerStyle(selectedBlock ? selectedBlock.name : '')} ref={ref}>
      <Tab>
        <Tab.List selectedTab={selectedTab} onTabClick={handleTabClick}>
          <Tab.Button>선택된 블록</Tab.Button>
          <Tab.Button>전체 문서</Tab.Button>
        </Tab.List>
        <Tab.Panel selectedTab={selectedTab}>
          {selectedBlock && <Selected selectedBlock={selectedBlock} onClose={onClose} />}
          <Total />
        </Tab.Panel>
      </Tab>
    </aside>
  );
};

export default forwardRef(DocumentBar);
