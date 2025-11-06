import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const categories = [
  { title: "Design", icon: "🎨" },
  { title: "Development", icon: "</>" },
  { title: "Marketing", icon: "📣" },
  { title: "Data Science", icon: "📊" },
  { title: "Product Management", icon: "📦" },
  { title: "Cybersecurity", icon: "🛡️" },
  { title: "Personal Develop", icon: "🌱" },
  { title: "Health & Fitness", icon: "❤️" },
  { title: "Music", icon: "🎵" },
];

export default function Categories() {
  return (
    <Box
      sx={{
        width: "97%",
        background: "#030E46",
        color: "#fff",
        py: 8,
        px: 3,
      }}
    >
      <Box maxWidth="lg" sx={{ mx: "auto" }}>
        {/* HEADER */}
        <Typography variant="h4" fontWeight={700}>
          Most{" "}
          <Box component="span" sx={{ color: "#E6C117" }}>
            Popular Categorys
          </Box>
        </Typography>

        <Typography sx={{ color: "#bfc7e0", mt: 1 }}>
          Various versions have evolved over the years, sometimes by accident,
        </Typography>

        {/* FLEX CONTAINER */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {categories.map((item, index) => (
            <Box
              key={index}
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                flex: "1 1 calc(33.33% - 16px)",
                minWidth: "260px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  bgcolor: "#fff",
                  borderRadius: 2,
                  p: 2,
                  color: "#000",
                  transition: "0.25s",
                  "&:hover": {
                    boxShadow: "0px 4px 16px rgba(255,255,255,0.20)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {/* ICON / LABEL */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography fontSize={22}>{item.icon}</Typography>
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
