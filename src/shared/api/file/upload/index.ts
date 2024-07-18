import axiosInstance from '@/shared/api/instance';

export const getFile = async (fileFormat: string) => {
  const response = await axiosInstance.get('/file/upload', {
    params: {
      fileFormat: fileFormat,
    },
  });
  return response.data.data;
};
