import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BASE_URL}`;
const TOKEN = `${import.meta.env.VITE_TOKEN}`;

const axiosInstance = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default axiosInstance;
