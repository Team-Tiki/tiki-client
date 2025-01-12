import { IcCloudUpload, IcPaper } from '@tiki/icon';
import { Button, Flex, Text } from '@tiki/ui';

import { listHeaderStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import FileItem from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss/FileItem/FileItem';

import { useDrawerContent } from '@/shared/store/drawer';

interface UploadedDocumentsProps {
  isEditable: boolean;
}

const UploadedDocuments = ({ isEditable }: UploadedDocumentsProps) => {
  const content = useDrawerContent();

  console.log(content?.documents);

  return (
    <Flex styles={{ direction: 'column', gap: '1.8rem', width: '100%' }}>
      <Flex styles={{ gap: '0.8rem', align: 'center' }}>
        <IcPaper width={16} height={16} />
        <Text tag="body6" css={listHeaderStyle}>
          업로드된 파일
        </Text>
      </Flex>
      {isEditable && (
        <Button variant="outline" size="medium" style={{ width: '100%' }}>
          <IcCloudUpload width={16} height={16} />
          파일 업로드
        </Button>
      )}
      <Flex tag="ul" styles={{ direction: 'column', gap: '0.8rem', width: '100%' }}>
        {content?.documents?.map((data) => (
          <FileItem
            key={data.documentId}
            title={data.fileName}
            capacity={'10.4 MB'}
            isEditable={isEditable}
            timeBlockId={content.timeBlockId}
            tagId={data.tagId}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default UploadedDocuments;
