import { Button, CommandButton, DatePicker, Flex, Heading, Input, Text } from '@tiki/ui';
import { format } from 'date-fns';

import {
  containerStyle,
  periodStyle,
  titleInputStyle,
} from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo.style';
import { BlockInfoType } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar';
import { circleStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';

import { useDrawerContent } from '@/shared/store/drawer';
import { Validate } from '@/shared/util/validate';

interface BlockInfoProps extends BlockInfoType {
  isEditable: boolean;
  onEditClick: () => void;
  canSubmit: boolean;
  setBlockInfo: React.Dispatch<React.SetStateAction<BlockInfoType>>;
}

const BlockInfo = ({ isEditable, onEditClick, canSubmit, setBlockInfo, name, startDate, endDate }: BlockInfoProps) => {
  const { color, blockType } = { ...useDrawerContent() };
  const handleDateChange = (start: Date | null, end: Date | null) => {
    handleblockInfoChange('startDate', format(start ?? startDate, 'yyyy-MM-dd'));
    handleblockInfoChange('endDate', format(end ?? endDate, 'yyyy-MM-dd'));
  };

  const handleblockInfoChange = (key: string, value: string) => {
    setBlockInfo((prev) => (prev = { ...prev, [key]: value }));
  };

  const handleBlockNameChange = (blockName: string) => {
    if (!Validate.validateLength(blockName, 25)) return;

    handleblockInfoChange('name', blockName);
  };

  return (
    <div css={containerStyle}>
      <Flex styles={{ justify: 'space-between', align: 'center', marginTop: '7.4rem' }}>
        <Flex css={circleStyle(color ?? '')}>
          {BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color ?? '')}
        </Flex>

        {isEditable ? (
          <CommandButton
            type={'submit'}
            variant="fourth"
            commandKey={isEditable ? 'S' : 'E'}
            size="xSmall"
            disabled={!canSubmit}>
            저장
          </CommandButton>
        ) : (
          <Flex styles={{ gap: '0.8rem' }}>
            <Button
              variant="tertiary"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onEditClick();
              }}>
              수정
            </Button>
            <Button variant="tertiary" size="small">
              삭제
            </Button>
          </Flex>
        )}
      </Flex>

      <Flex styles={{ direction: 'column', gap: '1rem', marginTop: '1.8rem' }}>
        {isEditable ? (
          <Input css={titleInputStyle} value={name} onChange={(event) => handleBlockNameChange(event.target.value)} />
        ) : (
          <Heading tag="H6">{name}</Heading>
        )}

        {isEditable ? (
          <DatePicker
            onChange={handleDateChange}
            variant="range"
            triggerWidth="100%"
            defaultSelectedDate={new Date(startDate)}
            defaultEndDate={new Date(endDate)}
          />
        ) : (
          <Text tag="body6" css={periodStyle}>
            {startDate} ~ {endDate}
          </Text>
        )}
      </Flex>
    </div>
  );
};

export default BlockInfo;
