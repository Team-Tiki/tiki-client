import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://3.37.199.133:8080/api/v1`,

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJJZCI6OCwiaWF0IjoxNzIxMTQ2Njk2LCJleHAiOjE3MjExNTg3OTJ9.WSq8y0impB0ndsq61q8UYfdHrQ6ALhmeWZkdBJK7z4dUOlufxvEr-szHNU_hxJxuh26i17pMQutFVrvkN7uEYQ`,
  },
});
