import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BehanceIcon from "@mui/icons-material/Brush"; // Replace with proper Behance icon if available
import apprelabLogoLight from "../assets/apprelab_logo_light.png";
import dxhubLogo from "../assets/dxhub_logo.png";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#020C38",
        color: "#FFFFFF",
        px: { xs: 4, sm: 6, md: 10 },
        py: { xs: 8, md: 10 },
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* GRID LAYOUT */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "1.5fr 1fr 1fr 1.2fr",
          },
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* === 1. Contact Us === */}
        <Box>
          <Box
            component="img"
            src={apprelabLogoLight}
            alt="Apprelab Logo"
            sx={{
              height: 32,
              mb: 3,
            }}
          />

          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "#FFFFFF",
              mb: 1,
            }}
          >
            Call: +123 400 123
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#B0B0B0",
              lineHeight: 1.6,
              mb: 1.5,
              maxWidth: "240px",
            }}
          >
            Present nulla massa, hendrerit vestibulum gravida in, feugiat auctor
            felis.
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#B0B0B0",
              mb: 3,
            }}
          >
            Email: example@gmail.com
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#0B0B31",
                "&:hover": { backgroundColor: "#E9B300" },
                width: 36,
                height: 36,
              }}
            >
              <FacebookIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#0B0B31",
                "&:hover": { backgroundColor: "#E9B300" },
                width: 36,
                height: 36,
              }}
            >
              <InstagramIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#0B0B31",
                "&:hover": { backgroundColor: "#E9B300" },
                width: 36,
                height: 36,
              }}
            >
              <LinkedInIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#0B0B31",
                "&:hover": { backgroundColor: "#E9B300" },
                width: 36,
                height: 36,
              }}
            >
              <BehanceIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>

        {/* === 2. Explore === */}
        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Explore
          </Typography>

          {["Home", "About", "Course", "Blog", "Contact"].map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "0.9rem",
                color: "#B0B0B0",
                mb: 1.2,
                "&:hover": { color: "#FFFFFF", cursor: "pointer" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* === 3. Category === */}
        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Category
          </Typography>

          {[
            "Design",
            "Development",
            "Marketing",
            "Business",
            "Data Science",
            "Product Management",
            "Cyber Security",
          ].map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "0.9rem",
                color: "#B0B0B0",
                mb: 1.2,
                "&:hover": { color: "#FFFFFF", cursor: "pointer" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* === 4. Subscribe === */}
        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Subscribe
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#B0B0B0",
              lineHeight: 1.6,
              mb: 2,
              maxWidth: "260px",
            }}
          >
            Lorem Ipsum has been the industry standard dummy text ever since the
            1500s.
          </Typography>

          <TextField
            placeholder="Email here"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              backgroundColor: "#273164",
              borderRadius: "6px",
              input: {
                color: "#FFFFFF",
                fontSize: "0.9rem",
              },
              mb: 2,
              "& fieldset": { border: "none" },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              backgroundColor: "#00B67A",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "0.9rem",
              "&:hover": { backgroundColor: "#009E69" },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>

      {/* Divider Line */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          mt: { xs: 6, md: 8 },
          pt: 3,
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          component="img"
          src={dxhubLogo}
          alt="DXHub Logo"
          sx={{
            height: 68,
            opacity: 0.9,
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
