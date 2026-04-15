import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Container, useTheme } from "@mui/material";
import { motion, type Variants } from "framer-motion";

import videoThumbnail from "../../assets/images/home_academy.png";
import BackgroundDecor from "../common/BackgroundDecor";
import patternBg from "../../assets/images/bg.jpg";

const HomeHero: React.FC = () => {
  const theme = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: { xs: "85vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        pt: { xs: 12, md: 0 },
        pb: { xs: 8, md: 0 },
        backgroundImage: `linear-gradient(to bottom, rgba(238, 241, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%), url(${patternBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <BackgroundDecor variant="home" />
      <Container maxWidth="xl">
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: { xs: 4, md: 6 },
            position: "relative",
            zIndex: 2,
          }}
        >

          {/* ✅ MAIN HEADLINE */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", sm: "4.5rem", md: "6rem" },
                fontWeight: 900,
                color: theme.palette.primary.main,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                maxWidth: "1000px",
                mx: "auto",
                pt: { md: 18 },
              }}
            >
              Learn. Build.{" "}
              <Box
                component="span"
                sx={{
                  color: theme.palette.secondary.main,
                  position: "relative",
                  display: "inline-block",
                  fontFamily: '"Playfair Display", "Georgia", serif',
                }}
              >
                Earn.
              </Box>
            </Typography>
          </motion.div>

          {/* ✅ SUBTITLE */}
          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                width: { xs: "100%", sm: "90%", md: "100%" },
                color: "text.secondary",
                lineHeight: 1.6,
                maxWidth: "750px",
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                fontWeight: 500,
                mx: "auto",
              }}
            >
              The first integrated Learn-Work-Earn ecosystem designed for Africa's top talent.
              Master high-impact skills, build real-world products, and unlock global earning opportunities.
            </Typography>
          </motion.div>

          {/* ✅ INTERACTIVE BUTTONS */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2.5, sm: 3 },
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/signup"
                size="large"
                sx={{
                  px: 6,
                  py: 2.2,
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  borderRadius: "16px",
                  backgroundColor: theme.palette.primary.main,
                  color: "#FFFFFF",
                  boxShadow: "0 10px 40px rgba(0, 87, 255, 0.25)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  textTransform: "none",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    backgroundColor: theme.palette.primary.dark,
                    boxShadow: "0 20px 50px rgba(0, 87, 255, 0.35)",
                  },
                }}
              >
                Start Your Journey
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="/about"
                size="large"
                sx={{
                  px: 6,
                  py: 2.2,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  borderRadius: "16px",
                  color: theme.palette.primary.main,
                  borderColor: "rgba(1, 10, 69, 0.15)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  textTransform: "none",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: theme.palette.primary.main,
                    backgroundColor: "rgba(1, 10, 69, 0.04)",
                  },
                }}
              >
                Watch Demo
              </Button>
            </Box>
          </motion.div>

          {/* ✅ HERO VISUAL - Enhanced Glassmorphism */}
          <motion.div
            variants={itemVariants}
            style={{ width: "100%", maxWidth: "1100px" }}
          >
            <Box
              component={motion.div}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              sx={{
                width: "100%",
                mt: { xs: 6, md: 10 },
                borderRadius: { xs: "32px", md: "48px" },
                overflow: "hidden",
                boxShadow: "0 60px 120px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px)",
                position: "relative",
              }}
            >
              <Box
                component={motion.div}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={videoThumbnail}
                  alt="AppreLab Platform Preview"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                    transform: "scale(1.02)", // Subtle zoom for edge bleed look
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;