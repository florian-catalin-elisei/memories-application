import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Post } from "../Post/Post";
import { getPosts } from "../../api/getPosts";
import { deletePost } from "../../api/deletePost";
import { likePost } from "../../api/likePost";
import "./Posts.css";

export const Posts = ({ id, setId }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await getPosts();
    setPosts(data);
  };

  const handleDeletePost = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  const handleLikePost = async (id) => {
    await likePost(id);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  return (
    <div>
      <Grid container alignItems="stretch" spacing={2}>
        {posts.map((post, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Post
              post={post}
              setId={setId}
              onDelete={() => handleDeletePost(post._id)}
              onLike={() => handleLikePost(post._id)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
