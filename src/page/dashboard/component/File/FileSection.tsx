import Flex from '@/common/component/Flex/Flex';
import { scrollStyle } from '@/common/style/scroll';

import { dashboradScrollStyle } from '@/page/dashboard/DashboardPage.style';

import FileGrid from '@/shared/component/FileGrid/FileGrid';

import { FileData } from '@/mock/data/drive';

const FileSection = () => {
  return (
    <Flex css={[{ gap: '1.4rem', padding: '0 0 0.7rem', overflowX: 'scroll' }, scrollStyle, dashboradScrollStyle]}>
      {FileData.map((file) => {
        return (
          <FileGrid key={file.fileId} variant="secondary" title={file.title} type={file.type} volume={file.volume} />
        );
      })}
    </Flex>
  );
};

export default FileSection;
