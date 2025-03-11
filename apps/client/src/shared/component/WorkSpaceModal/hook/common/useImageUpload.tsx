import { useRef, useState } from 'react';

import { useDeleteFileMutation } from '@/shared/component/TimeBlockModal/hook/api/useDeleteFileMutation';
import { usePutUploadMutation } from '@/shared/component/TimeBlockModal/hook/api/usePutUploadMutation';
import useGetFileQuery from '@/shared/hook/api/useGetFileQuery';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

const useImageUpload = () => {
  const [fileURL, setFileURL] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const imgUploadInput = useRef<HTMLInputElement | null>(null);

  const { mutate: uploadToS3Mutate } = usePutUploadMutation();
  const { mutate: deleteFileMutate } = useDeleteFileMutation();
  const { data: fileData, refetch: refetchFileData } = useGetFileQuery(file as File);

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
    setFormData({ fileKey: '', fileUrl: fileData?.url });

    const { data } = await refetchFileData();
    if (data?.url) {
      handleFileUpload(selectedFile, data.url);
    }
  };

  const handleImageRemove = () => {
    if (fileData?.fileKey) {
      deleteFileMutate(
        { fileKey: fileData.fileKey },
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
