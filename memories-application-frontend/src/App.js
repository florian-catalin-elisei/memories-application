import { Auth, Home, NavBar } from "./components";
import { Box, Container } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) setUserData(storedUserData);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Box>
          <NavBar userData={userData} />

          <Home userData={userData} />
        </Box>
      ),
    },
    {
      path: "/auth",
      element: (
        <Box>
          <NavBar />

          <Auth setUserData={setUserData} />
        </Box>
      ),
    },
  ]);

  return (
    <Container maxWidth="lg">
      <RouterProvider router={router} />
    </Container>
  );
};
