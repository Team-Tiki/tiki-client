import { useMutation } from '@tanstack/react-query';

import { AxiosError, isAxiosError } from 'axios';

import { putUploadToS3 } from '@/shared/api/extermal';

const MESSAGES = {
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.',
};

export const usePutUploadS3 = () => {
  return useMutation<string, AxiosError, { presignedUrl: string; file: File }>({
    mutationFn: ({ presignedUrl, file }) => putUploadToS3(presignedUrl, file),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.error('Axios error:', error.message);
      } else {
        console.error(MESSAGES.UNKNOWN_ERROR);
      }
    },
    onSuccess: (data) => {
      console.log('File uploaded successfully:', data);
    },
  });
};
