import {
  Card,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  Button,
} from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import TreePrunningIcon from "../../public/services/treeprunning.png";
import TreeCuttingIcon from "../../public/services/treecuttingtwo.png";
import TreeRemovingIcon from "../../public/services/treeremoving.png";
import TreeTrimmingIcon from "../../public/services/treetrimming.png";
import YardCleaningIcon from "../../public/services/sweeping.png";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import ColorModeContext from "@/theme/CustomThemeProvider";

export default function ServicePageCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { isTablet, isMobile } = useContext(ColorModeContext);

  const icons = [
    {
      src: TreeCuttingIcon,
      title: "Tree Cutting",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero placeat optio commodi, itaque porro doloribus quisquam tenetur qui soluta animi temporibus! Quas molestias doloremque vel animi quisquam molestiae vero.",
    },
    {
      src: TreePrunningIcon,
      title: "Tree Pruning",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero placeat optio commodi, itaque porro doloribus quisquam tenetur qui soluta animi temporibus! Quas molestias doloremque vel animi quisquam molestiae vero.",
    },
    {
      src: TreeTrimmingIcon,
      title: "Tree Trimming",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero placeat optio commodi, itaque porro doloribus quisquam tenetur qui soluta animi temporibus! Quas molestias doloremque vel animi quisquam molestiae vero.",
    },
    {
      src: TreeRemovingIcon,
      title: "Tree Removal",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero placeat optio commodi, itaque porro doloribus quisquam tenetur qui soluta animi temporibus! Quas molestias doloremque vel animi quisquam molestiae vero.",
    },
    {
      src: YardCleaningIcon,
      title: "Yard Cleanup",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero placeat optio commodi, itaque porro doloribus quisquam tenetur qui soluta animi temporibus! Quas molestias doloremque vel animi quisquam molestiae vero.",
    },
  ];

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
      {
        icons.map((icon, index) =>(
            <Card
            key={index}
        sx={{
          p: 2,
          width: "100%",
          backgroundColor: "#ffffff",
          boxShadow: 0,
          height: isMobile ? "100%" : isTablet ? "100%" : 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} height={"100%"}>
          <Grid item lg={3} md={3} sm={12} xs={12} height={"100%"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "100%",
                height: isTablet ? 200 : "100%",
                backgroundColor: "#f5f5f5",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={icon.src}
                alt={icon.title}
                width={120}
                height={120}
              />
            </Box>
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Stack>
              <Typography
                variant="h6"
                fontWeight={600}
                color={"text.primary"}
                gutterBottom
              >
                {icon.title}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                color={"text.secondary"}
                gutterBottom
              >
               {icon.info}
              </Typography>
              <Button
                sx={{
                  textTransform: "none",
                  height: 50,
                  color: "primary.dark",
                  width: 150,
                  fontWeight: 600,
                  backgroundColor: "rgba(50, 110, 54, 0.15)",
                  borderEndStartRadius: '12px',
                  mt: 1,
                }}
                endIcon={<BsFillBookmarkPlusFill />}
              >
                Book service
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
        ))
      }
    </Card>
  );
}
