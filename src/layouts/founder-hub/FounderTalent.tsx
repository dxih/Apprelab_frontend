import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Button,
  InputAdornment,
  Stack,
  Container,
} from "@mui/material";
import { Clear } from "@mui/icons-material";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import DashboardHeading from "./DashboardHeading";
import FounderTalentCard from "./FounderTalentCard";

// ─── Dummy Data ───────────────────────────────────────────────────────────────
const learners = [
  {
    id: 1,
    name: "Tega Oghenekohwo",
    role: "Mobile Developer",
    location: "Lagos, Nigeria",
    rating: 4.8,
    projects: 12,
    availability: "Available",
    bio: "Passionate mobile developer specializing in high-performance iOS and Android applications using React Native and Flutter.",
    skills: ["React Native", "JavaScript", "Firebase"],
    bootcamps: ["Mobile Dev Bootcamp", "React Fundamentals"],
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UI/UX Designer",
    location: "Nairobi, Kenya",
    rating: 4.9,
    projects: 18,
    availability: "Available",
    bio: "Visual storyteller with a focus on creating intuitive digital experiences that drive user engagement and business growth.",
    skills: ["Figma", "UI/UX", "Design Systems"],
    bootcamps: ["UX Design Bootcamp", "Advanced Figma"],
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    id: 3,
    name: "Kwame Asante",
    role: "Full Stack Developer",
    location: "Accra, Ghana",
    rating: 4.7,
    projects: 9,
    availability: "Busy",
    bio: "Engineering robust backend systems and dynamic frontends with a focus on scalability and clean architecture.",
    skills: ["React", "Node.js", "TypeScript"],
    bootcamps: ["Full Stack Bootcamp", "AWS Practitioner"],
    avatar: "https://i.pravatar.cc/80?img=53",
  },
];

const mentors = [
  {
    id: 5,
    name: "Dr. Tunde Okafor",
    role: "Senior Software Engineer",
    location: "Abuja, Nigeria",
    rating: 5.0,
    years: "10+ years",
    rate: "$120/hr",
    availability: "Available",
    bio: "Ex-Google architect with deep expertise in system design and scaling engineering teams for early-stage startups.",
    skills: ["Python", "TypeScript", "System Design"],
    bootcamps: ["Advanced Python", "System Design Masterclass"],
    avatar: "https://i.pravatar.cc/80?img=60",
  },
  {
    id: 6,
    name: "Fatima Al-Hassan",
    role: "Product Designer",
    location: "Cairo, Egypt",
    rating: 4.9,
    years: "8+ years",
    rate: "$100/hr",
    availability: "Limited",
    bio: "Leading design teams at scale-ups, I mentor designers on strategy, research methodologies, and leadership.",
    skills: ["Figma", "Design Systems", "UI/UX"],
    bootcamps: ["Design Leadership", "Figma Advanced"],
    avatar: "https://i.pravatar.cc/80?img=49",
  },
];

const skillOptions = ["React", "React Native", "JavaScript", "TypeScript", "Python", "Figma", "UI/UX", "Node.js"];
const availabilityOptions = ["Available", "Busy", "Limited"];

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

