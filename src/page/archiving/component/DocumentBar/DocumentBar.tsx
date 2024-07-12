import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarInfo from '@/page/archiving/component/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTab from '@/page/archiving/component/DocumentBarTab/DocumentBarTab';
import DocumentBarTool from '@/page/archiving/component/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from '@/page/archiving/component/DocumentWrapper/DocumentWrapper';
import { BLOCK_INFO, BLOCK_TEST_DATA, Block, TOTAL_DATA, Total } from '@/page/archiving/constant/document';

import { useEffect, useState } from 'react';

const DocumentBar = () => {
  const [selectedId, setSelectedId] = useState('selected');

  const [documentData, setDocumentData] = useState<Total | Block>([]);

  const [searchWord, setSearchWord] = useState('');

  const handleTabClick = (selectedId: string, tabId: string) => {
    tabId !== selectedId && setSelectedId(tabId);
  };

  const handleSearchWord = (search: string) => {
    setSearchWord(search);
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
          <DocumentBarInfo blockName={BLOCK_INFO.title} startDate={BLOCK_INFO.startDate} endDate={BLOCK_INFO.endDate} />
        ) : (
          <DocumentBarTool handleSearchWord={handleSearchWord} searchWord={searchWord} />
        )}
      </DocumentWrapper>
    </aside>
  );
};

export default DocumentBar;
