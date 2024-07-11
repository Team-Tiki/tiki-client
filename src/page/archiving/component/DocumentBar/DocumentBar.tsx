import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab';
import { BlockType } from '@/page/archiving/type/blockType';

import { useState } from 'react';

import DocumentBarInfo from './DocumentWrapper/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTool from './DocumentWrapper/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from './DocumentWrapper/DocumentWrapper';

const DocumentBar = ({ blockSelected }: { blockSelected: BlockType }) => {
  const [selectedId, setSelectedId] = useState('selected');

  const handleTabClick = (selectedId: string, tabId: string) => {
    tabId !== selectedId && setSelectedId(tabId);
  };

  return (
    <aside css={containerStyle}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      <DocumentWrapper selectedId={selectedId}>
        {selectedId === 'selected' ? (
          <DocumentBarInfo
            blockName={blockSelected.title}
            startDate={blockSelected.startDate.getDate().toString()}
            endDate={blockSelected.endDate.getDate().toString()}
          />
        ) : (
          <DocumentBarTool />
        )}
      </DocumentWrapper>
    </aside>
  );
};

export default DocumentBar;
