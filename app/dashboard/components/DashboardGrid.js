import { Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { GrOverview } from "react-icons/gr";
import { MdOutlineSettings, MdOutlineLibraryBooks  } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";

export default function DashboardGrid() {
  const dashboardList = [
    {
      title: "Overview",
      icon: <GrOverview  fontSize={80} />,
      path: "/dashboard/overview",
    },
    {
        title: "Bookings",
        icon: <MdOutlineLibraryBooks  fontSize={80} />,
        path: "/dashboard/bookings",
      },
      {
        title: "Notifications",
        icon: <TbSpeakerphone  fontSize={80} />,
        path: "/dashboard/notifications",
      },
      {
        title: "Settings",
        icon: <MdOutlineSettings  fontSize={80} />,
        path: "/dashboard/settings",
      },
  ];
  return (
    <Grid container spacing={2} py={2}>
      {dashboardList.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card
                variant="outlined"
              sx={{
                p: 3,
                width: "100%",
                cursor: "pointer",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                boxShadow: 0,
                "&:hover": {
                  boxShadow: 1,
                },
              }}
              component={Link}
              href={item.path}
            >
                    {item.icon}
                    <Typography
                        color={'text.primary'}
                        fontWeight={700}
                        variant="h6"
                    >
                        {item.title}
                    </Typography>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
