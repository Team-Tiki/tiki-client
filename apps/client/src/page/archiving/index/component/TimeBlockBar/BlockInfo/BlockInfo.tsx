import { CommandButton, DatePicker, Flex, Heading, Input, Text } from '@tiki/ui';
import { format } from 'date-fns';

import { SyntheticEvent, useState } from 'react';

import {
  containerStyle,
  periodStyle,
  titleInputStyle,
} from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo.style';
import { circleStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { Block } from '@/page/archiving/index/type/blockType';

type BlockInfoProps = {
  isEditable: boolean;
  onEditClick: () => void;
} & Omit<Block, 'timeBlockId'>;

const BlockInfo = ({ name, startDate, color, endDate, isEditable, blockType, onEditClick }: BlockInfoProps) => {
  const [blockInfo, setBlockInfo] = useState({ name: name, startDate: startDate, endDate: endDate });

  // null 처리 임시방편..
  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    handleblockInfoChange('startDate', startDate ? format(startDate, 'yyyy-MM-dd') : '2025-01-14');
    handleblockInfoChange('startDate', endDate ? format(endDate, 'yyyy-MM-dd') : '2025-01-14');
  };

  const handleblockInfoChange = (key: string, value: string) => {
    setBlockInfo((prev) => (prev = { ...prev, [key]: value }));
  };

  const handleSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault();
  };

  return (
    <form css={containerStyle}>
      <Flex styles={{ justify: 'space-between', marginTop: '7.4rem' }}>
        <Flex css={circleStyle(color)}>{BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color)}</Flex>
        <CommandButton
          type={isEditable ? 'button' : 'submit'}
          variant="fourth"
          commandKey={isEditable ? 'S' : 'E'}
          size="xSmall"
          onClick={isEditable ? (e) => handleSubmit(e) : onEditClick}>
          {isEditable ? '저장' : '수정하기'}
        </CommandButton>
      </Flex>

      <Flex styles={{ direction: 'column', gap: '1rem', marginTop: '1.8rem' }}>
        {isEditable ? (
          <Input
            css={titleInputStyle}
            value={blockInfo.name}
            onChange={(event) => handleblockInfoChange('name', event.target.value)}
          />
        ) : (
          <Heading tag="H6">{blockInfo.name}</Heading>
        )}

        {isEditable ? (
          <DatePicker
            onChange={handleDateChange}
            variant="range"
            triggerWidth="100%"
            defaultSelectedDate={new Date(blockInfo.startDate)}
            defaultEndDate={new Date(blockInfo.endDate)}
          />
        ) : (
          <Text tag="body6" css={periodStyle}>
            {startDate} ~ {endDate}
          </Text>
        )}
      </Flex>
    </form>
  );
};

export default BlockInfo;
