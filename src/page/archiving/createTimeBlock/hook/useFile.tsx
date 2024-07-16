import { useCallback, useRef } from 'react';

import useGetFileQuery from '@/shared/hook/useGetFileQuery';
import { usePutUploadMutation } from '@/shared/hook/usePutUploadMutation';

interface useFileProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  setFileUrls: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

const useFile = ({ files, onFilesChange, setFileUrls }: useFileProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { mutateAsync: uploadToS3 } = usePutUploadMutation();
  const { data: fileData, isLoading } = useGetFileQuery(files);

  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
      if (!newFiles) return;
      const fileArray = Array.from(newFiles);
      onFilesChange([...files, ...fileArray]);

      if (!isLoading && fileData) {
        const fileUrlMap = new Map<string, string>();
        for (let index = 0; index < fileArray.length; index++) {
          const file = fileArray[index];
          const fileInfo = fileData[index];
          const fileName = fileInfo?.fileName;
          const presignedUrl = fileInfo?.url;
          if (file && presignedUrl) {
            try {
              await uploadToS3({ presignedUrl, file });
              fileUrlMap.set(fileName, presignedUrl);
            } catch (error) {
              console.error(`Error uploading file ${file.name}:`, error);
            }
          }
        }
        setFileUrls((prevUrls) => new Map([...Array.from(prevUrls), ...Array.from(fileUrlMap)]));
      }
    },
    [files, onFilesChange, fileData, isLoading, uploadToS3, setFileUrls]
  );

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(event.target.files);
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      handleFiles(event.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleFileDelete = useCallback(
    (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);
      onFilesChange(newFiles);
    },
    [files, onFilesChange]
  );

  return {
    fileInputRef,
    handleFileChange,
    handleDragOver,
    handleDrop,
    handleFileDelete,
  };
};

export default useFile;
