import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import mentorInviteImage from "../../assets/images/mentor_hero.png";
import patternBg from "../../assets/images/bg.jpg";

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
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const MentorHero: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "85vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        backgroundImage: `linear-gradient(180deg, rgba(248, 250, 255, 0.85) 0%, rgba(255, 255, 255, 0.95) 100%), url(${patternBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <Box sx={{ maxWidth: "900px", mx: "auto", mb: { xs: 6, md: 10 } }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 900,
                  color: "#0B0B31",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  mb: 3,
                }}
              >
                Share your{" "}
                <Box component="span" sx={{ color: "#FFD60A" }}>
                  Knowledge.
                </Box>{" "}
                Shape the Next <br />
                Generation of{" "}
                <Box component="span" sx={{ color: "#3B82F6" }}>
                  Digital Talent
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  color: "#64748B",
                  mb: 5,
                  lineHeight: 1.6,
                  fontWeight: 500,
                  maxWidth: "700px",
                  mx: "auto",
                }}
              >
                Become a mentor, create global-standard courses, and earn every time your students succeed.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                sx={{
                  backgroundColor: "#0B0B31",
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: "14px",
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  boxShadow: "0 10px 30px rgba(11, 11, 49, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#111151",
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 50px rgba(11, 11, 49, 0.3)",
                  },
                }}
              >
                Apply to Mentor
              </Button>
            </motion.div>
          </Box>

          {/* Image Section */}
          <motion.div
            variants={fadeInUp}
            style={{ width: "100%", position: "relative" }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "900px",
                mx: "auto",
                borderRadius: "32px",
                overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,0.12)",
                border: "1px solid rgba(255,255,255,0.8)",
                position: "relative",
              }}
            >
              <motion.img
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src={mentorInviteImage}
                alt="Mentor and student"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />

              {/* Decorative Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11,11,49,0.1) 0%, transparent 40%)",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MentorHero;
