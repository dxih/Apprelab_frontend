import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const AboutIntro: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F6F8FF",
        py: { xs: 10, md: 14 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#0B0B31",
          mb: { xs: 5, md: 6 },
          textAlign: "center",
          fontSize: { xs: "2.5rem", md: "3rem" },
        }}
      >
        The Beginning Of Something{" "}
        <Box component="span" sx={{ color: "#E9B300" }}>
          Big
        </Box>
      </Typography>

      {/* Oval Shape */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "95%", sm: "80%", md: "65%" },
          height: { xs: 260, sm: 320, md: 360 },
          backgroundColor: "#1c1c6aff",
          borderRadius: "50% / 55%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* White Card */}
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            width: { xs: "90%", sm: "75%", md: "65%" },
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            p: { xs: 3, sm: 4, md: 5 },
            boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Typography
            sx={{
              color: "#0B0B31",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              fontWeight: 400,
              lineHeight: 1.8,
              textAlign: "left",
            }}
          >
            Apprelab isn’t just another learning space — it’s where learning
            meets earning. We’re a{" "}
            <Box component="span" sx={{ color: "#E9B300", fontWeight: 600 }}>
              new-age
            </Box>{" "}
            community redefining how creatives grow, collaborate, and get
            rewarded. Through practical, project-based learning and real-world
            opportunities, Apprelab helps you master digital skills, build a
            portfolio that speaks, and earn from what you create.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default AboutIntro;
