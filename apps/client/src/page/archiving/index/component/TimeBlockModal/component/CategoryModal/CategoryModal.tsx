import { Flex } from '@tiki/ui';

import { useState } from 'react';

import CategoryButton, {
  BlockColor,
} from '@/page/archiving/index/component/TimeBlockModal/component/CategoryModal/Category/Category';
import { BLOCK_CATEGORY } from '@/page/archiving/index/component/TimeBlockModal/constant/category';

import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';

const CategoryModal = () => {
  const [selectedIcon, setSelectedIcon] = useState<number>(-1);

  const { formData, setFormData } = useBlockContext();
  const { nextStep } = useFunnel();

  const isButtonActive = selectedIcon !== -1;

  const handleNext = () => {
    if (isButtonActive) {
      const blockIconType = BLOCK_CATEGORY[selectedIcon].name;
      setFormData({
        blockType: blockIconType,
        startDate: formData.startDate,
        endDate: formData.endDate,
      });
      nextStep();
    }
  };

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex styles={{ width: '36.5rem', wrap: 'wrap', gap: '0.6rem', justify: 'center' }}>
          {BLOCK_CATEGORY.map((icon, index) => (
            <CategoryButton
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
