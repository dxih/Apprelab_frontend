import React from "react";
import { Box, Typography, Button } from "@mui/material";
import learnHero from "../../assets/learn_hero.png";

const LearnHero: React.FC = () => {
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
      {/* TEXT SECTION */}
      <Box sx={{ maxWidth: "800px", mx: "auto", mb: 5 }}>
        <Typography
          variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 700,
          color: "#111151ff",
        }}
        >
          Practical Learning for Real{" "}
          <Box component="span" sx={{ color: "#F5C518" }}>
            Opportunities
          </Box>
        </Typography>

        <Typography
              variant="h2"
        sx={{
          width: { xs: "90%", md: "100%" },
          fontSize: "1.7em",
          color: "#5C5C77",
          py: { xs: 3, md: 3 },
          lineHeight: 1.6,
        }}
        >
          Learn in-demand skills through real projects and expert mentorship;
          everything here prepares you for real opportunities.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#21285cff",
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "8px",
            px: 4,
            py: 1.3,
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#25307dff",
            },
          }}
        >
          Get started
        </Button>
      </Box>

      {/* IMAGE */}
      <Box
        component="img"
        src={learnHero}
        alt="Learning together"
        sx={{
          width: "100%",
          maxWidth: "700px",
          mx: "auto",
          display: "block",
          borderRadius: "12px",
          boxShadow: "0px 4px 16px rgba(0,0,0,0.08)",
        }}
      />
    </Box>
  );
};

export default LearnHero;
