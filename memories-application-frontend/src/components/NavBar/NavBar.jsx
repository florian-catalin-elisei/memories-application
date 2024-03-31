import { Avatar, Button } from "@mui/material";
import { googleLogout } from "@react-oauth/google";
import { Image, StyledAppBar, StyledBox, StyledToolbar, StyledTypography } from "./styles";
import { Link, useLocation } from "react-router-dom";
import picture from "./picture.png";

export const NavBar = ({ userData }) => {
  const location = useLocation();

  const logout = () => {
    googleLogout();

    localStorage.removeItem("userData");

    window.location.reload();
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledBox component={Link} to="/">
          <Image component="img" src={picture} alt="A picture with two boys" />

          <StyledTypography variant="h4">Memories</StyledTypography>
        </StyledBox>

        {userData ? (
          <StyledBox>
            <Avatar src={userData.picture} alt={userData.name} />

            <StyledTypography variant="h6">{userData.name}</StyledTypography>

            <Button variant="outlined" onClick={() => logout()}>
              Log Out
            </Button>
          </StyledBox>
        ) : (
          !userData &&
          location.pathname !== "/auth" && (
            <Button component={Link} to="/auth" variant="outlined">
              Sign In
            </Button>
          )
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};
