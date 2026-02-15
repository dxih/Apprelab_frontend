import React from "react";
import { Box, Typography } from "@mui/material";
import microbootcampImage from "../../../dashboard/assets/images/microbootcamps/bootcamphero.png";

const MicroBootcampHero: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EEF1FF",
        display: "flex",
        justifyContent: "center",
        py: { xs: 4, md: 10 },
        px: { xs: 3, md: 15 }, // smaller padding on mobile
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          background: "linear-gradient(90deg, #001A4D 0%, #0039A6 100%)",
          borderRadius: "12px",
          px: { xs: 3, md: 12 },
          py: { xs: 5, md: 10 },
          color: "#fff",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          textAlign: { xs: "center", md: "left" }, // center mobile text
          gap: { xs: 3, md: 4 },
        }}
      >
        {/* LEFT TEXT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "3.2rem" }, // smaller mobile heading
              fontWeight: 700,
              lineHeight: { xs: 1.15, md: 1.1 },
            }}
          >
            Cohort Based
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "3.2rem" },
              fontWeight: 700,
              color: "#FFC928",
              mb: { xs: 1.5, md: 2 },
              lineHeight: { xs: 1.15, md: 1.1 },
            }}
          >
            Bootcamps
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "1.15rem" },
              maxWidth: { xs: "100%", md: "400px" },
              opacity: 0.9,
            }}
          >
            Join live, mentor-led bootcamps to learn, create, and grow — each
            track moves you closer to your career goals.
          </Typography>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mt: { xs: 3, md: 0 },
          }}
        >
          <Box
            component="img"
            src={microbootcampImage}
            alt="bootcamp preview"
            sx={{
              width: { xs: "90%", md: "100%" }, // smaller on mobile
              maxWidth: "550px",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MicroBootcampHero;
