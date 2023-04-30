import axios from "axios";

const API_URL = "https://reqres.in/api"; // Replace with your API URL

const authService = {
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    // console.log(response.data);
    console.log(response.data);
    //save to local storage
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  },

  signup: async (name, email, password) => {
    const response = await axios.post(`${API_URL}/signup`, { name, email, password });
    // console.log(response.data);
    console.log(response.data);
    //save to local storage
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  },

  logout: async () => {
    //remove from local storage
    localStorage.removeItem("user");
    return response.data;
  },

  // Add more methods as needed
};

export default authService;
