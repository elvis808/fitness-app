import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <h1>Become Hella Fit 💪🏼</h1>
        <Typography mb="20px">
          <h2>Made by Elvis Garramone ( ͡° ͜ʖ ͡°)</h2>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
