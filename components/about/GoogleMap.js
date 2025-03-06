"use client"; // Ensure it runs on the client side

import { Box } from "@mui/material";

const GoogleMapEmbed = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >

      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698979.6551967226!2d-85.64755136552783!3d33.7265498548893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f501167813287d%3A0x26d21ce27f74b79!2sAtlanta%20Metropolitan%20Area%2C%20GA%2C%20USA!5e0!3m2!1sen!2ske!4v1741231307459!5m2!1sen!2ske"
      ></iframe>
    </Box>
  );
};

export default GoogleMapEmbed;
