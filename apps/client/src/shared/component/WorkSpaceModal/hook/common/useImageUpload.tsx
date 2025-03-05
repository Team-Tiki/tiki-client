import { useRef, useState } from 'react';

import { $api } from '@/shared/api/client';
import { usePutUploadMutation } from '@/shared/component/TimeBlockModal/hook/api/usePutUploadMutation';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';
import { extractFileExtension, getFileKey } from '@/shared/util/file';

const useImageUpload = () => {
  const [fileURL, setFileURL] = useState<string>('');
  const imgUploadInput = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const fileExtension = file ? extractFileExtension(file.name) : '';

  const { mutate: uploadToS3Mutate } = usePutUploadMutation();
  const { mutate: deleteFileMutate } = $api.useMutation('post', '/api/v1/file');
  const { data: fileData, refetch: refetchFileData } = $api.useQuery('get', '/api/v1/file/upload', {
    params: { query: { fileFormat: fileExtension }, options: { enabled: !!file } },
  });

  const { setFormData } = useWorkSpaceContext();

  const handleFileUpload = (selectedFile: File, presignedUrl: string) => {
    const newFileURL = URL.createObjectURL(selectedFile);
    setFileURL(newFileURL);
    uploadToS3Mutate(
      { presignedUrl, file: selectedFile },
      {
        onSuccess: (uploadedFileUrl) => {
          URL.revokeObjectURL(newFileURL);
          if (uploadedFileUrl) {
            setFileURL(uploadedFileUrl);
            setFormData({ fileUrlData: uploadedFileUrl });
          }
        },
      }
    );
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFileURL(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
      setFormData({ fileUrlData: '' });

      const { data } = await refetchFileData();
      if (data?.data?.url) {
        handleFileUpload(selectedFile, data.data.url);
      }
    }
  };

  const handleImageRemove = () => {
    if (fileData?.data?.fileKey) {
      deleteFileMutate(
        {
          body: { fileKey: getFileKey(fileURL) },
        },
        {
          onSuccess: () => {
            URL.revokeObjectURL(fileURL);
            setFileURL('');
            setFile(null);
            setFormData({ fileUrlData: '' });
            if (imgUploadInput.current) {
              imgUploadInput.current.value = '';
            }
          },
        }
      );
    }
  };

  return {
    fileURL,
    imgUploadInput,
    handleImageChange,
    handleImageRemove,
  };
};

export default useImageUpload;
