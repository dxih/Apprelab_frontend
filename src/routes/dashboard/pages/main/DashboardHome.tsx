import { Box, Typography, Card, Button, Avatar, LinearProgress, Chip } from "@mui/material";
import { 
  Schedule, 
  PlayCircleOutline,
  ArrowForward,
  MenuBook,
  People,
  Science
} from "@mui/icons-material";

import dashboardIllustration from "../../../../assets/images/components/dashboard/illustration.png";

export default function DashboardHome() {
  const stats = [
    { label: "Courses Completed", value: "12", icon: <MenuBook />, change: "+2 this month", color: "#4CAF50" },
    { label: "Active Mentors", value: "5", icon: <People />, change: "2 sessions this week", color: "#2196F3" },
    { label: "Projects", value: "8", icon: <Science />, change: "3 in progress", color: "#FF9800" },
    { label: "Hours Learned", value: "120h", icon: <Schedule />, change: "+15h this week", color: "#9C27B0" },
  ];

  const ongoingCourses = [
    {
      title: "UI/UX Design Bootcamp ",
      progress: 65,
      instructor: "Dr. Sarah Johnson",
      nextLesson: "UX Deep Dive",
      timeLeft: "2h 30m remaining"
    },
    {
      title: "Advanced Content Creation Bootcamp",
      progress: 42,
      instructor: "Prof. Michael Chen",
      nextLesson: "Content Strategy Deep Dive",
      timeLeft: "4h 15m remaining"
    },
    {
      title: "Web Development Bootcamp",
      progress: 88,
      instructor: "Emily Rodriguez",
      nextLesson: "Web Code Splitting & Lazy Loading",
      timeLeft: "45m remaining"
    }
  ];

  const upcomingEvents = [
    { title: "1-on-1 Mentor Session", time: "Today, 3:00 PM", type: "Mentorship" },
    { title: "Project Review: E-commerce App", time: "Tomorrow, 10:00 AM", type: "Review" },
    { title: "Live Workshop: API Design", time: "Friday, 2:00 PM", type: "Workshop" }
  ];

  const achievements = [
    { title: "Fast Learner", description: "Completed 5 courses in a month", icon: "🚀" },
    { title: "Consistent", description: "7-day learning streak", icon: "🔥" },
    { title: "Collaborator", description: "Helped 10 peers", icon: "🤝" }
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#e5eef7b3", pb: 8 }}>

      {/* HERO */}
      <Box sx={{
        background: "linear-gradient(135deg, #404453ff 100%)",
        color: "#fff",
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 8 },
        mb: 6
      }}>
        <Box sx={{
          maxWidth: "1400px",
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6
        }}>
          <Box sx={{ flex: 1 }}>
            <Chip label="🎯 Level 5 Learner" sx={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff", mb: 2 }} />
            <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 800 }}>
              Welcome Back, PΛYYY
            </Typography>
            <Typography sx={{ opacity: 0.9, mb: 4 }}>
              You’re on beast mode 🚀 Keep smashing those goals!
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{
                background: "667eea",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "12px",
                boxShadow: "0px 4px 15px rgba(102, 126, 234, 0.4)",
                "&:hover": {
                  color: "#667eea",
                  background: "#f0f0f0"
                }
              }}>
                Continue Learning
              </Button>
              <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
                Browse Catalog
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box component="img" src={dashboardIllustration} sx={{ maxWidth: 420 }} />
          </Box>
        </Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 3, md: 6 } }}>

        {/* STATS */}
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          mb: 6
        }}>
          {stats.map((stat, i) => (
            <Card key={i} sx={{
              flex: "1 1 250px",
              p: 3,
              borderRadius: "16px",
                boxShadow: "0px 4px 15px rgba(102, 126, 234, 0.4)",
                "&:hover": {
                  background: "#f0f0f0"
                }
            }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ color: stat.color }}>{stat.icon}</Box>
                <Chip label={stat.change} size="small" sx={{ color: stat.color }} />
              </Box>
              <Typography sx={{ fontSize: "2rem", fontWeight: 800 }}>{stat.value}</Typography>
              <Typography>{stat.label}</Typography>
            </Card>
          ))}
        </Box>

        {/* MAIN LAYOUT */}
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4
        }}>

          {/* COURSES */}
          <Box sx={{ flex: "2 1 600px" }}>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 700, mb: 2 }}>
              Continue Learning
            </Typography>

            {ongoingCourses.map((course, i) => (
              <Card key={i} sx={{ p: 3, mb: 3, borderRadius: "16px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography fontWeight={700}>{course.title}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar>{course.instructor.charAt(0)}</Avatar>
                      <Typography>{course.instructor}</Typography>
                    </Box>
                  </Box>
                  <Button variant="contained" startIcon={<PlayCircleOutline />}>
                    Resume
                  </Button>
                </Box>

                <Typography sx={{ mt: 2 }}>Next: {course.nextLesson}</Typography>
                <LinearProgress variant="determinate" value={course.progress} sx={{ my: 1 }} />
                <Typography>⏱ {course.timeLeft}</Typography>
              </Card>
            ))}
          </Box>

          {/* SIDEBAR */}
          <Box sx={{ flex: "1 1 350px" }}>

            {/* EVENTS */}
            <Typography fontWeight={700} mb={2}>Upcoming Events</Typography>
            <Card sx={{ p: 3, mb: 4 }}>
              {upcomingEvents.map((event, i) => (
                <Box key={i} mb={2}>
                  <Chip label={event.type} size="small" />
                  <Typography fontWeight={600}>{event.title}</Typography>
                  <Typography>🕐 {event.time}</Typography>
                </Box>
              ))}
            </Card>

            {/* ACHIEVEMENTS */}
            <Typography fontWeight={700} mb={2}>Recent Achievements</Typography>
            <Card sx={{ p: 3, background: "#FEF3C7" }}>
              {achievements.map((a, i) => (
                <Box key={i} mb={2}>
                  <Typography fontSize="1.5rem">{a.icon} {a.title}</Typography>
                  <Typography>{a.description}</Typography>
                </Box>
              ))}
            </Card>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
