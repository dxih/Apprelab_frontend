import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

import LearnHero from "../components/Learnpage/LearnHero";
import MicroCourses from "../components/Learnpage/MicroCourses";
import LearningFlow from "../components/Learnpage/LearningFlow";
import StoriesOfJoy from "../components/Learnpage/StoriesOfJoy";
import JoinPlatformSection from "../components/Learnpage/JoinPlatformSection";

import AnimatedSection from "../components/common/AnimatedSection";

export default function Learn() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      <Helmet>
        <title>Learn & Build Skills | Apprelab</title>
        <meta name="description" content="Explore micro-courses, bootcamps, and specialized learning paths designed to turn your skills into opportunities." />
        <meta property="og:title" content="Learn & Build Skills | Apprelab" />
        <meta property="og:description" content="Join our learning platform designed to help you build real-world skills and grow your career." />
      </Helmet>

      {/* === PAGE CONTENT (on top of glow) === */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
          <LearnHero />

          <MicroCourses />

        <AnimatedSection>
          <LearningFlow />
        </AnimatedSection>

        <AnimatedSection>
          <StoriesOfJoy />
        </AnimatedSection>

          <JoinPlatformSection />
      </Box>
    </Box>
  );
}
