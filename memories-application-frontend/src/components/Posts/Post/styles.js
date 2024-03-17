import { Box, Card, CardActions, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export const StyledBox = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledCard = styled(Card)(() => ({
  border: "1px solid black",
  marginTop: "10px",
}));

export const StyledCardActions = styled(CardActions)(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  borderBottom: "2px solid black",
  borderTop: "2px solid black",
  height: "200px",
  width: "100%",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontFamily: "Poppins, sans-serif",
}));

export const StyledDeleteIcon = styled(DeleteIcon)(() => ({
  marginRight: "5px",
}));

export const StyledThumbUpAltIcon = styled(ThumbUpAltIcon)(() => ({
  marginRight: "5px",
}));
