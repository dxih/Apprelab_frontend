import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import mentorInviteImage from "../../assets/images/mentor_hero.png";

const MentorHero: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "9vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 4,
        py: 8,
        background: "linear-gradient(to bottom, #eef1ffa3 0%, #FFFFFF 100%)",
      }}
    >
      {/* Headline */}
      <Box sx={{ maxWidth: "900px", mx: "auto", mb: 5 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.3rem", md: "3rem" },
            fontWeight: 700,
            color: "#111151ff",
          }}
        >
          Share your{" "}
          <Box component="span" sx={{ color: "#FFD400" }}>
            Knowledge.
          </Box>{" "}
          Shape the Next <br />
          Generation of{" "}
          <Box component="span" sx={{ color: "#FFD400" }}>
            Digital Talent
          </Box>
        </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "#5C5C77",
              py: { xs: 3, md: 3 },
              px: { xs: 2, md: 4 },
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Become a mentor, create paid courses, and earn every time your students succeed.
          </Typography>


        {/* CTA */}
        <Button
         component={Link}
           to="/signup"
          sx={{
            backgroundColor: "#0B0B31",
            color: "#fff",
            borderRadius: "8px",
            px: 4,
            py: 1.2,
            fontWeight: 600,
            textTransform: "none",
            fontSize: "1rem",
            boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#15173A",
            },
          }}
        >
          Join Waitlist
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "950px",          
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "600px", md: "720px" },
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={mentorInviteImage}
            alt="Mentor and student"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Decorative Glow */}
          <Box
            sx={{
              position: "absolute",
              top: "15%",
              right: "40%",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,212,0,0.35) 0%, rgba(255,212,0,0) 70%)",
              zIndex: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MentorHero;
