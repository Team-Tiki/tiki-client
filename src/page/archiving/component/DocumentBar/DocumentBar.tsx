import { containerStyle, documentListStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarInfo from '@/page/archiving/component/DocumentBar/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTab from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab';
import DocumentItem from '@/page/archiving/component/DocumentBar/DocumentItem/DocumentItem';
import { BLOCK_TEST_DATA } from '@/page/archiving/component/DocumentBar/constant';

import { useState } from 'react';

import Flex from '@/common/component/Flex/Flex';

const DocumentBar = () => {
  const [selectedId, setSelectedId] = useState('selected');

  const handleTabClick = (selectedId: string, tabId: string) => {
    console.log(selectedId);
    tabId !== selectedId && setSelectedId(tabId);
  };

  // 목업 데이터
  const blockData = BLOCK_TEST_DATA;

  return (
    <aside css={containerStyle}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      <Flex styles={{ direction: 'column', align: 'center', padding: '2.4rem 1.6rem 0 2.4rem' }}>
        <DocumentBarInfo blockName={blockData.title} startDate={blockData.startDate} endDate={blockData.endDate} />
        <ul css={documentListStyle}>
          {blockData.filesUrl.map((data) => (
            <DocumentItem selectedId={selectedId} blockName={blockData.title}>
              {data.fileName}
            </DocumentItem>
          ))}
        </ul>
      </Flex>
    </aside>
  );
};

export default DocumentBar;
