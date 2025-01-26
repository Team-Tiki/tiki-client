import { IcFileUpload } from '@tiki/icon';
import { Button, Flex, Text, scrollStyle, useToastAction } from '@tiki/ui';
import { useEffect, useState } from 'react';

import { $api } from '@/shared/api/client';
import { DocumentDetail } from '@/shared/component/TimeBlockModal';
import { boxStyle } from '@/shared/component/TimeBlockModal/component/UploadModal/File/AppendFile/AppendFile.style';
import useFile from '@/shared/component/TimeBlockModal/hook/common/useFile';
import UploadedFileItem from '@/shared/component/UploadedFileItem/UploadedFileItem';


import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { useInitializeTeamId } from '@/shared/hook/common/useInitializeTeamId';
import { convertToKB, getFileVolume } from '@/shared/util/file';

interface AppendFileProps {
  selectedFiles: DocumentDetail[];
  onUploadFile: (files: DocumentDetail[]) => void;
}

interface FileWithDocumentId extends File {
  documentId?: number;
}

const AppendFile = ({ selectedFiles, onUploadFile }: AppendFileProps) => {
  const [files, setFiles] = useState<FileWithDocumentId[]>([]);
  const [uploadStatus, setUploadStatus] = useState<{ [key: string]: boolean }>({});
  const [fileUrls, setFileUrls] = useState<Files>({});

  const teamId = useInitializeTeamId();
  const { createToast } = useToastAction();

  const { mutate: postDocumentMutation } = $api.useMutation('post', '/api/v1/teams/{teamId}/documents');
  const { mutate: deleteDocumentMutation } = $api.useMutation('delete', '/api/v1/teams/{teamId}/documents');

  const { fileInputRef, handleFileChange, handleDragOver, handleDrop } = useFile({
    files,
    onFilesChange: (newFiles) => {
      setFiles((prevFiles) => {
        const uniqueFiles = newFiles.filter(
          (newFile) => !prevFiles.some((file) => file.name === newFile.name && file.size === newFile.size)
        );

        const updatedFiles = [...prevFiles, ...uniqueFiles];

        return updatedFiles;
      });
    },
    setFileUrls,
    setUploadStatus,
  });


  const handleUploadFile = (validFiles: FileWithDocumentId[]) => {
    const documentDetailList: DocumentDetail[] = [];

    postDocumentMutation(
      {
        params: {
          path: {
            teamId,
          },
        },
        body: {
          documents: validFiles.map((file) => ({
            fileName: file.name,
            fileUrl: fileUrls[file.name] || '',
            fileKey: file.name,
            capacity: convertToKB(file.size),
          })),
        },
      },
      {
        onSuccess: (data) => {
          data?.data?.response?.forEach((document, index) => {
            documentDetailList.push({
              documentId: document.documentId,
              name: validFiles[index].name,
              url: fileUrls[validFiles[index].name] || '',
              capacity: convertToKB(validFiles[index].size),
              createdTime: new Date().toISOString(),
            });
          });

          onUploadFile(documentDetailList);
          createToast('파일이 성공적으로 업로드되었습니다.', 'success');
        },
        onError: (error) => {
          createToast(`업로드 실패: ${error.message}`, 'error');
        },
      }
    );
  };

  const handleDelete = (fileName: string, documentId: number) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);

    const updatedSelectedFiles = selectedFiles.filter((file) => file.name !== fileName);
    onUploadFile(updatedSelectedFiles);

    setFileUrls((prevUrls) => {
      const updatedUrls = { ...prevUrls };
      delete updatedUrls[fileName];
      return updatedUrls;
    });

    setUploadStatus((prevStatus) => {
      const newStatus = { ...prevStatus };
      delete newStatus[fileName];
      return newStatus;
    });

    deleteDocumentMutation({
      params: {
        query: {
          documentId: [documentId],
        },
        path: {
          teamId,
        },
      },
    });
  };

  useEffect(() => {
    if (Object.keys(fileUrls).length > 0) {
      handleUploadFile(files);
    }
  }, [fileUrls]);

  return (
    <Flex styles={{ direction: 'column', width: '100%' }}>
      <Flex
        styles={{
          direction: 'column',
          justify: 'center',
          align: 'center',
          padding: '3.2rem 6.35rem',
          width: '100%',
        }}
        css={boxStyle}
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event)}
      >
        <Flex tag="form" styles={{ direction: 'column', align: 'center', justify: 'center' }}>
          <input type="file" multiple style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
          <IcFileUpload width={32} height={32} css={{ marginBottom: '1.2rem' }} />
          <Flex styles={{ direction: 'column', gap: '0.8rem', align: 'center', justify: 'center' }}>
            <Text tag="body6" css={{ marginBottom: '0.8rem' }}>
              업로드할 파일을 끌어다 놓으세요.
            </Text>
            <Text tag="body8">JPEG, PNG, PDF, Word 형식의 파일을 업로드할 수 있습니다.</Text>
            <Text tag="body8" css={{ marginBottom: '2rem' }}>
              최대 파일 크기는 50MB입니다.
            </Text>
          </Flex>

          <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
            파일 브라우저
          </Button>
        </Flex>
      </Flex>
      <div css={[scrollStyle, { maxHeight: '25rem', overflowY: 'auto' }]}>
        {files.map((file) => (
          <UploadedFileItem
            key={file.name}
            title={file.name}
            fileSize={getFileVolume(file.size || 0)}
            uploadedSize={getFileVolume(file.size || 0)}
            onDelete={() => handleDelete(file.name, file.documentId ?? 0)}
            isUploading={!uploadStatus[file.name]}
          />
        ))}
      </div>
    </Flex>
  );
};

export default AppendFile;