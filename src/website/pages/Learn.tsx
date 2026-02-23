import { Box } from "@mui/material";

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
