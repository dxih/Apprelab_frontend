import React from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Your mentor imports here
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

// RESPONSIVE RECTANGLE POSITIONS
const rectPositions = {
  // Mobile: 2 columns
  mobile: [
  { x: -290, y: -160 }, { x: -70, y: -120 }, { x: 80, y: -120 }, { x: 230, y: -120 },
    { x: -290, y: 0 },    { x: -100, y: 10 },    { x: 20, y: 0 },    { x: 130, y: 0 },
    { x: -70, y: 140 },   { x: 80, y: 140 }
  ],
  // Tablet: 3 columns
  tablet: [
    { x: -140, y: -100 }, { x: 0, y: -100 }, { x: 140, y: -100 },
    { x: -140, y: 0 },    { x: 0, y: 0 },    { x: 140, y: 0 },
    { x: -140, y: 100 },  { x: 0, y: 100 },  { x: 140, y: 100 },
    { x: 0, y: 200 }
  ],
  // Desktop: 4 columns
  desktop: [
    { x: -220, y: -160 }, { x: -70, y: -160 }, { x: 80, y: -160 }, { x: 230, y: -160 },
    { x: -220, y: 0 },    { x: -70, y: 0 },    { x: 80, y: 0 },    { x: 230, y: 0 },
    { x: -70, y: 160 },   { x: 80, y: 160 }
  ]
};

const MentorHero: React.FC = () => {
  return (
    <Box sx={{ 
      display: "flex",
      background: "linear-gradient(90deg, #1D3CFF 0%, #0B1A4A 100%)",
      justifyContent: "center",
      py: { xs: 2, sm: 4, md: 1, lg: 1 },
      px: { xs: 2, sm: 3, md: 4, lg: 8 }
    }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          background: "linear-gradient(90deg, #1D3CFF 0%, #0B1A4A 100%)",
          py: { xs: 6, sm: 8, md: 8},
          px: { xs: 2, sm: 3, md: 4},
          borderRadius: { xs: "8px", md: "12px" },
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "500px", sm: "550px", md: "600px", lg: "650px" }
        }}
      >
        {/* CENTER CONTENT */}
        <Box sx={{ 
          zIndex: 3,
          position: "relative",
          maxWidth: "800px",
          px: { xs: 2, sm: 3, md: 4 }
        }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem", lg: "3.5rem" },
              fontWeight: 700,
              mb: { xs: 1.5, sm: 2, md: 2.5 },
              color: "#fff",
              lineHeight: { xs: 1.2, md: 1.3 }
            }}
          >
            Every One Needs A <span style={{ color: "#FFD60A" }}>Mentor</span>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.35rem", lg: "1.6rem" },
              mb: { xs: 3, sm: 3.5, md: 4 },
              maxWidth: { xs: "100%", sm: "500px", md: "600px" },
              mx: "auto",
              lineHeight: { xs: 1.5, md: 1.6 },
              color: "#fff",
              px: { xs: 1, sm: 0 }
            }}
          >
            Search amazing individuals around the globe, find a mentor,
            expand your network, and learn from incredible people!
          </Typography>

          <TextField
            placeholder="Search mentor"
            fullWidth
            sx={{
              maxWidth: { xs: "100%", sm: "450px", md: "500px" },
              backgroundColor: "#fff",
              borderRadius: "8px",
              mx: "auto",
              "& .MuiInputBase-input": { 
                px: { xs: 1.5, sm: 2 }, 
                py: { xs: 1, sm: 1.2 },
                fontSize: { xs: "0.9rem", sm: "1rem" }
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none"
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#555", fontSize: { xs: "1.25rem", sm: "1.5rem" } }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* MOBILE - 2 columns */}
        {mentorImages.map((img, i) => (
          <Box
            key={`mobile-${i}`}
            component="img"
            src={img}
            alt={`mentor-${i}`}
            sx={{
              display: { xs: "block", sm: "none" },
              position: "absolute",
              width: 60,
              height: 60,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #fff",
              filter: "blur(1px) brightness(0.9)",
              opacity: 0.75,    
              top: `calc(50% + ${rectPositions.mobile[i].y}px)`,
              left: `calc(50% + ${rectPositions.mobile[i].x}px)`,
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
        ))}

        {/* TABLET - 3 columns */}
        {mentorImages.map((img, i) => (
          <Box
            key={`tablet-${i}`}
            component="img"
            src={img}
            alt={`mentor-${i}`}
            sx={{
              display: { xs: "none", sm: "block", md: "none" },
              position: "absolute",
              width: 80,
              height: 80,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #fff",
              filter: "blur(1px) brightness(0.9)",
              opacity: 0.8,    
              top: `calc(50% + ${rectPositions.tablet[i].y}px)`,
              left: `calc(50% + ${rectPositions.tablet[i].x}px)`,
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
        ))}

        {/* DESKTOP - 4 columns */}
        {mentorImages.map((img, i) => (
          <Box
            key={`desktop-${i}`}
            component="img"
            src={img}
            alt={`mentor-${i}`}
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              width: { md: 90, lg: 100 },
              height: { md: 90, lg: 100 },
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #fff",
              filter: "blur(1px) brightness(0.9)",
              opacity: 0.8,    
              top: `calc(50% + ${rectPositions.desktop[i].y}px)`,
              left: `calc(50% + ${rectPositions.desktop[i].x}px)`,
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MentorHero;