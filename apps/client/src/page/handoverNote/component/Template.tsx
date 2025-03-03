import { Button, Label, Textarea, scrollStyle } from '@tiki/ui';

import React, { SetStateAction, useRef } from 'react';

import File from '@/page/handoverNote/component/File/File';
import { fileBoxStyle, labelStyle, layoutStyle, noteWrapperStyle } from '@/page/handoverNote/component/style';
import { TEMPLATE } from '@/page/handoverNote/constants';
import { TemplateNoteData } from '@/page/handoverNote/type/note';
import { resizeTextarea } from '@/page/handoverNote/util/resizeTextarea';

import { FileType } from '@/shared/component/FileImportModal/FileImportModal';
import { useOpenModal } from '@/shared/store/modal';
import { downloadDocument } from '@/shared/util/document';

interface TemplateProps {
  data?: TemplateNoteData;
  setData?: React.Dispatch<SetStateAction<TemplateNoteData>>;
}

const Template = ({ data, setData }: TemplateProps) => {
  const textareaRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});

  const openModal = useOpenModal();

  const templateContent = [
    data?.answerWhatActivity,
    data?.answerHowToPrepare,
    data?.answerWhatIsDisappointedThing,
    data?.answerHowToFix,
  ];

  const handleChange = (id: string) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData?.((prev) => ({
      ...prev!,
      [id]: event.target.value,
    }));

    const textarea = textareaRefs.current[id];
    resizeTextarea({ current: textarea });

    const parent = textarea?.parentElement;
    if (parent) {
      parent.style.height = `${textarea.scrollHeight + 25}px`;
    }
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
      selectedFiles: data?.documentList.map((document) => ({
        documentId: document.id,
        name: document.fileName,
        url: document.fileUrl,
        capacity: document.capacity,
        createdTime: '',
      })),
      onUpload: (files: FileType[]) => {
        setData?.((prev) => ({
          ...prev,
          documentList: files.map((file) => ({
            id: file.documentId,
            fileName: file.name,
            fileUrl: file.url,
            capacity: file.capacity,
          })),
        }));
      },
    });
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]}>
      {TEMPLATE.map((item, index) => (
        <div key={item.id} css={layoutStyle}>
          <Label id={item.id} css={labelStyle}>
            {item.QUESTION}
          </Label>
          <Textarea
            id={item.id}
            rows={1}
            ref={(el) => (textareaRefs.current[item.id] = el)}
            placeholder={item.PLACEHOLDER}
            value={templateContent[index]}
            onChange={handleChange(item.id)}
          />
        </div>
      ))}

      <div css={layoutStyle}>
        <Label id="file" css={labelStyle}>
          드라이브에서 연동하고 싶은 파일을 선택해주세요.
        </Label>
        <ul css={fileBoxStyle}>
          {data?.documentList?.map((file) => (
            <File
              key={file.fileName}
              file={file}
              onDelete={handleDeleteFile}
              onClick={() => downloadDocument(file.fileUrl, file.fileName)}
            />
          ))}
        </ul>
        <Button variant="tertiary" css={{ width: '16rem' }} onClick={handleFileUpload} type="button">
          파일 연동하기
        </Button>
      </div>
    </form>
  );
};

export default Template;
