import { Flex } from '@tiki/ui';

import { useState } from 'react';

import { Modal } from '@/shared/component/Modal';
import CategoryItem from '@/shared/component/TimeBlockModal/component/Category/Category';
import { BLOCK_CATEGORY } from '@/shared/component/TimeBlockModal/constant/category';
import { BlockColor } from '@/shared/component/TimeBlockModal/type/block';
import { colorToHex } from '@/shared/component/TimeBlockModal/util/color';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';

const CategoryModal = () => {
  const { formData, setFormData } = useBlockContext();

  const initialCategory = BLOCK_CATEGORY.findIndex((icon) => icon.type === formData.blockType);
  const [selectedIcon, setSelectedIcon] = useState<number>(initialCategory ?? -1);

  const { nextStep } = useFunnel();

  const isButtonActive = selectedIcon !== -1;

  const handleNext = () => {
    if (isButtonActive) {
      const blockIconType = BLOCK_CATEGORY[selectedIcon].type;
      const blockIconColor = BLOCK_CATEGORY[selectedIcon].color;

      setFormData({
        blockType: blockIconType,
        color: colorToHex(blockIconColor),
      });

      nextStep();
    }
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex
          tag="ul"
          styles={{ width: '36.5rem', wrap: 'wrap', gap: '0.6rem', justify: 'center', paddingTop: '2rem' }}>
          {BLOCK_CATEGORY.map((icon, index) => (
            <CategoryItem
              key={icon.name}
              categoryType={icon.name}
              icon={icon.icon}
              color={icon.color as BlockColor}
              isSelected={selectedIcon === index}
              onClick={() => setSelectedIcon(index)}
            />
          ))}
        </Flex>
      </Modal.Body>
      <Modal.Footer step={1} contentType="create-block" buttonClick={handleNext} isButtonActive={isButtonActive} />
    </>
  );
};

export default CategoryModal;
