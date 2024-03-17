import { Image, StyledAppBar, StyledBox, StyledTypography } from "./styles";
import { Toolbar } from "@mui/material";
import picture from "./picture.png";

export const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledBox>
          <Image component="img" src={picture} alt="A picture with two boys" />

          <StyledTypography variant="h4">Memories</StyledTypography>
        </StyledBox>
      </Toolbar>
    </StyledAppBar>
  );
};
