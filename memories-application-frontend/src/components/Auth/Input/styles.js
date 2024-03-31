import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(() => ({
  backgroundColor: "rgb(250, 249, 246)",
  marginTop: "10px",
  "& .MuiInputLabel-root": {
    fontFamily: "Poppins, sans-serif",
  },
}));
