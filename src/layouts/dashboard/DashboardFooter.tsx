import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BehanceIcon from "@mui/icons-material/Brush"; 
import apprelabLogoLight from "../../assets/logos/apprelab_logo_light.png";
import dxhubLogo from "../../assets/logos/dxhub_logo.png";

const DashboardFooter: React.FC = () => {
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
            We're here to support your learning journey. Get in touch anytime
            for assistance, partnership inquiries, or general questions.
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#B0B0B0",
              mb: 3,
            }}
          >
            Email: support@apprelab.com
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

          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Courses", to: "/courses" },
            { label: "Blog", to: "/blog" },
            { label: "Contact", to: "/contact" },
          ].map((item) => (
            <Typography
              key={item.label}
              component={Link}
              to={item.to}
              sx={{
                fontSize: "0.9rem",
                display: "block",
                color: "#B0B0B0",
                textDecoration: "none",
                mb: 1.2,
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              {item.label}
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
            { label: "Design", to: "/courses/design" },
            { label: "Development", to: "/courses/development" },
            { label: "Marketing", to: "/courses/marketing" },
            { label: "Business", to: "/courses/business" },
            { label: "Data Science", to: "/courses/data-science" },
            { label: "Product Management", to: "/courses/product-management" },
            { label: "Cyber Security", to: "/courses/cyber-security" },
          ].map((item) => (
            <Typography
              key={item.label}
              component={Link}
              to={item.to}
              sx={{
                fontSize: "0.9rem",
                display: "block",
                color: "#B0B0B0",
                textDecoration: "none",
                mb: 1.2,
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              {item.label}
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
            Stay updated with our latest courses, events, and exclusive offers.
            Join our learning community today.
          </Typography>

          <TextField
            placeholder="Enter your email"
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

export default DashboardFooter;
