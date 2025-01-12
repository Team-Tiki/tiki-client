import { IcClose } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

import { useQueryClient } from '@tanstack/react-query';

import {
  circleStyle,
  closeBtnStyle,
  containerStyle,
  fileCapacityStyle,
  fileTitleStyle,
} from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss/FileItem/FileItem.style';
import { selectFileIc } from '@/page/archiving/index/util/selectFileIc';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';

interface FileItemProps {
  title: string;
  capacity: string;
  isEditable: boolean;
  timeBlockId: number;
  tagId: number;
}

const FileItem = ({ title, capacity, isEditable, timeBlockId, tagId }: FileItemProps) => {
  const fileType = title.split('.')[title.split('.').length - 1];

  const queryClient = useQueryClient();

  const { mutate } = $api.useMutation('delete', '/api/v1/teams/{teamId}/time-block/{timeBlockId}/tags', {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/teams/{teamId}/time-block/{timeBlockId}'],
      });
    },
  });

  const teamId = useInitializeTeamId();

  const handleFileDeleteButtonClick = () => {
    console.log(teamId, timeBlockId, tagId);
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
        onSuccess: () => console.log('태그 삭제 성공'),
      }
    );
  };

  return (
    <li css={containerStyle}>
      <Flex styles={{ gap: '1.2rem' }}>
        <Flex css={circleStyle}>{selectFileIc(fileType)}</Flex>
        <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
          <Text tag="body8" css={fileTitleStyle}>
            {title}
          </Text>
          <Text tag="body8" css={fileCapacityStyle}>
            {capacity}
          </Text>
        </Flex>
      </Flex>

      {isEditable && <IcClose width={16} height={16} css={closeBtnStyle} onClick={handleFileDeleteButtonClick} />}
    </li>
  );
};

export default FileItem;
