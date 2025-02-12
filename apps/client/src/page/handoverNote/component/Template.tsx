import { Button, Label, Textarea, scrollStyle } from '@tiki/ui';

import React, { SetStateAction, useRef, useState } from 'react';

import File from '@/page/handoverNote/component/File/File';
import { fileBoxStyle, labelStyle, layoutStyle, noteWrapperStyle } from '@/page/handoverNote/component/style';
import { TEMPLATE } from '@/page/handoverNote/constants/template';
import { TemplateNoteData } from '@/page/handoverNote/type/note';
import { resizeTextarea } from '@/page/handoverNote/util/resizeTextarea';

import { FileType } from '@/shared/component/FileImportModal/FileImportModal';
import { useOpenModal } from '@/shared/store/modal';

interface TemplateProps {
  data?: TemplateNoteData;
  setData?: React.Dispatch<SetStateAction<TemplateNoteData>>;
}

const Template = ({ data, setData }: TemplateProps) => {
  const [values, setValues] = useState<Record<string, string>>({
    answerWhatActivity: data?.answerWhatActivity || '',
    answerHowToPrepare: data?.answerHowToPrepare || '',
    answerWhatIsDisappointedThing: data?.answerWhatIsDisappointedThing || '',
    answerHowToFix: data?.answerHowToFix || '',
  });
  const textareaRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});

  const openModal = useOpenModal();

  const handleChange = (id: string) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));

    setData?.((prev) => ({
      ...prev!,
      [id]: event.target.value,
    }));

    resizeTextarea({ current: textareaRefs.current[id] });
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
      {TEMPLATE.map((item) => (
        <div key={item.id} css={layoutStyle}>
          <Label id={item.id} css={labelStyle}>
            {item.QUESTION}
          </Label>
          <Textarea
            id={item.id}
            rows={1}
            ref={(el) => (textareaRefs.current[item.id] = el)}
            placeholder={item.PLACEHOLDER}
            value={values[item.id]}
            onChange={handleChange(item.id)}
          />
        </div>
      ))}

      <div css={layoutStyle}>
        <Label id="file" css={labelStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <div css={fileBoxStyle}>
          {data?.documentList?.map((file) => <File key={file.fileName} file={file} onDelete={handleDeleteFile} />)}
        </div>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload} type="button">
          파일 연동하기
        </Button>
      </div>
    </form>
  );
};

export default Template;
