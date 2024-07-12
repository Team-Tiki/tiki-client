import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/component/DocumentBar/DocumentBarTab/DocumentBarTab';
import DocumentBarInfo from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTool from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from '@/page/archiving/component/DocumentBar/DocumentWrapper/DocumentWrapper';
import { BLOCK_TEST_DATA, Block, BlockFile, TOTAL_DATA, Total } from '@/page/archiving/component/DocumentBar/constant';

import { useEffect, useState } from 'react';

const DocumentBar = () => {
  const [selectedId, setSelectedId] = useState('total');

  const [documentData, setDocumentData] = useState<Total | Block>([]);
  const [documentList, setDocumentList] = useState<Total | BlockFile>([]);

  const handleTabClick = (selectedId: string, tabId: string) => {
    tabId !== selectedId && setSelectedId(tabId);
  };

  // 탭 클릭시 문서리스트 받아오기
  useEffect(() => {
    if (selectedId === 'selected') {
      setDocumentData(BLOCK_TEST_DATA);
      setDocumentList(BLOCK_TEST_DATA.filesUrl);
    }
    if (selectedId === 'total') {
      setDocumentData(TOTAL_DATA);
      setDocumentList(TOTAL_DATA);
    }
  }, [selectedId]);

  // 검색 된 문서리스트 받아오기
  const filterDocument = (searchWord: string, documentList: Total | BlockFile) => {
    console.log('검색 전 문서', documentList);
    const temp = documentList.filter((document) => {
      return document.fileName.includes(searchWord);
    });
    console.log(searchWord);
    console.log('문서 리스트', temp);
    setDocumentList(temp);
    return temp;
  };

  return (
    <aside css={containerStyle}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      <DocumentWrapper selectedId={selectedId} documentList={documentList}>
        {selectedId === 'selected' ? (
          <DocumentBarInfo
            blockName={documentData.title}
            startDate={documentData.startDate}
            endDate={documentData.endDate}
          />
        ) : (
          <DocumentBarTool
            filterDocument={filterDocument}
            documentList={selectedId === 'selected' ? documentData.filesUrl : documentData}
          />
        )}
      </DocumentWrapper>
    </aside>
  );
};

export default DocumentBar;
