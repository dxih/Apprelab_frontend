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
import type { SelectChangeEvent } from "@mui/material/Select";
import { Link, useNavigate } from "react-router-dom";

// Images
import uiuxImg from "../../assets/images/courses/uiux.png";
import contentImg from "../../assets/images/courses/content.png";
import webdevImg from "../../assets/images/courses/webdev.png";

type Course = {
  image: string;
  title: string;
  desc: string;
  price: string;
  oldPrice: string;
  discount: string;
  level: string;
  duration: string;
  category: string;
  topics: string[];
  audience: string[];
  benefits: string[];
};

export const courses: Course[] = [
  {
    image: uiuxImg,
    title: "UI/UX Design Course",
    desc: "Master human-centered design and build interfaces users love",
    price: "₦120,000",
    oldPrice: "₦180,000",
    discount: "33% off",
    level: "Beginner",
    duration: "Self-paced – 8 Weeks",
    category: "Design",
    topics: [
      "Design thinking and user research",
      "Wireframing and prototyping with Figma",
      "User journey mapping",
      "Usability testing and feedback loops",
    ],
    audience: [
      "Beginners interested in design 101",
      "Developers transitioning to UI/UX",
      "Creatives seeking digital skills",
    ],
    benefits: [
      "Certificate of completion",
      "Live mentor feedback",
      "Real-world design projects",
      "Access to design community",
    ],
  },
  {
    image: contentImg,
    title: "Advanced Content Creation Course",
    desc: "Create standout content with strategy, storytelling, and style that sells.",
    price: "₦95,000",
    oldPrice: "₦140,000",
    discount: "32% off",
    level: "Advanced",
    duration: "Self-paced – 4 Weeks",
    category: "Content",
    topics: [
      "Content strategy & planning",
      "Storytelling for brands",
      "Copywriting frameworks",
      "Content monetization techniques",
    ],
    audience: [
      "Experienced content creators",
      "Digital marketers",
      "Brand managers",
    ],
    benefits: [
      "Brand-ready portfolio pieces",
      "Advanced content templates",
      "1-on-1 review sessions",
      "Certificate of excellence",
    ],
  },
  {
    image: webdevImg,
    title: "Web Development Course",
    desc: "Build responsive, high-performing websites from scratch — the modern way.",
    price: "₦150,000",
    oldPrice: "₦220,000",
    discount: "50% off",
    level: "Beginner",
    duration: "Self-paced – 12 Weeks",
    category: "Development",
    topics: [
      "HTML, CSS & JavaScript fundamentals",
      "Responsive design with Flexbox & Grid",
      "React basics",
      "Deploying live websites",
    ],
    audience: [
      "Absolute beginners",
      "Students entering tech",
      "Entrepreneurs building products",
    ],
    benefits: [
      "Certificate of completion",
      "Job-ready portfolio project",
      "Access to dev mentorship",
      "Community & networking",
      "GitHub project showcase",
    ],
  },
];

const duplicatedCourses = [...courses, ...courses, ...courses];

const fixedGlowingPoints = [
  { top: "10%", left: "15%", size: 120, color: "#FFD60A", blur: 80, opacity: 0.15 },
  { top: "40%", left: "70%", size: 160, color: "#4D9EFF", blur: 100, opacity: 0.12 },
  { top: "70%", left: "25%", size: 140, color: "#FFD60A", blur: 90, opacity: 0.18 },
  { top: "20%", left: "80%", size: 180, color: "#4D9EFF", blur: 120, opacity: 0.1 },
  { top: "60%", left: "55%", size: 130, color: "#FFD60A", blur: 85, opacity: 0.14 },
];

