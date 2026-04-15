import React from "react";
import { Box, Typography, TextField, InputAdornment, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion, type Variants } from "framer-motion";

// Mentor Images
import mentor1 from "../../assets/images/mentors/mentor1.png";
import mentor2 from "../../assets/images/mentors/mentor2.png";
import mentor3 from "../../assets/images/mentors/mentor3.png";
import mentor4 from "../../assets/images/mentors/mentor4.png";
import mentor5 from "../../assets/images/mentors/mentor5.png";
import mentor6 from "../../assets/images/mentors/mentor6.png";
import mentor7 from "../../assets/images/mentors/mentor7.png";
import mentor8 from "../../assets/images/mentors/mentor8.png";
import mentor9 from "../../assets/images/mentors/mentor9.png";
import mentor10 from "../../assets/images/mentors/mentor10.png";

const mentorImages = [
  mentor1, mentor2, mentor3, mentor4, mentor5,
  mentor6, mentor7, mentor8, mentor9, mentor10,
];

const rectPositions = {
  desktop: [
    { x: -250, y: -180 }, { x: -80, y: -200 }, { x: 100, y: -180 }, { x: 270, y: -200 },
    { x: -280, y: 0 },    { x: -100, y: 20 },    { x: 100, y: -20 },   { x: 280, y: 10 },
    { x: -120, y: 180 },  { x: 120, y: 200 }
  ]
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const MentorHero: React.FC = () => {
  return (
    <Box sx={{ 
      position: "relative",
      background: "linear-gradient(135deg, #0B0B31 0%, #17174F 100%)",
      pt: { xs: 8, md: 12 },
      pb: { xs: 10, md: 14 },
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: { xs: "500px", md: "700px" }
    }}>
      {/* Decorative Glows */}
      <Box sx={{ position: "absolute", top: -100, left: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(59, 130, 246, 0.2)", filter: "blur(100px)" }} />
      <Box sx={{ position: "absolute", bottom: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(30, 58, 138, 0.3)", filter: "blur(100px)" }} />

      {/* Floating Mentors (Background) */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.4, display: { xs: "none", md: "block" } }}>
        {mentorImages.map((img, i) => (
          <motion.div
            key={`mentor-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
                opacity: 0.6, 
                scale: 1,
                y: [0, -20, 0] 
            }}
            transition={{ 
                duration: 4 + i, 
                repeat: Infinity, 
                repeatType: "reverse",
                delay: i * 0.2
            }}
            style={{
                position: "absolute",
                top: `calc(50% + ${rectPositions.desktop[i % rectPositions.desktop.length].y}px)`,
                left: `calc(50% + ${rectPositions.desktop[i % rectPositions.desktop.length].x}px)`,
                transform: "translate(-50%, -50%)"
            }}
          >
            <Box
                component="img"
                src={img}
                sx={{
                    width: { md: 70, lg: 90 },
                    height: { md: 70, lg: 90 },
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.2)",
                    objectFit: "cover",
                    filter: "blur(0.5px)"
                }}
            />
          </motion.div>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.03em"
              }}
            >
              Everyone Needs A <span style={{ color: "#60A5FA" }}>Mentor</span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "rgba(255,255,255,0.7)",
                maxWidth: 600,
                lineHeight: 1.6,
                fontWeight: 500
              }}
            >
              Connect with amazing individuals globally, find guidance,
              expand your network, and accelerate your growth.
            </Typography>

            <Box sx={{ width: "100%", maxWidth: 500, mt: 2 }}>
                <TextField
                fullWidth
                placeholder="Find your perfect mentor..."
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#60A5FA" }} />
                    </InputAdornment>
                    ),
                    sx: { 
                        borderRadius: "20px", 
                        backgroundColor: "rgba(255,255,255,0.05)", 
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#FFF",
                        height: 64,
                        px: 2,
                        "& input::placeholder": { color: "rgba(255,255,255,0.5)", opacity: 1 },
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                        "&.Mui-focused": { backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(96, 165, 250, 0.5)" },
                        "& fieldset": { border: "none" }
                    }
                }}
                />
            </Box>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MentorHero;