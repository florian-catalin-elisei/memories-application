import { deletePost, getPosts, likePost } from "../../api/posts.js";
import { Post } from "./Post/Post.jsx";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const Posts = ({ id, setId }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await getPosts();

    setPosts(data);
  };

  const handleLikePost = async (id) => {
    await likePost(id);

    fetchPosts();
  };

  const handleDeletePost = async (id) => {
    await deletePost(id);

    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Grid container spacing={2}>
      {posts.map((post, i) => (
        <Grid xs={12} md={6} key={i}>
          <Post
            handleDeletePost={handleDeletePost}
            handleLikePost={handleLikePost}
            id={id}
            post={post}
            setId={setId}
          />
        </Grid>
      ))}
    </Grid>
  );
};
