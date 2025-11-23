import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";

// Dummy team images and side image placeholder
import team1 from "../../../assets/images/components/users/user1.png";
import team2 from "../../../assets/images/components/users/user1.png";
import sideIllustration from "../../../assets/images/components/users/user1.png";
import videoPlaceholder from "../../../assets/images/components/users/user1.png";

export default function About() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF", // white background
        py: 8,
        px: 2,
      }}
    >
      {/* === Glow Backgrounds === */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-15%",
          width: 550,
          height: 550,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)", // blue glow
          filter: "blur(130px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          right: "-20%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 75%)", // yellow glow
          filter: "blur(180px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-25%",
          left: "30%",
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 80%)", // blue glow
          filter: "blur(200px)",
          zIndex: 0,
        }}
      />

      {/* === Hero Section === */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", mb: 10 }}>
        <Typography
          sx={{
            fontSize: { xs: "2.3rem", md: "3.3rem" },
            fontWeight: 800,
            color: "#0B0B31", // blackish
            mb: 2,
          }}
        >
          About Apprelab
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 600,
            color: "#0B0B31",
            mb: 3,
          }}
        >
          Empowering people to learn, build, collaborate and grow.
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "#0B0B31",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Apprelab is designed to give creators, professionals, builders and learners the tools they need to grow. Whether you're learning a new skill, showcasing your abilities, connecting with others, or launching your own ideas — we provide the platform to make it possible.
        </Typography>
      </Box>

      {/* === Mission & Vision Cards === */}
      <Grid container spacing={4} sx={{ mb: 10, justifyContent: "center" }}>
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: "16px",
              p: 3,
              height: "100%",
              textAlign: "center",
              color: "#0B0B31",
            }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", mb: 2, color: "#0066FF" }}>
                Mission
              </Typography>
              <Typography sx={{ fontSize: "1rem", color: "#0B0B31" }}>
                To empower learners and creators with the tools, guidance, and community they need to succeed.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: "16px",
              p: 3,
              height: "100%",
              textAlign: "center",
              color: "#0B0B31",
            }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", mb: 2, color: "#FFD60A" }}>
                Vision
              </Typography>
              <Typography sx={{ fontSize: "1rem", color: "#0B0B31" }}>
                To be the leading platform for skill development, mentorship, and innovative collaboration globally.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* === Stats Section === */}
      <Grid container spacing={4} sx={{ mb: 10, justifyContent: "center", textAlign: "center" }}>
        {[
          { label: "Students Trained", value: "5k+", color: "#0066FF" },
          { label: "Mentors", value: "500+", color: "#FFD60A" },
          { label: "Countries", value: "20", color: "#0066FF" },
          { label: "Learning Hours", value: "100k+", color: "#FFD60A" },
        ].map((stat, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Typography sx={{ fontWeight: 700, fontSize: "2rem", color: stat.color }}>{stat.value}</Typography>
            <Typography sx={{ color: "#0B0B31" }}>{stat.label}</Typography>
          </Grid>
        ))}
      </Grid>

      {/* === Our Journey Timeline === */}
      <Box sx={{ mb: 10, textAlign: "center" }}>
        <Typography sx={{ fontWeight: 800, fontSize: "2rem", mb: 6, color: "#0B0B31" }}>Our Journey</Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { year: "2018", event: "Founded Apprelab", color: "#0066FF" },
            { year: "2019", event: "First 1000 learners", color: "#FFD60A" },
            { year: "2020", event: "Launched Mentor Program", color: "#0066FF" },
            { year: "2022", event: "Expanded globally", color: "#FFD60A" },
          ].map((item, idx) => (
            <Grid item xs={12} md={3} key={idx}>
              <Card sx={{ borderRadius: "16px", p: 3, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "1.3rem", mb: 1, color: item.color }}>
                  {item.year}
                </Typography>
                <Typography sx={{ color: "#0B0B31" }}>{item.event}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* === Team Section === */}
      <Box sx={{ mb: 10, textAlign: "center" }}>
        <Typography sx={{ fontWeight: 800, fontSize: "2rem", mb: 6, color: "#0B0B31" }}>Meet the Team</Typography>
        <Grid container spacing={4} justifyContent="center">
          {[team1, team2, team1, team2].map((img, idx) => (
            <Grid item xs={6} md={3} key={idx}>
              <Avatar src={img} sx={{ width: 120, height: 120, mb: 2, mx: "auto" }} />
              <Typography sx={{ fontWeight: 600, color: "#0B0B31" }}>Member {idx + 1}</Typography>
              <Typography sx={{ color: "#555" }}>Role {idx + 1}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* === Split-Screen Layout === */}
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mb: 10 }}>
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={{ fontWeight: 800, fontSize: "2rem", mb: 2, color: "#0B0B31" }}>Build, Learn & Collaborate</Typography>
          <Typography sx={{ fontSize: "1.1rem", color: "#555" }}>
            Apprelab’s platform allows learners, mentors, and teams to interact seamlessly, creating a powerful ecosystem for growth and innovation.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={sideIllustration}
            alt="Illustration"
            sx={{ width: "100%", maxWidth: 400, borderRadius: "16px" }}
          />
        </Grid>
      </Grid>

      {/* === Video Section === */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography sx={{ fontWeight: 800, fontSize: "2rem", mb: 4, color: "#0B0B31" }}>Learn With Us</Typography>
        <Box
          component="img"
          src={videoPlaceholder}
          alt="Video placeholder"
          sx={{ width: { xs: "100%", md: "60%" }, borderRadius: "16px", mx: "auto" }}
        />
      </Box>
    </Box>
  );
}
