import { useRef, useState } from 'react';

import { $api } from '@/shared/api/client';
import { usePutUploadMutation } from '@/shared/component/TimeBlockModal/hook/api/usePutUploadMutation';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';
import { extractFileExtension } from '@/shared/util/file';

const useImageUpload = () => {
  const [fileURL, setFileURL] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const imgUploadInput = useRef<HTMLInputElement | null>(null);
  const fileExtension = file ? extractFileExtension(file.name) : '';

  const { mutate: uploadToS3Mutate } = usePutUploadMutation();
  const { mutate: deleteFileMutate } = $api.useMutation('post', '/api/v1/file');
  const { data: fileData } = $api.useQuery('get', '/api/v1/file/upload', {
    params: { query: { fileFormat: fileExtension } },
  });

  const { setFormData } = useWorkSpaceContext();

  const handleFileUpload = (fileData: File, presignedUrl: string) => {
    const newFileURL = URL.createObjectURL(fileData);
    setFileURL(newFileURL);

    uploadToS3Mutate(
      { presignedUrl, file: fileData },
      {
        onSuccess: (response) => {
          if (response) {
            setFormData({ fileKey: response });
          }
          URL.revokeObjectURL(newFileURL);
        },
        onError: (error) => {
          console.error(error);
          setFormData({ fileKey: '' });
        },
      }
    );
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setFileURL(URL.createObjectURL(selectedFile));
    setFormData({ fileKey: '', fileUrl: fileData?.data?.url });

    if (fileData?.data?.url) {
      handleFileUpload(selectedFile, fileData?.data?.url);
    }
  };

  const handleImageRemove = () => {
    if (!fileData?.data?.fileKey) return;

    deleteFileMutate(
      { body: { fileKey: fileData.data.fileKey } },
      {
        onSuccess: () => {
          URL.revokeObjectURL(fileURL);

          setFileURL('');
          setFile(null);
          setFormData({ fileKey: '', fileUrl: '' });

          if (imgUploadInput.current) {
            imgUploadInput.current.value = '';
          }
        },
      }
    );
  };

  return {
    fileURL,
    imgUploadInput,
    handleImageChange,
    handleImageRemove,
  };
};

export default useImageUpload;
