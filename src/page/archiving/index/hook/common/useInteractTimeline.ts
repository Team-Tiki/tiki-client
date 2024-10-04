import { useState } from 'react';

import { Block } from '@/page/archiving/index/type/blockType';

export const useInteractTimeline = () => {
  const [selectedBlock, setSelectedBlock] = useState<Block>();

  const handleBlockClick = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    block: Block
  ) => {
    e.stopPropagation();

    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'center',
    });

    setSelectedBlock(block);
  };

  return {
    selectedBlock,
    setSelectedBlock,
    handleBlockClick,
  };
};
