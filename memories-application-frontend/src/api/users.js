import axios from "axios";

const url = "http://localhost:5000/users";

export const signIn = (formData) => axios.post(`${url}/signin`, formData);
export const signUp = (formData) => axios.post(`${url}/signup`, formData);
