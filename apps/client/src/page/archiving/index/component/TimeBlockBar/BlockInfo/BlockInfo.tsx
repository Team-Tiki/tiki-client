import { Button, DatePicker, Flex, Heading, Input, Text } from '@tiki/ui';
import { format } from 'date-fns';

import {
  containerStyle,
  periodStyle,
  titleInputStyle,
} from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo.style';
import DeleteTimeBlockButton from '@/page/archiving/index/component/TimeBlockBar/DeleteTimeBlockButton/DeleteTimeBlockButton';
import SubmitButton from '@/page/archiving/index/component/TimeBlockBar/SubmitButton/SubmitButton';
import { circleStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { Block, BlockDetail, BlockInfoType } from '@/page/archiving/index/type/blockType';

import { useDrawerAction, useDrawerContent } from '@/shared/store/drawer';
import { Validate } from '@/shared/util/validate';

interface BlockInfoProps {
  isEditable: boolean;
  onEditClick: () => void;
}

const BlockInfo = ({ isEditable, onEditClick }: BlockInfoProps) => {
  const { name, startDate, endDate, color, blockType } = useDrawerContent() as Block & BlockDetail;
  const { setContent } = useDrawerAction();

  const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onEditClick();
  };

  const handleDateChange = (start: Date | null, end: Date | null) => {
    handleblockInfoChange('startDate', format(start ?? startDate ?? '', 'yyyy-MM-dd'));
    handleblockInfoChange('endDate', format(end ?? endDate ?? '', 'yyyy-MM-dd'));
  };

  const handleblockInfoChange = (key: keyof Omit<BlockInfoType, 'documents'>, value: string) => {
    setContent(key, value);
  };

  const handleBlockNameChange = (blockName: string) => {
    if (!Validate.validateLength(blockName, 25)) return;

    handleblockInfoChange('name', blockName);
  };

  return (
    <div css={containerStyle}>
      <Flex styles={{ justify: 'space-between', align: 'center', marginTop: '7.4rem' }}>
        <Flex css={circleStyle(color)}>{BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color)}</Flex>
        {isEditable ? (
          <SubmitButton onEditClick={onEditClick} />
        ) : (
          <Flex styles={{ gap: '0.8rem' }}>
            <Button variant="tertiary" size="small" onClick={handleEditButtonClick}>
              수정
            </Button>
            <DeleteTimeBlockButton />
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
