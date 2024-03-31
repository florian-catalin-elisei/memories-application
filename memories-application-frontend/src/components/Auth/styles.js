import { Avatar, Box, Button, Container, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAvatar = styled(Avatar)(() => ({
  backgroundColor: "red",
}));

export const StyledBox = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
}));

export const StyledButton = styled(Button)(() => ({
  marginTop: "10px",
}));

export const StyledContainer = styled(Container)(() => ({
  alignItems: "center",
  display: "flex",
  height: "450px",
  justifyContent: "center",
}));

export const StyledLink = styled(Link)(() => ({
  color: "white",
  cursor: "pointer",
  marginTop: "10px",
  textDecoration: "none",
}));

export const StyledTypography = styled(Typography)(() => ({
  color: "white",
}));

export const StyledForm = styled("form")(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
}));
