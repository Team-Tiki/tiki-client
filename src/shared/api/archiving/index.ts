import { axiosInstance } from '@/shared/api/instance';

export const getDocuments = async (teamId: number, blockId: number) => {
  try {
    const response = await axiosInstance.get(`/time-blocks/team/${teamId}/time-block/${blockId}`, {
      headers: {
        ContentType: 'application/json',
      },
    });

    const documents = await response.data.data.documents;

    return documents;
  } catch (error) {
    console.log(error);
  }
};
