import { DeleteFile } from '@/shared/api/file/type';
import { axiosInstance } from '@/shared/api/instance';

export const deleteTimeBlock = async (data: DeleteFile) => {
  const response = await axiosInstance.post('/file', data);
  console.log('파일 삭제', response);
  return response;
};
