import { useCallback, useRef, useState } from 'react';

import { getFile } from '@/shared/api/file/upload';
import { Files } from '@/shared/api/time-blocks/team/time-block/type';
import { usePutUploadMutation } from '@/shared/component/TimeBlockModal/hook/api/usePutUploadMutation';
import { extractFileExtension } from '@/shared/util/file';

interface useFileProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  setFileUrls: React.Dispatch<React.SetStateAction<Files>>;
  setUploadStatus: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

const useFile = ({ files, onFilesChange, setUploadStatus, setFileUrls }: useFileProps) => {
  const [isDragover, setIsDragover] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { mutateAsync: uploadToS3 } = usePutUploadMutation();

  const handleFiles = useCallback(
    async (newFiles: FileList | null) => {
      if (!newFiles) return;
      const fileArray = Array.from(newFiles);
      const uniqueNewFiles = fileArray.filter(
        (newFile) => !files.some((file) => file.name === newFile.name && file.size === newFile.size)
      );
      onFilesChange([...files, ...uniqueNewFiles]);

      const fileUrlMap: Files = {};
      const newUploadStatus: { [key: string]: boolean } = {};

      for (let index = 0; index < uniqueNewFiles.length; index++) {
        const file = uniqueNewFiles[index];
        const fileExtension = extractFileExtension(file.name);
        const fileData = await getFile(fileExtension);
        const fileName = file.name;
        newUploadStatus[fileName] = false;
        setUploadStatus((prevStatus) => ({ ...prevStatus, ...newUploadStatus }));

        const presignedUrl = fileData?.url;
        if (file && presignedUrl) {
          const start = Date.now();
          const uploadedFileUrl = await uploadToS3({ presignedUrl, file });
          const duration = Date.now() - start;
          const delay = Math.max(0, 2000 - duration);
          setTimeout(() => {
            if (uploadedFileUrl) {
              fileUrlMap[fileName] = uploadedFileUrl;
              newUploadStatus[fileName] = true;
              setUploadStatus((prevStatus) => ({ ...prevStatus, ...newUploadStatus }));
              setFileUrls((prevUrls) => ({ ...prevUrls, ...fileUrlMap }));
            }
          }, delay);
        }
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [files, onFilesChange, uploadToS3, setUploadStatus, setFileUrls]
  );

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(event.target.files);
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragover(true);
  }, []);

  const handleDragLeave = () => {
    setIsDragover(false);
  };

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      handleFiles(event.dataTransfer.files);

      setIsDragover(false);
    },
    [handleFiles]
  );

  return {
    fileInputRef,
    handleFileChange,
    handleDragOver,
    handleDrop,
    handleFiles,
    handleDragLeave,
    isDragover,
  };
};

export default useFile;
