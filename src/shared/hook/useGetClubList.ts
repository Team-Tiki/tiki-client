import { useQuery } from '@tanstack/react-query';

import { fetchClubInfo } from '@/shared/api/showcase';

export const useGetClubList = (token: string) => {
  const { data, isError, error } = useQuery({
    queryKey: ['teams'],
    queryFn: () => fetchClubInfo({ token }),
  });

  if (isError) {
    console.log(error);
  }

  return data;
};
