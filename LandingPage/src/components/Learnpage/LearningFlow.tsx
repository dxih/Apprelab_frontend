import React from "react";
import { Box, Typography } from "@mui/material";
import learn_flow from "../../assets/learn_flow.png";

const LearningFlow: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFF",
        textAlign: "center",
        py: { xs: 14, md: 16 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* Heading */}
      <Typography
          variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 700,
          color: "#111151ff",
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
          width: { xs: "90%", md: "100%" },
          fontSize: "1.75em",
          color: "#5C5C77",
          py: { xs: 3, md: 3 },
          lineHeight: 1.4,
          mb: 6,
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
