import React, { useState } from "react";
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
  FormLabel,
  Button,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Star, Clear } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardHeading from "./DashboardHeading";
import FounderTalentCard from "./FounderTalentCard";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    success: { main: "#2e7d32" },
  },
  typography: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 500, fontSize: 12 },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: "none", fontWeight: 600 },
      },
    },
  },
});

// ─── Dummy Data ───────────────────────────────────────────────────────────────
const learners = [
  {
    id: 1,
    name: "John Doe",
    role: "Mobile Developer",
    location: "Lagos, Nigeria",
    rating: 4.8,
    projects: 12,
    availability: "Available",
    bio: "Passionate mobile developer with experience in building cross-platform apps",
    skills: ["React Native", "JavaScript", "Firebase"],
    bootcamps: ["Mobile Dev Bootcamp", "React Fundamentals"],
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    location: "Nairobi, Kenya",
    rating: 4.9,
    projects: 18,
    availability: "Available",
    bio: "Creating beautiful and intuitive user experiences for web and mobile",
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
    bio: "Building scalable web apps from database to deployment with modern stacks",
    skills: ["React", "Node.js", "TypeScript"],
    bootcamps: ["Full Stack Bootcamp", "AWS Practitioner"],
    avatar: "https://i.pravatar.cc/80?img=53",
  },
  {
    id: 4,
    name: "Amara Diallo",
    role: "Frontend Developer",
    location: "Dakar, Senegal",
    rating: 4.5,
    projects: 7,
    availability: "Busy",
    bio: "Crafting pixel-perfect interfaces with a focus on performance and accessibility",
    skills: ["React", "JavaScript", "UI/UX"],
    bootcamps: ["Frontend Bootcamp"],
    avatar: "https://i.pravatar.cc/80?img=32",
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
    bio: "10+ years in software engineering, helping the next generation of African tech talent",
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
    bio: "Lead designer at scale-ups, passionate about design thinking and mentorship",
    skills: ["Figma", "Design Systems", "UI/UX"],
    bootcamps: ["Design Leadership", "Figma Advanced"],
    avatar: "https://i.pravatar.cc/80?img=49",
  },
  {
    id: 7,
    name: "Chidi Nwosu",
    role: "DevOps Engineer",
    location: "Port Harcourt, Nigeria",
    rating: 4.8,
    years: "6+ years",
    rate: "$90/hr",
    availability: "Busy",
    bio: "Cloud-native infrastructure specialist with a love for automation and reliability",
    skills: ["Node.js", "Python", "TypeScript"],
    bootcamps: ["Cloud Bootcamp", "DevOps Essentials"],
    avatar: "https://i.pravatar.cc/80?img=57",
  },
];

// ─── Skills Filter Options ────────────────────────────────────────────────────
const skillOptions = [
  "React", "React Native", "JavaScript", "TypeScript",
  "Python", "Figma", "UI/UX", "Node.js",
];
const availabilityOptions = ["Available", "Busy", "Limited"];
const ratingOptions = ["5+ stars", "4+ stars", "3+ stars"];

// ─── Shared tab styles ────────────────────────────────────────────────────────
const activeTabSx = {
  width: "134px",
  height: "48px",
  borderRadius: "10px",
  background: "#010A45",
  boxShadow: `
    0px 4px 6px -4px #0000001A,
    0px 10px 15px -3px #0000001A
  `,
  fontFamily: "Arimo, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0px",
  textTransform: "none",
  color: "#fff !important",
  textAlign: "center",
};

