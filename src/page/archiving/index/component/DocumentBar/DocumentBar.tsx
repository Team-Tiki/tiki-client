import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/index/component/DocumentBarTab/DocumentBarTab';
import SelectedBlock from '@/page/archiving/index/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/index/component/TotalDocument/TotalDocument';
import { useBlockQuery } from '@/page/archiving/index/hook/api/useBlockQuery';
import { useTotalDocumentQuery } from '@/page/archiving/index/hook/api/useTotalDocumentQuery';
import { formattingDate } from '@/page/archiving/index/util/date';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

type SelectedBlockProps = {
  timeBlockId: number;
  name: string;
  color: string;
  blockType: string;
  startDate: Date;
  endDate: Date;
};

type DocumentBarProps = {
  blockSelected?: SelectedBlockProps;
};

const DocumentBar = ({ blockSelected }: DocumentBarProps, ref: ForwardedRef<HTMLDivElement>) => {
  const [selectedId, setSelectedId] = useState('selected');
  const [searchWord, setSearchWord] = useState('');

  const handleTabClick = (tabId: string) => {
    if (tabId !== selectedId) {
      setSelectedId(tabId);
    }
  };

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data: blockData } = useBlockQuery(7, blockSelected?.timeBlockId ?? 0, selectedId);
  const { data: documentData } = useTotalDocumentQuery(1, 'executive', selectedId);

  return (
    <aside css={containerStyle(blockSelected?.name || '')} ref={ref}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      {selectedId === 'selected' ? (
        blockSelected && (
          <SelectedBlock
            selectedId={selectedId}
            blockName={blockSelected.name}
            startDate={formattingDate(blockSelected.startDate)}
            endDate={formattingDate(blockSelected.endDate)}
            color={blockSelected.color}
            documentList={blockData?.data.documents}
          />
        )
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
