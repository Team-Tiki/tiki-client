import { IcClose } from '@tiki/icon';
import { Flex } from '@tiki/ui';

import { SyntheticEvent, useEffect, useRef, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import BlockInfo from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo';
import TaggedNotes from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNotes';
import { closeBtnStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import UploadedDocuments from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerAction, useDrawerContent } from '@/shared/store/drawer';
import { useTimeBlockId } from '@/shared/store/timeBlockId';

export type BlockInfoType = {
  name: string;
  startDate: string;
  endDate: string;
};

const TimeBlockBar = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { closeDrawer } = useDrawerAction();

  const timeBlockId = useTimeBlockId();
  const teamId = useInitializeTeamId();

  const queryClient = useQueryClient();
  const { name, startDate, endDate } = { ...useDrawerContent() };

  const initialData = useRef({ name, startDate, endDate });

  const [blockInfo, setBlockInfo] = useState({} as BlockInfoType);

  // 초기값과 수정된 데이터 비교해서 폼 제출여부 가능 여부 확인
  const canSubmit = JSON.stringify(initialData.current) !== JSON.stringify(blockInfo);

  useEffect(() => {
    setBlockInfo({
      name: name ?? '',
      startDate: startDate ?? '',
      endDate: endDate ?? '',
    });
  }, [name, startDate, endDate]);

  const handleEditClick = () => {
    setIsEditable((prevState) => !prevState);
  };

  const { mutate } = $api.useMutation('patch', '/api/v1/teams/{teamId}/time-block/{timeBlockId}', {
    onSuccess: () => {
      handleEditClick();
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/timeline'] });
      initialData.current = blockInfo;
    },
  });

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
    <section>
      <IcClose width={16} height={16} css={closeBtnStyle} onClick={closeDrawer} />

      <Flex tag="form" styles={{ direction: 'column', gap: '3.6rem' }} onSubmit={handleSubmit}>
        <BlockInfo
          isEditable={isEditable}
          onEditClick={handleEditClick}
          canSubmit={canSubmit}
          setBlockInfo={setBlockInfo}
          {...blockInfo}
        />
        <TaggedNotes isEditable={isEditable} />
        <UploadedDocuments isEditable={isEditable} />
      </Flex>
    </section>
  );
};

export default TimeBlockBar;
