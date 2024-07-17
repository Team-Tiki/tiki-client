import { useMutation } from '@tanstack/react-query';

import { deleteDocument } from '@/shared/api/archiving/document';
import { queryClient } from '@/shared/api/queryClient';

interface DeleteParams {
  teamId: number;
  documentId: number;
}

export const useDeleteDocumentMutation = () => {
  const deleteDocumentMutation = useMutation({
    mutationFn: ({ teamId, documentId }: DeleteParams) => deleteDocument(teamId, documentId),
    onSuccess: () => {
      console.log('문서 삭제 성공');
      queryClient.invalidateQueries({ queryKey: ['document'] });
    },
  });

  return deleteDocumentMutation;
};
