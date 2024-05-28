import axios from "axios";

const url = "https://memories-application-backend.vercel.app/posts";

export const createPost = (post) => axios.post(url, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const getPosts = () => axios.get(url);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
