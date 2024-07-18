import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteDocument } from '@/shared/api/documents/team/document';

interface DeleteParams {
  teamId: number;
  documentId: number;
}

export const useDeleteDocumentMutation = () => {
  const queryClient = useQueryClient();

  const deleteDocumentMutation = useMutation({
    mutationFn: ({ teamId, documentId }: DeleteParams) => deleteDocument(teamId, documentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['document'] });
    },
  });

  return deleteDocumentMutation;
};
