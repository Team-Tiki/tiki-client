import FileListHeader from '@/page/drive/component/FileListHeader/FileListHeader';
import FileListItem from '@/page/drive/component/FileListItem/FileListItem';

import ContentBox from '@/shared/component/ContentBox/ContentBox';
import { File } from '@/shared/type/file';

const DrivePage = () => {
  const data: File[] = [
    { fileId: 1, title: '최주용', volume: 3000, createdAt: '2024년 10월 14일 오전 10:43', type: 'jpg' },
    { fileId: 2, title: '김규홍', volume: 20000, createdAt: '2024년 10월 14일 오전 10:43', type: 'pdf' },
    { fileId: 3, title: '이채원', volume: 3000, createdAt: '2024년 10월 14일 오전 10:43', type: 'png' },
  ];

  return (
    <ContentBox variant="file" title="파일">
      <FileListHeader onSelectAll={() => {}} />
      <ul>
        {data.map((item) => (
          <FileListItem key={item.fileId} {...item} />
        ))}
      </ul>
    </ContentBox>
  );
};

export default DrivePage;
