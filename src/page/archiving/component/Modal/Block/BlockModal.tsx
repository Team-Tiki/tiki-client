import { buttonStyle } from '@/page/archiving/component/Modal/Block/BlockModal.style';
import BlockDate from '@/page/archiving/component/Modal/Block/Date/BlockDate';
import BlockIcon from '@/page/archiving/component/Modal/Block/Icon/BlockIcon';
import BlockBox from '@/page/archiving/component/Modal/Box/BlockBox';

import { useEffect, useState } from 'react';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';

interface BlockModalProps {
  onNext: () => void;
}

const BlockModal = ({ onNext }: BlockModalProps) => {
  const [blockName, setBlockName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isDateRangeValid, setIsDateRangeValid] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const isBlockNameFilled = blockName.trim() !== '';
    const isIconSelected = selectedIcon !== null;
    const isDateFilled = startDate.length === 10 && endDate.length === 10 && isDateRangeValid;
    setIsButtonActive(isBlockNameFilled && isIconSelected && isDateFilled);
  }, [blockName, selectedIcon, startDate, endDate, isDateRangeValid]);

  return (
    <Flex
      tag={'section'}
      styles={{
        direction: 'column',
        justify: 'space-between',
        align: 'center',
        height: '52.72rem',
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
          <BlockIcon selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
        </BlockBox>

        <BlockBox title="블록명">
          <Input
            variant="default"
            size="large"
            placeholder="활동,행사명 등"
            css={{ width: '100%' }}
            value={blockName}
            onChange={(e) => setBlockName(e.target.value)}
          />
        </BlockBox>

        <BlockBox title="기간">
          <BlockDate
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setIsDateRangeValid={setIsDateRangeValid}
          />
        </BlockBox>
      </Flex>
      <Button
        variant="primary"
        size="medium"
        css={buttonStyle(isButtonActive)}
        disabled={!isButtonActive}
        onClick={onNext}>
        다음
      </Button>
    </Flex>
  );
};

export default BlockModal;
