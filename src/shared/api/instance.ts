/*import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});

export default axiosInstance;
*/
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://3.37.199.133:8080/api/v1`,

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJJZCI6OCwiaWF0IjoxNzIxMjM1ODEyLCJleHAiOjE3MjEyNDc5MDh9.CqzuiWJDsY8m-672-0qIczpQ5rVn6Xw1jukRU-gF_kJ4_LOn4pdEvFljGhm-bnErzoJh33iXo89ufyl-1_aVBg`,
  },
});

export default axiosInstance;
