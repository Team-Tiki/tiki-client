import { containerStyle } from '@/page/archiving/component/DocumentBar/DocumentBar.style';
import DocumentBarInfo from '@/page/archiving/component/DocumentBarInfo/DocumentBarInfo';
import DocumentBarTab from '@/page/archiving/component/DocumentBarTab/DocumentBarTab';
import DocumentBarTool from '@/page/archiving/component/DocumentBarTool/DocumentBarTool';
import DocumentWrapper from '@/page/archiving/component/DocumentWrapper/DocumentWrapper';
import { Block, TOTAL_DATA, Total } from '@/page/archiving/constant/document';
import { BlockType } from '@/page/archiving/type/blockType';
import { formattingDate } from '@/page/archiving/util/formattingDate';

import { ChangeEvent, ForwardedRef, forwardRef, useEffect, useState } from 'react';

import { getTotalDocuments } from '@/shared/api/archiving/document';
import { useBlockQuery } from '@/shared/api/hook/useBlockQuery';
import { useTotalDocumentQuery } from '@/shared/api/hook/useTotalDocumentQuery';

const DocumentBar = (
  {
    blockSelected = { id: 0, title: '', startDate: new Date(), endDate: new Date() },
  }: {
    blockSelected: BlockType | undefined;
  },
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [selectedId, setSelectedId] = useState('selected');
  const [documentData, setDocumentData] = useState<Total | Block>([]);
  const [searchWord, setSearchWord] = useState('');

  const handleTabClick = (selectedId: string, tabId: string) => {
    tabId !== selectedId && setSelectedId(tabId);
  };

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data: block } = useBlockQuery(9, 8);
  const { data: document } = useTotalDocumentQuery(1, 'executive');

  // 탭 클릭시 문서리스트 받아오기
  useEffect(() => {
    if (selectedId === 'selected') {
      setDocumentData(block);
    } else if (selectedId === 'total') {
      setDocumentData(document);
    }
  }, [selectedId, block, document]);

  return (
    <aside css={containerStyle(blockSelected.title)} ref={ref}>
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

export default forwardRef(DocumentBar);
