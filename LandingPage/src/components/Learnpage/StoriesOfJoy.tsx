import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Card,
} from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// ✅ Assets
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import usergroup from "../../assets/usergroup.png";

const testimonials = [
  {
    name: "Amelia Joseph",
    role: "Learner - UI/UX Design",
    text: "Apprelab gave me direction. I wasn’t just learning theory. I understood how to manage real projects, communicate with teams, and deliver results.",
    bg: "#D7D9F8",
    avatar: user1,
  },
  {
    name: "Sandra Chris",
    role: "Learner - Full Stack Development",
    text: "I joined to share my experience, but Apprelab turned it into a community. Watching my students grow and earn while I earn too—it’s a win-win.",
    bg: "#E8F4FF",
    avatar: user2,
  },
  {
    name: "Andrew James",
    role: "Learner - Data Analysis",
    text: "I loved how engaging everything was. I worked on real campaigns, built my portfolio, and even got my first freelance client before finishing the course.",
    bg: "#F2F3FF",
    avatar: user3,
  },
];

const StoriesOfJoy: React.FC = () => {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 1 } }, // ✅ One card on mobile
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F9FAFF",
        py: { xs: 6, md: 9 },
        px: { xs: 2, sm: 6, md: 8 }, // ✅ Smaller padding on mobile
      }}
    >
      {/* 🔹 Giant Slanted "S" in the Background */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-20deg)",
          fontSize: { xs: "800px", sm: "1800px", md: "2000px" },
          fontWeight: 400,
          color: "rgba(81, 76, 108, 0.18)",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        S
      </Typography>

      {/* Foreground content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 8,
            mt: -4,
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {/* Left Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Overlapping user group images */}
            <Box sx={{ position: "relative", width: 70, height: 55 }}>
              <Box
                component="img"
                src={usergroup}
                alt="User 1"
                sx={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  objectFit: "cover",
                  top: 0,
                  left: 0,
                  zIndex: 3,
                  border: "2px solid white",
                }}
              />
              <Box
                component="img"
                src={usergroup}
                alt="User 2"
                sx={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  objectFit: "cover",
                  top: 0,
                  left: 16,
                  zIndex: 2,
                  border: "2px solid white",
                }}
              />
              <Box
                component="img"
                src={usergroup}
                alt="User 3"
                sx={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  objectFit: "cover",
                  top: 0,
                  left: 32,
                  zIndex: 1,
                  border: "2px solid white",
                }}
              />
            </Box>

            {/* Text beside group images */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#0B0B31",
                  lineHeight: 1.2,
                }}
              >
                500K+
              </Typography>
              <Typography
                sx={{
                  color: "#555770",
                  fontSize: "0.9rem",
                  mt: 0.5,
                }}
              >
                Targeted learners by 2027
              </Typography>
            </Box>
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "3rem" },
                color: "#1C1E53",
                pr: { md: "250px" },
              }}
            >
              Stories Of{" "}
              <Box component="span" sx={{ color: "#FFD400" }}>
                Joy
              </Box>
            </Typography>

            {/* Arrows */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                onClick={() => sliderRef.current?.slickPrev()}
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #D0D3E2",
                  "&:hover": { backgroundColor: "#74757cff" },
                }}
              >
                <ArrowBackIosNewIcon sx={{ color: "#0B0B31", fontSize: 16 }} />
              </IconButton>
              <IconButton
                onClick={() => sliderRef.current?.slickNext()}
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #D0D3E2",
                  "&:hover": { backgroundColor: "#74757cff" },
                }}
              >
                <ArrowForwardIosIcon sx={{ color: "#0B0B31", fontSize: 16 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Carousel Section */}
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, i) => (
            <Box key={i} sx={{ px: 1.5 }}>
              <Card
                sx={{
                  backgroundColor: item.bg,
                  borderRadius: "22px",
                  border: "1px solid rgba(0,0,0,0.1)",
                  boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
                  px: 4,
                  py: 3,
                  mr: 3,
                  minHeight: 210,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Quote icon */}
                <FormatQuoteIcon
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 25,
                    color: "rgba(0,0,0,0.3)",
                    fontSize: 32,
                    transform: "rotate(180deg)",
                  }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={item.avatar}
                    sx={{ width: 56, height: 56, border: "2px solid #fff" }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#555770",
                        fontSize: "0.9rem",
                        mt: 0.2,
                      }}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    color: "#0B0B31",
                    fontSize: "0.92rem",
                    mt: 2.5,
                    lineHeight: 1.7,
                    letterSpacing: 0.1,
                  }}
                >
                  {item.text}
                </Typography>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default StoriesOfJoy;
