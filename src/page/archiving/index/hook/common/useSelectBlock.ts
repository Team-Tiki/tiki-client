import { useState } from 'react';

import { Block } from '@/page/archiving/index/type/blockType';

import { useOpenModal } from '@/shared/store/modal';

export const useSelectBlock = () => {
  const [selectedBlock, setSelectedBlock] = useState<Block>();

  const openModal = useOpenModal();

  const handleOpenBlockModal = () => {
    openModal('create-block');
  };

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
    handleOpenBlockModal,
    handleBlockClick,
  };
};
