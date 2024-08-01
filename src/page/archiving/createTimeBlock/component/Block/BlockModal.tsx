import { buttonStyle, textStyle } from '@/page/archiving/createTimeBlock/component/Block/BlockModal.style';
import BlockDate from '@/page/archiving/createTimeBlock/component/Block/Date/BlockDate';
import BlockIcon from '@/page/archiving/createTimeBlock/component/Block/Icon/BlockIcon';
import BlockBox from '@/page/archiving/createTimeBlock/component/Box/BlockBox';
import { BLOCK_ICON } from '@/page/archiving/createTimeBlock/constant/iconBlock';
import { BlockData } from '@/page/archiving/createTimeBlock/type/blockType';

import { useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { useNextStep } from '@/shared/store/modal';
import { useBlockModalContext } from '@/shared/store/modalContext';

interface BlockModalProps {
  onNext: (blockData: BlockData) => void;
}

const BlockModal = () => {
  //const [blockName, setBlockName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<number>(-1);
  //const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const [isDateRangeValid, setIsDateRangeValid] = useState(false);

  const { blockName, setBlockName, blockType, setBlockType, startDate, setStartDate, endDate, setEndDate } =
    useBlockModalContext();
  const nextStep = useNextStep();

  const handleBlockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 25) {
      setBlockName(e.target.value);
    }
  };

  const isButtonActive =
    blockName.trim() !== '' &&
    selectedIcon !== -1 &&
    startDate.length === 10 &&
    endDate.length === 10 &&
    isDateRangeValid;

  const handleNext = () => {
    if (isButtonActive) {
      const blockIconType = BLOCK_ICON[selectedIcon].name;
      setBlockType(blockIconType);
      setStartDate(startDate);
      setEndDate(endDate);
      nextStep();
    }
  };

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
              variant="default"
              size="large"
              placeholder="활동,행사명 등"
              css={{ width: '100%' }}
              value={blockName}
              onChange={handleBlockNameChange}
            />
            <Text tag="body7" css={textStyle}>
              {blockName.length} / 25
            </Text>
          </Flex>
        </BlockBox>

        <BlockBox title="기간">
          <Flex styles={{ align: 'flex-start', direction: 'column', padding: '0', width: '100%' }}>
            <BlockDate
              startDate={startDate}
              endDate={endDate}
              onSetStartDate={setStartDate}
              onSetEndDate={setEndDate}
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