const UpcomingCoursesPage: React.FC = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [levelFilter, setLevelFilter] = useState<string>("");
  const [durationFilter, setDurationFilter] = useState<string>("");

  const filteredCourses = duplicatedCourses.filter((c) => {
    return (
      c.title.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter ? c.category === categoryFilter : true) &&
      (levelFilter ? c.level === levelFilter : true) &&
      (durationFilter ? c.duration === durationFilter : true)
    );
  });

  const filteredGrouped: Record<string, Course[]> = filteredCourses.reduce(
    (acc: Record<string, Course[]>, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  return (
    <Box sx={{ width: "100%", py: 8, position: "relative", overflow: "hidden", background: "rgba(170, 200, 236, 0.07)" }}>
      {/* Glowing points */}
      <Box sx={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, zIndex: 0, pointerEvents: "none" }}>
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

      <Box sx={{ position: "relative", width: "100%", maxWidth: "1300px", mx: "auto", px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header & filters */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: { xs: 3, md: 5 }, flexWrap: "wrap", gap: { xs: 2, sm: 3 } }}>
          <Typography sx={{ fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.4rem" }, fontWeight: 700, color: "#111" }}>
            Available Courses
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1.5, sm: 2 }, width: { xs: "100%", md: "auto" } }}>
            <TextField
              placeholder="Search courses..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              size="small"
            />

            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryFilter}
                onChange={(e: SelectChangeEvent<string>) => setCategoryFilter(e.target.value)}
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
                onChange={(e: SelectChangeEvent<string>) => setLevelFilter(e.target.value)}
                label="Level"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>Duration</InputLabel>
              <Select
                value={durationFilter}
                onChange={(e: SelectChangeEvent<string>) => setDurationFilter(e.target.value)}
                label="Duration"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Self-paced – 4 Weeks">4 Weeks</MenuItem>
                <MenuItem value="Self-paced – 8 Weeks">8 Weeks</MenuItem>
                <MenuItem value="Self-paced – 12 Weeks">12 Weeks</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Courses */}
        {filteredCourses.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 12 }}>
            <Typography sx={{ fontSize: "1.2rem", color: "#555" }}>😅 Try readjusting your filter — no course found!</Typography>
          </Box>
        ) : (
          Object.entries(filteredGrouped).map(([category, items]) => (
            <Box key={category} sx={{ py: 4, px: 1, borderRadius: 3, position: "relative", zIndex: 1, mb: { xs: 3, md: 5 } }}>
              <Typography sx={{ fontSize: { xs: "1.4rem", md: "2rem" }, fontWeight: 700, color: "#111", mb: 1 }}>{category}</Typography>
              <Divider sx={{ borderColor: "#FFD60A", borderBottomWidth: 3, mb: 3 }} />

              <Box
                sx={{
                  display: "grid",
                  marginLeft: -1,
                  width: "calc(93% + 10px)",
                  gap: { xs: 2, sm: 3, md: 4 },
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
                    onClick={() => {
                      navigate("/dashboard/coursedetail", { state: { course: item } });
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    sx={{
                      maxWidth: { xs: "100%", sm: 220, md: 280 },
                      mx: "auto",
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "1px solid #e3e6ed",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-6px)" },
                        boxShadow: { xs: "0 2px 8px rgba(0,0,0,0.05)", md: "0 6px 18px rgba(0,0,0,0.12)" },
                      },
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia component="img" src={item.image} alt={item.title} sx={{ height: { xs: 120, sm: 140, md: 160 }, objectFit: "cover" }} />
                      <Chip
                        label="● Available"
                        sx={{ position: "absolute", top: 8, left: 8, background: "#FFD60A", color: "#fff", fontSize: "0.6rem", height: 18, borderRadius: 1 }}
                      />
                    </Box>
                    <Box sx={{ p: { xs: 1, sm: 1.5, md: 2 } }}>
                      <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" }, fontWeight: 600, mb: 0.5 }}>{item.title}</Typography>
                      <Typography sx={{ fontSize: { xs: "0.6rem", sm: "0.75rem", md: "0.88rem" }, color: "#555", mb: 0.5 }}>{item.desc}</Typography>
                      <Typography sx={{ fontSize: { xs: "0.55rem", sm: "0.7rem", md: "0.82rem" }, color: "#777", mb: 0.5 }}>{item.duration}</Typography>
                      <Typography sx={{ fontSize: { xs: "0.55rem", sm: "0.7rem", md: "0.82rem" }, color: "#777", mb: 1 }}>
                        <span style={{ color: "#111", fontWeight: 600 }}>{item.price}</span>{" "}
                        <span style={{ textDecoration: "line-through", color: "#777" }}>{item.oldPrice}</span>{" "}
                        <Chip label={item.discount} size="small" color="warning" sx={{ ml: 0.5 }} />
                      </Typography>
                      <Chip
                        label={item.level}
                        sx={{
                          background: item.level === "Advanced" ? "#FFD66B" : "#E9E9E9",
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
          <Link to="/dashboard/courses" style={{ fontWeight: 600, textDecoration: "none", color: "#111", fontSize: "0.9rem" }}>
            &larr; Back to Courses
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default UpcomingCoursesPage;