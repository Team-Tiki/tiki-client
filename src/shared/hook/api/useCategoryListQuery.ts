import { useSuspenseQuery } from '@tanstack/react-query';

import { getCategoryList } from '@/shared/api/teams/category';

const useCategoryListQuery = () => {
  return useSuspenseQuery({
    queryKey: ['category'],
    queryFn: () => getCategoryList(),
  });
};

export default useCategoryListQuery;
