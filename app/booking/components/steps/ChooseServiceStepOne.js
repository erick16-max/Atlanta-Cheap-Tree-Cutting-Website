import {
  Card,
  Grid,
  Checkbox,
  Stack,
  Typography,
  LinearProgress,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import TreeCuttingImage from "../../../../public/services/treecuttingtwo.png";
import TreePrunningIcon from "../../../../public/services/treeprunning.png";
import TreeCuttingIcon from "../../../../public/services/treecuttingtwo.png";
import TreeRemovingIcon from "../../../../public/services/treeremoving.png";
import TreeTrimmingIcon from "../../../../public/services/treetrimming.png";
import YardCleaningIcon from "../../../../public/services/sweeping.png";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import CustomLinearProgress from "./CustomLinearProgress";
import AppContext from "@/context/AppContext";
import { steps } from "@/constants/AppConstants";
import ColorModeContext from "@/theme/CustomThemeProvider";

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
export default function ChooseServiceStepOne() {
  const [progressValue, setProgressValue] = React.useState(40);
  const { isMobile, isTablet,  } = React.useContext(ColorModeContext);
  const {setActiveState} = React.useContext(AppContext)

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Stack width={"100%"} component={"div"} gap={4}>
      <Grid container spacing={3}>
        {icons.map((icon, index) => {
          return (
            <Grid item xs={6} sm={6} md={6} lg={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  py: 2,
                  px: isMobile ? 2 : 5,
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                  borderRadius: "16px",
                  cursor: "pointer",
                  boxShadow: 0,
                  "&:hover": {
                    backgroundColor: "",
                    borderRadius: "",
                  },
                }}
              >
                <Stack>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    fontWeight={600}
                  >
                    {icon.title}
                  </Typography>
                  <Image
                    src={icon.src}
                    width={isMobile ? 30 : 40}
                    height={isMobile ? 30 : 40}
                    alt={`${icon.title} service`}
                  />
                </Stack>
                <Checkbox />
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Stack
        direction="row"
        width="100%" // Ensure the parent has a width
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            py: 1,
            px: 3,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
          }}
          disabled
        >
          Previous
        </Button>
        <Button
          variant="contained"
          sx={{
            py: 1,
            px: 3,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
          }}
          endIcon={<MdArrowRightAlt />}
          onClick={() => setActiveState(steps.step2)}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
