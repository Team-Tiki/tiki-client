import { useState } from 'react';

import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';

import { useDrawerAction } from '@/shared/store/drawer';
import { useTimeBlockIdAction } from '@/shared/store/timeBlockId';

export const useInteractTimeline = () => {
  const [selectedBlock, setSelectedBlock] = useState<Block>();

  const { openDrawer } = useDrawerAction();

  const { setTimeBlockId } = useTimeBlockIdAction();

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

    setTimeBlockId(block.timeBlockId);

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
