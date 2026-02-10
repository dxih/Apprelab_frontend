import React from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Card,
} from "@mui/material";
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
    bg: "#6c95b8a4",
    avatar: user1,
  },
  {
    name: "Sandra Chris",
    role: "Full Stack Developer",
    text: "I joined to share my experience, but Apprelab turned it into a community. Watching my students grow and earn while I earn too—it’s a win-win.",
    avatar: user2,
  },
  {
    name: "Andrew James",
    role: "Data Analyst",
    text: "The structure Apprelab provides makes mentorship seamless. Everything from scheduling to tracking mentee progress is smooth and professional.",
    bg: "#d9d79aee",
    avatar: user3,
  },
  {
    name: "Franklin Power",
    role: "Software Engineer",
    text: "I joined Apprelab to help others. Mentoring has been a great way to connect with people and learn from their experiences.",
    avatar: user1,
  },
];

const StoriesOfImpact: React.FC = () => {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0B0B57",
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 6, md: 8 },
      }}
    >
      {/* Background S */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-20deg)",
          fontSize: { xs: "800px", sm: "1800px", md: "2000px" },
          fontWeight: 900,
          color: "rgba(255, 255, 255, 0.08)",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        S
      </Typography>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 8,
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {/* Left */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ position: "relative", width: 70, height: 55 }}>
              {[0, 1, 2].map((index) => (
                <Box
                  key={index}
                  component="img"
                  src={usergroup}
                  sx={{
                    position: "absolute",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    top: 0,
                    left: index * 16,
                    zIndex: 3 - index,
                    border: "2px solid white",
                  }}
                />
              ))}
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#FFFFFF",
                }}
              >
                500K+
              </Typography>
              <Typography
                sx={{
                  color: "#E0E0E0",
                  fontSize: "0.9rem",
                  mt: 0.5,
                }}
              >
                Targeted mentors by 2027
              </Typography>
            </Box>
          </Box>

          {/* Right */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "3rem" },
                color: "#FFFFFF",
                pr: { md: "200px" },
              }}
            >
              Stories Of{" "}
              <Box component="span" sx={{ color: "#FFD400" }}>
                Impact
              </Box>
            </Typography>

            {/* Buttons (not functional here but kept for UI symmetry) */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #D0D3E2",
                  "&:hover": { backgroundColor: "#FFD400" },
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 16, color: "#0B0B57" }} />
              </IconButton>

              <IconButton
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  "&:hover": { backgroundColor: "#FFD400" },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 16, color: "#0B0B57" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Infinite Scroll Row */}
        <Box sx={{ overflow: "hidden", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              animation: "scroll 25s linear infinite",
            }}
          >
            {duplicated.map((item, i) => (
              <Box key={i} sx={{ px: 1.5 }}>
                <Card
                  sx={{
                    backgroundColor: item.bg || "#ffffff",
                    borderRadius: "22px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
                    px: 4,
                    py: 3,
                    mr: 3,
                    minHeight: 210,
                    width: 350,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 25,
                      color: "#0B0B57",
                      fontSize: 32,
                      transform: "rotate(180deg)",
                      opacity: 0.3,
                    }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={item.avatar}
                      sx={{
                        width: 56,
                        height: 56,
                        border: "2px solid #fff",
                      }}
                    />
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: "#0B0B31" }}>
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "0.9rem", color: "#0e0f22", mt: 0.2 }}
                      >
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      color: "#0B0B31",
                      mt: 2.5,
                      fontSize: "0.92rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
};

export default StoriesOfImpact;
