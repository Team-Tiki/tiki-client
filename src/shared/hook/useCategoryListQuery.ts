import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { getCategoryList } from '@/shared/api/teams/category';

const useCategoryListQuery = (): UseQueryResult<string[]> => {
  return useQuery<string[]>({
    queryKey: ['category'],
    queryFn: getCategoryList,
  });
};

export default useCategoryListQuery;
