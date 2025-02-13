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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53468.48129239066!2d-94.21763855107771!3d33.114865063854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8634246a171ad393%3A0xf97ba8b547d3b8b2!2sAtlanta%2C%20TX%2C%20USA!5e0!3m2!1sen!2ske!4v1739430958344!5m2!1sen!2ske"
        
      ></iframe>
    </Box>
  );
};

export default GoogleMapEmbed;
