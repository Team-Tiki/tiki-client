import { TotalDocumentList } from '@/shared/api/documents/team/timeline/type';
import { axiosInstance } from '@/shared/api/instance';

export const getTotalDocuments = async (teamId: number, type: string) => {
  const response = await axiosInstance.get<TotalDocumentList>(`/documents/team/${teamId}/timeline?type=${type}`);

  return response.data;
};
