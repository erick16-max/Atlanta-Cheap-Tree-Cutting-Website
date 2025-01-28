import React from "react";
import { Box, Typography, useTheme, useMediaQuery, Card } from "@mui/material";
import Image from "next/image";
import PortfolioImageOne from "../../public/portfolio/portfolio1.jpg";
import PortfolioImageTwo from "../../public/portfolio/portfolio2.jpg";
import PortfolioImageThree from "../../public/portfolio/portfolio3.jpg";
import PortfolioImageFour from "../../public/portfolio/portfolio4.jpg";
import PortfolioImageFive from "../../public/portfolio/portfolio5.jpg";
import PortfolioImageSix from "../../public/portfolio/portfolio6.jpg";
import PortfolioImageSeven from "../../public/portfolio/portfolio7.jpg";
import PortfolioImageEight from "../../public/portfolio/portfolio8.jpg";
import PortfolioImageNine from "../../public/portfolio/portfolio9.jpg";

const portfolioItems = [
  { type: "image", src: PortfolioImageOne, title: "Project 1" },
  { type: "image", src: PortfolioImageTwo, title: "Project 2" },
  { type: "image", src: PortfolioImageThree, title: "Project 3" },
  { type: "video", src: "/portfolio/vid.mp4", title: "Portfolio Video" },
  { type: "image", src: PortfolioImageFour, title: "Project 4" },
  // { type: "image", src: PortfolioImageFive, title: "Project 5" },
  // { type: "image", src: PortfolioImageFive, title: "Project 6" },
  // { type: "image", src: PortfolioImageSeven, title: "Project 7" },
  // { type: "image", src: PortfolioImageEight, title: "Project 8" },
  // { type: "image", src: PortfolioImageNine, title: "Project 9" },
];

const PortfolioGrid = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
    sx={{
        my: 2,
        backgroundColor: "#ffffff",
        width: "100%",
        boxShadow: 0,
      }}
    >
         <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isSmallScreen
          ? "repeat(2, 1fr)" // 2 columns on small screens
          : isMediumScreen
          ? "repeat(3, 1fr)" // 3 columns on medium screens
          : "repeat(4, 1fr)", // 4 columns on large screens
        gridAutoRows: "150px",
        gap: "4px", // Small gap between items
        overflow: "hidden",
      }}
    >
      {portfolioItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            gridColumn: index % 4 === 0 && !isSmallScreen ? "span 2" : "span 1",
            gridRow: index % 4 === 0 && !isSmallScreen ? "span 2" : "span 1",
            overflow: "hidden",
          }}
        >
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          ) : (
            <video
              src={item.src}
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              textAlign: "center",
              py: 1,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {item.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
    </Card>
  );
};

export default PortfolioGrid;
