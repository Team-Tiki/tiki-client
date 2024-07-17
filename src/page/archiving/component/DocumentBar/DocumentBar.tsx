import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/component/DocumentBarTab/DocumentBarTab';
import SelectedBlock from '@/page/archiving/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/component/TotalDocument/TotalDocument';
import { useBlockQuery } from '@/page/archiving/hook/api/useBlockQuery';
import { useTotalDocumentQuery } from '@/page/archiving/hook/api/useTotalDocumentQuery';
import { BlockType } from '@/page/archiving/type/blockType';
import { formattingDate } from '@/page/archiving/util/formattingDate';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

const DocumentBar = (
  {
    blockSelected = { id: 0, title: '', startDate: new Date(), endDate: new Date() },
  }: {
    blockSelected: BlockType | undefined;
  },
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [selectedId, setSelectedId] = useState('selected');
  const [searchWord, setSearchWord] = useState('');

  // 문서 바 tab 클릭시 실행
  const handleTabClick = (selectedId: string, tabId: string) => {
    tabId !== selectedId && setSelectedId(tabId);
  };

  // 검색 타이핑시 실행
  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data: blockData } = useBlockQuery(9, 8, selectedId);
  const { data: documentData } = useTotalDocumentQuery(1, 'executive', selectedId);

  return (
    <aside css={containerStyle(blockSelected.title)} ref={ref}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      {selectedId === 'selected' ? (
        <SelectedBlock
          selectedId={selectedId}
          blockName={blockSelected.title}
          startDate={formattingDate(blockSelected.startDate)}
          endDate={formattingDate(blockSelected.endDate)}
          documentList={blockData?.data.documents}
        />
      ) : (
        <TotalDocument
          documentList={documentData?.data.documents}
          onSearchWord={handleSearchWord}
          searchWord={searchWord}
          selectedId={selectedId}
        />
      )}
    </aside>
  );
};

export default forwardRef(DocumentBar);
