import { Box } from "@mui/material";
import { useState } from "react";
import StackNavbar from "../../../../components/dashboard/MyStackpage/StackNavbar";
import StackOngoingBootcamps from "../../../../components/dashboard/MyStackpage/StackBootcamps/StackOngoingBootcamps";
import StackPreSavedBootcamps from "../../../../components/dashboard/MyStackpage/StackBootcamps/StackPreSavedBootcamps";
import StackSidebar from "../../../../components/dashboard/MyStackpage/StackBootcamps/StackSidebar";

// Example Data
const ongoingBootcamps = [
  {
    title: "Intro to Frontend (C8)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    progress: 50,
    nextClass: "10th November, 2025, 6PM WAT",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "UX Laws & Principles (C1)",
    description: "Deep dive into all the laws of UX and basic design principles",
    duration: "6 Weeks",
    progress: 30,
    nextClass: "12th November, 2025, 2PM WAT",
    image: "https://via.placeholder.com/150",
  },
];

const preSavedBootcamps = [
  {
    title: "Using Figma Like a Pro (C6)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    startDate: "20th November, 2025",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Wireframing UX (C2)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    startDate: "25th November, 2025",
    image: "https://via.placeholder.com/150",
  },
];

export default function MyStack() {
  const [activeTab] = useState<string>("Bootcamp");

  return (
    <Box sx={{ position: "relative", overflow: "hidden", backgroundColor: "#FFFFFF" }}>
      {/* === Navbar === */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <StackNavbar />
      </Box>

      <Box sx={{ height: 20 }} /> {/* Spacer */}

      {/* === Content === */}
      {activeTab === "Bootcamp" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            px: 4,
            py: 4,
            alignItems: "flex-start",
          }}
        >
          {/* Left Column: Bootcamps */}
          <Box sx={{ flex: 2, display: "flex", flexDirection: "column", gap: 4 }}>
            <StackOngoingBootcamps bootcamps={ongoingBootcamps} />
            <StackPreSavedBootcamps bootcamps={preSavedBootcamps} />
          </Box>

          {/* Right Column: Sidebar */}
          <Box sx={{ flex: 1, minWidth: { xs: "100%", md: 280 } }}>
            <StackSidebar />
          </Box>
        </Box>
      )}

      {/* Spacer at bottom */}
      <Box sx={{ height: 40 }} />
    </Box>
  );
}
