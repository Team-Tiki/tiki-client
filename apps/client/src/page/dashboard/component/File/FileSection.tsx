import { Flex, scrollStyle } from '@tiki/ui';
import { hasKeyInObject } from '@tiki/utils';

import { dashboradScrollStyle } from '@/page/dashboard/DashboardPage.style';
import { DocumentItem, FolderItem } from '@/page/drive/type';
import ItemAdder from '@/page/dashboard/component/ItemAdder/ItemAdder';

import { $api } from '@/shared/api/client';
import FileGrid from '@/shared/component/FileGrid/FileGrid';
import FolderGrid from '@/shared/component/FileGrid/FolderGrid';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { PATH } from '@/shared/constant/path';
import { File } from '@/shared/type/file';
import { extractFileExtension } from '@/shared/util/file';

const FileSection = () => {
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
    <Flex css={[{ gap: '1.4rem', padding: '0 0 0.7rem', overflowX: 'scroll' }, scrollStyle, dashboradScrollStyle]}>
      {allFileData.map((item) => {
        if (hasKeyInObject(item, 'documentId')) {
          const file = item as DocumentItem;

          return (
            <FileGrid
              key={file.documentId}
              variant="secondary"
              name={file.name}
              type={extractFileExtension(file.name) as File}
              capacity={file.capacity}
              createdTime={file.createdTime}
              url={file.url}
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
            />
          );
        }
      {!FileData[0] && <ItemAdder path={PATH.DRIVE} />}
      {FileData.map((file) => {
        return (
          <FileGrid
            key={file.documentId}
            variant="secondary"
            name={file.name}
            type={extractFileExtension(file.name) as File}
            capacity={file.capacity}
            createdTime={file.createdTime}
            url={file.url}
          />
        );
      })}
    </Flex>
  );
};

export default FileSection;
