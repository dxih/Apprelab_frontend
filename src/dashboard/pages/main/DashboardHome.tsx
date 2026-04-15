import {
  Box,
  Typography,
  Card,
  Button,
  Avatar,
  LinearProgress,
  Chip,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import {
  Schedule,
  PlayCircleOutline,
  ArrowForward,
  MenuBook,
  People,
  Science,
  LocalFireDepartment,
} from "@mui/icons-material";
import { motion, type Variants } from "framer-motion";

import { ongoingCoursesData } from "../../Data/MyStackCourses.data";
import dashboardIllustration from "../../assets/images/dashboard/illustration.png";

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

export default function DashboardHome() {
  const stats = [
    { label: "Courses Done", value: "12", icon: <MenuBook />, change: "+2", color: "#3B82F6", bg: "rgba(59, 130, 246, 0.05)" },
    { label: "Sessions", value: "5", icon: <People />, change: "2", color: "#A855F7", bg: "rgba(168, 85, 247, 0.05)" },
    { label: "Projects", value: "8", icon: <Science />, change: "3", color: "#10B981", bg: "rgba(16, 185, 129, 0.05)" },
    { label: "Learning", value: "120h", icon: <Schedule />, change: "+15h", color: "#F59E0B", bg: "rgba(245, 158, 11, 0.05)" },
  ];

  const upcomingEvents = [
    { title: "1-on-1 Mentor Session", time: "Today, 3:00 PM", type: "Mentorship", color: "#3B82F6" },
    { title: "Project: E-commerce App", time: "Tomorrow, 10:00 AM", type: "Review", color: "#A855F7" },
  ];

  return (
    <Box sx={{ backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      {/* Premium Hero Section */}
      <Box 
        sx={{ 
          background: "linear-gradient(135deg, #0B0B31 0%, #1C1E53 100%)",
          color: "#FFF",
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 20 },
          px: 3,
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Glow Effects */}
        <Box sx={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(59, 130, 246, 0.15)", filter: "blur(100px)" }} />
        <Box sx={{ position: "absolute", bottom: -50, left: 100, width: 300, height: 300, borderRadius: "50%", background: "rgba(168, 85, 247, 0.15)", filter: "blur(100px)" }} />

        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={7}>
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Stack spacing={3}>
                  <Chip 
                    label="🎯 Level 5 Learner • Top 5%" 
                    sx={{ 
                        width: "fit-content",
                        background: "rgba(255, 255, 255, 0.1)", 
                        backdropFilter: "blur(10px)",
                        color: "#60A5FA",
                        fontWeight: 800,
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        px: 1
                    }} 
                  />
                  <Typography sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                    Welcome back,<br />
                    <span style={{ color: "#60A5FA" }}>PΛYYY</span>
                  </Typography>
                  <Typography sx={{ fontSize: "1.1rem", opacity: 0.7, maxWidth: 500 }}>
                    You’re in beast mode! You’ve learned 15 hours more than last week. Keep smashing those goals!
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                    <Button 
                        variant="contained" 
                        endIcon={<ArrowForward />}
                        sx={{ 
                            backgroundColor: "#FFF", 
                            color: "#0B0B31", 
                            borderRadius: "16px", 
                            px: 4, 
                            py: 1.8, 
                            fontWeight: 900,
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#F1F5F9" }
                        }}
                    >
                        Continue Learning
                    </Button>
                    <Button 
                        variant="outlined" 
                        sx={{ 
                            borderColor: "rgba(255,255,255,0.2)", 
                            color: "#FFF", 
                            borderRadius: "16px", 
                            px: 4, 
                            py: 1.8, 
                            fontWeight: 800,
                            textTransform: "none",
                            "&:hover": { borderColor: "#FFF", backgroundColor: "rgba(255,255,255,0.05)" }
                        }}
                    >
                        Browse Courses
                    </Button>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Box 
                        component="img" 
                        src={dashboardIllustration} 
                        sx={{ 
                            width: "100%", 
                            maxWidth: 450,
                            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" 
                        }} 
                    />
                </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ mt: -10, pb: 10, position: "relative", zIndex: 1 }}>
        {/* Stats Grid */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Grid container spacing={3} mb={6}>
            {stats.map((stat, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ p: 4, borderRadius: "28px", border: "1px solid rgba(0,0,0,0.03)", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                    <Stack spacing={2}>
                      <Box sx={{ width: 48, height: 48, borderRadius: "14px", backgroundColor: stat.bg, display: "flex", alignItems: "center", justifyContent: "center", color: stat.color }}>
                        {stat.icon}
                      </Box>
                      <Box>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography sx={{ fontSize: "2rem", fontWeight: 900, color: "#0B0B31" }}>{stat.value}</Typography>
                            <Typography sx={{ fontSize: "0.85rem", fontWeight: 800, color: stat.color }}>{stat.change}</Typography>
                        </Stack>
                        <Typography sx={{ fontWeight: 600, color: "#64748B", fontSize: "0.9rem" }}>{stat.label}</Typography>
                      </Box>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Grid container spacing={4}>
          {/* Ongoing Courses */}
          <Grid item xs={12} md={8}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Typography sx={{ fontWeight: 900, fontSize: "1.4rem", color: "#0B0B31", mb: 3 }}>
                Ongoing Learning
              </Typography>
              <Stack spacing={3}>
                {ongoingCoursesData.map((course, i) => (
                  <Card 
                    key={i} 
                    sx={{ 
                        p: 3.5, 
                        borderRadius: "28px", 
                        border: "1px solid rgba(0,0,0,0.04)",
                        transition: "0.3s",
                        "&:hover": { transform: "translateY(-4px)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 3, mb: 3 }}>
                      <Stack direction="row" spacing={2.5} alignItems="center">
                        <Avatar sx={{ width: 56, height: 56, borderRadius: "16px", backgroundColor: "#F1F5F9", color: "#0B0B31", fontWeight: 800 }}>
                          {course.instructor?.charAt(0) || "?"}
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0B0B31", mb: 0.5 }}>{course.title}</Typography>
                          <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748B" }}>by {course.instructor || "Unknown Instructor"}</Typography>
                        </Box>
                      </Stack>
                      <Button 
                        variant="contained" 
                        startIcon={<PlayCircleOutline />}
                        sx={{ backgroundColor: "#F1F5F9", color: "#0B0B31", borderRadius: "14px", px: 3, py: 1.2, fontWeight: 800, boxPadding: "none", boxShadow: "none", "&:hover": { backgroundColor: "#E2E8F0" } }}
                      >
                        Resume
                      </Button>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Stack direction="row" justifyContent="space-between" mb={1.5}>
                            <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#0B0B31" }}>
                                Next: <span style={{ color: "#64748B", fontWeight: 500 }}>{course.nextLesson || "Coming soon"}</span>
                            </Typography>
                            <Typography sx={{ fontWeight: 800, color: "#3B82F6", fontSize: "0.9rem" }}>{course.progress || 0}%</Typography>
                        </Stack>
                        <LinearProgress 
                            variant="determinate" 
                            value={course.progress || 0} 
                            sx={{ height: 10, borderRadius: "5px", backgroundColor: "#F1F5F9", "& .MuiLinearProgress-bar": { borderRadius: "5px", backgroundColor: "#3B82F6" } }} 
                        />
                    </Box>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#94A3B8" }}>
                      ⏱ {course.timeLeft || "—"} remaining
                    </Typography>
                  </Card>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <Stack spacing={4}>
                    {/* Events Card */}
                    <motion.div variants={fadeInUp}>
                        <Card sx={{ p: 4, borderRadius: "28px", border: "1px solid rgba(0,0,0,0.04)" }}>
                            <Typography sx={{ fontWeight: 900, fontSize: "1.2rem", color: "#0B0B31", mb: 3 }}>
                                Upcoming Events
                            </Typography>
                            <Stack spacing={3}>
                                {upcomingEvents.map((event, i) => (
                                    <Box key={i}>
                                        <Chip label={event.type} size="small" sx={{ mb: 1.5, fontWeight: 800, backgroundColor: `${event.color}10`, color: event.color, borderRadius: "8px" }} />
                                        <Typography sx={{ fontWeight: 800, color: "#0B0B31", lineHeight: 1.3 }}>{event.title}</Typography>
                                        <Typography sx={{ fontSize: "0.85rem", color: "#94A3B8", mt: 0.5 }}>🕐 {event.time}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                            <Button fullWidth sx={{ mt: 3, fontWeight: 800, textTransform: "none", color: "#3B82F6" }}>See all events</Button>
                        </Card>
                    </motion.div>

                    {/* Achievements Card */}
                    <motion.div variants={fadeInUp}>
                        <Card sx={{ p: 4, borderRadius: "28px", background: "linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)", border: "none" }}>
                            <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                                <LocalFireDepartment sx={{ color: "#FFF", fontSize: "2rem" }} />
                                <Typography sx={{ fontWeight: 900, fontSize: "1.2rem", color: "#FFF" }}>
                                    Streak Master
                                </Typography>
                            </Stack>
                            <Typography sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 600, mb: 3 }}>
                                You’ve learned for 7 days in a row! Keep the fire burning to unlock the "Consistent" badge.
                            </Typography>
                            <Box sx={{ p: 2, borderRadius: "16px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
                                <Typography sx={{ fontSize: "0.8rem", fontWeight: 800, color: "#FFF", textAlign: "center" }}>
                                    120/150 XP TO NEXT LEVEL
                                </Typography>
                            </Box>
                        </Card>
                    </motion.div>
                </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
