import axios from "axios";

const API_URL = "http://localhost:5004/api/auth";

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/sign-up`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response.data);
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error.response.data);
    throw error.response.data;
  }
};
