import IcCloudUpload from '@/common/asset/svg/ic_cloud_upload.svg?react';
import IcPaper from '@/common/asset/svg/ic_paper.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import FileItem from '@/page/archiving/index/component/TimeBlockBar/UploadedFiles/FileItem/FileItem';

interface UploadedFileProps {
  isEdit: boolean;
}

const UPLOADED_FILE_LIST = [
  { id: 1, title: '세상에서 제일 긴 제목을 지을거에요 나는', capacity: '2.4 MB' },
  { id: 2, title: 'OT 인수인계', capacity: '2.9 MB' },
  { id: 3, title: '엄마 나는 토스에 가고 싶어요', capacity: '10.7 MB' },
];

const UploadedFile = ({ isEdit }: UploadedFileProps) => {
  return (
    <Flex styles={{ direction: 'column', gap: '1.8rem', width: '100%' }}>
      <Flex styles={{ gap: '0.8rem', align: 'center' }}>
        <IcPaper width={16} height={16} />
        <Text tag="body6">업로드된 파일</Text>
      </Flex>
      {isEdit && (
        <Button variant="outline" size="medium" style={{ width: '100%' }}>
          <IcCloudUpload width={16} height={16} />
          파일 업로드
        </Button>
      )}
      <Flex tag="ul" styles={{ direction: 'column', gap: '0.8rem', width: '100%' }}>
        {UPLOADED_FILE_LIST.map((data) => (
          <FileItem key={data.id} title={data.title} capacity={data.capacity} isEdit={isEdit} />
        ))}
      </Flex>
    </Flex>
  );
};

export default UploadedFile;
