import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import "./Post.css";

export const Post = ({ post, setId, onDelete, onLike }) => {
  return (
    <Card className="Card">
      <CardMedia className="Card-image" image={post.image} title={post.title} component="img" />

      <div className="Card-details">
        <Typography variant="h6">{post.author}</Typography>
        <Typography variant="body2">{moment(post.date).fromNow()}</Typography>
      </div>

      <div className="Card-edit-button">
        <Button size="small">
          <MoreHorizIcon
            className="Card-edit-icon"
            fontSize="medium"
            onClick={() => setId(post._id)}
          />
        </Button>
      </div>

      <div className="Card-tags">
        <Typography variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>

      <Typography className="Card-title" variant="h6" gutterBottom>
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="body1" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className="Card-actions">
        <Button size="small" onClick={() => onLike()}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like&nbsp;
          {post.likes}
        </Button>

        <Button size="small" onClick={() => onDelete()}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
