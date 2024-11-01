import { ChangeEvent, useCallback, useState } from 'react';

const useFile = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFiles((prev) => [...prev, selectedFile]);
    }
  }, []);
  return { files, handleFileChange };
};

export default useFile;
