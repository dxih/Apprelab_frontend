import { Box, Grid, Typography, Button, Container, Stack } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import { ArrowForward, RocketLaunch } from "@mui/icons-material";
import workLabHero from "../../assets/images/worklabs/worklabhero.png";
import workFrame_1 from "../../assets/images/worklabs/worklabFrames/worklabframe1.png";
import workFrame_2 from "../../assets/images/worklabs/worklabFrames/worklabframe2.png";
import workFrame_3 from "../../assets/images/worklabs/worklabFrames/worklabframe3.png";
import workFrame_4 from "../../assets/images/worklabs/worklabFrames/worklabframe4.png";
import workFrame_works from "../../assets/images/worklabs/worklabFrames/worksLabworks.png";
import WorklabCard from "./WorkLabCard";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Worklabs: React.FC = () => {
  return (
    <Box sx={{ pb: 12, backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      {/* Premium Hero Section */}
      <Box 
        sx={{ 
          background: "linear-gradient(135deg, #0B0B31 0%, #17174F 100%)",
          color: "#FFF",
          pt: { xs: 8, md: 10 },
          pb: { xs: 12, md: 16 },
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Box sx={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(96, 165, 250, 0.15)", filter: "blur(100px)" }} />
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={7}>
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Stack spacing={3}>
                  <Typography sx={{ fontSize: { xs: "2.5rem", md: "4.2rem" }, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                    Work. Learn.<br />
                    <span style={{ color: "#60A5FA" }}>Launch.</span>
                  </Typography>
                  <Typography sx={{ fontSize: "1.1rem", opacity: 0.7, maxWidth: 500, lineHeight: 1.6 }}>
                    AppreLab Worklabs connects talented learners with real-world projects. Gain hands-on experience, build your portfolio, and get hired.
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                    <Button 
                        variant="contained" 
                        endIcon={<ArrowForward />}
                        sx={{ backgroundColor: "#FFF", color: "#0B0B31", borderRadius: "16px", px: 4, py: 1.8, fontWeight: 900, textTransform: "none", "&:hover": { backgroundColor: "#F1F5F9" } }}
                    >
                        Explore Projects
                    </Button>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                    <Box component="img" src={workLabHero} sx={{ width: "100%", borderRadius: "24px", boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }} />
                </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ mt: -8, position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <Grid container spacing={3}>
            {[
                { title: "UI/UX Design", img: workFrame_1, count: "45 Projects" },
                { title: "Web Development", img: workFrame_2, count: "32 Projects" },
                { title: "Data Science", img: workFrame_3, count: "18 Projects" },
                { title: "Marketing", img: workFrame_4, count: "24 Projects" }
            ].map((cat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <motion.div variants={fadeInUp}>
                  <Box 
                    sx={{ 
                        position: "relative", 
                        borderRadius: "24px", 
                        overflow: "hidden", 
                        height: 280,
                        cursor: "pointer",
                        "&:hover img": { transform: "scale(1.1)" },
                        "&:hover .overlay": { background: "rgba(11, 11, 49, 0.4)" }
                    }}
                  >
                    <Box component="img" src={cat.img} sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s ease" }} />
                    <Box className="overlay" sx={{ position: "absolute", inset: 0, background: "rgba(11, 11, 49, 0.2)", transition: "0.4s ease", p: 3, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                        <Typography sx={{ color: "#FFF", fontWeight: 900, fontSize: "1.1rem" }}>{cat.title}</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "0.85rem" }}>{cat.count}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Featured Opportunities */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end" mb={6}>
            <Box>
                <Typography sx={{ fontSize: "2rem", fontWeight: 900, color: "#0B0B31", mb: 1 }}>Featured Opportunities</Typography>
                <Typography sx={{ fontSize: "1rem", color: "#64748B", fontWeight: 500 }}>High-impact projects looking for contributors</Typography>
            </Box>
            <Button endIcon={<ArrowForward />} sx={{ fontWeight: 800, color: "#3B82F6", textTransform: "none" }}>View All</Button>
        </Stack>
        <Grid container spacing={4}>
            <WorklabCard />
        </Grid>
      </Container>

      {/* How it Works */}
      <Box sx={{ mt: 16, py: 12, backgroundColor: "#FFF", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
        <Container maxWidth="lg">
            <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 900, color: "#0B0B31", mb: 8 }}>
                How Worklab <span style={{ color: "#60A5FA" }}>Works</span>
            </Typography>
            <Box component="img" src={workFrame_works} sx={{ width: "100%", borderRadius: "24px" }} />
        </Container>
      </Box>

      {/* Premium CTA */}
      <Container maxWidth="lg" sx={{ mt: 16 }}>
        <Box 
            sx={{ 
                background: "linear-gradient(135deg, #3B82F6 0%, #1C1E53 100%)", 
                borderRadius: "32px", 
                p: { xs: 6, md: 10 }, 
                textAlign: "center",
                color: "#FFF",
                position: "relative",
                overflow: "hidden"
            }}
        >
          <Box sx={{ position: "absolute", top: -50, left: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(50px)" }} />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Stack spacing={3} alignItems="center">
                <RocketLaunch sx={{ fontSize: "3rem", mb: 2 }} />
                <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 900, letterSpacing: "-0.02em" }}>Have a project in mind?</Typography>
                <Typography sx={{ fontSize: "1.1rem", opacity: 0.8, maxWidth: 600, mx: "auto", fontWeight: 500, lineHeight: 1.6 }}>
                    Submit your project brief and let our talented pool of curated learners, guided by industry mentors, bring your vision to life.
                </Typography>
                <Button 
                    variant="contained" 
                    sx={{ backgroundColor: "#FFF", color: "#0B0B31", borderRadius: "16px", px: 6, py: 2, mt: 2, fontWeight: 900, fontSize: "1.1rem", textTransform: "none", "&:hover": { backgroundColor: "#F1F5F9" } }}
                >
                    Post your project
                </Button>
              </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Worklabs;
