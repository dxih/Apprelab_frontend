import React from "react";
import { Box, Typography } from "@mui/material";

const menuItems = ["Bootcamp", "Courses", "Mentorship Sessions"];


interface StackNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const StackNavbar: React.FC<StackNavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around", 
        gap: 6, 
        backgroundColor: "#0B1A4A",
        px: 4,
        py: 1.5,
        borderRadius: 2,
        width: "auto", 
        mx: "auto",  
        mb:3,
      }}
    >
      {menuItems.map((item) => (
        <Typography
          key={item}
          onClick={() => setActiveTab(item)}
          sx={{
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            position: "relative",
            textAlign: "center",
            transition: "color 0.3s",
            // YOUR HOVER EFFECT
            "&:hover": { color: "#FFC107" },
            // YOUR FOCUS/ACTIVE EFFECT
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              width: activeTab === item ? "100%" : 0,
              height: "2px",
              backgroundColor: "#fff",
              transition: "width 0.3s",
            },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default StackNavbar;