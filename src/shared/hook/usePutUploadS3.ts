import { useMutation } from '@tanstack/react-query';

import { putUploadToS3 } from '@/shared/api/extermal';

/*export const usePutUploadS3 = () => {
  return useMutation<string, AxiosError, { presignedUrl: string; file: File }>({
    mutationFn: async ({ presignedUrl, file }) => {
      return putUploadToS3(presignedUrl, file);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        console.error('Axios error:', error.message);
      } else {
        console.error(MESSAGES.UNKNOWN_ERROR);
      }
    },
    onSuccess: (data) => {
      console.log('', data);
    },
  });
};
*/

/*export const usePutUploadS3 = () => {
  return useMutation<string, Error, UploadVariables>({
    mutationFn: ({ presignedUrl, file }: UploadVariables) => putUploadToS3(presignedUrl, file),
  });
};
*/

export const usePutUploadMutation = () => {
  return useMutation;
};
