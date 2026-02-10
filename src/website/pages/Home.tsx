import { Box } from "@mui/material";
import HomeHero from "../components/Homepage/HomeHero";
import AboutApprelab from "../components//Homepage/AboutApprelab";
import Categories from "../components//Homepage/Categories";
import AboutIntro from "../components//Homepage/AboutIntro";
import FaqSection from "../components//Homepage/FaqSection";
import AnimatedSection from "../components/common/AnimatedSection";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
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
