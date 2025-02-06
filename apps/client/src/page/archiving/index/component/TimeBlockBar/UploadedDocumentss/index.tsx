import { IcCloudUpload, IcPaper } from '@tiki/icon';
import { Button, Flex, Text } from '@tiki/ui';

import { listHeaderStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import FileItem from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss/FileItem/FileItem';
import { useBlockDetailInfoQuery } from '@/page/archiving/index/hook/api/quries';

import { useOpenModal } from '@/shared/store/modal';
import { useTimeBlockId } from '@/shared/store/timeBlockId';

interface UploadedDocumentsProps {
  isEditable: boolean;
}

const UploadedDocuments = ({ isEditable }: UploadedDocumentsProps) => {
  const timeBlockId = useTimeBlockId();
  const openModal = useOpenModal();

  const { data } = useBlockDetailInfoQuery(timeBlockId);

  return (
    <>
      {!!data?.data?.documents.length && (
        <Flex styles={{ direction: 'column', gap: '1.8rem', width: '100%' }}>
          <Flex styles={{ gap: '0.8rem', align: 'center' }}>
            <IcPaper width={16} height={16} />
            <Text tag="body6" css={listHeaderStyle}>
              업로드된 파일
            </Text>
          </Flex>
          {isEditable && (
            <Button
              variant="outline"
              size="medium"
              style={{ width: '100%' }}
              onClick={() => openModal('timeblock-file')}>
              <IcCloudUpload width={16} height={16} />
              파일 업로드
            </Button>
          )}
          <Flex tag="ul" styles={{ direction: 'column', gap: '0.8rem', width: '100%' }}>
            {data.data.documents.map((data) => (
              <FileItem
                key={data.documentId}
                fileName={data.fileName}
                capacity={data.capacity}
                isEditable={isEditable}
                tagId={data.tagId}
                fileUrl={data.fileUrl}
              />
            ))}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default UploadedDocuments;
