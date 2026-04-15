import { Box, Typography } from "@mui/material";
import BackgroundDecor from "../components/common/BackgroundDecor";
import patternBg from "../assets/images/bg.jpg";

export default function Create() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        backgroundImage: `linear-gradient(180deg, rgba(248, 250, 255, 0.85) 0%, rgba(255, 255, 255, 0.95) 100%), url(${patternBg})`,

        alignItems: "center",
        px: 2,
      }}
    >
      <BackgroundDecor variant="generic" />
      {/* === Page Content === */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            color: "#0B0B31",
            mb: 1,
          }}
        >
          Coming Soon
        </Typography>

        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "#4A4A5A",
            maxWidth: 500,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Your Create dashboard is currently being crafted. Soon, you’ll be able
          to build, customize, and launch with ease.
        </Typography>
      </Box>
    </Box>
  );
}
