import { useMutation } from '@tanstack/react-query';

import { postTimeBlock } from '../api/archiving/timeBlock';
import { TimeBlockCreate } from '../api/archiving/timeBlock/type';

export const usePostTimeBlock = (teamId: number, type: string) => {
  return useMutation({
    mutationFn: (data: TimeBlockCreate) => postTimeBlock(teamId, type, data),
  });
};
