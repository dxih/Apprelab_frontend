import HomeHero from "../components/Homepage/Home_Hero";
import AboutApprelab from "../components/Homepage/AboutApprelab";
import Categories from "../components/Homepage/Categories";
import AboutIntro from "../components/Homepage/AboutIntro";
import FaqSection from "../components/Homepage/FaqSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutApprelab />
      <Categories />
      <AboutIntro />
      <FaqSection />
    </>
  );  
}
