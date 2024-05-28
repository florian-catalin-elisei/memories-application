import axios from "axios";

const url = "https://memories-application-backend.vercel.app/users";

export const signIn = (formData) => axios.post(`${url}/signin`, formData);
export const signUp = (formData) => axios.post(`${url}/signup`, formData);
