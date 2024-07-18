import { useQuery } from '@tanstack/react-query';

import { getCategoryList } from '@/shared/api/teams/category';

const useCategoryListQuery = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: () => getCategoryList(),
  });
};

export default useCategoryListQuery;
