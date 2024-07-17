/*import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});*/
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://3.37.199.133:8080/api/v1`,

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJJZCI6OCwiaWF0IjoxNzIxMjE5MTYxLCJleHAiOjE3MjEyMzEyNTd9.lKt_A14NEPmuwvIi8pepXxUUW9F_ylw3VPMlZRQ-eudsXyMO-67JTp8LLUisb_il8K-FLnlOb2UHD12RYMLPHw`,
  },
});
