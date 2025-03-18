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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.669994758869!2d-84.4753095255738!3d33.92389202449881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5119bd69be57f%3A0xfb9b21ee67438d8!2s2759%20Delk%20Rd%2C%20Marietta%2C%20GA%2030067%2C%20USA!5e0!3m2!1sen!2ske!4v1742274660493!5m2!1sen!2ske"
      ></iframe>
    </Box>
  );
};

export default GoogleMapEmbed;
