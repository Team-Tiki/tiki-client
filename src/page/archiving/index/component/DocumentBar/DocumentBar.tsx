/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/index/component/DocumentBarTab/DocumentBarTab';
import SelectedBlock from '@/page/archiving/index/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/index/component/TotalDocument/TotalDocument';
import { useBlockQuery } from '@/page/archiving/index/hook/api/useBlockQuery';
import { useTotalDocumentQuery } from '@/page/archiving/index/hook/api/useTotalDocumentQuery';
import { Block } from '@/page/archiving/index/type/blockType';
import { formattingDate } from '@/page/archiving/index/util/date';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

type DocumentBarProps = {
  selectedBlock?: Block;
  selectedId: string;
  onSelectId: (Id: string) => void;
  onClickClose: () => void;
};

const DocumentBar = (
  { selectedBlock, selectedId, onSelectId, onClickClose }: DocumentBarProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [searchWord, setSearchWord] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const teamId = searchParams.get('teamId');

  const handleTabClick = (selectedId: string, tabId: string) => {
    if (tabId !== selectedId) {
      onSelectId(tabId);
    }
  };

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data: blockData } = useBlockQuery(+teamId!, selectedBlock?.timeBlockId ?? 69, selectedId);
  const { data: documentData } = useTotalDocumentQuery(+teamId!, 'executive', selectedId);

  return (
    <aside css={containerStyle(selectedBlock ? selectedBlock.name : '')} ref={ref}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      {selectedId === 'selected'
        ? selectedBlock && (
            <SelectedBlock
              selectedId={selectedId}
              blockName={selectedBlock.name}
              startDate={formattingDate(selectedBlock.startDate)}
              endDate={formattingDate(selectedBlock.endDate)}
              documentList={blockData?.data.documents}
              selectedBlock={selectedBlock}
              onClickClose={onClickClose}
            />
          )
        : documentData && (
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
