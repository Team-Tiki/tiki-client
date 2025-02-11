import { Button, CommandButton, DatePicker, Flex, Heading, Input, Text } from '@tiki/ui';
import { format } from 'date-fns';

import { SyntheticEvent, useEffect, useRef, useState } from 'react';

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

  const initialData = useRef({ name, startDate, endDate });

  const [blockInfo, setBlockInfo] = useState<{ name: string; startDate: string; endDate: string }>({
    name: name ?? '',
    startDate: startDate ?? '',
    endDate: endDate ?? '',
  });

  // 초기값과 수정된 데이터 비교해서 폼 제출여부 가능 여부 확인
  const canSubmit = JSON.stringify(initialData.current) !== JSON.stringify(blockInfo);

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
      initialData.current = blockInfo;
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

        {isEditable ? (
          <CommandButton
            type={'submit'}
            variant="fourth"
            commandKey={isEditable ? 'S' : 'E'}
            size="xSmall"
            onClick={handleSubmit}
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
