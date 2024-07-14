import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarInfo from '@/page/archiving/component/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTab from '@/page/archiving/component/DocumentBarTab/DocumentBarTab';
import DocumentBarTool from '@/page/archiving/component/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from '@/page/archiving/component/DocumentWrapper/DocumentWrapper';
import { BLOCK_INFO, Block, TOTAL_DATA, Total } from '@/page/archiving/constant/document';

import { ChangeEvent, useEffect, useState } from 'react';

import { useOutsideClick, useOverlay } from '@/common/hook';

import { useGetBlockData } from '@/shared/api/hook/useGetBlockData';

const DocumentBar = () => {
  const { close } = useOverlay();
  const documentBarRef = useOutsideClick(close);

  const [selectedId, setSelectedId] = useState('selected');

  const [documentData, setDocumentData] = useState<Total | Block>([]);

  const [searchWord, setSearchWord] = useState('');

  const handleTabClick = (selectedId: string, tabId: string) => {
    tabId !== selectedId && setSelectedId(tabId);
  };

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data } = useGetBlockData(9, 8);

  // 탭 클릭시 문서리스트 받아오기
  useEffect(() => {
    if (selectedId === 'selected') {
      setDocumentData(data);
    } else if (selectedId === 'total') {
      setDocumentData(TOTAL_DATA);
    }
  }, [selectedId, data]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <aside css={containerStyle} ref={documentBarRef} onClick={(e) => e.stopPropagation()}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      <DocumentWrapper selectedId={selectedId} documentData={documentData} searchWord={searchWord}>
        {selectedId === 'selected' ? (
          <DocumentBarInfo blockName={BLOCK_INFO.title} startDate={BLOCK_INFO.startDate} endDate={BLOCK_INFO.endDate} />
        ) : (
          <DocumentBarTool onSearchWord={handleSearchWord} searchWord={searchWord} />
        )}
      </DocumentWrapper>
    </aside>
  );
};

export default DocumentBar;
