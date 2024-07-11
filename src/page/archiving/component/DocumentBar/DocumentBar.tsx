import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab';
import { BLOCK_TEST_DATA } from '@/page/archiving/component/DocumentBar/constant';

import { useState } from 'react';

import DocumentBarInfo from './DocumentWrapper/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTool from './DocumentWrapper/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from './DocumentWrapper/DocumentWrapper';

const DocumentBar = () => {
  const [selectedId, setSelectedId] = useState('selected');

  const handleTabClick = (selectedId: string, tabId: string) => {
    tabId !== selectedId && setSelectedId(tabId);
  };

  // 목업 데이터
  const blockData = BLOCK_TEST_DATA;

  return (
    <aside css={containerStyle}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      <DocumentWrapper selectedId={selectedId}>
        {selectedId === 'selected' ? (
          <DocumentBarInfo blockName={blockData.title} startDate={blockData.startDate} endDate={blockData.endDate} />
        ) : (
          <DocumentBarTool />
        )}
      </DocumentWrapper>
    </aside>
  );
};

export default DocumentBar;
