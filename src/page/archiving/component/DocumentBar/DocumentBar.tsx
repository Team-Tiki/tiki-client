import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab';

import { BlockType } from '@/page/archiving/type/blockType';
import { formattingDate } from '@/page/archiving/util/formattingDate';
import { format } from 'date-fns';

import DocumentBarInfo from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTool from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentWrapper';
import { BLOCK_TEST_DATA } from '@/page/archiving/component/DocumentBar/constant';

import { useState } from 'react';

const DocumentBar = ({ blockSelected }: { blockSelected: BlockType }) => {
  const [selectedId, setSelectedId] = useState('selected');
  const formattedDate = format(blockSelected.startDate, 'yyyy.MM.dd');

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
            startDate={formattingDate(blockSelected.startDate)}
            endDate={formattingDate(blockSelected.endDate)}
          />
        ) : (
          <DocumentBarTool />
        )}
      </DocumentWrapper>
    </aside>
  );
};

export default DocumentBar;
