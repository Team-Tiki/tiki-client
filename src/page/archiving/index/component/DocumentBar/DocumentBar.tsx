import { ForwardedRef, forwardRef } from 'react';

import { theme } from '@/common/style/theme/theme';

import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import { Block } from '@/page/archiving/index/type/blockType';

interface DocumentBarProps {
  selectedBlock?: Block;
  onClose: () => void;
}

const DocumentBar = ({ selectedBlock }: DocumentBarProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <aside css={containerStyle(selectedBlock ? selectedBlock.name : '')} ref={ref}>
      <p css={{ ...theme.text.body04 }}>Document Bar</p>
    </aside>
  );
};

export default forwardRef(DocumentBar);
