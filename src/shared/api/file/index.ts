import { isAxiosError } from 'axios';

import axiosInstance from '@/shared/api/instance';

import { fileResponse } from './type';

const FILE_URL = {
  FILE: '/file/upload',
};

const MESSAGES = {
  UNKNOWN_ERROR: '알수없는 오류가 발생했습니다. 다시 시도해주세요.',
};

export const getFile = async (fileFormat: string): Promise<fileResponse> => {
  try {
    const response = await axiosInstance.get(FILE_URL.FILE, {
      params: {
        fileFormat: fileFormat,
      },
    });
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else throw new Error(MESSAGES.UNKNOWN_ERROR);
  }
};
