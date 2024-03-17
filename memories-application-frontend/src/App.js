import { Container, Grow, useMediaQuery } from "@mui/material";
import { Form, NavBar, Posts } from "./components";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";

export const App = () => {
  const [id, setId] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Container maxWidth="lg">
      <NavBar />

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
    </Container>
  );
};
