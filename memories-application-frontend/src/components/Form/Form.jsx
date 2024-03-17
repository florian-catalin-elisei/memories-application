import {
  StyledBox,
  StyledForm,
  StyledSubmitButton,
  StyledTextField,
  StyledTypography,
} from "./styles";

import { createPost, getPosts, updatePost } from "../../api/posts.js";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import textFieldData from "./textFieldData.json";

export const Form = ({ id, setId }) => {
  const [postData, setPostData] = useState({
    author: "",
    image: "",
    message: "",
    tags: "",
    title: "",
  });

  const handleChange = (event, id) => {
    const { value } = event.target;

    setPostData({ ...postData, [id]: value });
  };

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

  const getFile = (file) => setPostData({ ...postData, image: file.base64 });

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await getPosts();
      const post = data.find((post) => post._id === id);

      setPostData(post);
    };

    if (id) fetchPosts();
  }, [id]);

  return (
    <StyledForm autoComplete="off">
      <StyledTypography variant="h6">{id ? "Editing" : "Creating"} a Memory</StyledTypography>

      {textFieldData.map((data, i) => (
        <StyledTextField
          id={data.id}
          key={i}
          label={data.label}
          onChange={(event) => handleChange(event, data.id)}
          required
          value={postData[data.id]}
          variant="filled"
        />
      ))}

      <StyledBox>
        <FileBase64 multiple={false} onDone={(file) => getFile(file)} />
      </StyledBox>

      <StyledSubmitButton onClick={(event) => handleClick(event)} type="submit">
        Submit
      </StyledSubmitButton>
    </StyledForm>
  );
};
