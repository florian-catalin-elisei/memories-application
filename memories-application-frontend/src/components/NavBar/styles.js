import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "black",
  borderRadius: "10px",
  marginTop: "10px",
  padding: "10px",
}));

export const StyledBox = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  textDecoration: "none",
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",
}));

export const StyledTypography = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Poppins, sans-serif",
  margin: "0 10px",
}));

export const Image = styled(Box)(() => ({
  width: "100px",
}));
