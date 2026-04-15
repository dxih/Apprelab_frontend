import React from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Card,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import usergroup from "../../assets/images/usergroup.png";

const testimonials = [
  {
    name: "Amelia Joseph",
    role: "UI/UX Designer",
    text: "Apprelab has made mentorship effortless. I’ve guided amazing talents and even earned when they landed real projects. It’s fulfilling to see my impact turn into opportunity.",
    bg: "rgba(108, 149, 184, 0.15)",
    avatar: user1,
  },
  {
    name: "Sandra Chris",
    role: "Full Stack Developer",
    text: "I joined to share my experience, but Apprelab turned it into a community. Watching my students grow and earn while I earn too—it’s a win-win.",
    bg: "rgba(255, 255, 255, 0.05)",
    avatar: user2,
  },
  {
    name: "Andrew James",
    role: "Data Analyst",
    text: "The structure Apprelab provides makes mentorship seamless. Everything from scheduling to tracking mentee progress is smooth and professional.",
    bg: "rgba(217, 215, 154, 0.15)",
    avatar: user3,
  },
  {
    name: "Franklin Power",
    role: "Software Engineer",
    text: "I joined Apprelab to help others. Mentoring has been a great way to connect with people and learn from their experiences.",
    bg: "rgba(255, 255, 255, 0.05)",
    avatar: user1,
  },
];

const StoriesOfImpact: React.FC = () => {
  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0B0B31",
        py: { xs: 10, md: 15 },
      }}
    >
      {/* Background S */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-15deg)",
          fontSize: { xs: "500px", sm: "1000px", md: "1500px" },
          fontWeight: 950,
          color: "rgba(255, 255, 255, 0.03)",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        S
      </Typography>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: { xs: 6, md: 10 },
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Left: Heading */}
          <Box sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Stories Of{" "}
                <Box component="span" sx={{ color: "#FFD60A" }}>
                  Impact
                </Box>
              </Typography>
            </motion.div>
          </Box>

          {/* Right: Stats & Nav */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" }, gap: 3 }}>
             <Box sx={{ display: "flex", alignItems: "center", gap: 2, backgroundColor: "rgba(255,255,255,0.05)", p: 2, borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Box sx={{ position: "relative", width: 70, height: 35 }}>
                {[0, 1, 2].map((index) => (
                    <Avatar
                    key={index}
                    src={usergroup}
                    sx={{
                        position: "absolute",
                        width: 32,
                        height: 32,
                        left: index * 18,
                        zIndex: 3 - index,
                        border: "2px solid #0B0B31",
                    }}
                    />
                ))}
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: "1.2rem", color: "#FFFFFF", lineHeight: 1 }}>500K+</Typography>
                    <Typography sx={{ color: "#94A3B8", fontSize: "0.75rem", fontWeight: 600, mt: 0.5, textTransform: "uppercase" }}>Mentors targeted by 2027</Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5 }}>
              <IconButton
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "#FFD60A", color: "#0B0B31" },
                  transition: "0.3s"
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
              </IconButton>

              <IconButton
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "#FFD60A", color: "#0B0B31" },
                  transition: "0.3s"
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Infinite Scroll Row */}
      <Box sx={{ overflow: "hidden", width: "100%", py: 4 }}>
        <motion.div
           animate={{
               x: [0, -1400],
           }}
           transition={{
               duration: 30,
               repeat: Infinity,
               ease: "linear",
           }}
           style={{
               display: "flex",
               width: "max-content",
           }}
        >
          {duplicated.map((item, i) => (
            <Box key={i} sx={{ px: 2 }}>
              <Card
                sx={{
                  backgroundColor: item.bg,
                  backdropFilter: "blur(20px)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  p: { xs: 4, md: 5 },
                  width: { xs: 320, md: 450 },
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.02)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    position: "absolute",
                    top: 30,
                    right: 40,
                    color: "#FFD60A",
                    fontSize: 48,
                    opacity: 0.2,
                  }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, mb: 4 }}>
                  <Avatar
                    src={item.avatar}
                    sx={{
                      width: 64,
                      height: 64,
                      border: "3px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#FFFFFF", fontSize: "1.1rem" }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem", color: "#3B82F6", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {item.role}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    fontWeight: 500,
                    fontStyle: "italic"
                  }}
                >
                  "{item.text}"
                </Typography>
              </Card>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default StoriesOfImpact;
