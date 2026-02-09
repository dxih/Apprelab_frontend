import { Box } from "@mui/material";
import MentorHero from "../components/Mentorpage/MentorHero";
import WhyMentor from "../components/Mentorpage/WhyMentor";
import MentoringFlow from "../components/Mentorpage/MentoringFlow";
import StoriesOfImpact from "../components/Mentorpage/StoriesOfImpact";
import EarnWhileYouImpactLives from "../components/Mentorpage/EarnWhileYouImpactLives";
import MentorWaitlist from "../components/Mentorpage/MentorWaitlist";

import AnimatedSection from "../components/common/AnimatedSection";

export default function Mentor() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
      }}
    >

      {/* === Actual Page Content === */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
          <MentorHero />

        <AnimatedSection>
          <WhyMentor />
        </AnimatedSection>

        <AnimatedSection>
          <MentoringFlow />
        </AnimatedSection>

        <AnimatedSection>
          <StoriesOfImpact />
        </AnimatedSection>

        <AnimatedSection>
          <EarnWhileYouImpactLives />
        </AnimatedSection>

          <MentorWaitlist />
      </Box>
    </Box>
  );
}
