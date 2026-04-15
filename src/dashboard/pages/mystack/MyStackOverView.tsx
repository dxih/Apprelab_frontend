import {
  Box,
  Typography,
  Grid,
  Stack,
  Avatar,
  Rating,
  Chip,
  Button,
  Paper,
  Card,
} from "@mui/material";
import { useParams } from "react-router-dom";
import {
  MenuBook as MenuBookIcon,
  People as PeopleIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { motion, type Variants } from "framer-motion";
import { ongoingBootcamps } from "../../Data/MyStackBootcamp.data";

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

const OverviewTab = () => {
  const { id } = useParams<{ id: string }>();
  const bootcamp = ongoingBootcamps.find((b) => b.id === id);

  if (!bootcamp) return null;

  const headerStyle = {
    fontWeight: 900,
    fontSize: "1.25rem",
    color: "#0B0B31",
    mb: 2,
    letterSpacing: "-0.01em"
  };

  const bodyStyle = {
    color: "#64748B",
    lineHeight: 1.7,
    fontSize: "0.95rem",
    fontWeight: 500
  };

  return (
    <Box sx={{ mt: 2, pb: 10 }}>
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <Grid container spacing={6}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Stack spacing={6}>
              {/* 1. Agenda */}
              <motion.div variants={fadeInUp}>
                <Box>
                  <Typography sx={headerStyle}>Bootcamp Agenda</Typography>
                  <Typography sx={bodyStyle}>{bootcamp.agenda}</Typography>
                </Box>
              </motion.div>

              {/* 2. What you will learn */}
              <motion.div variants={fadeInUp}>
                <Box>
                  <Typography sx={headerStyle}>What you will learn</Typography>
                  <Grid container spacing={2}>
                    {bootcamp.learnList.map((text, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Stack direction="row" spacing={1.5} alignItems="flex-start">
                          <CheckCircleIcon sx={{ fontSize: "1.2rem", color: "#10B981", mt: 0.3 }} />
                          <Typography sx={{ ...bodyStyle, fontSize: "0.9rem" }}>{text}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>

              {/* 3. Who is it for */}
              <motion.div variants={fadeInUp}>
                <Box>
                  <Typography sx={headerStyle}>Who is it for?</Typography>
                  <Stack spacing={1.5}>
                    {bootcamp.audience.map((item, i) => (
                        <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                            <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#3B82F6" }} />
                            <Typography sx={bodyStyle}>{item}</Typography>
                        </Stack>
                    ))}
                  </Stack>
                </Box>
              </motion.div>

              {/* 4. Curriculum Perks */}
              <motion.div variants={fadeInUp}>
                <Box>
                  <Typography sx={headerStyle}>What you will get</Typography>
                  <Grid container spacing={3}>
                    {[
                      { text: "Certificate of completion", icon: <WorkspacePremiumIcon />, color: "#F59E0B" },
                      { text: "Access to mentorship", icon: <PeopleIcon />, color: "#3B82F6" },
                      { text: "Project-based learning", icon: <MenuBookIcon />, color: "#10B981" },
                      { text: "Portfolio-ready project", icon: <CheckCircleIcon />, color: "#8B5CF6" },
                    ].map((item, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Paper sx={{ p: 2.5, borderRadius: "20px", border: "1px solid rgba(0,0,0,0.04)", backgroundColor: "#F8FAFF", display: "flex", alignItems: "center", gap: 2, boxShadow: "none" }}>
                          <Box sx={{ display: "flex", color: item.color }}>{item.icon}</Box>
                          <Typography sx={{ fontWeight: 750, fontSize: "0.9rem", color: "#0B0B31" }}>{item.text}</Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Stack>
          </Grid>

          {/* Sidebar Info */}
          <Grid item xs={12} md={4}>
            <Stack spacing={4}>
                {/* Cohort Info */}
                <motion.div variants={fadeInUp}>
                    <Card sx={{ borderRadius: "28px", p: 4, border: "1px solid rgba(0,0,0,0.04)", backgroundColor: "#FFFFFF" }}>
                        <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
                            Next Cohort
                        </Typography>
                        <Typography sx={{ fontWeight: 900, fontSize: "1.3rem", color: "#0B0B31", mb: 3 }}>
                            {bootcamp.nextCohort.date}
                        </Typography>
                        
                        <Stack direction="row" spacing={1.5} alignItems="flex-end" mb={4}>
                            <Box>
                                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#94A3B8", textDecoration: "line-through" }}>{bootcamp.nextCohort.oldPrice}</Typography>
                                <Typography sx={{ fontSize: "1.8rem", fontWeight: 900, color: "#0B0B31" }}>{bootcamp.nextCohort.newPrice}</Typography>
                            </Box>
                            <Chip label="Early Bird" size="small" sx={{ mb: 1, fontWeight: 800, backgroundColor: "#FEF3C7", color: "#D97706", borderRadius: "8px" }} />
                        </Stack>

                        <Button 
                            fullWidth 
                            variant="contained"
                            sx={{ backgroundColor: "#0B0B31", color: "#FFF", borderRadius: "14px", py: 1.8, fontWeight: 900, textTransform: "none", fontSize: "1rem" }}
                        >
                            Reserve your seat
                        </Button>
                    </Card>
                </motion.div>

                {/* Level Info */}
                <motion.div variants={fadeInUp}>
                    <Card sx={{ borderRadius: "28px", p: 4, background: "linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 100%)", border: "none", boxShadow: "none" }}>
                        <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#64748B", mb: 1.5 }}>EXPERIENCE LEVEL</Typography>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#10B981" }} />
                            <Typography sx={{ fontWeight: 900, color: "#0B0B31" }}>{bootcamp.level}</Typography>
                        </Stack>
                    </Card>
                </motion.div>
            </Stack>
          </Grid>
        </Grid>

        {/* 7. Reviews Section */}
        <Box sx={{ mt: 10 }}>
          <motion.div variants={fadeInUp}>
            <Typography sx={{ ...headerStyle, fontSize: "1.5rem", mb: 6 }}>Student Success Stories</Typography>
            <Grid container spacing={3}>
              {bootcamp.reviews.map((review) => (
                <Grid item xs={12} sm={6} key={review.id} sx={{ display: "flex" }}>
                  <Card sx={{ p: 4, borderRadius: "28px", border: "1px solid rgba(0,0,0,0.04)", width: "100%", transition: "0.3s", "&:hover": { transform: "translateY(-4px)" } }}>
                    <Stack spacing={3}>
                        <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar src={review.avatar} sx={{ width: 56, height: 56, borderRadius: "16px", backgroundColor: "#F1F5F9" }} />
                        <Box>
                            <Typography sx={{ fontWeight: 900, fontSize: "1rem", color: "#0B0B31" }}>{review.name}</Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Rating value={review.rating} readOnly size="small" sx={{ color: "#F59E0B" }} />
                                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8" }}>{review.date}</Typography>
                            </Stack>
                        </Box>
                        </Stack>
                        <Typography sx={{ ...bodyStyle, fontSize: "0.9rem", fontStyle: "italic" }}>
                        "{review.comment}"
                        </Typography>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default OverviewTab;
