import axios from "axios";
import Cookies from 'js-cookie';

const API_URL = "https://dummyjson.com/auth"; // Replace with your API URL

const login = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data);
  Cookies.set('token', response.data.tooken);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const signup = async (data) => {
  const response = await axios.post(`${API_URL}/signup`, data);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const logout = async () => {
  try {
    Cookies.remove('token');
    localStorage.removeItem("user");
    return true;
  }
  catch (error) {
    console.log(error);
  }
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  login,
  signup,
  logout,
  getCurrentUser
};
