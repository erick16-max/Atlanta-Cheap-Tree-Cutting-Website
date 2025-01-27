import ColorModeContext from "@/theme/CustomThemeProvider";
import { Card, Divider, Typography, Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { MdOutlineSettings, MdOutlineLibraryBooks } from "react-icons/md";

export default function BookingsOverviewCard() {
    const {isMobile} = useContext(ColorModeContext)
  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: 0,
        width: "100%",
        p: 3,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        height: isMobile ? "100%" : 200,
        flexDirection: "column",
        gap: 2
      }}
    >
      <Box display={"flex"} width={"100%"} justifyContent={"space-between"} gap={3} flexDirection={isMobile ? 'column' : 'row'}>
        <Stack>
          <Typography
            variant="body1"
            color={"text.secondary"}
            fontWeight={600}
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Total Bookings
            <MdOutlineLibraryBooks />
          </Typography>
          <Typography variant="h5" color={"text.primary"} fontWeight={700}>
            20
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="body2" color={"text.secondary"} fontWeight={500}>
            Authenticated Bookings: <strong>14</strong>
          </Typography>
          <Typography variant="body2" color={"text.secondary"} fontWeight={500}>
            Guest Bookings: <strong>6</strong>
          </Typography>
        </Stack>
      </Box>
<Divider />
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={ isMobile ? 'flex-start' :"center"}
        gap={3} 
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <Stack>
          <Typography
            variant="body2"
            color={"text.secondary"}
            fontWeight={500}
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <GoDotFill style={{ color: "#ffc107" }} />
            Pending Bookings
          </Typography>
          <Stack ml={3}>
            <Typography
              fontSize={12}
              variant="body2"
              color={"text.secondary"}
              fontWeight={500}
            >
              authenticated: <strong>14</strong>
            </Typography>
            <Typography
              fontSize={12}
              variant="body2"
              color={"text.secondary"}
              fontWeight={500}
            >
              guest: <strong>6</strong>
            </Typography>
          </Stack>
        </Stack>
        {isMobile ? (
            <Divider sx={{width: '100%'}}/>
        ): (
            <Box
            width={'1px'}
            height={50}
            bgcolor={'#eeeeee'}
        ></Box>
        )}
        <Stack>
          <Typography
            variant="body2"
            color={"text.secondary"}
            fontWeight={500}
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <GoDotFill style={{ color: "#f44336" }} />
            Cancelled Bookings
          </Typography>
          <Stack ml={3}>
            <Typography
              fontSize={12}
              variant="body2"
              color={"text.secondary"}
              fontWeight={500}
            >
              authenticated: <strong>14</strong>
            </Typography>
            <Typography
              fontSize={12}
              variant="body2"
              color={"text.secondary"}
              fontWeight={500}
            >
              guest: <strong>6</strong>
            </Typography>
          </Stack>
        </Stack>

        {isMobile ? (
            <Divider sx={{width: '100%'}}/>
        ): (
            <Box
            width={'1px'}
            height={50}
            bgcolor={'#eeeeee'}
        ></Box>
        )}

        <Stack>
          <Typography
            variant="body2"
            color={"text.secondary"}
            fontWeight={500}
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <GoDotFill style={{ color: "#326e36" }} />
            Completed Bookings
          </Typography>
          <Stack ml={3}>
            <Typography
              fontSize={12}
              variant="body2"
              color={"text.secondary"}
              fontWeight={500}
            >
              authenticated: <strong>14</strong>
            </Typography>
            <Typography
              fontSize={12}
              variant="body2"
              color={"text.secondary"}
              fontWeight={500}
            >
              guest: <strong>6</strong>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
