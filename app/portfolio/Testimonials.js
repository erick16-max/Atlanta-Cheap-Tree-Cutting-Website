import { fetchApprovedMessages } from "@/firebase/Feedbacks";
import {
  Avatar,
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  Rating,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Testimonials() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchMessages = async() => {
      const response = await fetchApprovedMessages()
      setData(response)
    }
    fetchMessages()
  }, [])
  const testimonialList = [
    {
      name: "Sarah M., Homeowner",
      body: `Exceptional service! The team was professional and efficient in trimming our overgrown trees. They left our yard looking clean and well-maintained. Highly recommend their services!`,
      rate: 4.5,
    },
    {
      name: "James R., Property Manager",
      body: `We hired them for a yard cleanup after a storm, and they exceeded our expectations. The crew was punctual, friendly, and left the space spotless. Couldn't be happier!`,
      rate: 4,
    },
    {
      name: "Emily T., Landscape Designer",
      body: `Their tree pruning service transformed our garden! The team clearly knew what they were doing, and their attention to detail was impressive. Thank you for a job well done!`,
      rate: 3.9,
    },
  ];

  console.log(data)
  return (
    <Card
      //   variant="outlined"
      sx={{
        boxShadow: 0,
        display: "flex",
        flexDirection: "column",
        mt: 5,
        mb: 2,
        gap: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Stack>
        <Typography variant="h6" fontWeight={700} color={"text.primary"}>
          Testimonials
        </Typography>
        <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
          What are our users saying about our services.
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  p: 3,
                  width: "100%",
                }}
              >
                <Stack>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      mb: 1,
                      backgroundColor: "#f5f5f5",
                      color: "#777777",
                      fontWeight: 600,
                    }}
                  >
                    {item?.fullname?.charAt(0)}
                  </Avatar>
                  <Typography
                    variant="body1"
                    color={"text.primary"}
                    fontWeight={600}
                    gutterBottom
                  >
                   - {item?.fullname}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"text.secondary"}
                    fontWeight={400}
                    gutterBottom
                  >
                    {item.message}
                  </Typography>
                  <Rating name={item.fullname} value={item.rate} />
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
}
