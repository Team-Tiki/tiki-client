import { CommandButton, DatePicker, Flex, Heading, Input, Text } from '@tiki/ui';
import { format } from 'date-fns';

import { SyntheticEvent, useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import {
  containerStyle,
  periodStyle,
  titleInputStyle,
} from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo.style';
import { circleStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerContent } from '@/shared/store/drawer';
import { useTimeBlockId } from '@/shared/store/timeBlockId';
import { Validate } from '@/shared/util/validate';

type BlockInfoProps = {
  isEditable: boolean;
  onEditClick: () => void;
};

const BlockInfo = ({ isEditable, onEditClick }: BlockInfoProps) => {
  const { name, startDate, endDate, color, blockType } = { ...useDrawerContent() };

  const timeBlockId = useTimeBlockId();

  const teamId = useInitializeTeamId();

  const queryClient = useQueryClient();

  const [blockInfo, setBlockInfo] = useState<{ name: string; startDate: string; endDate: string }>({
    name: name ?? '',
    startDate: startDate ?? '',
    endDate: endDate ?? '',
  });

  useEffect(() => {
    setBlockInfo({
      name: name ?? '',
      startDate: startDate ?? '',
      endDate: endDate ?? '',
    });
  }, [name, startDate, endDate]);

  const { mutate } = $api.useMutation('patch', '/api/v1/teams/{teamId}/time-block/{timeBlockId}', {
    onSuccess: () => {
      onEditClick();
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/timeline'] });
    },
  });

  const handleDateChange = (start: Date | null, end: Date | null) => {
    handleblockInfoChange('startDate', format(start ?? blockInfo.startDate, 'yyyy-MM-dd'));
    handleblockInfoChange('endDate', format(end ?? blockInfo.endDate, 'yyyy-MM-dd'));
  };

  const handleblockInfoChange = (key: string, value: string) => {
    setBlockInfo((prev) => (prev = { ...prev, [key]: value }));
  };

  const handleBlockNameChange = (blockName: string) => {
    if (!Validate.validateLength(blockName, 25)) return;

    handleblockInfoChange('name', blockName);
  };

  const handleSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault();

    mutate({
      params: {
        path: {
          teamId,
          timeBlockId,
        },
      },
      body: {
        name: blockInfo.name,
        startDate: blockInfo.startDate,
        endDate: blockInfo.endDate,
      },
    });
  };

  return (
    <form css={containerStyle}>
      <Flex styles={{ justify: 'space-between', align: 'center', marginTop: '7.4rem' }}>
        <Flex css={circleStyle(color ?? '')}>
          {BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color ?? '')}
        </Flex>
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
            onChange={(event) => handleBlockNameChange(event.target.value)}
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
            {blockInfo.startDate} ~ {blockInfo.endDate}
          </Text>
        )}
      </Flex>
    </form>
  );
};

export default BlockInfo;
