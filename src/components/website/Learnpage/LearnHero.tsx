import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import learnHero from "../../../assets/images/components/heros/learn_hero.png";

const LearnHero: React.FC = () => {
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
      {/* TEXT SECTION */}
      <Box sx={{ maxWidth: "900px", mx: "auto", mb: 5 }}>
        <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.5rem", md: "3rem" },
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
          
          width: { xs: "90%", md: "90%" },
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "#5C5C77",
          py: { xs: 3, md: 3 },
          px: { xs: 2, md: 4},
          lineHeight: 1.6,
        }}
        >
          Learn in-demand skills through real projects and expert mentorship;
          everything here prepares you for real opportunities.
        </Typography>

        <Button
         component={Link}
           to="/signup"
          sx={{
            backgroundColor: "#21285cff",
                      color: "#e6e6f1ff",
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
