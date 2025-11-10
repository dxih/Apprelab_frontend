import React from "react";
import { Box, Typography, Button } from "@mui/material";
import joinPlatformImage from "../../assets/joinPlatformImage.png";

const JoinPlatformSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 10, md: 14 },
        px: { xs: 3, sm: 6, md: 10 },
        backgroundColor: "#F9FAFF",
        flexWrap: "wrap",
        gap: 6,
      }}
    >
      {/* ✅ Left: Image Box */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: { xs: "100%", sm: "400px", md: "480px" },
          height: { xs: "260px", sm: "300px", md: "320px" },
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={joinPlatformImage}
          alt="Students learning together"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        {/* Decorative accents */}
        <Box
          sx={{
            position: "absolute",
            top: "-10px",
            left: "20px",
            width: "24px",
            height: "24px",
            border: "3px solid #FFD400",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "8px",
            right: "40px",
            width: "30px",
            height: "6px",
            backgroundColor: "#FFD400",
            borderRadius: "10px",
            transform: "rotate(-15deg)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "18px",
            right: "-10px",
            width: "20px",
            height: "20px",
            backgroundColor: "#4B31FF",
            borderRadius: "50%",
          }}
        />
      </Box>

      {/* ✅ Right: Text + CTA */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "420px",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.8rem", md: "2rem" },
            fontWeight: 700,
            color: "#0B0B31",
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          Join{" "}
          <Box component="span" sx={{ color: "#FFD400" }}>
            World's largest
          </Box>{" "}
          learning platform today
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            color: "#555770",
            mb: 3,
          }}
        >
          Start learning by registering for free
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "160px" },
            backgroundColor: "#1C1E53",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.95rem",
            borderRadius: "10px",
            textTransform: "none",
            px: 3,
            py: 1.2,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: "#15173A",
            },
          }}
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default JoinPlatformSection;
