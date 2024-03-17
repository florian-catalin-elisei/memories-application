import { AppBar, Box, Typography } from "@mui/material";
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
  margin: "0 auto",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontFamily: "Poppins, sans-serif",
}));

export const Image = styled(Box)(() => ({
  width: "100px",
}));
