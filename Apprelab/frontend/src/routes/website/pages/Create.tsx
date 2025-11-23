import { Box, Typography } from "@mui/material";

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
        alignItems: "center",
        px: 2,
      }}
    >
      {/* === Blue Glow Spots (Consistent With Mentor/Hire Pages) === */}
      <Box
        sx={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: 550,
          height: 550,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)",
          filter: "blur(130px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "35%",
          right: "-20%",
          width: 650,
          height: 650,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 75%)",
          filter: "blur(170px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "20%",
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 80%)",
          filter: "blur(200px)",
          zIndex: 0,
        }}
      />

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
