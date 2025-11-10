import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  SvgIcon,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// ✅ Use MUI Outlined Icons
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";

const categories = [
  { title: "Design", icon: <PaletteOutlinedIcon /> },
  { title: "Development", icon: <CodeOutlinedIcon /> },
  { title: "Marketing", icon: <CampaignOutlinedIcon /> },
  { title: "Data Science", icon: <QueryStatsOutlinedIcon /> },
  { title: "Product Management", icon: <Inventory2OutlinedIcon /> },
  { title: "Cybersecurity", icon: <SecurityOutlinedIcon /> },
  { title: "Personal Develop", icon: <EmojiObjectsOutlinedIcon /> },
  { title: "Health & Fitness", icon: <FavoriteBorderOutlinedIcon /> },
  { title: "Music", icon: <MusicNoteOutlinedIcon /> },
];

export default function Categories() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "97%",
        background: "#030E46",
        color: "#fff",
        py: 10,
        px: { xs: 2, sm: 4, md: 3 },
      }}
    >
      {/* 🔹 GIANT SLANTED "S" IN BACKGROUND */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-20deg)",
          fontSize: { xs: "1100px", sm: "2100px", md: "3300px" },
          fontWeight: 900,
          color: "rgba(255, 255, 255, 0.11)",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        S
      </Typography>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          mx: "auto",
          px: 12,
        }}
      >
        {/* HEADER */}
        <Typography variant="h4" fontWeight={700} sx={{ mb: 1, color: "#fff" }}>
          Most{" "}
          <Box component="span" sx={{ color: "#E6C117" }}>
            Popular Categories
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#bfc7e0",
            mt: 1,
            mb: 6,
            fontSize: 18,
          }}
        >
          Various versions have evolved over the years, sometimes by accident,
        </Typography>

        {/* CATEGORY CARDS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {categories.map((item, index) => (
            <Box
              key={index}
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                flex: "0 1 320px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "97%",
                  bgcolor: "#fff",
                  borderRadius: 3,
                  p: 2.5,
                  color: "#000",
                  transition: "0.25s",
                  "&:hover": {
                    boxShadow: "0px 4px 16px rgba(255,255,255,0.25)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {/* ICON / LABEL */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <SvgIcon
                    sx={{
                      fontSize: 26,
                      color: "#030E46",
                    }}
                  >
                    {item.icon}
                  </SvgIcon>
                  <Typography fontWeight={500}>{item.title}</Typography>
                </Box>

                {/* ARROW BOX */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #d0d0d0",
                    borderRadius: 1,
                    transition: "0.25s",
                    "&:hover": {
                      background: "#0a0d2c",
                      color: "#fff",
                      borderColor: "#0a0d2c",
                    },
                  }}
                >
                  <ArrowOutwardIcon fontSize="small" />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
