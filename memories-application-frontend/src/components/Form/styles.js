import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(() => ({
  color: "white",
  marginTop: "10px",
}));

export const StyledSubmitButton = styled(Button)(() => ({
  backgroundColor: "#ff2c2c",
  color: "rgb(250, 249, 246)",
  fontFamily: "Poppins, sans-serif",
  marginTop: "10px",
  padding: "10px",
  width: "25%",
  "&:hover": {
    backgroundColor: "#ee6b6e",
  },
}));

export const StyledTextField = styled(TextField)(() => ({
  backgroundColor: "rgb(250, 249, 246)",
  marginTop: "10px",
  "& .MuiInputLabel-root": {
    fontFamily: "Poppins, sans-serif",
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Poppins, sans-serif",
}));

export const StyledForm = styled("form")(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
}));
