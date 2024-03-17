import {
  StyledBox,
  StyledCard,
  StyledCardActions,
  StyledCardMedia,
  StyledDeleteIcon,
  StyledThumbUpAltIcon,
  StyledTypography,
} from "./styles";

import { CardContent, CardHeader, IconButton } from "@mui/material";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Post = ({ post, setId, handleDeletePost, handleLikePost }) => {
  const handleSelectPost = () => setId(post._id);

  return (
    <StyledCard>
      <CardHeader
        action={
          <IconButton aria-label="Update post" onClick={() => handleSelectPost()}>
            <MoreHorizIcon />
          </IconButton>
        }
        title={post.author}
        subheader={moment(post.date).fromNow()}
      />

      <StyledCardMedia component="img" image={post.image} alt={post.title} />

      <CardContent>
        <StyledBox>
          <StyledTypography variant="h6" gutterBottom>
            {post.title}
          </StyledTypography>

          <StyledTypography variant="body2" gutterBottom>
            {post.tags.map((tag) => `#${tag}`)}
          </StyledTypography>
        </StyledBox>

        <StyledTypography variant="body2">{post.message}</StyledTypography>
      </CardContent>

      <StyledCardActions disableSpacing>
        <IconButton aria-label="Like post" onClick={() => handleLikePost(post._id)}>
          <StyledThumbUpAltIcon />

          <StyledTypography variant="body2">{`Like ${post.likes}`}</StyledTypography>
        </IconButton>

        <IconButton aria-label="Delete post" onClick={() => handleDeletePost(post._id)}>
          <StyledDeleteIcon />

          <StyledTypography variant="body2">Delete</StyledTypography>
        </IconButton>
      </StyledCardActions>
    </StyledCard>
  );
};
