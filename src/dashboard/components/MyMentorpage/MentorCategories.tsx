import React from "react";
import { Box, Typography, Container, Grid, Paper, Stack } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";

import designImg from "../../assets/images/mentors/categories/Design.png";
import webImg from "../../assets/images/mentors/categories/WebDevelopmement.png";
import dataImg from "../../assets/images/mentors/categories/DataAnalysis.png";
import pmImg from "../../assets/images/mentors/categories/ProductManagement.png";

const categories = [
  { title: "Design", count: 56, img: designImg },
  { title: "Web Development", count: 6, img: webImg },
  { title: "Data Analysis", count: 6, img: dataImg },
  { title: "Product Management", count: 13, img: pmImg },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const MentorCategories: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#F9FAFB" }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 6 }}>
                <Stack spacing={1}>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 800, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Specializations
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900, color: "#0B0B31", letterSpacing: "-0.02em" }}>
                        Mentor Categories
                    </Typography>
                </Stack>
                <Typography
                    sx={{
                        fontSize: "0.95rem",
                        color: "#3B82F6",
                        fontWeight: 800,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        "&:hover": { "& svg": { transform: "translateX(4px)" } }
                    }}
                >
                    View All Categories <ArrowForward sx={{ fontSize: "1.1rem", transition: "0.3s" }} />
                </Typography>
            </Stack>
        </motion.div>

        {/* CARDS */}
        <Grid container spacing={4}>
            {categories.map((c, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: "28px",
                            overflow: "hidden",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid rgba(0,0,0,0.04)",
                            transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            cursor: "pointer",
                            "&:hover": {
                                transform: "translateY(-12px)",
                                boxShadow: "0 30px 60px rgba(11, 11, 49, 0.08)",
                                "& .category-img": { transform: "scale(1.1)" }
                            },
                        }}
                    >
                        <Box sx={{ height: 180, overflow: "hidden" }}>
                            <Box
                                component="img"
                                src={c.img}
                                className="category-img"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                                }}
                            />
                        </Box>
                        <Box sx={{ p: 3, textAlign: "center" }}>
                            <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0B0B31", mb: 0.5 }}>{c.title}</Typography>
                            <Typography sx={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 600 }}>
                                {c.count} Mentors Available
                            </Typography>
                        </Box>
                    </Paper>
                </motion.div>
            </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MentorCategories;
