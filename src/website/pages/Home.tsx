import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Apprelab | Africa's Learn → Work → Earn Ecosystem</title>
        <meta name="description" content="Apprelab is Africa's first integrated Learn → Work → Earn platform, empowering talent through skill development, mentorship, and career opportunities." />
        <meta property="og:title" content="Apprelab | Africa's Learn → Work → Earn Ecosystem" />
        <meta property="og:description" content="Join the ecosystem where learning turns into earning. Courses, mentorship, and job opportunities for Africa's top talent." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
