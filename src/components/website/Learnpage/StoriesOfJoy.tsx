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

// Assets
import user1 from "../../../assets/images/components/users/user1.png";
import user2 from "../../../assets/images/components/users/user2.png";
import user3 from "../../../assets/images/components/users/user3.png";
import usergroup from "../../../assets/images/components/users/usergroup.png";

const testimonials = [
  {
    name: "Amelia Joseph",
    role: "Learner - UI/UX Design",
    text: "Apprelab gave me direction. I wasn’t just learning theory. I understood how to manage real projects, communicate with teams, and deliver results.",
    bg: "#D7D9F8",
    avatar: user1,
  },
  {
    name: "Sandra Chris",
    role: "Learner - Full Stack Development",
    text: "I joined to share my experience, but Apprelab turned it into a community. Watching my students grow and earn while I earn too—it’s a win-win.",
    bg: "#E8F4FF",
    avatar: user2,
  },
  {
    name: "Andrew James",
    role: "Learner - Data Analysis",
    text: "I loved how engaging everything was. I worked on real campaigns, built my portfolio, and even got my first freelance client before finishing the course.",
    bg: "#F2F3FF",
    avatar: user3,
  },
];

const StoriesOfJoy: React.FC = () => {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#7c84abff",
        py: { xs: 11, md: 9 },
        px: { xs: 1.5, md: 5 },
      }}
    >
      {/* BACKGROUND S */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-20deg)",
          fontSize: { xs: "1200px", sm: "1800px", md: "2000px" },
          fontWeight: 400,
          color: "rgba(81, 76, 108, 0.18)",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        S
      </Typography>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 8,
            mt: -4,
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {/* LEFT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ position: "relative", width: 70, height: 55 }}>
              <Box
                component="img"
                src={usergroup}
                sx={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  top: 0,
                  left: 0,
                  zIndex: 3,
                  border: "2px solid white",
                  filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))",
                }}
              />
              <Box
                component="img"
                src={usergroup}
                sx={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  top: 0,
                  left: 16,
                  zIndex: 2,
                  border: "2px solid white",
                }}
              />
              <Box
                component="img"
                src={usergroup}
                sx={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  top: 0,
                  left: 32,
                  zIndex: 1,
                  border: "2px solid white",
                }}
              />
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", color: "#0B0B31" }}>
                500K+
              </Typography>
              <Typography sx={{ color: "#555770", fontSize: "0.9rem", mt: 0.5 }}>
                Targeted learners by 2027
              </Typography>
            </Box>
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "3rem" },
                color: "#1C1E53",
                pr: { xs: "80px", md: "250px" },
              }}
            >
              Stories Of <Box component="span" sx={{ color: "#FFD400" }}>Joy</Box>
            </Typography>

            {/* Buttons (not used for CSS slider, but kept for UI consistency) */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #D0D3E2",
                  "&:hover": { backgroundColor: "#74757cff" },
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
              </IconButton>

              <IconButton
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #D0D3E2",
                  "&:hover": { backgroundColor: "#74757cff" },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* ⭐ INFINITE SCROLL ROW */}
        <Box
          sx={{
            overflow: "hidden",
            width: "100%",
          }}
        >
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
                    backgroundColor: item.bg,
                    borderRadius: "22px",
                    border: "1px solid rgba(0,0,0,0.1)",
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
                      color: "rgba(0,0,0,0.3)",
                      fontSize: 32,
                      transform: "rotate(180deg)",
                    }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={item.avatar} sx={{ width: 56, height: 56, border: "2px solid #fff" }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
                      <Typography sx={{ color: "#555770", fontSize: "0.9rem", mt: 0.2 }}>
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      color: "#0B0B31",
                      mt: 2.5,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
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
    </Box>
  );
};

export default StoriesOfJoy;
