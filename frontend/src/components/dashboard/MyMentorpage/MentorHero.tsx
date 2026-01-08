import React from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Mentor Images
import mentor1 from "../../../assets/images/components/mentors/Mentor1.png";
import mentor2 from "../../../assets/images/components/mentors/mentor2.png";
import mentor3 from "../../../assets/images/components/mentors/mentor3.png";
import mentor4 from "../../../assets/images/components/mentors/mentor4.png";
import mentor5 from "../../../assets/images/components/mentors/mentor5.png";
import mentor6 from "../../../assets/images/components/mentors/mentor6.png";
import mentor7 from "../../../assets/images/components/mentors/mentor7.png";
import mentor8 from "../../../assets/images/components/mentors/mentor8.png";
import mentor9 from "../../../assets/images/components/mentors/mentor9.png";
import mentor10 from "../../../assets/images/components/mentors/mentor10.png";

const mentorImages = [
  mentor1, mentor2, mentor3, mentor4, mentor5,
  mentor6, mentor7, mentor8, mentor9, mentor10,
];

// FIXED RECTANGLE POSITIONS (relative to center)
// 3 rows × 4 columns (you can adjust easily)
const rectPositions = [
  { x: -220, y: -160 }, { x: -70, y: -160 }, { x: 80, y: -160 }, { x: 230, y: -160 },
  { x: -220, y:   0 },  { x: -70, y:   0 },  { x: 80, y:   0 },  { x: 230, y:   0 },
  { x: -70,  y: 160 },  { x: 80,  y: 160 }
];

const MentorHero: React.FC = () => {
  return (
    <Box sx={{ 
      display: "flex",
      background: "linear-gradient(90deg, #1D3CFF 0%, #0B1A4A 100%)",
      justifyContent: "center",
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 4 }
    }}>
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(90deg, #1D3CFF 0%, #0B1A4A 100%)",
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 6 },
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { md: "40vh" },
          maxHeight: { xs: "20vh" }
        }}
      >
        {/* CENTER CONTENT */}
        <Box sx={{ zIndex: 3 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "#fff",
            }}
          >
            Every One Needs A <span style={{ color: "#FFD60A" }}> Mentor</span>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              mb: 4,
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.4,
              color: "#fff",
            }}
          >
            Search amazing individuals around the globe, find a mentor,
            expand your network, and learn from incredible people!
          </Typography>

          <TextField
            placeholder="Search mentor"
            sx={{
              width: { xs: "100%", sm: "400px" },
              backgroundColor: "#fff",
              borderRadius: "8px",
              "& .MuiInputBase-input": { px: 2, py: 1.2 },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#555" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* FIXED RECTANGLE IMAGES */}
        {mentorImages.map((img, i) => {
          const pos = rectPositions[i];

          return (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`mentor-${i}`}
              sx={{
                position: "absolute",
                width: { xs: 70, md: 100 },
                height: { xs: 70, md: 100 },
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #fff",
                filter: "blur(3px) brightness(0.9)", // << added blur + soft dim
                opacity: 0.8,    
                top: `calc(50% + ${pos.y}px)`,
                left: `calc(50% + ${pos.x}px)`,
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default MentorHero;
