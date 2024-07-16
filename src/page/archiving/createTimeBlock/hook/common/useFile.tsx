import { usePutUploadMutation } from '@/page/archiving/createTimeBlock/hook/api/usePutUploadMutation';

import { useCallback, useRef } from 'react';

import { getFile } from '@/shared/api/archiving/timeBlock';

interface useFileProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  setFileUrls: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

const useFile = ({ files, onFilesChange, setFileUrls }: useFileProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { mutateAsync: uploadToS3 } = usePutUploadMutation();

  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
      if (!newFiles) return;
      const fileArray = Array.from(newFiles);
      onFilesChange([...files, ...fileArray]);

      const fileUrlMap = new Map<string, string>();

      for (let index = 0; index < fileArray.length; index++) {
        const file = fileArray[index];

        const fileData = await getFile(file.name);
        const fileName = fileData?.fileName;
        const presignedUrl = fileData?.url;
        if (file && presignedUrl) {
          await uploadToS3({ presignedUrl, file });
          fileUrlMap.set(fileName, presignedUrl);
        }
      }

      setFileUrls((prevUrls) => new Map([...Array.from(prevUrls), ...Array.from(fileUrlMap)]));
    },
    [files, onFilesChange, uploadToS3, setFileUrls]
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
