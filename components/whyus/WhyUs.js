import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import HandsImage from "../../public/hands.png";
import RatesImage from "../../public/rates.png";
import TeamImage from "../../public/team.png";
import CustomerImage from "../../public/customer.png";
import Image from "next/image";

export default function WhyUs() {
  const whyUsList = [
    {
      image: HandsImage,
      title: "Licensed, Insured & Family-Owned",
      info: "As a family business, we value the relationships we build with our customers and strive to provide personalized service.",
    },
    {
      image: RatesImage,
      title: "Affordable Rates",
      info: "We believe in offering high-quality tree services at prices that fit your budget.",
    },
    {
      image: TeamImage,
      title: "Experienced Team",
      info: "Our team of professionals has the knowledge and skills to handle any tree care needs safely and effectively.",
    },
    {
      image: CustomerImage,
      title: "Customer Satisfaction",
      info: "Your satisfaction is our top priority. We work hard to ensure you are happy with our services.",
    },
  ];
  return (
    <Box width={"100%"} py={5}>
      <Typography
        variant="h4"
        color={"text.primary"}
        fontWeight={900}
        gutterBottom
        mb={2}
        textAlign={'center'}
      >
        Why Us?
      </Typography>
      <Grid container spacing={2}>
        {whyUsList.map((item, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: 0,
                  height: 300,
                  width: "100%",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 3,
                  p: 3,
                  borderTop: '3px solid #ffc400',
                }}
              >
                <Image src={item.image} alt="holding" width={100} />
                <Typography
                  variant="h6"
                  color={"#333333"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color={"#555"}
                  fontWeight={400}
                  textAlign={"center"}
                >
                  {item.info}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
