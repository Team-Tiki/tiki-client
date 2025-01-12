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
import { useBlockDetailInfoQuery } from '@/page/archiving/index/hook/api/quries';
import { Document } from '@/page/archiving/index/type/blockType';
import { selectFileIc } from '@/page/archiving/index/util/selectFileIc';

import { $api } from '@/shared/api/client';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { useDrawerAction, useDrawerContent } from '@/shared/store/drawer';
import { useTimeBlockId } from '@/shared/store/timeBlockId';

interface FileItemProps extends Omit<Document, 'documentId' | 'fileUrl'> {
  isEditable: boolean;
}

const FileItem = ({ fileName, capacity, isEditable, tagId }: FileItemProps) => {
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

  const fileType = fileName.split('.')[fileName.split('.').length - 1];

  const handleFileDeleteButtonClick = () => {
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

  return (
    <li css={containerStyle}>
      <Flex styles={{ gap: '1.2rem' }}>
        <Flex css={circleStyle}>{selectFileIc(fileType)}</Flex>
        <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
          <Text tag="body8" css={fileTitleStyle}>
            {fileName}
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
