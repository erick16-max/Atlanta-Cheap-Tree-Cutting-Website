import ColorModeContext from "@/theme/CustomThemeProvider";
import {
  Box,
  Button,
  ListItemIcon,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { GrOverview } from "react-icons/gr";
import { MdOutlineSettings, MdOutlineLibraryBooks } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { BiBookContent } from "react-icons/bi";
import AppContext from "@/context/AppContext";

const menuList = [
  {
    title: "Overview",
    icon: <GrOverview fontSize={20} />,
    path: "/admin",
  },
  {
    title: "Bookings",
    icon: <MdOutlineLibraryBooks fontSize={20} />,
    path: "/admin/bookings",
  },
  {
    title: "Feedbacks & Messages",
    icon: <TbSpeakerphone fontSize={20} />,
    path: "/admin/alerts",
  },
  {
    title: "Content",
    icon: <BiBookContent fontSize={20} />,
    path: "/admin/content",
  },
  {
    title: "Users",
    icon: <LuUsers fontSize={20} />,
    path: "/admin/users",
  },
  {
    title: "Settings",
    icon: <MdOutlineSettings fontSize={20} />,
    path: "/admin/settings",
  },
];
export default function Sidebar() {
  const pathName = usePathname();
  const isAdminPath = pathName.startsWith("/admin");
  const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
    const {userProfile} = useContext(AppContext)

  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"}>
      <Stack>
        <Typography color="text.primary" p={isAdminPath && isTablet ? 2 : 0} fontWeight={700} variant="body2">
          Main menu
        </Typography>
        <List>
          {menuList.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              style={{
                textDecoration: "none",
                display: userProfile?.isSuperAdmin === true ? "block" : 'none'
              }}
            >
              <ListItem sx={{ px: 0 }}>
                <ListItemButton
                  sx={{
                    backgroundColor:
                      pathName === item.path
                        ? "rgba(50, 110, 54, 0.2)"
                        : "transparent",
                    borderRadius: 0,
                  }}
                >
                  <ListItemIcon sx={{ color: "text.primary" }}>
                    {item.icon}
                  </ListItemIcon>
                  <Typography
                    fontWeight={pathName === item.path ? 600 : 500}
                    color="text.primary"
                    variant="body2"
                  >
                    {item.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Stack>
    </Box>
  );
}
