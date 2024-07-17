import { axiosInstance } from '@/shared/api/instance';

export const getTotalDocuments = async (teamId: number, type: string) => {
  const response = await axiosInstance.get(`/documents/team/${teamId}/timeline?type=${type}`);

  return response.data;
};
