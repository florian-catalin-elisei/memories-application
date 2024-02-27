import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { Posts } from "./components/Posts/Posts";
import { Form } from "./components/Form/Form";
import { useState } from "react";
import memories from "./images/memories.png";
import "./App.css";

export const App = () => {
  const [id, setId] = useState(null);

  return (
    <Container maxWidth="lg">
      <AppBar className="App-appbar" position="static">
        <div className="App-appbar-container">
          <Typography variant="h4" align="center">
            Memories
          </Typography>

          <img src={memories} alt="memories" width="100" />
        </div>
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            className="App-grid"
            container
            alignItems="stretch"
            justifyContent="space-between"
            spacing={2}>
            <Grid item xs={12} sm={8}>
              <Posts id={id} setId={setId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form id={id} setId={setId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
