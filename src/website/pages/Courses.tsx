import { Link } from "react-router-dom";
import { Box, Typography, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";

const courses = [
  { title: "Design Systems & UI/UX", icon: <PaletteOutlinedIcon /> },
  { title: "Full-Stack Development", icon: <CodeOutlinedIcon /> },
  { title: "Growth Marketing", icon: <CampaignOutlinedIcon /> },
  { title: "Data Science & AI", icon: <QueryStatsOutlinedIcon /> },
  { title: "Product Management", icon: <Inventory2OutlinedIcon /> },
  { title: "Cybersecurity Basics", icon: <SecurityOutlinedIcon /> },
  { title: "Personal Development", icon: <EmojiObjectsOutlinedIcon /> },
  { title: "Health & Fitness Tech", icon: <FavoriteBorderOutlinedIcon /> },
  { title: "Audio & Music Production", icon: <MusicNoteOutlinedIcon /> },
];

export default function Courses() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(circle at 10% 20%, rgb(3, 14, 70) 0%, rgb(1, 10, 69) 100%)",
        color: "#fff",
        minHeight: "100vh",
        py: { xs: 15, md: 20 },
        px: { xs: 2.5, md: 4 },
      }}
    >
      {/* 🔹 GIANT RESPONSIVE SLANTED "C" IN BACKGROUND */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-15deg)",
          fontSize: {
            xs: "150vw",
            md: "230vw",
          },
          fontWeight: 900,
          color: "rgba(255, 255, 255, 0.03)",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        C
      </Typography>

      {/* 🔹 CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1240px",
          mx: "auto",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              mb: 2,
              color: "#fff",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Explore Our{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              Courses
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(191, 199, 224, 0.8)",
              mt: 2,
              mb: { xs: 8, md: 10 },
              fontSize: { xs: "1.1rem", md: "1.2rem" },
              maxWidth: "600px",
              lineHeight: 1.6,
              mx: { xs: "auto", md: 0 },
            }}
          >
            Discover diverse programs and find the path that matches your ambition.
            Industry-aligned learning for the next generation of top-tier professionals.
          </Typography>
        </motion.div>

        {/* CATEGORY CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {courses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                component={Link}
                to={`/course/${index + 1}`}
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 4,
                  p: 3,
                  color: "#fff",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  "& .arrow-box": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "secondary.main",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(253, 203, 7, 0.5)",
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    "& .arrow-box": {
                      bgcolor: "secondary.main",
                      color: "primary.main",
                      borderColor: "secondary.main",
                      transform: "scale(1.1)",
                    }
                  },
                }}
              >
                {/* ICON / LABEL */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <SvgIcon sx={{ fontSize: 28, color: "secondary.main" }}>
                    {item.icon}
                  </SvgIcon>
                  <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
                    {item.title}
                  </Typography>
                </Box>

                {/* ARROW BOX */}
                <Box
                  className="arrow-box"
                  sx={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <ArrowOutwardIcon fontSize="small" />
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}