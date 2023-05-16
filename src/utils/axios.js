import axios from 'axios';
import { getSessionToken } from './sessionStorage';
import { signOut } from 'next-auth/react';

const instance = axios.create({
  baseURL: 'https://2cd7-197-54-218-22.ngrok-free.app',
});

// Add a custom header to every request
instance.interceptors.request.use(config => {
  const token = getSessionToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Log the response to the console
instance.interceptors.response.use(response => {
  console.log(response.data);
  if (response.status === 401) {
    signOut();
  }
  return response;
});

export default instance;
