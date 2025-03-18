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

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import ColorModeContext from "@/theme/CustomThemeProvider";
import AppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";
import TreePrunningIcon from  '../../public/services/treeprunningai.webp'
import TreeCuttingIcon from  '../../public/services/treecuttingai.webp'
import TreeRemovingIcon from  '../../public/services/treeremovalai.webp'
import TreeTrimmingIcon from  '../../public/services/treetrimmingai.webp'
import YardCleaningIcon from  '../../public/services/yardcleanup.webp'
import { images } from "@/components/services/Services";

export default function ServicePageCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { isTablet, isMobile } = useContext(ColorModeContext);
  const {isUser, setIsBookingModalOpen } = useContext(AppContext)

  const router = useRouter()

  const icons = [
    {
      src: images[0].src,
      title: "Tree Cutting",
      info: "Our tree cutting service focuses on safely and efficiently removing trees that are dead, diseased, or posing a risk to your property. Using advanced equipment and techniques, we ensure minimal impact on your surrounding landscape.",
    },
    {
      src: images[1].src,
      title: "Tree Pruning",
      info: "Tree pruning promotes healthy growth by removing dead or overgrown branches, improving the tree’s structure and appearance. This service helps reduce hazards and enhances air circulation and sunlight penetration for your trees.",
    },
    {
      src: images[2].src,
      title: "Tree Trimming",
      info: "Our tree trimming service is designed to maintain your trees’ shape and ensure proper growth patterns. By carefully cutting excess branches, we improve the overall aesthetic and structural integrity of your trees.",
    },
    {
      src: images[3].src,
      title: "Tree Removal",
      info: "When a tree becomes a safety hazard or needs to make way for new projects, our expert tree removal service is here to help. We carefully assess and remove trees while ensuring safety and preventing damage to your property.",
    },
    {
      src: images[4].src,
      title: "Yard Clearing & Afterstorm Cleanup",
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
      {icons.map((icon, index) => (
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
                  width: 200,
                  height: isTablet ? 200 : "100%",
                  backgroundColor: "#fff",
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
                  width={200}
                  height={160}
                  style={{borderRadius: '12px'}}
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
                    width: 150,
                    fontWeight: 600,
                    color: "primary.dark",
                    backgroundColor: "rgba(50, 110, 54, 0.15)",
                    borderEndStartRadius: "12px",
                    mt: 1,
                  }}
                  endIcon={<BsFillBookmarkPlusFill />}
                  onClick={() => {
                    if(isUser){
                      router.push('/booking')
                    }else{
                      setIsBookingModalOpen(true)
                    }
                  }}
                >
                  Book service
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Card>
  );
}
