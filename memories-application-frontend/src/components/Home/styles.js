import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  minHeight: "400px",
}));

export const StyledTypography = styled(Typography)(() => ({
  border: "1px solid white",
  borderRadius: "10px",
  color: "white",
  padding: "10px",
}));
