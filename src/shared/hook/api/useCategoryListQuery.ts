import { useSuspenseQuery } from '@tanstack/react-query';

import { getCategoryList } from '@/shared/api/teams/category';

// '전체' 가 포함 되냐 안되냐 ==> includeAll을 통해 구분
// 쇼케이스 페이지 '전체' 포함 ==> includeAll = true
// 모달 내 사용할 때 '전체' 미포함 ==> includeAll = false
const useCategoryListQuery = (includeAll = true) => {
  return useSuspenseQuery({
    queryKey: ['category'],
    queryFn: () => getCategoryList(),
    select: (data) => {
      const categories = data?.data?.categories || [];
      return includeAll ? categories : categories.filter((category) => category !== '전체');
    },
  });
};

export default useCategoryListQuery;
