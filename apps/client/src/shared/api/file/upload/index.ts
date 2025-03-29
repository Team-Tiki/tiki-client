import { paths } from '@/shared/__generated__/schema';
import { axiosInstance } from '@/shared/api/instance';

type ImageFile = paths['/api/v1/file/upload']['get']['responses']['200']['content']['*/*'];

export const getFile = async (fileFormat: string) => {
  const response = await axiosInstance.get<ImageFile>('/file/upload', {
    params: {
      fileFormat: fileFormat,
    },
  });

  return response.data.data;
};
