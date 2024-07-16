import { axiosInstance } from '@/shared/api/instance';

export const getDocuments = async (teamId: number, blockId: number) => {
  const response = await axiosInstance.get(`/time-blocks/team/${teamId}/time-block/${blockId}`);

  const documentList = await response.data.data.documents;

  return documentList;
};