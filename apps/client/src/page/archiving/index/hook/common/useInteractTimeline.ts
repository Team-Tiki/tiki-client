import { useState } from 'react';

import { useBlockDetailInfoQuery } from '@/page/archiving/index/hook/api/quries';
import { Block } from '@/page/archiving/index/type/blockType';

import { useDrawerAction } from '@/shared/store/drawer';

export const useInteractTimeline = () => {
  const [selectedBlock, setSelectedBlock] = useState<Block>();

  const { openDrawer } = useDrawerAction();

  const { data } = useBlockDetailInfoQuery(selectedBlock?.timeBlockId as number);

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

    openDrawer({
      name: block.name,
      startDate: block.startDate,
      endDate: block.endDate,
      blockType: block.blockType,
      color: block.color,
      documents: data?.data?.documents ?? [],
      notes: data?.data?.notes ?? [],
    });
  };

  return {
    selectedBlock,
    setSelectedBlock,
    handleBlockClick,
  };
};
