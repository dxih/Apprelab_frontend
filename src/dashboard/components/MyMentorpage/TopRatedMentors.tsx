import React from "react";
import { Box, Typography, Card, CardMedia, Button, Chip, Container, Grid, Stack } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import { Star, CalendarMonth } from "@mui/icons-material";

// Mentor Images
import mentor1 from "../../assets/images/mentors/mentor1.png";
import mentor2 from "../../assets/images/mentors/mentor2.png";
import mentor3 from "../../assets/images/mentors/mentor3.png";
import mentor4 from "../../assets/images/mentors/mentor4.png";
import mentor5 from "../../assets/images/mentors/mentor5.png";

const topMentors = [
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
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const TopRatedMentors: React.FC = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Stack spacing={2} sx={{ mb: 8, textAlign: "center" }}>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 800, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Top Rated
                </Typography>
                <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 900, color: "#0B0B31", letterSpacing: "-0.02em" }}>
                    Learn from the <span style={{ color: "#3B82F6" }}>Elite</span>.
                </Typography>
            </Stack>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {topMentors.map((m, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
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
                      "& img": { transform: "scale(1.05)" }
                    },
                  }}
                >
                  <Box sx={{ position: "relative", height: 240, overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      src={m.img}
                      sx={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover", 
                        transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)" 
                      }}
                    />
                    <Chip 
                        label={m.available ? "Available" : "Booked"} 
                        sx={{ 
                            position: "absolute", 
                            top: 16, 
                            right: 16, 
                            backgroundColor: m.available ? "#10B981" : "#EF4444", 
                            color: "#FFF",
                            fontWeight: 900,
                            fontSize: "0.65rem",
                            borderRadius: "8px",
                            height: 22
                        }} 
                    />
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Stack spacing={2}>
                      <Box>
                        <Typography sx={{ fontWeight: 900, fontSize: "1.2rem", color: "#0B0B31" }}>{m.name}</Typography>
                        <Typography sx={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 600 }}>{m.role}</Typography>
                      </Box>

                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {m.tags.slice(0, 2).map((tag, idx) => (
                          <Chip 
                            key={idx} 
                            label={tag} 
                            size="small" 
                            sx={{ backgroundColor: "#F8FAFF", color: "#3B82F6", fontWeight: 800, fontSize: "0.65rem", borderRadius: "6px" }} 
                          />
                        ))}
                      </Stack>

                      <Typography sx={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 500, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {m.bio}
                      </Typography>

                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Star sx={{ color: "#F59E0B", fontSize: "1rem" }} />
                          <Typography sx={{ fontWeight: 900, fontSize: "1rem", color: "#0B0B31" }}>{m.rating}</Typography>
                        </Stack>
                        <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0B0B31" }}>{m.price}</Typography>
                      </Stack>

                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<CalendarMonth />}
                        sx={{ 
                          mt: 1, 
                          backgroundColor: "#0B0B31", 
                          color: "#FFF", 
                          borderRadius: "14px", 
                          py: 1.5, 
                          fontWeight: 900, 
                          textTransform: "none", 
                          fontSize: "0.85rem",
                          "&:hover": { backgroundColor: "#17174F" }
                        }}
                      >
                        Book Now
                      </Button>
                    </Stack>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedMentors;
