import { axiosInstance } from '@/shared/api/instance';

export const getFile = async (fileFormat: string) => {
  const response = await axiosInstance.get('/file/upload', {
    params: {
      fileFormat: fileFormat,
    },
  });
  console.log('파일 url', response);
  return response.data.data;
};
