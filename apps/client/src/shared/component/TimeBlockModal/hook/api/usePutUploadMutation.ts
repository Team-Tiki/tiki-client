import { useToastAction } from '@tiki/ui';

import { useMutation } from '@tanstack/react-query';

import { putUploadToS3 } from '@/shared/api/external';

export const usePutUploadMutation = () => {
  const { createToast } = useToastAction();

  return useMutation({
    mutationFn: ({ presignedUrl, file }: { presignedUrl: string; file: File }) => putUploadToS3(presignedUrl, file),

    onError: (error) => {
      createToast('파일은 50MB까지 업로드 가능합니다', 'error');

      console.error(error);
    },
  });
};
