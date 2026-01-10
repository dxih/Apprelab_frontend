import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const menuItems = ["Bootcamp", "Courses", "Mentorship Sessions"];

const StackNavbar: React.FC = () => {
  const [active, setActive] = useState<string>("Bootcamp");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // center the items horizontally
        gap: 6,                   // space between items
        backgroundColor: "#0B1A4A",
        px: 4,
        py: 1.5,
        borderRadius: 2,
        width: "auto",            // doesn't cover the whole width
        mx: "auto",               // center the navbar on page
      }}
    >
      {menuItems.map((item) => (
        <Typography
          key={item}
          onClick={() => setActive(item)}
          sx={{
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            position: "relative",
            textAlign: "center",
            transition: "color 0.3s",
            "&:hover": { color: "#FFC107" },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              width: active === item ? "100%" : 0,
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
