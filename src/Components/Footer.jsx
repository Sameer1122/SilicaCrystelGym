import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems={"center"} px="40px" pt="24px">
        <img src={Logo} alt="logo" width={"200px"} height="80px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with Love by Sameer Ahmed
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
