import React from "react";
import { Box, Typography, Card, CardMedia, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Images
import uiuxImg from "../../../assets/images/components/microbootcamps/offers/uiuxofferimg.png";
import contentImg from "../../../assets/images/components/microbootcamps/offers/contentofferimg.png";
import webdevImg from "../../../assets/images/components/microbootcamps/offers/webdevofferimg.png";

const bootcamps = [
  {
    img: uiuxImg,
    title: "UI/UX Design Bootcamp",
    desc: "Master human-centered design and build interfaces users love",
    duration: "Cohort based – 8 Weeks",
    level: "Beginners",
  },
  {
    img: contentImg,
    title: "Advanced Content Creation Bootcamp",
    desc: "Create standout content with strategy, storytelling, and style that sells.",
    duration: "Cohort based – 4 Weeks",
    level: "Advanced",
  },
  {
    img: webdevImg,
    title: "Web Development Bootcamp",
    desc: "Build responsive, high-performing websites from scratch — the modern way.",
    duration: "Cohort based – 12 Weeks",
    level: "New!",
  },
];

const data = [...bootcamps, ...bootcamps, ...bootcamps];

const OngoingOffers: React.FC = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1000px",
        mx: "auto",
        px: { xs: 1.2, md: 2 },
        py: 6,
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.6rem", md: "2rem" },
            fontWeight: 700,
          }}
        >
          Ongoing Offers
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashboard/ongoing-bootcamps"); // ✅ use navigate function
            window.scrollTo({ top: 0 }); // scroll to top
          }}
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            color: "#444",
            cursor: "pointer",
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
            mr: { xs: 1.2, md: 0 },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              width: "0%",
              height: "2px",
              backgroundColor: "#FFD60A",
              transition: "width 0.35s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          See All{" "}
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: 500,
              marginBottom: "0.2rem",
            }}
          >
            {">"}
          </span>
        </Typography>
      </Box>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: { xs: 175, sm: 200, md: 300 },
              mx: "auto",
              width: "100%",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #e3e6ed",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "all 0.25s ease",
              cursor: "pointer",
              "&:hover": {
                transform: { xs: "none", md: "translateY(-6px)" },
                boxShadow: {
                  xs: "0 2px 8px rgba(0,0,0,0.05)",
                  md: "0 6px 18px rgba(0,0,0,0.12)",
                },
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  height: { xs: 140, sm: 120, md: 160 },
                  objectFit: "cover",
                }}
              />
              <Chip
                label="● Live"
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  background: "#FF4D4F",
                  color: "#fff",
                  fontSize: "0.6rem",
                  height: 18,
                  borderRadius: "6px",
                }}
              />
            </Box>

            <Box sx={{ p: { xs: 1, md: 2 } }}>
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", md: "1rem" },
                  fontWeight: 600,
                  mb: 0.4,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", md: "0.88rem" },
                  color: "#555",
                  lineHeight: 1.2,
                  mb: 1,
                }}
              >
                {item.desc}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.58rem", md: "0.82rem" },
                  color: "#777",
                  mb: 1,
                }}
              >
                {item.duration}
              </Typography>
              <Chip
                label={item.level}
                sx={{
                  background:
                    item.level === "Advanced"
                      ? "#FFD66B"
                      : item.level === "Beginners"
                      ? "#E9E9E9"
                      : "#E3E6FF",
                  fontSize: { xs: "0.55rem", md: "0.75rem" },
                  borderRadius: "6px",
                  fontWeight: 500,
                  px: 1,
                }}
              />
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default OngoingOffers;
