import { ForwardedRef, forwardRef, useState } from 'react';

import Tab from '@/common/component/Tabs/Tab';
import TabList from '@/common/component/Tabs/TabList';
import TabPanel from '@/common/component/Tabs/TabPanel';
import Tabs from '@/common/component/Tabs/Tabs';

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
  return (
    <aside css={containerStyle(selectedBlock ? selectedBlock.name : '')} ref={ref}>
      <Tabs>
        <TabList>
          <Tab selectedTab={selectedTab} onTabClick={setSelectedTab}>
            선택된 블록
          </Tab>
          <Tab selectedTab={selectedTab} onTabClick={setSelectedTab}>
            전체 문서
          </Tab>
        </TabList>
        <TabPanel selectedTab={selectedTab}>
          {selectedBlock && <SelectedBlock selectedBlock={selectedBlock} onClose={onClose} />}
          <TotalDocument />
        </TabPanel>
      </Tabs>
    </aside>
  );
};

export default forwardRef(DocumentBar);
