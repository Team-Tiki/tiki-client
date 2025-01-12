import { useState } from 'react';

import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';

import { useDrawerAction } from '@/shared/store/drawer';

export const useInteractTimeline = () => {
  const [selectedBlock, setSelectedBlock] = useState<Block>();

  const { openDrawer } = useDrawerAction();

  const handleBlockClick = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    block: Block,
    blockDetail: BlockDetail
  ) => {
    e.stopPropagation();

    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'center',
    });

    setSelectedBlock(block);

    openDrawer({
      timeBlockId: block.timeBlockId,
      name: block.name,
      startDate: block.startDate,
      endDate: block.endDate,
      blockType: block.blockType,
      color: block.color,
      documents: blockDetail.documents ?? [],
      notes: blockDetail.notes ?? [],
    });
  };

  return {
    selectedBlock,
    setSelectedBlock,
    handleBlockClick,
  };
};
