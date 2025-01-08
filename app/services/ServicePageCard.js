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
      info: "Our tree cutting service focuses on safely and efficiently removing trees that are dead, diseased, or posing a risk to your property. Using advanced equipment and techniques, we ensure minimal impact on your surrounding landscape.",
    },
    {
      src: TreePrunningIcon,
      title: "Tree Pruning",
      info: "Tree pruning promotes healthy growth by removing dead or overgrown branches, improving the tree’s structure and appearance. This service helps reduce hazards and enhances air circulation and sunlight penetration for your trees.",
    },
    {
      src: TreeTrimmingIcon,
      title: "Tree Trimming",
      info: "Our tree trimming service is designed to maintain your trees’ shape and ensure proper growth patterns. By carefully cutting excess branches, we improve the overall aesthetic and structural integrity of your trees.",
    },
    {
      src: TreeRemovingIcon,
      title: "Tree Removal",
      info: "When a tree becomes a safety hazard or needs to make way for new projects, our expert tree removal service is here to help. We carefully assess and remove trees while ensuring safety and preventing damage to your property.",
    },
    {
      src: YardCleaningIcon,
      title: "Yard Cleanup",
      info: "We provide thorough yard cleaning services to leave your outdoor space spotless and well-maintained. From leaf removal to debris clearing, we help you reclaim a clean and inviting yard for relaxation or further landscaping.",
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
