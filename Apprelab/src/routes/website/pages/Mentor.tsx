import { Box } from "@mui/material";
import MentorHero from "../../../components/website/Mentorpage/MentorHero";
import WhyMentor from "../../../components/website/Mentorpage/WhyMentor";
import MentoringFlow from "../../../components/website/Mentorpage/MentoringFlow";
import StoriesOfImpact from "../../../components/website/Mentorpage/StoriesOfImpact";
import EarnWhileYouImpactLives from "../../../components/website/Mentorpage/EarnWhileYouImpactLives";
import MentorWaitlist from "../../../components/website/Mentorpage/MentorWaitlist";

import AnimatedSection from "../../../components/common/AnimatedSection";

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
      {/* === Blue Glow Spots (5 total) === */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "-15%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 70%)",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "25%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 75%)",
          filter: "blur(180px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "70%",
          right: "10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)",
          filter: "blur(160px)",
          zIndex: 0,
        }}
      />

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
