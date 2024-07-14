import { axiosInstance } from '@/shared/api/instance';

export const getDocuments = async (teamId: number, blockId: number) => {
  try {
    const response = await axiosInstance.get(`/time-blocks/team/${teamId}/time-block/${blockId}`, {
      headers: {
        ContentType: 'application/json',
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJJZCI6OSwiaWF0IjoxNzIwOTczMTk1LCJleHAiOjE3MjA5ODUyOTF9.AueRa60N5xZ6jDtNRe5dj0Q4z0F74NvuSBmP8faWz5cd-lX8e2t9CemFVxjobtPg5F_VFB54pChHf9zwp8TPrw`,
      },
    });

    const documents = await response.data.data.documents;

    return documents;
  } catch (error) {
    console.log(error);
  }
};
