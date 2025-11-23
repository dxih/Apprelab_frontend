// src/pages/UpcomingBootcampsPage.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Chip,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

// Images
import uiuxImg from "../../../assets/images/components/microbootcamps/offers/uiuxofferimg.png";
import contentImg from "../../../assets/images/components/microbootcamps/offers/contentofferimg.png";
import webdevImg from "../../../assets/images/components/microbootcamps/offers/webdevofferimg.png";


type Bootcamp = {
  img: string;
  title: string;
  desc: string;
  duration: string;
  level: string;
  category: string;
};

const bootcamps: Bootcamp[] = [
  {
    img: uiuxImg,
    title: "UI/UX Design Bootcamp",
    desc: "Master human-centered design and build interfaces users love",
    duration: "Cohort based – 8 Weeks",
    level: "Beginners",
    category: "Design",
  },
  {
    img: contentImg,
    title: "Advanced Content Creation Bootcamp",
    desc: "Create standout content with strategy, storytelling, and style that sells.",
    duration: "Cohort based – 4 Weeks",
    level: "Advanced",
    category: "Content",
  },
  {
    img: webdevImg,
    title: "Web Development Bootcamp",
    desc: "Build responsive, high-performing websites from scratch — the modern way.",
    duration: "Cohort based – 12 Weeks",
    level: "New!",
    category: "Development",
  },
];

const duplicatedBootcamps = [...bootcamps, ...bootcamps, ...bootcamps, ...bootcamps, ...bootcamps, ...bootcamps];

// Fixed glowing points with permanent positions
const fixedGlowingPoints = [
  { top: "10%", left: "15%", size: 120, color: "#FFD60A", blur: 80, opacity: 0.15 },
  { top: "40%", left: "70%", size: 160, color: "#4D9EFF", blur: 100, opacity: 0.12 },
  { top: "70%", left: "25%", size: 140, color: "#FFD60A", blur: 90, opacity: 0.18 },
  { top: "20%", left: "80%", size: 180, color: "#4D9EFF", blur: 120, opacity: 0.1 },
  { top: "60%", left: "55%", size: 130, color: "#FFD60A", blur: 85, opacity: 0.14 },
];

const UpcomingBootcampsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");

  const filteredBootcamps = duplicatedBootcamps.filter((b) => {
    return (
      b.title.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter ? b.category === categoryFilter : true) &&
      (levelFilter ? b.level === levelFilter : true) &&
      (durationFilter ? b.duration === durationFilter : true)
    );
  });

  // Group filtered bootcamps by category
  const filteredGrouped: Record<string, Bootcamp[]> = filteredBootcamps.reduce(
    (acc: Record<string, Bootcamp[]>, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  return (
    <Box sx={{ width: "100%", py: 8, position: "relative", overflow: "hidden", background: "rgba(170, 200, 236, 0.07)" }}>
      {/* Fixed Glowing Points */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {fixedGlowingPoints.map((point, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: point.size,
              height: point.size,
              borderRadius: "50%",
              backgroundColor: point.color,
              opacity: point.opacity,
              top: point.top,
              left: point.left,
              filter: `blur(${point.blur}px)`,
            }}
          />
        ))}
      </Box>

      <Box sx={{ position: "relative", width: { xs: "99%", md: "90%" }, maxWidth: { xs: "800px", md: "1200px" }, mx: "auto", px: { xs: 1, md: 2 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, fontWeight: 700, color: "#111", marginTop: { xs: -5, md: 0 } }}>
            Upcoming Bootcamps
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <TextField
              placeholder="Search bootcamps..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              size="small"
            />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryFilter}
                onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                  setCategoryFilter(e.target.value as string)
                }
                label="Category"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Content">Content</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Level</InputLabel>
              <Select
                value={levelFilter}
                onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                  setLevelFilter(e.target.value as string)
                }
                label="Level"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Beginners">Beginners</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
                <MenuItem value="New!">New!</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>Duration</InputLabel>
              <Select
                value={durationFilter}
                onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                  setDurationFilter(e.target.value as string)
                }
                label="Duration"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Cohort based – 4 Weeks">4 Weeks</MenuItem>
                <MenuItem value="Cohort based – 8 Weeks">8 Weeks</MenuItem>
                <MenuItem value="Cohort based – 12 Weeks">12 Weeks</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {filteredBootcamps.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 12 }}>
            <Typography sx={{ fontSize: "1.2rem", color: "#555" }}>
              😅 Try readjusting your filter — no course found!
            </Typography>
          </Box>
        ) : (
          Object.entries(filteredGrouped).map(([category, items]) => (
            <Box
              key={category}
              sx={{
                py: 4,
                px: 3,
                borderRadius: 3,
                position: "relative",
                zIndex: 1,
                mb: { xs: 0, md: 6},
              }}
            >
              <Typography sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: 700, color: "#111", mb: 1}}>
                {category}
              </Typography>
              <Divider sx={{ borderColor: "#FFD60A", borderBottomWidth: 3, mb: 3, ml: "-15px" }} />

              <Box
                sx={{
                  display: "grid",
                  marginLeft: "-15px",
                  gap: { xs: 2.5, md: 4 },
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                }}
              >
                {items.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      maxWidth: { xs: 185, sm: 200, md: 300 },
                      mx: "auto",
                      width: "100%",
                      borderRadius: "14px",
                      overflow: "hidden",
                      border: "1px solid #e3e6ed",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      transition: "all 0.25s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-6px)" },
                        boxShadow: {
                          xs: "0 2px 8px rgba(0,0,0,0.05)",
                          md: "0 6px 18px rgba(0,0,0,0.12)",
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        src={item.img}
                        alt={item.title}
                        sx={{ height: { xs: 140, sm: 120, md: 160 }, objectFit: "cover" }}
                      />
                      <Chip
                        label="● Upcoming"
                        sx={{
                          position: "absolute",
                          top: 8,
                          left: 8,
                           background: "#FFD60A",
                          color: "#000  ",
                          fontSize: "0.6rem",
                          height: 18,
                          borderRadius: "6px",
                        }}
                      />
                    </Box>

                    <Box sx={{ p: { xs: 1, md: 2 } }}>
                      <Typography sx={{ fontSize: { xs: "0.7rem", md: "1rem" }, fontWeight: 600, mb: 0.4 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: "0.6rem", md: "0.88rem" }, color: "#555", lineHeight: 1.2, mb: 1 }}>
                        {item.desc}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: "0.58rem", md: "0.82rem" }, color: "#777", mb: 1 }}>
                        {item.duration}
                      </Typography>
                      <Chip
                        label={item.level}
                        sx={{
                          background:
                            item.level === "Advanced"
                              ? "#FFD66B"
                              : item.level === "Beginners"
                              ? "#E9E9E9"
                              : "#E3E6FF",
                          fontSize: { xs: "0.55rem", md: "0.75rem" },
                          borderRadius: "6px",
                          fontWeight: 500,
                          px: 1,
                        }}
                      />
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          ))
        )}

        <Box sx={{ mt: 6 }}>
          <Link
            to="/dashboard/microbootcamps"
            style={{ fontWeight: 600, textDecoration: "none", color: "#111", fontSize: "0.9rem", fontFamily: "Inter" }}
          >
            &larr; Back to Microbootcamps
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default UpcomingBootcampsPage;
