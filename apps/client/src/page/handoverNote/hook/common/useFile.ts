import { ChangeEvent, useCallback, useState } from 'react';

const useFile = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
    }
  }, []);

  return { files, handleFileChange };
};

export default useFile;
