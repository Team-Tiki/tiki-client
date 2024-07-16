import { axiosInstance } from '@/shared/api/instance';

export const getDocuments = async (teamId: number, blockId: number) => {
  const response = await axiosInstance.get(`/time-blocks/team/${teamId}/time-block/${blockId}`);
  console.log('재동작 확인');
  const documentList = await response.data.data.documents;

  return documentList;
};

export const getTotalDocuments = async (teamId: number, type: string) => {
  const response = await axiosInstance.get(`/documents/team/${teamId}/timeline?type=${type}`);

  const totalDocumentList = await response.data.data.documents;

  return totalDocumentList;
};

export const deleteBlock = async (teamId: number, timeBlockId: number) => {
  const response = await axiosInstance.delete(`/time-blocks/team/${teamId}/time-block/${timeBlockId}`);

  return response;
};

export const deleteDocument = async (teamId: number, documentId: number) => {
  const response = await axiosInstance.delete(`/documents/team/${teamId}/document/${documentId}`);

  return response;
};
