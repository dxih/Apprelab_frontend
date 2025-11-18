import React from "react";
import { Box, Typography } from "@mui/material";
import mentor_flow from "../../../assets/images/components/flows/mentor_flow.png"; // 🖼️ your image path

const MentoringFlow: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFF",
        textAlign: "center",
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 700,
          color: "#0F0F57",
          mb: 2,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        How Mentoring{" "}
        <Box component="span" sx={{ color: "#E9B300" }}>
          Works
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "#5C5C77",
          fontSize: { xs: "1rem", md: "1.55rem" },
          fontWeight: 300,
          maxWidth: "700px",
          mx: "auto",
          lineHeight: 1.6,
          mb: { xs: 6, md: 8 },
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Empower others with your knowledge. Here’s how Apprelab makes it easy to
        mentor and create lasting impact.
      </Typography>

      {/* Flow Image */}
      <Box
        component="img"
        src={mentor_flow}
        alt="How Mentoring Works Flow"
        sx={{
          width: "100%",
          maxWidth: 950,
          mx: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};

export default MentoringFlow;
