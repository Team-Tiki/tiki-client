import { IcClose } from '@tiki/icon';

import { useQueryClient } from '@tanstack/react-query';

import { deleteBtnStyle } from '@/page/archiving/index/component/TimeBlockBar/DeleteFileButton/DeleteFileButton.style';
import { useBlockDetailInfoQuery } from '@/page/archiving/index/hook/api/quries';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerAction, useDrawerContent } from '@/shared/store/drawer';
import { useTimeBlockId } from '@/shared/store/timeBlockId';

interface DeleteFileButtonProps {
  tagId: number;
}

const DeleteFileButton = ({ tagId }: DeleteFileButtonProps) => {
  const queryClient = useQueryClient();
  const timeBlockId = useTimeBlockId();
  const teamId = useInitializeTeamId();
  const { openDrawer } = useDrawerAction();
  const content = useDrawerContent();

  const { data } = useBlockDetailInfoQuery(timeBlockId);

  const { mutate } = $api.useMutation('delete', '/api/v1/teams/{teamId}/time-block/{timeBlockId}/tags', {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/teams/{teamId}/time-block/{timeBlockId}'],
      });
    },
  });

  const handleFileDeleteButtonClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    mutate(
      {
        params: {
          path: {
            teamId,
            timeBlockId,
          },
          query: {
            tagId: [tagId],
          },
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/time-block/{timeBlockId}'] });
          content &&
            openDrawer({
              ...content,
              documents: data?.data?.documents ?? [],
            });
        },
      }
    );
  };

  return <IcClose width={32} height={32} css={deleteBtnStyle} onClick={handleFileDeleteButtonClick} />;
};

export default DeleteFileButton;
