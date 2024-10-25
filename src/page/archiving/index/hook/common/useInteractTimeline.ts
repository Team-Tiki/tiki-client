import { useState } from 'react';

import { Block } from '@/page/archiving/index/type/blockType';

import { useDrawerAction } from '@/shared/store/drawer';

export const useInteractTimeline = () => {
  const [selectedBlock, setSelectedBlock] = useState<Block>();

  const { openDrawer } = useDrawerAction();

  const handleBlockClick = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();

    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'center',
    });

    /** TODO: 추후 block id에 따른 API 응답으로 데이터 넣기 */
    openDrawer({
      title: 'OT 준비',
      startDate: '2024-09-13',
      endDate: '2024-09-24',
      files: [],
    });
  };

  return {
    selectedBlock,
    setSelectedBlock,
    handleBlockClick,
  };
};
