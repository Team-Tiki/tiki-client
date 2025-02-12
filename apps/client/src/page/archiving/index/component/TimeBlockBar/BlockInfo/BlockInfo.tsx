import { Button, CommandButton, DatePicker, Flex, Heading, Input, Text } from '@tiki/ui';
import { format } from 'date-fns';

import { useQueryClient } from '@tanstack/react-query';

import {
  containerStyle,
  periodStyle,
  titleInputStyle,
} from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo.style';
import { BlockInfoType } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar';
import { circleStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerAction, useDrawerContent, useDrawerIsChanged } from '@/shared/store/drawer';
import { useCloseModal, useOpenModal } from '@/shared/store/modal';
import { useTimeBlockId } from '@/shared/store/timeBlockId';
import { Validate } from '@/shared/util/validate';

interface BlockInfoProps {
  isEditable: boolean;
  onEditClick: () => void;
}

const BlockInfo = ({ isEditable, onEditClick }: BlockInfoProps) => {
  const { name, startDate, endDate, color, blockType } = useDrawerContent() as Block & BlockDetail;
  const { setContent, closeDrawer } = useDrawerAction();

  const closeModal = useCloseModal();
  const openModal = useOpenModal();
  const timeBlockId = useTimeBlockId();
  const teamId = useInitializeTeamId();
  const isChanged = useDrawerIsChanged();
  const queryClient = useQueryClient();

  console.log(isChanged);
  const { mutate: deleteBlockMutate } = $api.useMutation('delete', '/api/v1/teams/{teamId}/time-block/{timeBlockId}');

  const handleBlockDelete = () => {
    openModal('deleted', {
      title: '타임블록을 삭제할까요?',
      content: '업로드한 파일은 드라이브에 유지됩니다.',
      onClick: () => {
        deleteBlockMutate(
          {
            params: {
              path: {
                teamId,
                timeBlockId,
              },
            },
          },
          {
            onSuccess: () => {
              closeDrawer();
              queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/timeline'] });
            },
          }
        );

        closeModal();
      },
    });
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
        <Flex css={circleStyle(color ?? '')}>
          {BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color ?? '')}
        </Flex>

        {isEditable ? (
          <CommandButton
            type={'submit'}
            variant="fourth"
            commandKey={isEditable ? 'S' : 'E'}
            size="xSmall"
            disabled={!isChanged}>
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
            <Button variant="tertiary" size="small" onClick={handleBlockDelete}>
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
            defaultSelectedDate={new Date(startDate ?? '')}
            defaultEndDate={new Date(endDate ?? '')}
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
