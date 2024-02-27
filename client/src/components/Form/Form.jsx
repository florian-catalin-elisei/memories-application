import { Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { createPost } from "../../api/createPost";
import { updatePost } from "../../api/updatePost";
import { getPosts } from "../../api/getPosts";
import FileBase from "react-file-base64";
import "./Form.css";

export const Form = ({ id, setId }) => {
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    image: "",
  });

  const handleClick = async (event) => {
    event.preventDefault();

    if (id) {
      const post = { ...postData };
      await updatePost(id, post);
    } else {
      const post = { ...postData };
      await createPost(post);
    }

    setId(null);
    setPostData({ author: "", title: "", message: "", tags: "", image: "" });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      const post = posts.data.find((post) => post._id === id);
      setPostData(post);
    };

    if (id) {
      fetchPosts();
    }
  }, [id]);

  return (
    <div>
      <form className="Form-form" autoComplete="off">
        <Typography className="Form-heading" variant="h6">
          {id ? "Editing" : "Creating"} a Memory
        </Typography>

        <TextField
          className="Form-input"
          name="author"
          variant="outlined"
          label="Author"
          value={postData.author}
          onChange={(event) => setPostData({ ...postData, author: event.target.value })}
        />

        <TextField
          className="Form-input"
          name="title"
          variant="outlined"
          label="Title"
          value={postData.title}
          onChange={(event) => setPostData({ ...postData, title: event.target.value })}
        />

        <TextField
          className="Form-input"
          name="message"
          variant="outlined"
          label="Message"
          value={postData.message}
          onChange={(event) => setPostData({ ...postData, message: event.target.value })}
        />

        <TextField
          className="Form-input"
          name="tags"
          variant="outlined"
          label="Tags"
          value={postData.tags}
          onChange={(event) => setPostData({ ...postData, tags: event.target.value.split(",") })}
        />

        <div className="Form-file">
          <FileBase
            type="file"
            multiple={false}
            onDone={(file) => setPostData({ ...postData, image: file.base64 })}
          />
        </div>

        <Button variant="contained" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </form>
    </div>
  );
};
