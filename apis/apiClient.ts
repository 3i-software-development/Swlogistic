import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://localhost:7272',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // nếu có sử dụng cookie, jwt thì đặt true
});

export default apiClient;
