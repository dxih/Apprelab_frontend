import React from "react";
import { Box, Typography } from "@mui/material";
import learn_flow from "../../assets/images/learn_flow.png";

const LearningFlow: React.FC = () => {
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
      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "3rem", md: "3rem" },
          fontWeight: 700,
          color: "#111151ff",
          mb: -3,
        }}
        >
        How Learning{" "}
        <Box component="span" sx={{ color: "#FFD400" }}>
          Works
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography
              variant="h2"
        sx={{
          
          width: { xs: "90%", md: "90%" },
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "#5C5C77",
          py: { xs: 3, md: 3 },
          px: { xs: 2, md: 4},
          lineHeight: 1.6,
        }}
        >
        Learning on Apprelab is practical; gain real experience through projects
        and mentorship that guide you from learning to getting hired.
      </Typography>

      {/* Diagram Image */}
      <Box
        component="img"
        src={learn_flow}
        alt="How Learning Works Flow"
        sx={{
          width: "100%",
          maxWidth: 900,
          mx: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};

export default LearningFlow;
