import axios from 'axios';

export const fetchClubInfo = async ({ token }: { token: string }) => {
  try {
    const response = await axios.get('/team', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.teams;
  } catch (error) {
    alert(error);

    throw error;
  }
};
