import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/index/component/DocumentBarTab/DocumentBarTab';
import SelectedBlock from '@/page/archiving/index/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/index/component/TotalDocument/TotalDocument';
import { Block } from '@/page/archiving/index/type/blockType';

import { ForwardedRef, forwardRef, useState } from 'react';

import Tab from '@/common/component/TabComponent/Tab';
import TabList from '@/common/component/TabComponent/TabList';
import TabPanel from '@/common/component/TabComponent/TabPanel';
import Tabs from '@/common/component/TabComponent/Tabs';

interface DocumentBarProps {
  selectedBlock?: Block;
  selectedId: string;
  onClickClose: () => void;
}

const DocumentBar = (
  { selectedBlock, selectedId, onClickClose }: DocumentBarProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <aside css={containerStyle(selectedBlock ? selectedBlock.name : '')} ref={ref}>
      <Tabs>
        <TabList>
          <Tab tabId={0} selectedTab={selectedTab} onTabClick={setSelectedTab}>
            선택된 블록
          </Tab>
          <Tab tabId={1} selectedTab={selectedTab} onTabClick={setSelectedTab}>
            전체 문서
          </Tab>
        </TabList>
        <TabPanel selectedTab={selectedTab}>
          {selectedBlock && (
            <SelectedBlock
              selectedId={selectedId}
              blockName={selectedBlock.name}
              selectedBlock={selectedBlock}
              onClickClose={onClickClose}
            />
          )}
          <TotalDocument selectedId={selectedId} />
        </TabPanel>
      </Tabs>
    </aside>
  );
};

export default forwardRef(DocumentBar);
