import axios from "axios";

const url = `http://localhost:5000/posts`;

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
