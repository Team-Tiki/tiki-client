import { axiosInstance } from '@/shared/api/instance';

export const deleteDocument = async (teamId: number, documentId: number) => {
  const response = await axiosInstance.delete(`/documents/team/${teamId}/document/${documentId}`);

  return response;
};
