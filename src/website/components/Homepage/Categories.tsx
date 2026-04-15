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
        background: "radial-gradient(circle at 10% 20%, rgb(3, 14, 70) 0%, rgb(1, 10, 69) 100%)",
        color: "#fff",
        py: { xs: 10, md: 15 },
        px: { xs: 2.5, md: 4 },
      }}
    >
      {/* 🔹 GIANT RESPONSIVE SLANTED "S" IN BACKGROUND - More subtle for S+ vibe */}
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
        S
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
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: "#fff",
              fontSize: { xs: "2rem", md: "2.5rem" },
              letterSpacing: "-0.01em",
            }}
          >
            Most{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              Popular Categories
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(191, 199, 224, 0.8)",
              mt: 1,
              mb: { xs: 6, md: 8 },
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "600px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            Explore diverse fields and find the path that matches your ambition.
            Industry-aligned learning for the next generation of African talent.
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
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Box
                component={Link}
                to="/"
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  bgcolor: "rgba(255, 255, 255, 1)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 4,
                  p: 3,
                  color: "#fff",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "& .arrow-box": {
                    bgcolor: "secondary.main",
                    color: "primary.main",
                    borderColor: "secondary.main",
                  },
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.43)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    "& .arrow-box": {
                      bgcolor: "secondary.main",
                      color: "primary.main",
                      borderColor: "secondary.main",
                    }
                  },
                }}
              >
                {/* ICON / LABEL */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <SvgIcon sx={{ fontSize: 24, color: "secondary.main" }}>
                    {item.icon}
                  </SvgIcon>
                  <Typography sx={{ fontWeight: 600, fontSize: "1.05rem" }}>
                    {item.title}
                  </Typography>
                </Box>

                {/* ARROW BOX */}
                <Box
                  className="arrow-box"
                  sx={{
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "10px",
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
