import {
  Box,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramLogo from "../../public/instagram.png";
import FacebookLogo from "../../public/facebook.png";
import TwitterLogo from "../../public/twitter.png";
import Image from "next/image";

export default function TopBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width={"100%"}
      sx={{
        borderBottom: "1px solid #e0e0e0",
        boxShadow: 0,
      }}
    >
      <Box
        width={"100%"}
        height={"40px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={isSmallScreen ? 1 : 3}
        gap={1}
      >
        <Stack
          direction={"row"}
          gap={1}
          display={isSmallScreen ? "none" : "flex"}
        >
          <Tooltip title="facebook" arrow>
            <IconButton>
              <Image src={FacebookLogo} width={20} height={20} alt="fb" />
            </IconButton>
          </Tooltip>

          <Tooltip title="instagram" arrow>
            <IconButton>
              <Image src={InstagramLogo} width={20} height={20} alt="ig" />
            </IconButton>
          </Tooltip>
         

          <Tooltip title="X formely twitter" arrow>
            <IconButton>
              <Image src={TwitterLogo} width={20} height={20} alt="X" />
            </IconButton>
          </Tooltip>
        </Stack>

        <Stack direction={"row"} gap={1}>
          <Typography variant="body2" className="interFont">
            Call us for a qoute:
          </Typography>
          <Link
            href="tel:770-589-4000"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              variant="body2"
              className="interFont"
              color={"text.primary"}
              sx={{
                textDecoration: "underline",
                fontWeight: 600,
              }}
            >
              {" "}
              (770) 589-4000
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
