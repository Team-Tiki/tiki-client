import { Button, Label, scrollStyle } from '@tiki/ui';

import { SetStateAction } from 'react';

import File from '@/page/handoverNote/component/File/File';
import {
  fileBoxStyle,
  labelStyle,
  layoutStyle,
  noteWrapperStyle,
  textareaStyle,
} from '@/page/handoverNote/component/style';
import { CustomNoteData } from '@/page/handoverNote/type/note';

import { FileType } from '@/shared/component/FileImportModal/FileImportModal';
import { PLACEHOLDER } from '@/shared/constant/form';
import { useOpenModal } from '@/shared/store/modal';
import { downloadDocument } from '@/shared/util/document';

interface CustomProps {
  data?: CustomNoteData;
  setData?: React.Dispatch<SetStateAction<CustomNoteData>>;
}

const Custom = ({ data, setData }: CustomProps) => {
  const openModal = useOpenModal();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData?.((prev) => ({
      ...prev!,
      contents: event.target.value,
    }));
  };

  const handleDeleteFile = (e: React.MouseEvent, fileId: number) => {
    e.stopPropagation();

    setData?.((prev) => ({
      ...prev,
      documentList: prev?.documentList.filter((file) => file.id !== fileId),
    }));
  };

  const handleFileUpload = () => {
    openModal('file', {
      onUpload: (files: FileType[]) => {
        setData?.((prev) => ({
          ...prev,
          documentList: [
            ...(prev?.documentList || []),
            ...files.map((file) => ({
              id: file.documentId,
              fileName: file.name,
              fileUrl: file.url,
              capacity: file.capacity,
            })),
          ],
        }));
      },
    });
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]}>
      <div css={layoutStyle}>
        <textarea css={textareaStyle} placeholder={PLACEHOLDER.CUSTOM} value={data?.contents} onChange={handleChange} />
      </div>
      <div css={layoutStyle}>
        <Label id="file" css={labelStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <ul css={fileBoxStyle}>
          {data?.documentList?.map((file) => (
            <File
              key={file.id}
              file={file}
              onDelete={handleDeleteFile}
              onClick={() => downloadDocument(file.fileUrl, file.fileName)}
            />
          ))}
        </ul>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload}>
          파일 연동하기
        </Button>
      </div>
    </form>
  );
};

export default Custom;
