import { Box, Typography, Button } from "@mui/material";

export default function Hire() {
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

      {/* === Content === */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            color: "#0B0B31",
            mb: 2,
          }}
        >
          Coming Soon
        </Typography>

        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "#4A4A5A",
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          We’re crafting a powerful hiring experience to connect companies with 
          top tech talent — tailored for speed, quality, and impact.  
          Stay tuned.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0B0B31",
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#15173A" },
          }}
        >
          Notify Me
        </Button>
      </Box>
    </Box>
  );
}
