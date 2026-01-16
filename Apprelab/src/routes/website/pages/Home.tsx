import { Box } from "@mui/material";
import HomeHero from "../../../components/website/Homepage/HomeHero";
import AboutApprelab from "../../../components/website/Homepage/AboutApprelab";
import Categories from "../../../components/website/Homepage/Categories";
import AboutIntro from "../../../components/website/Homepage/AboutIntro";
import FaqSection from "../../../components/website/Homepage/FaqSection";
import AnimatedSection from "../../../components/common/AnimatedSection";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* === Blue Glow Spots Copied from Mentor Page === */}
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

      {/* === Actual Page Content === */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
          <HomeHero />

        <AnimatedSection>
          <AboutApprelab />
        </AnimatedSection>

        <AnimatedSection>
          <Categories />
        </AnimatedSection>

        <AnimatedSection>
          <AboutIntro />
        </AnimatedSection>

        <AnimatedSection>
          <FaqSection />
        </AnimatedSection>
      </Box>
    </Box>
  );
}
