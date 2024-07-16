import { useQuery } from '@tanstack/react-query';
import { useQueries } from '@tanstack/react-query';

import { getFile } from '@/shared/api/archiving/timeBlock';
import { extractFileExtension } from '@/shared/constant/fileFormat';

/*const useGetFileQuery = (file: File) => {
  const fileExtension = extractFileExtension(file.name); // 확장자 추출
  return useQuery({
    queryKey: ['fileFormat', file.name, fileExtension],
    queryFn: () => getFile(fileExtension),
    enabled: !!file.name,
  });
};

export default useGetFileQuery;*/

const useGetFileQuery = (files: File[]) => {
  const queryConfigs = files.map((file) => {
    const fileExtension = extractFileExtension(file.name); // 확장자 추출
    return {
      queryKey: ['fileFormat', file.name, fileExtension],
      queryFn: () => getFile(fileExtension),
      enabled: !!file.name,
    };
  });

  const queries = useQueries({
    queries: queryConfigs,
  });

  const data = queries.map((query) => query.data);
  const error = queries.map((query) => query.error).find((err) => err !== null);
  const isLoading = queries.some((query) => query.isLoading);

  return { data, error, isLoading };
};

export default useGetFileQuery;
