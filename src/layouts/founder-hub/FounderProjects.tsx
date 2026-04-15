import React, { useEffect, useState } from "react";
import {
  Box, Typography, Chip, Button, Card, CardContent,
  Stack, InputBase, Tabs, Tab, Container,
} from "@mui/material";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import DashboardHeading from "./DashboardHeading";
import { useDashboard } from "../../context/DashboardContext";
import PostNewProjectDialog from "./PostNewProjectDialog";

const statusColors: Record<string, { bg: string; color: string }> = {
  open: { bg: "rgba(34, 197, 94, 0.1)", color: "#16A34A" },
  "in-progress": { bg: "rgba(59, 130, 246, 0.1)", color: "#2563EB" },
  pending: { bg: "rgba(234, 179, 8, 0.1)", color: "#CA8A04" },
  completed: { bg: "rgba(168, 85, 247, 0.1)", color: "#9333EA" },
};

const categoryColors: Record<string, { bg: string; color: string }> = {
  Design: { bg: "rgba(236, 72, 153, 0.1)", color: "#DB2777" },
  Development: { bg: "rgba(139, 92, 246, 0.1)", color: "#7C3AED" },
  Data: { bg: "rgba(14, 165, 233, 0.1)", color: "#0284C7" },
};

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
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export default function FounderProjects() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [openNewProject, setOpenNewProject] = useState(false);

  const { setProjectsCount, projects, setProjects } = useDashboard();

  useEffect(() => {
    setProjectsCount(projects.length);
  }, [projects.length]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleNewProjectSubmit = (projectData: any) => {
    setProjects((prev) => [...prev, { ...projectData, id: Date.now() }]);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Box
            sx={{
                mb: 6,
                backgroundColor: "transparent",
            }}
            >
            <DashboardHeading
                title="Projects & Talent"
                subtitle="Scale your vision with the right talent and tracking"
                userName="Toluwalase"
                userRole="Founder"
                walletAmount="$2,450"
            />
            </Box>
        </motion.div>

        {/* Search, Tabs, and button */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "stretch", md: "center" },
                gap: 3,
                mb: 5,
            }}
            >
            <Box
                sx={{
                width: { xs: "100%", md: 320 },
                height: 52,
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(0,0,0,0.05)",
                borderRadius: "16px",
                px: 2,
                gap: 1.5,
                transition: "0.3s",
                "&:focus-within": {
                    borderColor: "#3B82F6",
                    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)"
                }
                }}
            >
                <SearchIcon sx={{ color: "#94A3B8" }} />
                <InputBase 
                    placeholder="Search projects..." 
                    sx={{ ml: 1, flex: 1, fontWeight: 500, fontSize: "0.95rem" }} 
                />
            </Box>

            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                sx={{
                p: 0.5,
                borderRadius: "18px",
                backgroundColor: "#F1F5F9",
                minHeight: 52,
                "& .MuiTabs-indicator": { 
                    backgroundColor: "#FFFFFF",
                    height: "100%",
                    borderRadius: "14px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                },
                }}
            >
                {["All", "Open", "Active", "Done"].map((label, index) => (
                <Tab
                    key={index}
                    label={label}
                    sx={{
                    borderRadius: "14px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    px: 3,
                    minHeight: 44,
                    zIndex: 1,
                    color: tabValue === index ? "#0B0B31 !important" : "#64748B",
                    transition: "0.2s"
                    }}
                />
                ))}
            </Tabs>

            <Button
                variant="contained"
                sx={{
                height: 52,
                borderRadius: "16px",
                backgroundColor: "#0B0B31",
                color: "#fff",
                textTransform: "none",
                fontWeight: 800,
                fontSize: "1rem",
                px: 4,
                boxShadow: "0 10px 30px rgba(11, 11, 49, 0.2)",
                "&:hover": { 
                    backgroundColor: "#1C1E53",
                    transform: "translateY(-2px)",
                    boxShadow: "0 20px 40px rgba(11, 11, 49, 0.3)",
                },
                }}
                onClick={() => setOpenNewProject(true)}
                startIcon={<Box component="span" sx={{ fontSize: "1.5rem", mr: 0.5 }}>+</Box>}
            >
                Post New Project
            </Button>
            </Box>
        </motion.div>

        {/* Project Cards */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <Stack spacing={3}>
                <AnimatePresence mode="popLayout">
                    {projects.map((project) => (
                    <motion.div 
                        key={project.id}
                        variants={fadeInUp}
                        layout
                    >
                        <Card
                        sx={{
                            borderRadius: "28px",
                            backgroundColor: "#ffffff",
                            border: "1px solid rgba(0,0,0,0.04)",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
                                border: "1px solid rgba(59, 130, 246, 0.2)",
                            }
                        }}
                        >
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 800, color: "#0B0B31", letterSpacing: "-0.01em" }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Chip
                                        label={project.status}
                                        size="small"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "0.75rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            backgroundColor: statusColors[project.status]?.bg || "#F1F5F9",
                                            color: statusColors[project.status]?.color || "#64748B",
                                            borderRadius: "8px",
                                            height: 26
                                        }}
                                    />

                                    <Chip
                                        label={project.category}
                                        size="small"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "0.75rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            backgroundColor: categoryColors[project.category]?.bg || "#F1F5F9",
                                            color: categoryColors[project.category]?.color || "#64748B",
                                            borderRadius: "8px",
                                            height: 26
                                        }}
                                    />
                                </Box>

                                <Button sx={{ minWidth: "auto", color: "#94A3B8", p: 1 }}>
                                    <Box component="span" sx={{ fontSize: "1.5rem" }}>⋮</Box>
                                </Button>
                            </Box>

                            <Typography
                                sx={{ fontWeight: 500, fontSize: "1rem", color: "#64748B", mb: 3, lineHeight: 1.6 }}
                            >
                                {project.description}
                            </Typography>

                            <Stack direction="row" spacing={1.5} flexWrap="wrap" mb={4}>
                                {project.tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    sx={{
                                    px: 2,
                                    fontWeight: 600,
                                    fontSize: "0.85rem",
                                    borderRadius: "12px",
                                    backgroundColor: "#F8FAFF",
                                    color: "#3B82F6",
                                    border: "1px solid rgba(59, 130, 246, 0.1)",
                                    }}
                                />
                                ))}
                            </Stack>

                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
                                <Stack direction="row" spacing={4} sx={{ color: "#0B0B31" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Box sx={{ width: 18, height: 18, backgroundColor: "rgba(59, 130, 246, 0.1)", borderRadius: "4px", p: 0.3 }}>
                                            <Box component="img" src="/src/assets/clock.png" sx={{ width: "100%", height: "100%" }} />
                                        </Box>
                                        <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }}>{project.duration}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Box sx={{ width: 18, height: 18, backgroundColor: "rgba(34, 197, 94, 0.1)", borderRadius: "4px", p: 0.3 }}>
                                            <Box component="img" src="/src/assets/dollar.png" sx={{ width: "100%", height: "100%" }} />
                                        </Box>
                                        <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }}>{project.budget}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Box sx={{ width: 18, height: 18, backgroundColor: "rgba(168, 85, 247, 0.1)", borderRadius: "4px", p: 0.3 }}>
                                            <Box component="img" src="/src/assets/talent.png" sx={{ width: "100%", height: "100%" }} />
                                        </Box>
                                        <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }}>{project.applications} Applications</Typography>
                                    </Box>
                                </Stack>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                                    <Typography variant="caption" sx={{ fontWeight: 600, color: "#94A3B8" }}>
                                        Posted {project.posted}
                                    </Typography>

                                    <Button
                                        onClick={() => navigate(`/founder/projects/${project.id}`)}
                                        sx={{
                                            fontWeight: 800,
                                            color: "#3B82F6",
                                            textTransform: "none",
                                            fontSize: "0.95rem",
                                            p: 0,
                                            "&:hover": { backgroundColor: "transparent", color: "#2563EB", textDecoration: "underline" }
                                        }}
                                    >
                                        View Details →
                                    </Button>
                                </Box>
                            </Box>
                        </CardContent>
                        </Card>
                    </motion.div>
                    ))}
                </AnimatePresence>
            </Stack>
        </motion.div>

        <PostNewProjectDialog
          open={openNewProject}
          onClose={() => setOpenNewProject(false)}
          onSubmit={handleNewProjectSubmit}
        />
      </Container>
    </Box>
  );
}