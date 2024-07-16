import axiosInstance from '@/shared/api/instance';

import { DeleteFile, TimeBlockCreate } from './type';

export const getFile = async (fileFormat: string) => {
  const response = await axiosInstance.get('/file/upload', {
    params: {
      fileFormat: fileFormat,
    },
  });
  return response.data.data;
};

export const postTimeBlock = async (teamId: number, type: string, data: TimeBlockCreate) => {
  const response = await axiosInstance.post(`/time-blocks/team/${teamId}/time-block`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      type: type,
    },
  });
  return response.data;
};

export const deleteTimeBlock = async (data: DeleteFile) => {
  const response = await axiosInstance.post('/file', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
