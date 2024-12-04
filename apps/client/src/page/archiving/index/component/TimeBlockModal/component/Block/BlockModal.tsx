import { Button, Flex, Input, Text } from '@tiki/ui';

import { useState } from 'react';

import {
  buttonStyle,
  textStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/Block/BlockModal.style';
import BlockDate from '@/page/archiving/index/component/TimeBlockModal/component/Block/Date/BlockDate';
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
  const [isDateRangeValid, setIsDateRangeValid] = useState(false);

  const { formData, setFormData, nextStep } = useBlockContext();

  const handleBlockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 25) {
      setFormData({ blockName: e.target.value });
    }
  };

  const isButtonActive =
    formData.blockName.trim() !== '' &&
    selectedIcon !== -1 &&
    formData.startDate.length === 10 &&
    formData.endDate.length === 10 &&
    isDateRangeValid;

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
    <Flex
      tag={'section'}
      styles={{
        direction: 'column',
        justify: 'space-between',
        align: 'center',
        height: '55.11rem',
        gap: '2.4rem',
      }}>
      <WorkSapceInfo step="block" title="블록 생성하기" info="타임라인에 생성할 블록 정보를 입력해주세요" />
      <Flex
        styles={{
          direction: 'column',
          align: 'center',
          gap: '2.4rem',
          paddingLeft: '6.8rem',
          paddingRight: '6.8rem',
        }}>
        <BlockBox title="블록 아이콘">
          <BlockIcon selectedBlockIcon={selectedIcon} onBlockIconSelect={setSelectedIcon} />
        </BlockBox>

        <BlockBox title="블록명">
          <Flex styles={{ align: 'flex-end', direction: 'column', gap: '0.8rem', width: '100%' }}>
            <Input
              placeholder="활동,행사명 등"
              css={{ width: '100%' }}
              value={formData.blockName}
              onChange={handleBlockNameChange}
            />
            <Text tag="body7" css={textStyle}>
              {formData.blockName.length} / 25
            </Text>
          </Flex>
        </BlockBox>

        <BlockBox title="기간">
          <Flex styles={{ align: 'flex-start', direction: 'column', padding: '0', width: '100%' }}>
            <BlockDate
              startDate={formData.startDate}
              endDate={formData.endDate}
              onSetStartDate={(date) => setFormData({ startDate: date })}
              onSetEndDate={(date) => setFormData({ endDate: date })}
              onSetIsDateRangeValid={setIsDateRangeValid}
            />
          </Flex>
        </BlockBox>
      </Flex>
      <Button
        variant="primary"
        size="medium"
        css={buttonStyle(isButtonActive)}
        disabled={!isButtonActive}
        onClick={handleNext}>
        다음
      </Button>
    </Flex>
  );
};

export default BlockModal;
