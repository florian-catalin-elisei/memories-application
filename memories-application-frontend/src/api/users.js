import axios from "axios";

const url = "https://memories-application-backend.vercel.app/";

export const signIn = (formData) => axios.post(`${url}/signin`, formData);
export const signUp = (formData) => axios.post(`${url}/signup`, formData);
