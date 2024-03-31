import { Box, Grow, useMediaQuery } from "@mui/material";
import { Form, Posts } from "../../components";
import { StyledBox, StyledTypography } from "./styles";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const Home = ({ userData }) => {
  const [id, setId] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  if (!userData) {
    return (
      <StyledBox>
        <StyledTypography variant="h6">Please Sign In to create your own memories</StyledTypography>
      </StyledBox>
    );
  }

  return (
    <Box>
      {isSmallScreen ? (
        <Grow in>
          <Grid container spacing={2}>
            <Grid xs={12} md={8}>
              <Form id={id} setId={setId} />
            </Grid>

            <Grid xs={12} md={4}>
              <Posts id={id} setId={setId} />
            </Grid>
          </Grid>
        </Grow>
      ) : (
        <Grow in>
          <Grid container spacing={2}>
            <Grid xs={12} md={8}>
              <Posts id={id} setId={setId} />
            </Grid>

            <Grid xs={12} md={4}>
              <Form id={id} setId={setId} />
            </Grid>
          </Grid>
        </Grow>
      )}
    </Box>
  );
};
