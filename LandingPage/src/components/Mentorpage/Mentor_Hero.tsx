import React from "react";
import { Box, Typography, Button } from "@mui/material";
import mentorInviteImage from "../../assets/mentor_hero.png";

const MentorHero: React.FC = () => {
  return (
    <Box
      sx={{
        width: "98%",
        background: "linear-gradient(180deg, #F7F8FF 0%, #E6E9FF 100%)",
        textAlign: "center",
        py: { xs: 7, md: 10 },
        px: 2,
      }}
    >
      {/* ✅ Headline */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "3rem" },
          color: "#0B0B31",
          mb: 2,
          lineHeight: 1.3,
        }}
      >
        Share your{" "}
        <Box component="span" sx={{ color: "#FFD400" }}>
          Knowledge.
        </Box>{" "}
        Shape the Next <br />
        Generation of{" "}
        <Box component="span" sx={{ color: "#FFD400" }}>
          Digital Talent
        </Box>
      </Typography>

      {/* ✅ Subtext */}
      <Typography
        sx={{
          fontWeight: 300,
          width: { xs: "90%", md: "98%" },
          fontSize: "1.5em",
          color: "#5C5C77",
          py: { xs: 3, md: 3 },
          lineHeight: 1.6,
        }}
      >
        Become a mentor, create paid courses, and earn every time your students succeed.
      </Typography>

      {/* ✅ CTA Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0B0B31",
          color: "#fff",
          borderRadius: "8px",
          px: 4,
          py: 1.2,
          fontWeight: 600,
          textTransform: "none",
          fontSize: "1rem",
          boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#15173A",
          },
        }}
      >
        Join Waitlist
      </Button>

      {/* ✅ Image Section */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "600px", md: "720px" },
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={mentorInviteImage}
            alt="Mentor and student"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* 💡 Decorative overlay (lightbulb area mimic) */}
          <Box
            sx={{
              position: "absolute",
              top: "15%",
              right: "40%",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,212,0,0.35) 0%, rgba(255,212,0,0) 70%)",
              zIndex: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MentorHero;
