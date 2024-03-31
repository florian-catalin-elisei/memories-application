import {
  StyledAvatar,
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledLink,
  StyledTypography,
} from "./styles";

import { GoogleLogin } from "@react-oauth/google";
import { Grow } from "@mui/material";
import { Input } from "./Input/Input";
import { jwtDecode } from "jwt-decode";
import { signIn, signUp } from "../../api/users";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export const Auth = ({ setUserData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = () => setIsSignUp(!isSignUp);
  const handleError = () => console.log("Login Failed");

  const handleSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;
    const userData = jwtDecode(credential);

    setUserData(userData);

    localStorage.setItem("userData", JSON.stringify(userData));

    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      setUserData(formData);

      signUp(formData);
    } else {
      setUserData(formData);

      signIn(formData);

      localStorage.setItem("userData", JSON.stringify(formData));

      navigate("/");
    }
  };

  return (
    <Grow in>
      <StyledContainer maxWidth="sm">
        <StyledBox>
          <StyledAvatar>
            <LockOutlinedIcon />
          </StyledAvatar>

          <StyledTypography variant="h6">{isSignUp ? "Sign Up" : "Sign In"}</StyledTypography>

          <StyledForm onSubmit={(event) => handleSubmit(event)}>
            {isSignUp && (
              <Input
                id="name"
                name="name"
                label="Name"
                type="text"
                onChange={(event) => handleChange(event)}
              />
            )}

            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              onChange={(event) => handleChange(event)}
            />
            <Input
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={(event) => handleChange(event)}
            />

            {isSignUp && (
              <Input
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                onChange={(event) => handleChange(event)}
              />
            )}

            <StyledButton type="submit" variant="contained">
              {isSignUp ? "Sign Up" : "Sign In"}
            </StyledButton>

            {!isSignUp && (
              <StyledTypography variant="body2" gutterBottom mt={1}>
                Or
              </StyledTypography>
            )}

            {!isSignUp && <GoogleLogin onSuccess={handleSuccess} onError={handleError} />}

            <StyledLink onClick={() => handleSignUp()}>
              {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </StyledLink>
          </StyledForm>
        </StyledBox>
      </StyledContainer>
    </Grow>
  );
};
