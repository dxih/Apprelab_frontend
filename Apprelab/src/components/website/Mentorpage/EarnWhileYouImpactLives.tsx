import React from "react";
import { Box, Typography } from "@mui/material";

// Four separate images
import mentorship from "../../../assets/images/components/ewyil/earn_mentorship.png";
import success from "../../../assets/images/components/ewyil/earn_success.png";
import value from "../../../assets/images/components/ewyil/earn_value.png";
import courses from "../../../assets/images/components/ewyil/earn_courses.png";

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
      {/* Title */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "3rem" },
          color: "#0B0B31",
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
          width: { xs: "90%", md: "75%" },
          mx: "auto",
          fontSize: "1.2rem",
          color: "#5C5C77",
          py: 3,
          lineHeight: 1.6,
        }}
      >
        Empower others while you earn. Here’s how Apprelab helps you earn while
        making a difference in the lives of others.
      </Typography>

      {/* === Four PNGs Grid === */}
      <Box
        sx={{
          display: "grid",
          paddingLeft: { xs: 2 },
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          mt: 4,
        }}
      >
        {[mentorship, success, value, courses].map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`Earn section card ${i + 1}`}
            sx={{
              width: "100%",

            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EarnWhileYouImpactLives;
