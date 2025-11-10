import React from "react";
import { Box, Typography } from "@mui/material";
import earnWhileLives from "../../assets/earnwhilelives.png"; // ✅ Correct import

const EarnWhileYouImpactLives: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
        textAlign: "center",
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "3rem" },
          color: "#0B0B31",
          mb: 2,
          lineHeight: 1.3,
        }}
      >
        Earn While{" "}
        <Box component="span" sx={{ color: "#FFD400" }}>
          You
        </Box>{" "}
        Impact Lives
      </Typography>

      <Typography
        sx={{
           fontWeight: 400,
          width: { xs: "90%", md: "98%" },
          fontSize: "1.3em",
          color: "#5C5C77",
          py: { xs: 3, md: 3 },
          lineHeight: 1.6,
        }}
      >
        Empower others while you earn. Here’s how Apprelab helps you earn while
        making a difference in the lives of others.
      </Typography>

      {/* Pinned PNG */}
      <Box
        component="img"
        src={earnWhileLives} // ✅ Uses imported image
        alt="Earn While You Impact Lives"
        sx={{
          width: "100%",
          maxWidth: 1000,
          mx: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};

export default EarnWhileYouImpactLives;
