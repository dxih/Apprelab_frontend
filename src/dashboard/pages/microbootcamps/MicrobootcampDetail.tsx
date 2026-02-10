import React from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Chip,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BootcampDetail: React.FC = () => {
  const location = useLocation();
  const bootcamp = location.state?.bootcamp;

  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: { xs: "24px", md: "60px 80px" },
          gap: { xs: "24px", md: "60px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "48%" },
            height: { xs: "220px", md: "300px" },
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <img
            src={bootcamp.image}
            alt={bootcamp.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Right Content */}
        <Box sx={{ width: { xs: "100%", md: "48%" } }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "22px", md: "28px" },
              mb: "12px",
            }}
          >
            {bootcamp.title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "13px", md: "14px" },
              color: "#555",
              mb: 3,
            }}
          >
            {bootcamp.desc}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 2,
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                textDecoration: "line-through",
                color: "#999",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              {bootcamp.oldPrice}
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "18px", md: "20px" },
              }}
            >
              {bootcamp.price}
            </Typography>

            <Chip
              label={bootcamp.discount}
              size="small"
              color="warning"
              sx={{ fontSize: { xs: "10px", md: "12px" } }}
            />
          </Box>

          {/* LEVEL & DURATION */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 4, md: 6 },
              mb: 3,
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography fontSize={12}>Level</Typography>
              <Typography fontWeight={600}>{bootcamp.level}</Typography>
            </Box>
            <Box>
              <Typography fontSize={12}>Duration</Typography>
              <Typography fontWeight={600}>{bootcamp.duration}</Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0B1A4A",
              borderRadius: "10px",
              padding: "10px 24px",
              textTransform: "none",
              fontWeight: 600,
              width: { xs: "100%", md: "auto" },
            }}
          >
            Enroll →
          </Button>
        </Box>
      </Box>

      {/* AGENDA */}
      <Box sx={{ padding: { xs: "24px", md: "0 80px" } }}>
        <Typography fontWeight={700} fontSize={20} mb={1}>
          Bootcamp agenda
        </Typography>

        <Typography fontWeight={700} fontSize={18} mb={2}>
          What you will learn
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {bootcamp.topics.map((item: string) => (
            <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineIcon fontSize="small" />
              <Typography fontSize={14}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* WHO IS IT FOR */}
      <Box sx={{ padding: { xs: "24px", md: "60px 80px 0" } }}>
        <Typography fontWeight={700} fontSize={18} mb={2}>
          Who is it for?
        </Typography>

        {bootcamp.audience.map((item: string) => (
          <Typography key={item} fontSize={14} mb={1}>
            • {item}
          </Typography>
        ))}
      </Box>

      {/* WHAT YOU WILL GET */}
      <Box sx={{ padding: { xs: "24px", md: "40px 80px" } }}>
        <Typography fontWeight={700} fontSize={18} mb={2}>
          What you will get
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {bootcamp.benefits.map((item: string) => (
            <Box key={item} sx={{ display: "flex", gap: 1 }}>
              <EventAvailableIcon fontSize="small" />
              <Typography fontSize={14}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* REVIEWS */}
      <Box sx={{ padding: { xs: "24px", md: "80px" } }}>
        <Typography fontWeight={700} fontSize={20} mb={4}>
          Previous Bootcamp Review and Ratings
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: "20px", md: "40px" },
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <Box
              key={i}
              sx={{
                border: "1px solid #eee",
                padding: "20px",
                borderRadius: "14px",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                <Avatar />
                <Box>
                  <Typography fontWeight={600}>Jenny Miu</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Typography fontSize={12}>5.0</Typography>
                    {[...Array(5)].map((_, idx) => (
                      <StarIcon key={idx} fontSize="small" color="warning" />
                    ))}
                  </Box>
                </Box>
              </Box>

              <Typography fontSize={14} color="#444">
                Teaching style and patterns are extremely good and practical.
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BootcampDetail;
