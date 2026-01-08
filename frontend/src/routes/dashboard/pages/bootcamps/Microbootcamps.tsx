import { Box } from "@mui/material";
import Bootcamphero from "../../../../components/dashboard/Explorepage/BootcampHero"
import UpcomingBootcamps from "../../../../components/dashboard/Explorepage/UpcomingBootcamps"
import OngoingBootcamps from "../../../../components/dashboard/Explorepage/OngoingBootcamps";

export default function Microbootcamps() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* === Blue Glow Spots Copied from Mentor Page === */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "-15%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 70%)",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "25%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 75%)",
          filter: "blur(180px)",
          zIndex: 0,
        }}
      />

      {/* === Actual Page Content === */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Bootcamphero />
        <OngoingBootcamps />
        <UpcomingBootcamps />
        <Box sx={{ height: 40 }} /> {/* Spacer at bottom */}
      </Box>
    </Box>
  );
}
