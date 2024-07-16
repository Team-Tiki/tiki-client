import { useCallback, useRef } from 'react';

import useGetFileData from '@/shared/hook/useGetFileQuery';
import { usePutUploadMutation } from '@/shared/hook/usePutUploadMutation';

interface useFileProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  setFileUrls: (urls: Map<string, string>) => void;
}

const useFile = ({ files, onFilesChange, setFileUrls }: useFileProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { mutate: uploadToS3 } = usePutUploadMutation();
  const { data: fileData } = useGetFileData(files);

  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
      if (!newFiles) return;
      const fileArray = Array.from(newFiles);
      const uniqueFiles = fileArray.filter((newFile) => !files.some((file) => file.name === newFile.name));
      onFilesChange([...files, ...uniqueFiles]);

      if (fileData) {
        const fileUrlMap = new Map<string, string>();
        for (let index = 0; index < fileData.length; index++) {
          const file = uniqueFiles[index];
          const presignedUrl = fileData[index]?.url;
          if (file && presignedUrl) {
            await uploadToS3(
              { presignedUrl, file },
              {
                onSuccess: () => {
                  fileUrlMap.set(file.name, presignedUrl); // 업로드 후 URL 저장
                },
              }
            );
          }
        }
        setFileUrls(fileUrlMap);
      }
    },
    [files, onFilesChange, fileData, uploadToS3, setFileUrls]
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
