import { Box, Typography } from "@mui/material";
import { useState } from "react";
import StackNavbar from "../../../../components/dashboard/MyStackpage/StackNavbar";
import StackOngoingBootcamps from "../../../../components/dashboard/MyStackpage/StackBootcamps/StackOngoingBootcamps";
import StackPreSavedBootcamps from "../../../../components/dashboard/MyStackpage/StackBootcamps/StackPreSavedBootcamps";
import StackSideBar from "../../../../components/dashboard/MyStackpage/StackBootcamps/StackSideBar";
import StackCompletedBootcamps from "../../../../components/dashboard/MyStackpage/StackBootcamps/StackCompletetedBootCamps";
import StackCompletedBootcamps_image from "../../../../assets/images/components/OnGoingBootCamps/StackOnGoingBootCamp_1.png";
import stackCompletedBootCamps_img2 from "../../../../assets/images/components/OnGoingBootCamps/StackOnGoingBootCamp_2.png";
import PreSavedBootCamps_img1 from "../../../../assets/images/components/PreSavedBootCamp/PreSavedBootCamp_1.png";
import PreSavedBootCamps_img2 from "../../../../assets/images/components/PreSavedBootCamp/PreSavedBootCamps_2.png";
import { PageWrapper } from "../worklab/WorkLabCard";
import { useTheme } from "@mui/material/styles";

// IMPORT the interface to type the local array
import type { Bootcamp } from "../../../../components/dashboard/MyStackpage/StackBootcamps/StackOngoingBootcamps";

const ongoingBootcamps: Bootcamp[] = [
  {
    id: "intro_to_frontend(c8)",
    title: "Intro to Frontend (C8)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    progress: 50,
    nextClass: "10th November, 2025, 6PM WAT",
    image: StackCompletedBootcamps_image,
    resources: [
      {
        week: "Week 1",
        topic: "HTML and CSS Foundations",
        title: "Lecture Video",
        type: "video",
      },
      {
        week: "Week 1",
        topic: "HTML and CSS Foundations",
        title: "Lecture Slides",
        type: "slides",
      },
    ],
    assessments: [
      {
        id: "frontend_p1",
        type: "Project",
        title: "Build the frontend framework for a calculator app",
        status: "pending",
        deadline: "12:00 Tomorrow",
        number:1,
      },
      {
        id: "frontend_q1",
        type: "Quiz",
        title: "Test your knowledge on HTML/CSS",
        status: "submitted",
        deadline: "Completed",
        number:2,
      }
    ]
  },
  {
    id: "ux_laws_&_principles(C1)",
    title: "UX Laws & Principles (C1)",
    description: "Deep dive into all the laws of UX and basic design principles",
    duration: "6 Weeks",
    progress: 30,
    nextClass: "12th November, 2025, 2PM WAT",
    image: stackCompletedBootCamps_img2,
    resources: [
      {
        week: "Week 1",
        topic: "Introduction to Figma",
        title: "Figma Interface Tour",
        type: "video",
      },
      {
        week: "Week 1",
        topic: "Introduction to Figma",
        title: "Design Brief",
        type: "brief",
      },
    ],
    assessments: [
      {
        id: "ux_q1",
        type: "Quiz",
        title: "Test your knowledge on Hick's Law and Fitts's Law",
        status: "pending",
        deadline: "12:00 Tomorrow",
        number:1
      }
    ]
  },
];

const preSavedBootcamps = [
  {
    title: "Using Figma Like a Pro (C6)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    startDate: "20th November, 2025",
    image: PreSavedBootCamps_img1,
  },
  {
    title: "Wireframing UX (C2)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    startDate: "25th November, 2025",
    image: PreSavedBootCamps_img2,
  },
];

export default function MyStack() {
  const theme = useTheme();
  const [activeTab] = useState<string>("Bootcamp");

  return (
    <PageWrapper>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          width: "100%",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <StackNavbar />
        </Box>

        <Box sx={{ height: { xs: 16, sm: 20 } }} />

        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 600,
            px: { xs: 2, sm: 3, md: 4 },
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Ongoing Bootcamps
        </Typography>

        {activeTab === "Bootcamp" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
              py: { xs: 3, md: 4 },
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                flex: { xs: 1, md: 1.9 },
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: 0,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              <StackOngoingBootcamps bootcamps={ongoingBootcamps} />
              <StackPreSavedBootcamps bootcamps={preSavedBootcamps} />
            </Box>

            <Box
              sx={{
                flex: { xs: 1, md: 1 },
                width: "100%",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              <StackSideBar />
            </Box>
          </Box>
        )}

        <Box sx={{ height: { xs: 30, md: 40 } }} />
        <StackCompletedBootcamps />
      </Box>
    </PageWrapper>
  );
}