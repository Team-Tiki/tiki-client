import { client } from '@/shared/api/client';

export const getPresignedUrl = async (fileFormat: string) => {
  const response = await client.GET('/api/v1/file/upload', {
    params: {
      query: {
        fileFormat,
      },
    },
  });

  return response.data?.data;
};
