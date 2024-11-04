import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import DatePicker from '@/common/component/DatePicker';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import { Modal } from '@/common/component/Modal';
import Text from '@/common/component/Text/Text';

import {
  buttonStyle,
  textStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/Block/BlockModal.style';
import BlockIcon from '@/page/archiving/index/component/TimeBlockModal/component/Block/Icon/BlockIcon';
import BlockBox from '@/page/archiving/index/component/TimeBlockModal/component/Box/BlockBox';
import { BLOCK_ICON } from '@/page/archiving/index/component/TimeBlockModal/constant/iconBlock';

import WorkSapceInfo from '@/shared/component/WorkSpaceModal/info/WorkSpaceInfo';
import { useBlockContext } from '@/shared/hook/common/useBlockContext';

interface BlockModalProps {
  isVisible: boolean;
}

const BlockModal = ({ isVisible }: BlockModalProps) => {
  const [selectedIcon, setSelectedIcon] = useState<number>(-1);

  const { formData, setFormData, nextStep } = useBlockContext();

  const handleBlockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 25) {
      setFormData({ blockName: e.target.value });
    }
  };

  const isButtonActive = formData.blockName.trim() !== '' && selectedIcon !== -1;

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

  if (!isVisible) return null;

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
            <DatePicker variant="range" triggerWidth="13.5rem" />
          </BlockBox>
        </Flex>
      </Modal.Body>
      <Modal.Footer step={1} buttonClick={handleNext} isButtonActive={isButtonActive} />
    </>
  );
};

export default BlockModal;
