import React from "react";
import { Box } from "@mui/material";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};
