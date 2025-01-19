import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FaThList } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { TiTick} from "react-icons/ti";

export default function OverviewGrid() {
  const overviewList = [
    {
      icon: <FaThList fontSize={28} />,
      title: "Total Bookings",
      count: 23,
    },
    {
        icon: <FaRegClock fontSize={28} />,
        title: "Pending Bookings",
        count: 3,
      },
      {
        icon: <MdDoNotDisturbAlt fontSize={28} />,
        title: "Rejected Bookings",
        count: 2,
      },
      {
        icon: <TiTick fontSize={28} />,
        title: "Completed Bookings",
        count: 18,
      },
  ];
  return (
    <Grid spacing={3} container>
      {overviewList.map((item, index) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
            <Card
              variant="outlined"
              sx={{
                boxShadow: 0,
                p: 2,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box
                width={50}
                height={50}
                borderRadius={"12px"}
                bgcolor={"#326e36"}
                color={"#f5f5f5"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {item.icon}
              </Box>
              <Stack>
                <Typography
                  variant="body2"
                  color={"text.secondary"}
                  fontWeight={600}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h6"
                  color={"text.primary"}
                  fontWeight={700}
                >
                  {item.count}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
