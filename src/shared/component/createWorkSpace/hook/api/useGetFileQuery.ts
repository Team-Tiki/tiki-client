import { useQuery } from '@tanstack/react-query';

import { getFile } from '@/shared/api/file/upload';
import { extractFileExtension } from '@/shared/util/file';

const useGetFileQuery = (file?: File) => {
  const fileExtension = file ? extractFileExtension(file.name) : '';
  return useQuery({
    queryKey: file ? ['fileFormat', file.name, fileExtension] : [],
    queryFn: () => getFile(fileExtension),
    enabled: !!file,
  });
};

export default useGetFileQuery;
