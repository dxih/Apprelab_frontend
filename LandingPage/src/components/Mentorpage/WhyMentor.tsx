import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

const WhyMentor = () => {
  const cards = [
    {
      icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 40, color: "#E9B300" }} />,
      title: "Earn While You Teach",
      text: "Turn your skills into income by creating courses or hosting mentorship sessions. You’ll also earn bonuses whenever your students get hired — your impact directly fuels your rewards.",
    },
    {
      icon: <SchoolOutlinedIcon sx={{ fontSize: 40, color: "#E9B300" }} />,
      title: "Build Your Professional Reputation",
      text: "Showcase your expertise and grow your visibility as a mentor. Each successful mentee and positive review strengthens your personal brand and credibility in your field.",
    },
    {
      icon: <EmojiObjectsOutlinedIcon sx={{ fontSize: 40, color: "#E9B300" }} />,
      title: "Shape the Next Generation",
      text: "Make a real difference by guiding learners who are eager to grow. Your mentorship helps them gain confidence, build projects, and step into real job opportunities.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #F6F8FF 0%, #FFFFFF 100%)",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Container */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          textAlign: "center",
        }}
      >
        {/* Header */}
        <Typography
          variant="h4"
          sx={{
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "3rem" },
          color: "#0B0B31",
          mb: 2,
          lineHeight: 1.3,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Why mentor on{" "}
          <Box component="span" sx={{ color: "#E9B300" }}>
            Apprelab
          </Box>
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            color: "#252859",
          fontSize: "1.5em",
            fontWeight: 300,
            maxWidth: "650px",
            mx: "auto",
            mb: { xs: 6, md: 10 },
            lineHeight: 1.6,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Share your expertise, build your influence, and earn as you help shape
          the next generation of digital talent.
        </Typography>

        {/* Cards Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: { xs: 4, md: 4 },
          }}
        >
          {cards.map((item, idx) => (
            <Card
              key={idx}
              elevation={3}
              sx={{
                flex: "1 1 0",
                minWidth: 300,
                borderRadius: 4,
                p: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", px: 2 }}>
                {/* Icon */}
                <Box
                  sx={{
                    mb: 3,
                    width: 70,
                    height: 70,
                    mx: "auto",
                    borderRadius: "50%",
                    backgroundColor: "#F4F6FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "#0B0B31",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    color: "#4A5565",
                    fontSize: 15,
                    lineHeight: 1.6,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyMentor;
