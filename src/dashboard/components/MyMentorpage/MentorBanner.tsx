import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";



const MentorBanner: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      {/* Main card */}
      <Box
        sx={{
          position: "relative",
          background: "#E6FAF9",
          borderRadius: 4,
          textAlign: "center",
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 8 },
          maxWidth: 800,
          width: "100%",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Seeking 4000+ mentors from 60+ countries
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            color: "#444",
            mb: 4,
          }}
        >
          to help you achieve and overcome any challenges you face.
        </Typography>

        <Button
          component={Link}
          to="/dashboard/ourmentors"
          sx={{
            backgroundColor: "#1D3CFF",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            "&:hover": { backgroundColor: "#0B1A4A" },
          }}
        >
          Browse All Mentors
        </Button>
      </Box>

      
    </Box>
  );
};

export default MentorBanner;