export default function TalentMarketplace() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState("");

  const isMentorTab = tab === 1;
  const data = isMentorTab ? mentors : learners;

  const filtered = data.filter((p) => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.role.toLowerCase().includes(search.toLowerCase());
    const matchSkill = selectedSkills.length === 0 || selectedSkills.some((s) => p.skills.includes(s));
    const matchAvail = !availability || p.availability === availability;
    const matchRating = !rating || (rating === "5+ stars" && p.rating >= 5) || (rating === "4+ stars" && p.rating >= 4) || (rating === "3+ stars" && p.rating >= 3);
    return matchSearch && matchSkill && matchAvail && matchRating;
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]);
  };

  const clearAll = () => {
    setSearch("");
    setSelectedSkills([]);
    setAvailability("");
    setRating("");
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box sx={{ mb: 6 }}>
            <DashboardHeading
              title="Talent Marketplace"
              subtitle="Connect with the top 1% of vetted African tech talent"
              userName="Toluwalase"
              userRole="Founder"
              walletAmount="$2,450"
            />
          </Box>
        </motion.div>

        {/* Tabs */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                <Tabs
                value={tab}
                onChange={(_, v) => setTab(v)}
                sx={{
                    p: 0.6,
                    borderRadius: "20px",
                    backgroundColor: "#F1F5F9",
                    minHeight: 56,
                    "& .MuiTabs-indicator": { 
                        backgroundColor: "#FFFFFF",
                        height: "100%",
                        borderRadius: "16px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                    },
                }}
                >
                <Tab
                    label={`Learners (${learners.length})`}
                    sx={{
                        borderRadius: "16px",
                        textTransform: "none",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        px: 4,
                        minWidth: 160,
                        zIndex: 1,
                        color: tab === 0 ? "#0B0B31 !important" : "#64748B",
                    }}
                />
                <Tab
                    label={`Mentors (${mentors.length})`}
                    sx={{
                        borderRadius: "16px",
                        textTransform: "none",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        px: 4,
                        minWidth: 160,
                        zIndex: 1,
                        color: tab === 1 ? "#0B0B31 !important" : "#64748B",
                    }}
                />
                </Tabs>
            </Box>
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          {/* Sidebar */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ width: "100%", maxWidth: "280px" }}>
            <Box
              sx={{
                p: 3,
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                border: "1px solid rgba(0,0,0,0.04)",
                position: { md: "sticky" },
                top: 40,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
                <Box sx={{ p: 1, backgroundColor: "#F1F5F9", borderRadius: "10px" }}>
                    <img src="/src/assets/filter.png" alt="" style={{ width: 18 }} />
                </Box>
                <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0B0B31", letterSpacing: "-0.01em" }}>
                  Filters
                </Typography>
              </Stack>

              {/* Search */}
              <TextField
                size="small"
                placeholder="Search by name..."
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src="/src/assets/search.png" alt="" style={{ width: 14 }} />
                    </InputAdornment>
                  ),
                  sx: { 
                    borderRadius: "14px", 
                    backgroundColor: "#F8FAFF",
                    border: "none",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "& fieldset": { border: "none" }
                  },
                }}
                sx={{ mb: 4 }}
              />

              {/* Skills */}
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
                    Technical Skills
                </Typography>
                <FormGroup>
                    {skillOptions.map((skill) => (
                    <FormControlLabel
                        key={skill}
                        control={<Checkbox size="small" checked={selectedSkills.includes(skill)} onChange={() => toggleSkill(skill)} sx={{ color: "#CBD5E1" }} />}
                        label={<Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#334155" }}>{skill}</Typography>}
                        sx={{ mb: 0.5 }}
                    />
                    ))}
                </FormGroup>
              </Box>

              {/* Availability */}
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
                    Availability
                </Typography>
                <RadioGroup value={availability} onChange={(e) => setAvailability(e.target.value)}>
                    {availabilityOptions.map((opt) => (
                    <FormControlLabel
                        key={opt}
                        value={opt}
                        control={<Radio size="small" sx={{ color: "#CBD5E1" }} />}
                        label={<Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#334155" }}>{opt}</Typography>}
                        sx={{ mb: 0.5 }}
                    />
                    ))}
                </RadioGroup>
              </Box>

              <Button
                fullWidth
                onClick={clearAll}
                sx={{
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  color: "#3B82F6",
                  textTransform: "none",
                  py: 1.5,
                  borderRadius: "14px",
                  backgroundColor: "rgba(59, 130, 246, 0.05)",
                  "&:hover": { backgroundColor: "rgba(59, 130, 246, 0.1)" },
                }}
              >
                Clear all filters
              </Button>
            </Box>
          </motion.div>

          {/* Cards */}
          <Box flex={1}>
            <AnimatePresence mode="wait">
              <motion.div
                key={isMentorTab ? "mentors" : "learners"}
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {filtered.length === 0 ? (
                  <Box sx={{ textAlign: "center", py: 12, backgroundColor: "#FFF", borderRadius: "24px", border: "1px solid rgba(0,0,0,0.04)" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: "#94A3B8", mb: 1 }}>
                      No talent found
                    </Typography>
                    <Typography sx={{ fontWeight: 500, color: "#94A3B8", mb: 3 }}>
                      Try adjusting your filters or search terms
                    </Typography>
                    <Button onClick={clearAll} startIcon={<Clear />} sx={{ fontWeight: 800, textTransform: "none" }}>
                      Clear filters
                    </Button>
                  </Box>
                ) : (
                  <Stack spacing={3}>
                    {filtered.map((person) => (
                      <FounderTalentCard
                        key={person.id}
                        person={person}
                        cardType={isMentorTab ? "mentor" : "learner"}
                      />
                    ))}
                  </Stack>
                )}
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}