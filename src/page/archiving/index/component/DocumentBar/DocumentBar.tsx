import { ForwardedRef, forwardRef, useState } from 'react';

import { Tab } from '@/common/component/Tab';

import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import SelectedBlock from '@/page/archiving/index/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/index/component/TotalDocument/TotalDocument';
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
          {selectedBlock && <SelectedBlock selectedBlock={selectedBlock} onClose={onClose} />}
          <TotalDocument />
        </Tab.Panel>
      </Tab>
    </aside>
  );
};

export default forwardRef(DocumentBar);
