import { contentStyle } from '@/page/drive/index.style';

import FileGrid from '@/shared/component/FileGrid/FileGrid';
import { File } from '@/shared/type/file';

interface GridSectionProps {
  files: File[];
}

const GridSection = ({ files }: GridSectionProps) => {
  return (
    <div>
      <ul css={contentStyle}>
        {files.map((item) => (
          <FileGrid key={item.fileId} title={item.title} type={item.type} volume={item.volume} />
        ))}
      </ul>
    </div>
  );
};

export default GridSection;
