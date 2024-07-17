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
      onFilesChange([...files, ...fileArray]);
    },
    [files, onFilesChange]
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

  return {
    fileInputRef,
    handleFileChange,
    handleDragOver,
    handleDrop,
  };
};

export default useFile;
