import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import courseImage from "../../../dashboard/assets/images/courses/courseshero.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const CourseHero: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFB",
        pt: { xs: 4, md: 8 },
        pb: { xs: 4, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box
            sx={{
                width: "100%",
                background: "linear-gradient(135deg, #0B0B31 0%, #1C1E53 100%)",
                borderRadius: "32px",
                px: { xs: 4, md: 10 },
                py: { xs: 6, md: 10 },
                color: "#fff",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(11, 11, 49, 0.2)"
            }}
        >
          {/* Decorative Elements */}
          <Box sx={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(59, 130, 246, 0.2)", filter: "blur(60px)" }} />
          
          <Box sx={{ flex: 1, position: "relative", zIndex: 1, textAlign: { xs: "center", md: "left" } }}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Typography
                sx={{
                    fontSize: { xs: "2rem", md: "3.5rem" },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    mb: 1
                }}
                >
                Self-Paced
                </Typography>

                <Typography
                sx={{
                    fontSize: { xs: "2rem", md: "3.5rem" },
                    fontWeight: 900,
                    color: "#60A5FA",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    mb: 3
                }}
                >
                Courses
                </Typography>

                <Typography
                sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    maxWidth: { xs: "100%", md: "450px" },
                    opacity: 0.8,
                    fontWeight: 500,
                    lineHeight: 1.6
                }}
                >
                Master high-income tech skills on your own schedule. Build projects, gain verified certifications, and accelerate your career path at your own pace.
                </Typography>
            </motion.div>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              mt: { xs: 5, md: 0 },
            }}
          >
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
                <Box
                    component="img"
                    src={courseImage}
                    alt="course preview"
                    sx={{
                        width: "100%",
                        maxWidth: "500px",
                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
                        borderRadius: "20px"
                    }}
                />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CourseHero;