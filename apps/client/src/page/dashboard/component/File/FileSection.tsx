import { Flex } from '@tiki/ui';
import { hasKeyInObject } from '@tiki/utils';

import { useNavigate } from 'react-router-dom';

import { containerStyle } from '@/page/dashboard/component/File/FileSection.style';
import ItemAdder from '@/page/dashboard/component/ItemAdder/ItemAdder';
import { DocumentItem, FolderItem } from '@/page/drive/type';

import { $api } from '@/shared/api/client';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import FolderGrid from '@/shared/component/FileGrid/FolderGrid';
import { PATH } from '@/shared/constant/path';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { File } from '@/shared/type/file';
import { extractFileExtension } from '@/shared/util/file';

const FileSection = () => {
  const navigate = useNavigate();
  const teamId = useInitializeTeamId();

  const { data: fileData } = $api.useQuery('get', '/api/v1/teams/{teamId}/drive', {
    params: {
      path: {
        teamId,
      },
    },
  });

  const docDataList = fileData?.data?.documents || [];
  const folderDataList = fileData?.data?.folders || [];

  const allFileData = [...docDataList, ...folderDataList];

  return (
    <Flex css={containerStyle}>
      {!allFileData[0] && <ItemAdder path={PATH.DRIVE} />}
      {allFileData.map((item) => {
        if (hasKeyInObject(item, 'documentId')) {
          const file = item as DocumentItem;

          return (
            <FileGrid
              key={file.documentId}
              variant="secondary"
              {...file}
              type={extractFileExtension(file.name) as File}
              onClick={() => {
                navigate(PATH.DRIVE);
              }}
            />
          );
        } else if (hasKeyInObject(item, 'folderId')) {
          const folder = item as FolderItem;

          return (
            <FolderGrid
              key={folder.folderId}
              variant="secondary"
              name={folder.name}
              createdTime={folder.createdTime}
              path={folder.path}
              onClick={() => {
                navigate(PATH.DRIVE);
              }}
            />
          );
        }
      })}
    </Flex>
  );
};
export default FileSection;
