import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://3.37.199.133:8080/api/v1`,

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJJZCI6OCwiaWF0IjoxNzIxMTM2Nzk4LCJleHAiOjE3MjExNDg4OTR9.kPrjkijMWn1cekYhQx9QP8fcKyVhT_6YG6qDS2YqOSqeb6PK_UPQIpCSWitYkq7IclrkMiR7vowzS_hFmeOc_w`,
  },
});
