import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import PaidIcon from "@mui/icons-material/Paid";

const AboutApprelab = () => {
  const pillars = [
    {
      icon: <SchoolIcon sx={{ fontSize: 32, color: "#071A7E" }} />,
      title: "Practical Learning",
      text: "Advance your career and increase earnings as an individual contributor. Build side hustles and generate additional revenue while maintaining your regular role, without being forced into management.",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 32, color: "#071A7E" }} />,
      title: "Hands On Creation",
      text: "Advance your career and increase earnings as an individual contributor. Build side hustles and generate additional revenue while maintaining your regular role, without being forced into management.",
    },
    {
      icon: <PaidIcon sx={{ fontSize: 32, color: "#071A7E" }} />,
      title: "Earning Potentials",
      text: "Advance your career and increase earnings as an individual contributor. Build side hustles and generate additional revenue while maintaining your regular role, without being forced into management.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #F6F8FF 0%, #FFFFFF 100%)",
        py: 10,
      }}
    >
      {/* CONTAINER */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: "#0B0B31",
          }}
        >
          Everything You Need to Know About{" "}
          <Box component="span" sx={{ color: "#E9B300" }}>
            Apprelab
          </Box>
        </Typography>

        {/* Sub */}
        <Typography
          sx={{
            color: "#666",
            mb: 6,
            fontSize: 18,
          }}
        >
          Three core pillars powering Apprelab
        </Typography>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            mb: 6,
          }}
        >
          {pillars.map((item, idx) => (
            <Card
              key={idx}
              elevation={2}
              sx={{
                width: 300,
                borderRadius: 3,
                p: 2,
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1, color: "#0B0B31" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", lineHeight: 1.5 }}
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CTA */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#071A7E",
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "8px",
            px: 4,
            py: 1.2,
            "&:hover": { backgroundColor: "#0F28AA" },
          }}
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default AboutApprelab;
