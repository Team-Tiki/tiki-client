import { DatePicker, Flex, Input, Text } from '@tiki/ui';

import { useState } from 'react';

import { textStyle } from '@/page/archiving/index/component/TimeBlockModal/component/Block/BlockModal.style';
import BlockIcon from '@/page/archiving/index/component/TimeBlockModal/component/Block/Icon/BlockIcon';
import BlockBox from '@/page/archiving/index/component/TimeBlockModal/component/Box/BlockBox';
import { BLOCK_ICON } from '@/page/archiving/index/component/TimeBlockModal/constant/iconBlock';

import { Modal } from '@/shared/component/Modal';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';
import { useFunnel } from '@/shared/hook/common/useFunnel';

const BlockModal = () => {
  const [selectedIcon, setSelectedIcon] = useState<number>(-1);

  const { formData, setFormData } = useBlockContext();
  const { nextStep } = useFunnel();

  const isButtonActive = formData.blockName.trim() !== '' && selectedIcon !== -1;

  const handleBlockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 25) {
      setFormData({ blockName: e.target.value });
    }
  };

  const handleNext = () => {
    if (isButtonActive) {
      const blockIconType = BLOCK_ICON[selectedIcon].name;
      setFormData({
        blockType: blockIconType,
        startDate: formData.startDate,
        endDate: formData.endDate,
      });
      nextStep();
    }
  };

  const handleDateChange = () => {};

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Flex
          styles={{
            direction: 'column',
            align: 'center',
            justify: 'center',
            gap: '2rem',
            width: '100%',
          }}>
          <BlockBox title="아이콘">
            <BlockIcon selectedBlockIcon={selectedIcon} onBlockIconSelect={setSelectedIcon} />
          </BlockBox>

          <BlockBox title="이름">
            <Flex styles={{ align: 'flex-end', direction: 'column', gap: '0.8rem', width: '100%' }}>
              <Input
                placeholder="타임블록 이름 ex.활동명"
                css={{ width: '100%' }}
                value={formData.blockName}
                onChange={handleBlockNameChange}
              />
              <Text tag="body8" css={textStyle}>
                {formData.blockName.length} / 25
              </Text>
            </Flex>
          </BlockBox>

          <BlockBox title="기간">
            <DatePicker variant="range" triggerWidth="13.5rem" onChange={handleDateChange} />
          </BlockBox>
        </Flex>
      </Modal.Body>
      <Modal.Footer step={1} contentType="create-block" buttonClick={handleNext} isButtonActive={isButtonActive} />
    </>
  );
};

export default BlockModal;
