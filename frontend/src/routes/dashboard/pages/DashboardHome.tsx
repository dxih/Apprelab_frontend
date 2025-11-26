import { Box, Typography, Card, CardContent, Button } from "@mui/material";

// Optional: replace with actual dashboard illustration
import dashboardIllustration from "../../../assets/images/components/dashboard/illustration.png";

export default function DashboardHome() {
  const stats = [
    { label: "Courses Completed", value: "12" },
    { label: "Active Mentors", value: "5" },
    { label: "Projects", value: "8" },
    { label: "Hours Learned", value: "120h" },
  ];

  const features = [
    { title: "My Stack", description: "View and manage your learning path." },
    { title: "My Mentor", description: "Connect with your mentor and schedule sessions." },
    { title: "Worklabs", description: "Explore projects and hands-on labs." },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F5F7FA", px: { xs: 3, md: 6 }, py: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          ml: "auto",
          mr: "auto",
          gap: 6,
          mb: 10,
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 800, color: "#0B0B31", mb: 2 }}>
            Welcome Back, PΛYYY
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" }, color: "#555", mb: 4 }}>
            Here’s a snapshot of your learning journey and upcoming activities.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0066FF",
              color: "#fff",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: "12px",
              "&:hover": { backgroundColor: "#0051CC" },
            }}
          >
            Explore Courses
          </Button>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={dashboardIllustration}
            alt="Dashboard Illustration"
            sx={{ width: "100%", maxWidth: 450, borderRadius: "16px" }}
          />
        </Box>
      </Box>

      {/* Stats Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          mb: 12,
        }}
      >
        {stats.map((stat, idx) => (
          <Card
            key={idx}
            sx={{
              flex: "1 1 200px",
              minWidth: 180,
              maxWidth: 250,
              borderRadius: "16px",
              p: 4,
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "2rem", fontWeight: 700, color: "#FFD60A", mb: 1 }}>
                {stat.value}
              </Typography>
              <Typography sx={{ fontSize: "1rem", color: "#0B0B31" }}>{stat.label}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Feature Highlights */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          justifyContent: "center",
        }}
      >
        {features.map((feature, idx) => (
          <Card
            key={idx}
            sx={{
              flex: 1,
              borderRadius: "16px",
              p: 5,
              minHeight: 200,
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": { transform: "translateY(-5px)", boxShadow: "0px 12px 28px rgba(0,0,0,0.15)" },
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 2, color: "#0066FF" }}>
                {feature.title}
              </Typography>
              <Typography sx={{ fontSize: "1rem", color: "#555" }}>{feature.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
