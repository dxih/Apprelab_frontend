import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import videoThumbnail from "../../../assets/videos/academy_video.png";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 4,
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(to bottom, #eef1ffa3 0%, #FFFFFF 100%)",
      }}
    >
      {/* ✅ HEADLINE - Using theme typography */}
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "3.0rem", sm: "3rem", md: "4.0rem" },
          fontWeight: 800,
          color: "text.primary",
        }}
      >
        Learn. Build.{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          Earn.
        </Box>
      </Typography>

      {/* ✅ SUBTITLE - Using theme typography */}
      <Typography
        variant="h5"
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%" },
          color: "text.secondary",
          lineHeight: 1.6,
          maxWidth: "800px",
        }}
      >
        Africa's first integrated Learn-Work-Earn ecosystem. Gain real-world
        skills, work on real projects, and earn while you learn.
      </Typography>

      {/* ✅ BUTTONS - Using theme button styles */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 3 },
          mt: 2,
          width: { xs: "100%", sm: "auto" },
          maxWidth: { xs: "400px", sm: "none" },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/signup"
          size="large"
          sx={{
            px: { xs: 4, sm: 6 },
          }}
        >
          Get started
        </Button>

        <Button
          variant="outlined"
          component={Link}
          to="/about"
          size="large"
          sx={{
            px: { xs: 4, sm: 6 },
            bgcolor: "background.paper",
            color: "text.primary",
            borderColor: "divider",
            "&:hover": {
              bgcolor: "action.hover",
              borderColor: "primary.main",
            },
          }}
        >
          Learn more
        </Button>
      </Box>

      {/* ✅ SINGLE VIDEO BLOCK */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "950px",
          mt: { xs: 4, md: 6 },
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 3,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 6,
          },
        }}
      >
        <img
          src={videoThumbnail}
          alt="Academy overview video"
          style={{ 
            width: "100%", 
            height: "auto", 
            display: "block",
            objectFit: "cover" 
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;