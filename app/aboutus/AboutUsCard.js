import React from "react";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AboutUsImage from "../../public/aboutustwo.jpg";
import { BsClockHistory } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";



export default function AboutUsCard() {
  return (
    <Card
      sx={{
        my: 2,
        p: 3,
        backgroundColor: "#ffffff",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 0,
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Grid container rowSpacing={2}>
        <Grid item lg={6}>
          <Stack gap={2}>
            <Typography
              variant="h4"
              color={"text.primary"}
              fontWeight={600}
              gutterBottom
            >
              Welcome to Atlanta Cheap Tree Solutions
            </Typography>
            <Typography
              variant="body1"
              color={"text.secondary"}
              fontWeight={500}
            >
              At Atlanta Cheap Tree Solutions, we take pride in being a
              family-owned and operated business dedicated to providing
              top-notch tree services to North Atlanta and the surrounding
              areas. With a commitment to excellence and a passion for
              maintaining the beauty and safety of your property, we have
              established ourselves as a trusted name in the community.
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={6}>
          <Box
            width="100%"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src={AboutUsImage} alt="about us" height={300} />
          </Box>
        </Grid>
      </Grid>
      <Stack width={"100%"} gap={2}>
        <Box width={"100%"} display={"flex"} alignItems={"center"} gap={1}>
          <Typography
            variant="h5"
            color={"text.primary"}
            fontWeight={600}
            className="interFont"
          >
            Our Story
          </Typography>
          <BsClockHistory fontSize={32} />
        </Box>
        <Typography variant="body1" color={"text.secondary"} fontWeight={500}>
          Our journey began with a simple mission: to offer affordable,
          reliable, and professional tree care services to our neighbors. As a
          family-owned business, we understand the importance of trust and
          personalized service. Over the years, we have grown our team and
          expanded our services, but our core values remain the same. We treat
          each project as if it were our own, ensuring that our clients receive
          the highest level of care and attention.
        </Typography>
      </Stack>
      <Stack width={"100%"} gap={2}>
        <Box width={"100%"} display={"flex"} alignItems={"center"} gap={1}>
          <Typography
            variant="h5"
            color={"text.primary"}
            fontWeight={600}
            className="interFont"
          >
            Serving North Atlanta and Beyond
          </Typography>
          <MdMiscellaneousServices fontSize={32} />
        </Box>
        <Typography variant="body1" color={"text.secondary"} fontWeight={500}>
          Based in North Atlanta, we proudly serve the local community and
          nearby areas. Our deep roots in the region allow us to understand the
          unique needs and challenges of tree care in this area. Whether you're
          a homeowner, business owner, or property manager, we are here to
          provide the solutions you need.
        </Typography>
      </Stack>
      <Stack width={"100%"} gap={2}>
        <Box width={"100%"} display={"flex"} alignItems={"center"} gap={1}>
          <Typography
            variant="h5"
            color={"text.primary"}
            fontWeight={600}
            className="interFont"
          >
            Get in Touch
          </Typography>
          <RiContactsLine fontSize={32} />
        </Box>
        <Stack>
          <Typography
            variant="body1"
            color={"text.secondary"}
            fontWeight={500}
            gutterBottom
          >
            We look forward to working with you to enhance and maintain the
            beauty and safety of your property. Contact us today to schedule a
            consultation or request a free estimate. Discover why Atlanta Cheap
            Tree Solutions is the go-to choice for tree services in North
            Atlanta and beyond.
          </Typography>
          <Typography
            variant="body1"
            color={"text.secondary"}
            fontWeight={500}
            gutterBottom
          >
            Thank you for considering Atlanta Cheap Tree Solutions. We are
            excited to partner with you for all your tree care needs
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
