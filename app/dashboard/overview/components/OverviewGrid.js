import { bookingStatus } from "@/constants/AppConstants";
import AppContext from "@/context/AppContext";
import { isArray } from "@/util/LogicFunctions";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FaThList } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { TiTick} from "react-icons/ti";

export default function OverviewGrid() {
  const {bookingTableData} = useContext(AppContext)
  const overviewList = [
    {
      icon: <FaThList fontSize={28} />,
      title: "Total Bookings",
      count: isArray(bookingTableData) ? bookingTableData.length : 0,
    },
    {
        icon: <FaRegClock fontSize={28} />,
        title: "Pending Bookings",
        count: bookingTableData.filter(booking => booking.status === bookingStatus.PENDING)?.length,
      },
      {
        icon: <MdDoNotDisturbAlt fontSize={28} />,
        title: "Canceled Bookings",
        count:  bookingTableData.filter(booking => booking.status === bookingStatus.REJECTED)?.length,
      },
      {
        icon: <TiTick fontSize={28} />,
        title: "Completed Bookings",
        count:  bookingTableData.filter(booking => booking.status === bookingStatus.COMPLETED)?.length,
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
