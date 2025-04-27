import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // Important for cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here (e.g., redirect to login on 401)
    if (error.response && error.response.status === 401) {
      // Unauthorized, redirect to login
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default api;
