import { useCallback, useRef } from 'react';

interface useFileProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
}

const useFile = ({ files, onFilesChange }: useFileProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return;
      const fileArray = Array.from(newFiles);
      // 중복된 파일 제거
      const uniqueFiles = fileArray.filter((newFile) => !files.some((file) => file.name === newFile.name));
      onFilesChange([...files, ...uniqueFiles]);
    },
    [files, onFilesChange]
  );

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, handleNewFilesCallback?: (newFiles: File[]) => void) => {
      handleFiles(event.target.files);
      if (handleNewFilesCallback) {
        handleNewFilesCallback(Array.from(event.target.files || []));
      }
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>, handleNewFilesCallback?: (newFiles: File[]) => void) => {
      event.preventDefault();
      handleFiles(event.dataTransfer.files);
      if (handleNewFilesCallback) {
        handleNewFilesCallback(Array.from(event.dataTransfer.files || []));
      }
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