const inactiveTabSx = {
  width: "134px",
  height: "48px",
  borderRadius: "10px",
  background: "#fff",
  border: "1px solid #E5E7EB",
  fontFamily: "Arimo, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0px",
  textTransform: "none",
  color: "#000",
  textAlign: "center",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TalentMarketplace() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState("");

  const isMentorTab = tab === 1;
  const data = isMentorTab ? mentors : learners;

  const filtered = data.filter((p) => {
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.role.toLowerCase().includes(search.toLowerCase());
    const matchSkill =
      selectedSkills.length === 0 ||
      selectedSkills.some((s) => p.skills.includes(s));
    const matchAvail = !availability || p.availability === availability;
    const matchRating =
      !rating ||
      (rating === "5+ stars" && p.rating >= 5) ||
      (rating === "4+ stars" && p.rating >= 4) ||
      (rating === "3+ stars" && p.rating >= 3);
    return matchSearch && matchSkill && matchAvail && matchRating;
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const clearAll = () => {
    setSearch("");
    setSelectedSkills([]);
    setAvailability("");
    setRating("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
        {/* Header */}
        <Box
          sx={{
            opacity: 1,
            pt: "16px",
            px: "32px",
            pb: "1px",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid",
            borderBottomColor: "divider",
            boxSizing: "border-box",
            mt: 2,
            mb: 4,
          }}
        >
          <DashboardHeading
            title="Talent Marketplace"
            subtitle="Browse and connect with vetted learners and mentors"
            userName="Toluwalase"
            userRole="Founder"
            walletAmount="$2,450"
          />
        </Box>

        <Box
          sx={{
            maxWidth: "1060px",
            mx: "auto",
            borderRadius: 4,
            overflow: "hidden",
            background: "#fff",
            px: 3,
          }}
        >
          {/* Tabs */}
          <Box sx={{ background: "#fff", pt: 2 }}>
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                "& .MuiTabs-flexContainer": { gap: "24px" },
              }}
            >
              <Tab
                label={`Learners (${learners.length})`}
                sx={tab === 0 ? activeTabSx : inactiveTabSx}
              />
              <Tab
                label={`Mentors (${mentors.length})`}
                sx={tab === 1 ? activeTabSx : inactiveTabSx}
              />
            </Tabs>
          </Box>

          <Box sx={{ display: "flex", gap: 0, minHeight: 600 }}>
            {/* ── Sidebar ── */}
            <Box
              sx={{
                width: "206px",
                height: "752px",
                opacity: 1,
                borderRadius: "14px",
                border: "1px solid #E5E7EB",
                mt: 3,
                flexShrink: 0,
                p: 2.5,
                background: "#fff",
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <img
                  src="/src/assets/filter.png"
                  alt=""
                  style={{ width: "16.66px", height: "15.83px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Arimo, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "#101828",
                  }}
                >
                  Filters
                </Typography>
              </Stack>

              {/* Search */}
              <Typography
                sx={{
                  fontFamily: "Arimo, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  color: "#364153",
                }}
                mb={0.5}
                display="block"
              >
                Search
              </Typography>
              <TextField
                size="small"
                placeholder="Search by name..."
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="/src/assets/search.png"
                        alt=""
                        style={{ width: "10.67px", height: "10.67px" }}
                      />
                    </InputAdornment>
                  ),
                  sx: { fontSize: 13, borderRadius: 2, background: "#fff" },
                }}
                sx={{ mb: 2.5 }}
              />

              {/* Skills */}
              <FormLabel
                sx={{
                  fontFamily: "Arimo, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  color: "#364153",
                }}
              >
                Skills
              </FormLabel>
              <FormGroup sx={{ mb: 2.5 }}>
                {skillOptions.map((skill) => (
                  <FormControlLabel
                    key={skill}
                    control={
                      <Checkbox
                        size="small"
                        checked={selectedSkills.includes(skill)}
                        onChange={() => toggleSkill(skill)}
                        sx={{ p: 0.5 }}
                      />
                    }
                    label={<Typography fontSize={13}>{skill}</Typography>}
                    sx={{ mb: 0.2 }}
                  />
                ))}
              </FormGroup>

              {/* Availability */}
              <FormLabel
                sx={{
                  fontFamily: "Arimo, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  color: "#364153",
                }}
              >
                Availability
              </FormLabel>
              <RadioGroup
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                sx={{ mb: 2.5 }}
              >
                {availabilityOptions.map((opt) => (
                  <FormControlLabel
                    key={opt}
                    value={opt}
                    control={<Radio size="small" sx={{ p: 0.5 }} />}
                    label={<Typography fontSize={13}>{opt}</Typography>}
                    sx={{ mb: 0.2 }}
                  />
                ))}
              </RadioGroup>

              {/* Minimum Rating */}
              <FormLabel
                sx={{
                  fontFamily: "Arimo, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  color: "#364153",
                }}
              >
                Minimum Rating
              </FormLabel>
              <RadioGroup
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                sx={{ mb: 2.5 }}
              >
                {ratingOptions.map((opt) => (
                  <FormControlLabel
                    key={opt}
                    value={opt}
                    control={<Radio size="small" sx={{ p: 0.5 }} />}
                    label={
                      <Stack direction="row" spacing={0.3} alignItems="center">
                        <Star sx={{ fontSize: 13, color: "#f9a825" }} />
                        <Typography fontSize={13}>{opt}</Typography>
                      </Stack>
                    }
                    sx={{ mb: 0.2 }}
                  />
                ))}
              </RadioGroup>

              <Typography
                variant="caption"
                sx={{
                  fontFamily: "Arimo, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: "#4F39F6",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={clearAll}
              >
                Clear all filters
              </Typography>
            </Box>

            {/* ── Cards ── */}
            <Box flex={1} p={3} sx={{ overflowY: "auto" }}>
              {filtered.length === 0 ? (
                <Box textAlign="center" py={8}>
                  <Typography color="text.secondary">
                    No results match your filters.
                  </Typography>
                  <Button
                    onClick={clearAll}
                    size="small"
                    sx={{ mt: 1 }}
                    startIcon={<Clear />}
                  >
                    Clear filters
                  </Button>
                </Box>
              ) : (
                filtered.map((person) => (
                  <FounderTalentCard
                    key={person.id}
                    person={person}
                    cardType={isMentorTab ? "mentor" : "learner"}
                  />
                ))
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}