import { useQueryClient } from '@tanstack/react-query';

import { $api } from '@/shared/api/client';

export const useBlockMutate = (onEditClick: () => void) => {
  const queryClient = useQueryClient();

  const { mutate: blockMutate } = $api.useMutation('patch', '/api/v1/teams/{teamId}/time-block/{timeBlockId}', {
    onSuccess: () => {
      onEditClick();
      queryClient.invalidateQueries({ queryKey: ['get', '/api/v1/teams/{teamId}/timeline'] });
    },
  });

  return blockMutate;
};

export const useFileMutate = () => {
  const queryClient = useQueryClient();

  const { mutate: fileMutate } = $api.useMutation('post', '/api/v1/teams/{teamId}/time-block/{timeBlockId}', {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/teams/{teamId}/time-block/{timeBlockId}'],
      });
    },
  });

  return fileMutate;
};

export const useTagMutate = () => {
  const queryClient = useQueryClient();

  const { mutate: tagMutate } = $api.useMutation('delete', '/api/v1/teams/{teamId}/time-block/{timeBlockId}/tags', {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get', '/api/v1/teams/{teamId}/time-block/{timeBlockId}'],
      });
    },
  });

  return tagMutate;
};
