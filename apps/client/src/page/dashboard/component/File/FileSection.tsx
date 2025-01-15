import { Flex, scrollStyle } from '@tiki/ui';

import { dashboradScrollStyle } from '@/page/dashboard/DashboardPage.style';
import ItemAdder from '@/page/dashboard/component/ItemAdder/ItemAdder';

import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { PATH } from '@/shared/constant/path';
import { File } from '@/shared/type/file';
import { extractFileExtension } from '@/shared/util/file';

import { FileData } from '@/mock/data/drive';

const FileSection = () => {
  return (
    <Flex css={[{ gap: '1.4rem', padding: '0 0 0.7rem', overflowX: 'scroll' }, scrollStyle, dashboradScrollStyle]}>
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
