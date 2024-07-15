import axios from 'axios';

import axiosInstance from '@/shared/api/instance';

import { TimeBlockCreate } from './type';

export const getFile = async (fileFormat: string) => {
  const response = await axiosInstance.get('/file/upload', {
    params: {
      fileFormat: fileFormat,
    },
  });
  console.log(response.data.data);
  return response.data.data;
};

export const postTimeBlock = async (teamId: number, type: string, data: TimeBlockCreate) => {
  const response = await axios.post(`/api/v1/time-blocks/team/${teamId}/time-block`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      type: type,
    },
  });
  console.log(response.data);
  return response.data;
};
