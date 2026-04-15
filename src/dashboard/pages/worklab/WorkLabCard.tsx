import React from "react";
import { Box, Grid, Typography, Button, Paper, Stack, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AccessTime, Business, WorkOutline, ArrowForward } from "@mui/icons-material";
import featuredData from "../../Data/Worklab.data";

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      {children}
    </Box>
  );
};

const WorkLabCard: React.FC = () => {
  return (
    <>
      {featuredData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: "28px",
                border: "1px solid rgba(0,0,0,0.04)",
                backgroundColor: "#fff",
                height: "100%",
                overflow: "hidden",
                transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  transform: "translateY(-12px)",
                  boxShadow: "0 30px 60px rgba(11, 11, 49, 0.08)",
                  "& img": { transform: "scale(1.1)" }
                },
              }}
            >
              {/* Image Section */}
              <Box sx={{ position: "relative", height: 220, overflow: "hidden" }}>
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    px: 1.5,
                    py: 0.8,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5
                  }}
                >
                  <AccessTime sx={{ fontSize: "0.9rem", color: "#64748B" }} />
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#0B0B31" }}>
                    {item.duration}
                  </Typography>
                </Box>
              </Box>

              {/* Content Section */}
              <Box sx={{ p: 3.5 }}>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {item.tags.map((tag, i) => (
                            <Chip 
                                key={i} 
                                label={tag} 
                                size="small" 
                                sx={{ backgroundColor: "#F0FDF4", color: "#16A34A", fontWeight: 800, fontSize: "0.7rem", borderRadius: "8px" }} 
                            />
                        ))}
                        {item.tags2.map((tag, i) => (
                            <Chip 
                                key={i} 
                                label={tag} 
                                size="small" 
                                sx={{ backgroundColor: "#EFF6FF", color: "#3B82F6", fontWeight: 800, fontSize: "0.7rem", borderRadius: "8px" }} 
                            />
                        ))}
                    </Stack>

                    <Typography sx={{ fontSize: "1.25rem", fontWeight: 900, color: "#0B0B31", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                        {item.title}
                    </Typography>

                    <Typography sx={{ fontSize: "0.9rem", color: "#64748B", fontWeight: 500, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {item.subtitle}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={2} sx={{ pt: 1, color: "#94A3B8" }}>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Business sx={{ fontSize: "1rem" }} />
                            <Typography sx={{ fontSize: "0.75rem", fontWeight: 700 }}>{item.agency}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <WorkOutline sx={{ fontSize: "1rem" }} />
                            <Typography sx={{ fontSize: "0.75rem", fontWeight: 700 }}>{item.jobType}</Typography>
                        </Stack>
                    </Stack>

                    <Button
                        fullWidth
                        component={Link}
                        to={`/project-feeds/apply/${item.id}`}
                        state={{ project: item }}
                        variant="contained"
                        endIcon={<ArrowForward />}
                        sx={{
                            mt: 1,
                            backgroundColor: "#0B0B31",
                            color: "#FFF",
                            borderRadius: "14px",
                            py: 1.5,
                            fontWeight: 900,
                            textTransform: "none",
                            fontSize: "0.95rem",
                            "&:hover": { backgroundColor: "#17174F" }
                        }}
                    >
                        Apply Now
                    </Button>
                </Stack>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </>
  );
};

export default WorkLabCard;
