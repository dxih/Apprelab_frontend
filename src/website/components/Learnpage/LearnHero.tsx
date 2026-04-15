import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import learnHero from "../../assets/images/learn_hero.png";

const LearnHero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        background: "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* TEXT SECTION */}
          <Box sx={{ maxWidth: "800px", mx: "auto", mb: { xs: 6, md: 8 } }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 900,
                  color: "#0B0B31",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  mb: 3,
                }}
              >
                Practical Learning for Real{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#FFD60A",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Opportunities
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                  color: "#64748B",
                  mb: 5,
                  lineHeight: 1.6,
                  fontWeight: 500,
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Learn in-demand skills through real projects and expert mentorship;
                everything here prepares you for real opportunities.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
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
                    transform: "translateY(-2px)",
                    boxShadow: "0 15px 40px rgba(11, 11, 49, 0.3)",
                  },
                }}
              >
                Get started today
              </Button>
            </motion.div>
          </Box>

          {/* IMAGE */}
          <motion.div
            variants={itemVariants}
            style={{ width: "100%", position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "120%",
                height: "120%",
                background: "radial-gradient(circle, rgba(11, 11, 49, 0.03) 0%, transparent 70%)",
                zIndex: 0,
              }}
            />
            <motion.img
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={learnHero}
              alt="Learning together"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
                position: "relative",
                zIndex: 1,
                borderRadius: "24px",
                boxShadow: "0 40px 100px rgba(0,0,0,0.12)",
                border: "1px solid rgba(255,255,255,0.8)",
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LearnHero;
