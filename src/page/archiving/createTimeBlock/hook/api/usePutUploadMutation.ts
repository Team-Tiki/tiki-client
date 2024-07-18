import { useMutation } from '@tanstack/react-query';

import { putUploadToS3 } from '@/shared/api/external';

export const usePutUploadMutation = () => {
  return useMutation({
    mutationFn: ({ presignedUrl, file }: { presignedUrl: string; file: File }) => putUploadToS3(presignedUrl, file),
  });
};
