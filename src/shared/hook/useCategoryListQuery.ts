import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { getCategoryList } from '@/shared/api/teams/category';
import { CategoryType } from '@/shared/api/teams/category/type';

const useCategoryListQuery = (): UseQueryResult<CategoryType> => {
  return useQuery<CategoryType>({
    queryKey: ['category'],
    queryFn: () => getCategoryList<CategoryType>(),
  });
};

export default useCategoryListQuery;
