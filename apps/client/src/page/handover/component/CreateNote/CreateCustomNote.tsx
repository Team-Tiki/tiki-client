import { Button, Label, scrollStyle } from '@tiki/ui';

import { Dispatch, SetStateAction } from 'react';

import File from '@/page/handoverNote/component/File/File';
import {
  fileBoxStyle,
  labelStyle,
  layoutStyle,
  noteWrapperStyle,
  textareaStyle,
} from '@/page/handoverNote/component/style';
import { CustomNote } from '@/page/handoverNote/type/note';

import { FileType } from '@/shared/component/FileImportModal/FileImportModal';
import { PLACEHOLDER } from '@/shared/constant/form';
import { useOpenModal } from '@/shared/store/modal';

interface CustomProps {
  data: CustomNote;
  setData: Dispatch<SetStateAction<CustomNote>>;
}

const CreateCustomNote = ({ data, setData }: CustomProps) => {
  const openModal = useOpenModal();

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev) => ({
      ...prev,
      contents: e.target.value,
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
        setData((prev) => ({
          ...prev,
          documentList: [
            ...(prev.documentList || []),
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
    <div css={[noteWrapperStyle, scrollStyle]}>
      <div css={layoutStyle}>
        <textarea css={textareaStyle} placeholder={PLACEHOLDER.CUSTOM} onChange={handleTextareaChange} />
      </div>
      <div css={layoutStyle}>
        <Label id="file" css={labelStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <div css={fileBoxStyle}>
          {data?.documentList?.map((file) => <File key={file.id} file={file} onDelete={handleDeleteFile} />)}
        </div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload}>
          파일 연동하기
        </Button>
      </div>
    </div>
  );
};

export default CreateCustomNote;
