import { axiosInstance } from '@/shared/api/instance';

export const getDocuments = async (teamId: number, blockId: number) => {
  const response = await axiosInstance.get(`/time-blocks/team/${teamId}/time-block/${blockId}`);

  const documentList = await response.data.data.documents;

  return documentList;
};

export const getTotalDocuments = async (teamId: number, type: string) => {
  const response = await axiosInstance.get(`/documents/team/${teamId}/timeline?type=${type}`);

  const totalDocumentList = await response.data.data.documents;

  return totalDocumentList;
};
