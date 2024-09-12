import { ForwardedRef, forwardRef } from 'react';

import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/index/component/DocumentBarTab/DocumentBarTab';
import SelectedBlock from '@/page/archiving/index/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/index/component/TotalDocument/TotalDocument';
import { Block } from '@/page/archiving/index/type/blockType';

interface DocumentBarProps {
  selectedBlock?: Block;
  selectedTabId: string;
  onSelectId: (Id: string) => void;
  onClose: () => void;
}

const DocumentBar = (
  { selectedBlock, selectedTabId, onSelectId, onClose }: DocumentBarProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const handleTabClick = (selectedTabId: string, tabId: string) => {
    if (tabId !== selectedTabId) {
      onSelectId(tabId);
    }
  };

  return (
    <aside css={containerStyle(selectedBlock ? selectedBlock.name : '')} ref={ref}>
      <DocumentBarTab selectedTabId={selectedTabId} onTabClick={handleTabClick} />
      {selectedTabId === 'selected' ? (
        selectedBlock && (
          <SelectedBlock
            selectedTabId={selectedTabId}
            blockName={selectedBlock.name}
            selectedBlock={selectedBlock}
            onClose={onClose}
          />
        )
      ) : (
        <TotalDocument selectedTabId={selectedTabId} />
      )}
    </aside>
  );
};

export default forwardRef(DocumentBar);
