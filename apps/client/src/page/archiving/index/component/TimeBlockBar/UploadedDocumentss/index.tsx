import { IcCloudUpload, IcPaper } from '@tiki/icon';
import { Button, Flex, Text } from '@tiki/ui';

import { listHeaderStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import FileItem from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss/FileItem/FileItem';
import { Block, BlockDetail } from '@/page/archiving/index/type/blockType';

import { useDrawerContent } from '@/shared/store/drawer';
import { useOpenModal } from '@/shared/store/modal';

interface UploadedDocumentsProps {
  isEditable: boolean;
}

const UploadedDocuments = ({ isEditable }: UploadedDocumentsProps) => {
  const openModal = useOpenModal();

  const { documents } = useDrawerContent() as Block & BlockDetail;

  return (
    <Flex styles={{ direction: 'column', gap: '1.8rem', width: '100%' }}>
      <Flex styles={{ gap: '0.8rem', align: 'center' }}>
        <IcPaper width={16} height={16} />
        <Text tag="body6" css={listHeaderStyle}>
          연동된 파일
        </Text>
      </Flex>
      {isEditable && (
        <Button
          variant="outline"
          size="medium"
          style={{ width: '100%' }}
          onClick={() =>
            openModal('timeblock-file', {
              onUploadFile: () => {
                console.log('이거냐 ㅅㅂ?');
              },
            })
          }>
          <IcCloudUpload width={16} height={16} />
          드라이브 파일 연동
        </Button>
      )}
      <Flex tag="ul" styles={{ direction: 'column', gap: '0.8rem', width: '100%' }}>
        {documents.map((data) => (
          <FileItem key={data.documentId} isEditable={isEditable} {...data} />
        ))}
      </Flex>
    </Flex>
  );
};

export default UploadedDocuments;
