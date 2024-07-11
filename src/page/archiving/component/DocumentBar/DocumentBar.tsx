import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab';
import DocumentBarInfo from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTool from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentWrapper';
import { BLOCK_TEST_DATA } from '@/page/archiving/component/DocumentBar/constant';

import { useState } from 'react';

const DocumentBar = () => {
  const [selectedId, setSelectedId] = useState('total');

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
