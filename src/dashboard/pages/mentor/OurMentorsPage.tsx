import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Chip,
  Rating,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";

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
    <Box sx={{ width: "100%", px: 2, py: 6, maxWidth: "1200px", mx: "auto" }}>
      <Typography
        sx={{
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          fontWeight: 700,
          mb: 4,
          textAlign: "center",
        }}
      >
        Our Mentors
      </Typography>

      {/* Search & Filters */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mb: 6,
        }}
      >
        <TextField
          label="Search by name, role, or tag"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          sx={{ minWidth: 250 }}
        />

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Availability</InputLabel>
          <Select
            value={filterAvailability}
            label="Availability"
            onChange={handleAvailabilityChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="unavailable">Unavailable</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Min Rating</InputLabel>
          <Select
            value={filterRating}
            label="Min Rating"
            onChange={handleRatingChange}
          >
            <MenuItem value={0}>Any</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
            <MenuItem value={4.5}>4.5+</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Mentors Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {filteredMentors.length ? (
          filteredMentors.map((m, i) => (
            <Card
              key={i}
              sx={{
                width: { xs: "90%", sm: "45%", md: "20%" },
                borderRadius: 3,
                background: "#fff",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "0.3s ease",
                p: 1,
                "&:hover": {
                  boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                src={m.img}
                alt={m.name}
                sx={{
                  width: "100%",
                  height: 160,
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />

              <Box sx={{ p: 2 }}>
                <Chip
                  label={m.available ? "Available" : "Unavailable"}
                  size="small"
                  sx={{
                    mb: 1,
                    background: m.available ? "#E3F5E8" : "#FFE3E3",
                    color: m.available ? "#1B7A2A" : "#C62828",
                    fontWeight: 600,
                  }}
                />

                <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
                  {m.name}
                </Typography>

                <Typography sx={{ fontSize: "0.85rem", color: "#666", mb: 1 }}>
                  {m.role} • {m.experience} experience
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Rating
                    value={m.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <Typography sx={{ ml: 0.5, fontSize: "0.8rem", color: "#444" }}>
                    ({m.reviews})
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#555",
                    mb: 1.5,
                    lineHeight: 1.4,
                  }}
                >
                  {m.bio}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {m.tags.map((tag, idx) => (
                    <Chip
                      key={idx}
                      label={tag}
                      size="small"
                      sx={{
                        background: "#F1F4FF",
                        color: "#1D3CFF",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    mb: 1,
                    color: "#0B1A4A",
                  }}
                >
                  {m.price}
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#0B1A4A",
                    textTransform: "none",
                    fontSize: "0.75rem",
                    py: 1,
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#1D3CFF" },
                  }}
                >
                  Book a call
                </Button>
              </Box>
            </Card>
          ))
        ) : (
          <Typography sx={{ mt: 4, fontSize: "1rem", color: "#777" }}>
            No mentors found matching your criteria.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default OurMentorsPage;
