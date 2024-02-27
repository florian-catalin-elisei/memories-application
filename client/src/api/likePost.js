import axios from "axios";

const url = "http://localhost:5000/posts";
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
