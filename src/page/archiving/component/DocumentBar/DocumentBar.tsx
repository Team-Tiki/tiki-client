import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import { BlockType } from '@/page/archiving/type/blockType';
import { formattingDate } from '@/page/archiving/util/formattingDate';
import { format } from 'date-fns';

import DocumentBarInfo from '@/page/archiving/component/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTab from '@/page/archiving/component/DocumentBarTab/DocumentBarTab';
import DocumentBarTool from '@/page/archiving/component/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from '@/page/archiving/component/DocumentWrapper/DocumentWrapper';
import { BLOCK_INFO, BLOCK_TEST_DATA, Block, TOTAL_DATA, Total } from '@/page/archiving/constant/document';

import { ChangeEvent, useEffect, useState } from 'react';

const DocumentBar = ({ blockSelected }: { blockSelected: BlockType }) => {
  const [selectedId, setSelectedId] = useState('selected');
  const formattedDate = format(blockSelected.startDate, 'yyyy.MM.dd');
  const [documentData, setDocumentData] = useState<Total | Block>([]);
  const [searchWord, setSearchWord] = useState('');

  const handleTabClick = (selectedId: string, tabId: string) => {
    tabId !== selectedId && setSelectedId(tabId);
  };
    
  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  // 탭 클릭시 문서리스트 받아오기
  useEffect(() => {
    if (selectedId === 'selected') {
      setDocumentData(BLOCK_TEST_DATA);
    } else if (selectedId === 'total') {
      setDocumentData(TOTAL_DATA);
    }
  }, [selectedId]);

  return (
    <aside css={containerStyle}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      <DocumentWrapper selectedId={selectedId} documentData={documentData} searchWord={searchWord}>
        {selectedId === 'selected' ? (
          <DocumentBarInfo
            blockName={blockSelected.title}
            startDate={formattingDate(blockSelected.startDate)}
            endDate={formattingDate(blockSelected.endDate)}
          />
        ) : (
          <DocumentBarTool onSearchWord={handleSearchWord} searchWord={searchWord} />
        )}
      </DocumentWrapper>
    </aside>
  );
};

export default DocumentBar;
