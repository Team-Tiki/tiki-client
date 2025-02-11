import { IcClose } from '@tiki/icon';
import { Flex } from '@tiki/ui';

import { SyntheticEvent, useRef, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import BlockInfo from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo';
import TaggedNotes from '@/page/archiving/index/component/TimeBlockBar/TaggedNotes/TaggedNotes';
import { closeBtnStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import UploadedDocuments from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss';
import { Block, BlockDetail, Documents } from '@/page/archiving/index/type/blockType';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerAction, useDrawerContent } from '@/shared/store/drawer';
import { useTimeBlockId } from '@/shared/store/timeBlockId';

export type BlockInfoType = {
  name: string;
  startDate: string;
  endDate: string;
  documents: Documents;
};

const TimeBlockBar = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { closeDrawer } = useDrawerAction();

  const timeBlockId = useTimeBlockId();
  const teamId = useInitializeTeamId();

  const queryClient = useQueryClient();
  const content = useDrawerContent();

  const initialData = useRef<Block & BlockDetail>(content);
  console.log(content);
  // 초기값과 수정된 데이터 비교해서 폼 제출여부 가능 여부 확인
  const canSubmit = JSON.stringify(initialData.current) !== JSON.stringify(content);

  const handleEditClick = () => {
    setIsEditable((prevState) => !prevState);
  };

  const { mutate: blockMutate, isSuccess: isBlockInfoPatchSuccess } = $api.useMutation(
    'patch',
    '/api/v1/teams/{teamId}/time-block/{timeBlockId}',
    {
      onSuccess: () => {
        handleEditClick();
        queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/timeline'] });
      },
    }
  );

  const { mutate: fileMutate } = $api.useMutation('post', '/api/v1/teams/{teamId}/time-block/{timeBlockId}', {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/teams/{teamId}/time-block/{timeBlockId}'],
      });
    },
  });

  const { mutate: tagMutate } = $api.useMutation('delete', '/api/v1/teams/{teamId}/time-block/{timeBlockId}/tags', {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/teams/{teamId}/time-block/{timeBlockId}'],
      });
    },
  });

  const handleSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault();

    blockMutate({
      params: {
        path: {
          teamId,
          timeBlockId,
        },
      },
      body: {
        name: content?.name ?? '',
        startDate: content?.startDate ?? '',
        endDate: content?.endDate ?? '',
      },
    });

    const initialTagIds = initialData.current?.documents.map((data) => data.tagId);
    const finalTagIds = content?.documents.map((data) => data.tagId);
    const deletedTagIds = initialTagIds?.filter((id) => !finalTagIds?.includes(id));

    if (deletedTagIds) {
      tagMutate({
        params: {
          path: {
            teamId,
            timeBlockId,
          },
          query: {
            tagId: deletedTagIds,
          },
        },
      });
    }

    const initialDocumentIds = initialData.current?.documents.map((data) => data.documentId);
    const documentIds = content?.documents.map((data) => data.documentId);
    const addDocumentIds = documentIds?.filter((id) => !initialDocumentIds?.includes(id));

    fileMutate({
      params: {
        path: { teamId, timeBlockId },
        query: { documentId: addDocumentIds ?? [] },
      },
    });
    // if(isBlockInfoPatchSuccess && ){
    //   initialData.current = {...blockInfo , documents: documentList};
    // }
  };

  return (
    <section>
      <IcClose width={16} height={16} css={closeBtnStyle} onClick={closeDrawer} />

      <Flex tag="form" styles={{ direction: 'column', gap: '3.6rem' }} onSubmit={handleSubmit}>
        <BlockInfo isEditable={isEditable} onEditClick={handleEditClick} canSubmit={canSubmit} />
        <TaggedNotes isEditable={isEditable} />
        <UploadedDocuments isEditable={isEditable} />
      </Flex>
    </section>
  );
};

export default TimeBlockBar;
