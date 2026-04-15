import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Chip,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Container,
  Stack,
  InputAdornment,
  Grid,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { Search, FilterList, Star, CalendarMonth } from "@mui/icons-material";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Mentor Images
import mentor1 from "../../assets/images/mentors/Mentor1.png";
import mentor2 from "../../assets/images/mentors/Mentor2.png";
import mentor3 from "../../assets/images/mentors/Mentor3.png";
import mentor4 from "../../assets/images/mentors/Mentor4.png";
import mentor5 from "../../assets/images/mentors/Mentor5.png";
import mentor6 from "../../assets/images/mentors/Mentor6.png";
import mentor7 from "../../assets/images/mentors/Mentor7.png";
import mentor8 from "../../assets/images/mentors/Mentor8.png";
import mentor9 from "../../assets/images/mentors/Mentor9.png";

interface Mentor {
  name: string;
  role: string;
  rating: number;
  reviews: number;
  img: string;
  experience: string;
  tags: string[];
  price: string;
  bio: string;
  available: boolean;
}

const allMentors: Mentor[] = [
  {
    name: "Global Phayyy",
    role: "UI/UX, Brand Identity",
    rating: 4.5,
    reviews: 57,
    img: mentor1,
    experience: "5+ yrs",
    tags: ["UI/UX", "Branding", "Prototyping"],
    price: "$15 / hr",
    bio: "Specializes in clean interfaces and strong brand presence.",
    available: true,
  },
  {
    name: "Mat Johnson",
    role: "UI/UX, Front-End",
    rating: 4.7,
    reviews: 123,
    img: mentor2,
    experience: "6+ yrs",
    tags: ["React", "UX Research", "Wireframes"],
    price: "$18 / hr",
    bio: "Helps teams build modern UI experiences.",
    available: false,
  },
  {
    name: "James John",
    role: "Front-End Developer",
    rating: 4.8,
    reviews: 98,
    img: mentor3,
    experience: "4+ yrs",
    tags: ["JavaScript", "React", "Landing Pages"],
    price: "$20 / hr",
    bio: "Focused on clean components and reusability.",
    available: true,
  },
  {
    name: "Toluwalasee",
    role: "UI/UX, Front-End",
    rating: 4.6,
    reviews: 88,
    img: mentor4,
    experience: "5 yrs",
    tags: ["UI Systems", "Figma", "CSS"],
    price: "$17 / hr",
    bio: "Creates sleek interfaces and responsive layouts.",
    available: true,
  },
  {
    name: "Sarah Cole",
    role: "Product Design",
    rating: 4.9,
    reviews: 140,
    img: mentor5,
    experience: "7 yrs",
    tags: ["Product Strategy", "User Testing"],
    price: "$25 / hr",
    bio: "Expert in user flows and product experience.",
    available: false,
  },
  {
    name: "Michael Lee",
    role: "Data Analysis",
    rating: 4.6,
    reviews: 72,
    img: mentor6,
    experience: "3 yrs",
    tags: ["Excel", "SQL", "Data Viz"],
    price: "$12 / hr",
    bio: "Transforms raw data into actionable insights.",
    available: true,
  },
  {
    name: "Aisha Bello",
    role: "Front-End Dev",
    rating: 4.7,
    reviews: 112,
    img: mentor7,
    experience: "5 yrs",
    tags: ["Responsive UI", "JavaScript"],
    price: "$16 / hr",
    bio: "Builds fast and mobile-friendly UIs.",
    available: true,
  },
  {
    name: "David Yang",
    role: "Full Stack Developer",
    rating: 4.8,
    reviews: 160,
    img: mentor8,
    experience: "6 yrs",
    tags: ["Node.js", "React", "APIs"],
    price: "$22 / hr",
    bio: "Creates full-stack solutions with clean architecture.",
    available: false,
  },
  {
    name: "Chisom Dev",
    role: "UI/UX",
    rating: 4.5,
    reviews: 90,
    img: mentor9,
    experience: "4 yrs",
    tags: ["Figma", "Design Systems"],
    price: "$14 / hr",
    bio: "Focuses on intuitive user-centered design.",
    available: true,
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const OurMentorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterAvailability, setFilterAvailability] = useState<string>("all");
  const [filterRating, setFilterRating] = useState<number>(0);

  const handleAvailabilityChange = (e: SelectChangeEvent<string>) => {
    setFilterAvailability(e.target.value);
  };

  const handleRatingChange = (e: SelectChangeEvent<number>) => {
    setFilterRating(Number(e.target.value));
  };

  const filteredMentors = allMentors.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesAvailability =
      filterAvailability === "all"
        ? true
        : filterAvailability === "available"
        ? m.available
        : !m.available;

    const matchesRating = m.rating >= filterRating;

    return matchesSearch && matchesAvailability && matchesRating;
  });

  return (
    <Box sx={{ pb: 12, backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      {/* Premium Header */}
      <Box sx={{ pt: 10, pb: 12, backgroundColor: "#FFFFFF", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Stack spacing={2} alignItems="center" textAlign="center">
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 800, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Expert Guidance
                </Typography>
                <Typography sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 900, color: "#0B0B31", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                    Learn from the best in the <span style={{ color: "#3B82F6" }}>industry</span>.
                </Typography>
                <Typography sx={{ fontSize: "1.1rem", color: "#64748B", fontWeight: 500, maxWidth: 600 }}>
                    Find mentors who have been there, done that, and are ready to help you navigate your career journey.
                </Typography>
            </Stack>
          </motion.div>

          {/* Search & Filters */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Box
                sx={{
                mt: 6,
                p: 2,
                borderRadius: "24px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center"
                }}
            >
                <TextField
                fullWidth
                placeholder="Search by name, role, or skill..."
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <Search sx={{ color: "#94A3B8" }} />
                    </InputAdornment>
                    ),
                    sx: { borderRadius: "16px", backgroundColor: "#F8FAFF", border: "none", "& fieldset": { border: "none" } }
                }}
                sx={{ flex: { xs: "1 1 100%", md: "1 1 0" } }}
                />

                <Stack direction="row" spacing={2} sx={{ width: { xs: "100%", md: "auto" } }}>
                    <FormControl size="medium" sx={{ minWidth: 160 }}>
                        <Select
                            value={filterAvailability}
                            onChange={handleAvailabilityChange}
                            sx={{ borderRadius: "16px", backgroundColor: "#F8FAFF", "& fieldset": { border: "none" }, fontWeight: 700, fontSize: "0.9rem" }}
                            startAdornment={<FilterList sx={{ mr: 1, color: "#94A3B8", fontSize: "1.1rem" }} />}
                        >
                            <MenuItem value="all">All Status</MenuItem>
                            <MenuItem value="available">Available Now</MenuItem>
                            <MenuItem value="unavailable">Booked</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl size="medium" sx={{ minWidth: 140 }}>
                        <Select
                            value={filterRating}
                            onChange={handleRatingChange}
                            sx={{ borderRadius: "16px", backgroundColor: "#F8FAFF", "& fieldset": { border: "none" }, fontWeight: 700, fontSize: "0.9rem" }}
                            startAdornment={<Star sx={{ mr: 1, color: "#F59E0B", fontSize: "1.1rem" }} />}
                        >
                            <MenuItem value={0}>Any Rating</MenuItem>
                            <MenuItem value={4}>4.0 +</MenuItem>
                            <MenuItem value={4.5}>4.5 +</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Mentors Grid */}
      <Container maxWidth="lg" sx={{ mt: -6 }}>
        <AnimatePresence>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <Grid container spacing={4}>
                    {filteredMentors.length ? (
                        filteredMentors.map((m, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <motion.div variants={fadeInUp}>
                                <Card
                                sx={{
                                    borderRadius: "32px",
                                    border: "1px solid rgba(0,0,0,0.04)",
                                    backgroundColor: "#FFFFFF",
                                    overflow: "hidden",
                                    height: "100%",
                                    transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                    "&:hover": {
                                        transform: "translateY(-12px)",
                                        boxShadow: "0 40px 80px rgba(11, 11, 49, 0.08)",
                                        "& .mentor-img": { transform: "scale(1.05)" }
                                    },
                                }}
                                >
                                <Box sx={{ position: "relative", height: 280, overflow: "hidden" }}>
                                    <CardMedia
                                    component="img"
                                    src={m.img}
                                    className="mentor-img"
                                    sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
                                    />
                                    <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3, background: "linear-gradient(to top, rgba(11, 11, 49, 0.8), transparent)" }}>
                                        <Typography sx={{ color: "#FFF", fontWeight: 900, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>{m.name}</Typography>
                                        <Typography sx={{ color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.9rem" }}>{m.role}</Typography>
                                    </Box>
                                    <Chip 
                                        label={m.available ? "Available" : "Booked"} 
                                        sx={{ 
                                            position: "absolute", 
                                            top: 20, 
                                            right: 20, 
                                            backgroundColor: m.available ? "#10B981" : "#EF4444", 
                                            color: "#FFF",
                                            fontWeight: 900,
                                            fontSize: "0.7rem",
                                            borderRadius: "8px",
                                            height: 24
                                        }} 
                                    />
                                </Box>

                                <Box sx={{ p: 4 }}>
                                    <Stack spacing={2.5}>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                            {m.tags.slice(0, 3).map((tag, idx) => (
                                                <Chip 
                                                    key={idx} 
                                                    label={tag} 
                                                    size="small" 
                                                    sx={{ backgroundColor: "#F8FAFF", color: "#3B82F6", fontWeight: 800, fontSize: "0.7rem", borderRadius: "6px" }} 
                                                />
                                            ))}
                                        </Stack>

                                        <Typography sx={{ fontSize: "0.95rem", color: "#64748B", fontWeight: 500, lineHeight: 1.6 }}>{m.bio}</Typography>

                                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                                            <Stack spacing={0.5}>
                                                <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#94A3B8", textTransform: "uppercase" }}>Rating</Typography>
                                                <Stack direction="row" spacing={0.5} alignItems="center">
                                                    <Star sx={{ color: "#F59E0B", fontSize: "1.1rem" }} />
                                                    <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0B0B31" }}>{m.rating}</Typography>
                                                    <Typography sx={{ color: "#94A3B8", fontWeight: 600, fontSize: "0.85rem" }}>({m.reviews})</Typography>
                                                </Stack>
                                            </Stack>
                                            <Stack spacing={0.5} alignItems="flex-end">
                                                <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#94A3B8", textTransform: "uppercase" }}>Price</Typography>
                                                <Typography sx={{ fontWeight: 900, fontSize: "1.2rem", color: "#0B0B31" }}>{m.price}</Typography>
                                            </Stack>
                                        </Stack>

                                        <Button
                                            fullWidth
                                            variant="contained"
                                            startIcon={<CalendarMonth />}
                                            sx={{ 
                                                mt: 1, 
                                                backgroundColor: "#0B0B31", 
                                                color: "#FFF", 
                                                borderRadius: "16px", 
                                                py: 1.8, 
                                                fontWeight: 900, 
                                                textTransform: "none", 
                                                fontSize: "0.95rem",
                                                "&:hover": { backgroundColor: "#17174F" }
                                            }}
                                        >
                                            Book a Session
                                        </Button>
                                    </Stack>
                                </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                        ))
                    ) : (
                        <Grid item xs={12}>
                            <Box sx={{ py: 10, textAlign: "center" }}>
                                <Typography sx={{ fontSize: "1.2rem", color: "#94A3B8", fontWeight: 600 }}>No mentors found matching your criteria.</Typography>
                                <Button sx={{ mt: 2, fontWeight: 800 }} onClick={() => { setSearchTerm(""); setFilterAvailability("all"); setFilterRating(0); }}>Clear All Filters</Button>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default OurMentorsPage;
