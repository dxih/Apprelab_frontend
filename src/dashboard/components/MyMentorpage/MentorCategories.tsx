import React from "react";
import { Box, Typography } from "@mui/material";

import designImg from "../../assets/images/mentors/categories/Design.png";
import webImg from "../../assets/images/mentors/categories/WebDevelopmement.png";
import dataImg from "../../assets/images/mentors/categories/DataAnalysis.png";
import pmImg from "../../assets/images/mentors/categories/ProductManagement.png";

const categories = [
  { title: "Design", count: 56, img: designImg },
  { title: "Web Development", count: 6, img: webImg },
  { title: "Data Analysis", count: 6, img: dataImg },
  { title: "Product Management", count: 13, img: pmImg },
];

const MentorCategories: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1100px",  // slightly smaller to avoid cutoff
        mx: "auto",          // center page
        px: 2,               // smaller padding (fixes right shift)
        py: 10,
        overflow: "hidden",  // prevents cut-off
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 7,
          width: "100%",
        }}
      >
        <Typography sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: 700 }}>
          Choose Mentor Categories
        </Typography>

        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "#0B1A4A",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          See more
        </Typography>
      </Box>

      {/* CARDS */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          height: "100%",
          justifyContent: "center", // NOW perfectly centered
        }}
      >
        {categories.map((c, i) => (
          <Box
            key={i}
            sx={{
              width: { xs: "45%", sm: "30%", md: "22%" }, // tightened width
              background: "#fff",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Box
              component="img"
              src={c.img}
              alt={c.title}
              sx={{
                width: "100%",
                height: 150,
                objectFit: "cover",
              }}
            />
            <Box sx={{ p: 2 }}>
              <Typography sx={{ fontWeight: 600 }}>{c.title}</Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#777", mt: 0.5 }}>
                {c.count} Mentors Available
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MentorCategories;
