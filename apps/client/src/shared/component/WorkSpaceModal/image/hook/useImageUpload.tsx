import { useRef, useState } from 'react';

import { useDeleteFileMutation } from '@/shared/component/TimeBlockModal/hook/api/useDeleteFileMutation';
import { usePutUploadMutation } from '@/shared/component/TimeBlockModal/hook/api/usePutUploadMutation';
import useGetFileQuery from '@/shared/hook/api/useGetFileQuery';
import { useWorkSpaceContext } from '@/shared/hook/common/useWorkSpaceContext';

const useImageUpload = () => {
  const [fileURL, setFileURL] = useState<string>('');
  const imgUploadInput = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const { mutate: uploadToS3Mutate } = usePutUploadMutation();
  const { mutate: deleteFileMutate } = useDeleteFileMutation();
  const { data: fileData, refetch: refetchFileData } = useGetFileQuery(file as File);

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
      if (data?.url) {
        handleFileUpload(selectedFile, data.url);
      }
    }
  };

  const handleImageRemove = () => {
    if (fileData?.fileName) {
      deleteFileMutate(
        { fileName: fileData.fileName },
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
