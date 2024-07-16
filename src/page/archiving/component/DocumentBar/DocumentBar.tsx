import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/component/DocumentBarTab/DocumentBarTab';
import SelectedBlock from '@/page/archiving/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/component/TotalDocument/TotalDocument';
import { Block } from '@/page/archiving/type/blockType';
import { formattingDate } from '@/page/archiving/util/formattingDate';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

import { useBlockQuery } from '@/shared/api/hook/useBlockQuery';
import { useTotalDocumentQuery } from '@/shared/api/hook/useTotalDocumentQuery';

const DocumentBar = (
  {
    blockSelected = { timeBlockId: 0, name: '', color: '', startDate: new Date(), endDate: new Date() },
  }: {
    blockSelected: Block | undefined;
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

  const { data: blockDataList } = useBlockQuery(7, blockSelected.timeBlockId, selectedId);
  const { data: documentList } = useTotalDocumentQuery(1, 'executive', selectedId);

  return (
    <aside css={containerStyle(blockSelected.name)} ref={ref}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      {selectedId === 'selected' ? (
        <SelectedBlock
          selectedId={selectedId}
          blockName={blockSelected.name}
          startDate={formattingDate(blockSelected.startDate)}
          endDate={formattingDate(blockSelected.endDate)}
          color={blockSelected.color}
          documentList={blockDataList}
        />
      ) : (
        <TotalDocument
          documentList={documentList}
          onSearchWord={handleSearchWord}
          searchWord={searchWord}
          selectedId={selectedId}
        />
      )}
    </aside>
  );
};

export default forwardRef(DocumentBar);
