import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import videoThumbnail from "../../../assets/videos/academy_video.png";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "9vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 4,
        py: 8,
        background: "linear-gradient(to bottom, #eef1ffa3 0%, #FFFFFF 100%)",
      }}
    >
      {/* ✅ HEADLINE */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "3rem", md: "3rem" },
          fontWeight: 700,
          color: "#111151ff",
        }}
      >
        Learn. Build.{" "}
        <Box component="span" sx={{ color: "#E9B200" }}>
          Earn.
        </Box>
      </Typography>

      {/* ✅ SUBTITLE */}
      <Typography
              variant="h2"
        sx={{
          width: { xs: "90%", md: "80%" },
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "#5C5C77",
          lineHeight: 1.6,
        }}
      >
        Africa first integrated Learn Work Earn ecosystem. Gain real-world
        skills, work on real projects, and earn while you learn.
      </Typography>

      {/* ✅ BUTTONS */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 1,
        }}
      >
        <Button
          variant="contained"
         component={Link}
           to="/signup"
            sx={{
            backgroundColor: "#071A7E",
            textTransform: "none",
            fontSize: "1rem",
            px: 6,
            py: 2,
            borderRadius: "8px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#0F28AA",
            },
          }}
        >
          Get started
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#EFE8F0",
            textTransform: "none",
            fontSize: "1rem",
            px: 6,
            py: 2,
            borderRadius: "8px",
            color: "#000",
            "&:hover": {
              backgroundColor: "#E0D7E5",
            },
          }}
        >
          Learn more
        </Button>
      </Box>

      {/* ✅ SINGLE VIDEO BLOCK */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "950px",
          mt: 4,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <img
          src={videoThumbnail}
          alt="academy hero video"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
