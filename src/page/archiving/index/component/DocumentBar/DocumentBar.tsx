import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/index/component/DocumentBarTab/DocumentBarTab';
import SelectedBlock from '@/page/archiving/index/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/index/component/TotalDocument/TotalDocument';
import { Block } from '@/page/archiving/index/type/blockType';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

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

  const handleTabClick = (selectedId: string, tabId: string) => {
    if (tabId !== selectedId) {
      onSelectId(tabId);
    }
  };

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <aside css={containerStyle(selectedBlock ? selectedBlock.name : '')} ref={ref}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      {selectedId === 'selected' ? (
        selectedBlock && (
          <SelectedBlock
            selectedId={selectedId}
            blockName={selectedBlock.name}
            selectedBlock={selectedBlock}
            onClickClose={onClickClose}
          />
        )
      ) : (
        <TotalDocument onSearchWord={handleSearchWord} searchWord={searchWord} selectedId={selectedId} />
      )}
    </aside>
  );
};

export default forwardRef(DocumentBar);
