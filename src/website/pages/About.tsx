import { Box, Typography, Grid, Card, CardContent, Avatar, Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { motion, type Variants } from "framer-motion";
import BackgroundDecor from "../components/common/BackgroundDecor";
import patternBg from "../assets/images/bg.jpg";

// Dummy team images and side image placeholder
import team1 from "../assets/images/user1.png";
import sideIllustration from "../assets/images/user1.png";
import videoPlaceholder from "../assets/images/user1.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
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
    transition: {
      staggerChildren: 0.15,
    }
  }
};

export default function About() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        backgroundImage: `linear-gradient(180deg, rgba(248, 250, 255, 0.85) 0%, rgba(255, 255, 255, 0.95) 100%), url(${patternBg})`,

        pt: { xs: 12, md: 16 },
        pb: 8,
      }}
    >
      <BackgroundDecor variant="about" />
      <Helmet>
        <title>About Us | Apprelab Story & Mission</title>
        <meta name="description" content="Discover the story behind Apprelab. Our mission is to empower people to learn, build, collaborate, and grow globally." />
        <meta property="og:title" content="About Us | Apprelab Story & Mission" />
        <meta property="og:description" content="Empowering seekers and builders through skill development, mentorship, and innovative collaboration." />
      </Helmet>

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Container maxWidth="lg">
          {/* === Hero Section === */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", mb: 12 }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.5rem" },
                    fontWeight: 900,
                    color: "#0B0B31",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    mb: 3,
                  }}
                >
                  About Apprelab
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.6rem" },
                    fontWeight: 700,
                    color: "#3B82F6",
                    mb: 4,
                    maxWidth: "800px",
                    mx: "auto",
                  }}
                >
                  Empowering people to learn, build, collaborate and grow.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    lineHeight: 1.8,
                    color: "#64748B",
                    maxWidth: "800px",
                    mx: "auto",
                    fontWeight: 500,
                  }}
                >
                  Apprelab is designed to give creators, professionals, builders and learners the tools they need to grow. Whether you're learning a new skill, showcasing your abilities, connecting with others, or launching your own ideas — we provide the platform to make it possible.
                </Typography>
              </motion.div>
            </Box>

            {/* === Mission & Vision Cards === */}
            <Grid container spacing={4} sx={{ mb: 15, justifyContent: "center" }}>
              {[
                {
                  title: "Mission",
                  color: "#3B82F6",
                  content: "To empower learners and creators with the tools, guidance, and community they need to succeed.",
                  delay: 0.1
                },
                {
                  title: "Vision",
                  color: "#FFD60A",
                  content: "To be the leading platform for skill development, mentorship, and innovative collaboration globally.",
                  delay: 0.2
                }
              ].map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        borderRadius: "32px",
                        p: { xs: 4, md: 6 },
                        height: "100%",
                        textAlign: "center",
                        backgroundColor: "rgba(248, 250, 252, 0.8)",
                        border: "1px solid rgba(0,0,0,0.03)",
                        backdropFilter: "blur(20px)",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                          borderColor: "rgba(0,0,0,0.06)",
                        }
                      }}
                    >
                      <CardContent>
                        <Typography sx={{ fontWeight: 900, fontSize: "1.8rem", mb: 3, color: item.color, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: "1.2rem", color: "#1E293B", lineHeight: 1.7, fontWeight: 500 }}>
                          {item.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* === Stats Section === */}
          <Box sx={{ mb: 15 }}>
            <Grid container spacing={4} sx={{ textAlign: "center" }}>
              {[
                { label: "Students Trained", value: "5k+", color: "#3B82F6" },
                { label: "Expert Mentors", value: "500+", color: "#FFD60A" },
                { label: "Countries Reached", value: "20", color: "#3B82F6" },
                { label: "Learning Hours", value: "100k+", color: "#FFD60A" },
              ].map((stat, idx) => (
                <Grid item xs={6} md={StatItem(idx)}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <Typography sx={{ fontWeight: 900, fontSize: { xs: "2.5rem", md: "3.5rem" }, color: stat.color, lineHeight: 1, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.9rem" }}>
                      {stat.label}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* === Our Journey Timeline === */}
          <Box sx={{ mb: 15, textAlign: "center" }}>
            <Typography sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "2.8rem" }, mb: 8, color: "#0B0B31" }}>
              Our Journey
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {[
                { year: "2018", event: "Founded Apprelab", color: "#3B82F6" },
                { year: "2019", event: "First 1000 learners", color: "#FFD60A" },
                { year: "2020", event: "Launched Mentor Program", color: "#3B82F6" },
                { year: "2022", event: "Expanded globally", color: "#FFD60A" },
              ].map((item, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card
                      sx={{
                        borderRadius: "24px",
                        p: 4,
                        textAlign: "center",
                        backgroundColor: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(0,0,0,0.05)",
                        transition: "0.3s",
                        "&:hover": { borderColor: item.color, transform: "scale(1.02)" }
                      }}
                    >
                      <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", mb: 1, color: item.color }}>
                        {item.year}
                      </Typography>
                      <Typography sx={{ color: "#1E293B", fontWeight: 600 }}>{item.event}</Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* === Team Section === */}
          <Box sx={{ mb: 15, textAlign: "center" }}>
            <Typography sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "2.8rem" }, mb: 8, color: "#0B0B31" }}>
              Meet the Team
            </Typography>
            <Grid container spacing={6} justifyContent="center">
              {[1, 2, 3, 4].map((idx) => (
                <Grid item xs={6} md={3} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <Avatar
                      src={team1}
                      sx={{
                        width: 140,
                        height: 140,
                        mb: 3,
                        mx: "auto",
                        border: "6px solid #F1F5F9",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
                      }}
                    />
                    <Typography sx={{ fontWeight: 800, color: "#0B0B31", fontSize: "1.1rem" }}>
                      Expert Minds
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontWeight: 500 }}>
                      Strategic Lead
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* === Split-Screen Layout === */}
          <Grid container spacing={8} alignItems="center" justifyContent="center" sx={{ mb: 15 }}>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Typography sx={{ fontWeight: 900, fontSize: { xs: "2.2rem", md: "3rem" }, mb: 3, color: "#0B0B31", lineHeight: 1.2 }}>
                  Build, Learn & Collaborate
                </Typography>
                <Typography sx={{ fontSize: "1.2rem", color: "#64748B", lineHeight: 1.8, fontWeight: 500 }}>
                  Apprelab’s platform allows learners, mentors, and teams to interact seamlessly, creating a powerful ecosystem for growth and innovation. Our infrastructure is built to scale your dreams.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 0.8 }
                }}
              >
                <Box
                  component="img"
                  src={sideIllustration}
                  alt="Illustration"
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    borderRadius: "40px",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.1)"
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          {/* === Video Section === */}
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography sx={{ fontWeight: 900, fontSize: { xs: "2.2rem", md: "3rem" }, mb: 6, color: "#0B0B31" }}>
                Experience Apprelab
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "40px",
                  overflow: "hidden",
                  boxShadow: "0 50px 100px rgba(0,0,0,0.15)",
                  width: { xs: "100%", md: "85%" },
                  mx: "auto",
                  backgroundColor: "#F1F5F9"
                }}
              >
                <Box
                  component="img"
                  src={videoPlaceholder}
                  alt="Video placeholder"
                  sx={{
                    width: "100%",
                    display: "block",
                    transition: "transform 0.5s",
                    "&:hover": { transform: "scale(1.02)" }
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function StatItem(idx: number) {
  // Simple helper for responsiveness
  return idx < 2 ? 6 : 6; // Mobile
  // For desktop it will be 3 (since grid container uses spacing 4)
} 
