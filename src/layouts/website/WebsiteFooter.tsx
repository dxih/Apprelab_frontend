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

import apprelabLogoLight from "../../assets/images/logos/apprelab_logo_light.png";
import dxhubLogo from "../../assets/images/logos/dxhub_logo.png";

const WebsiteFooter: React.FC = () => {
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
      {/* MAIN GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "1.5fr 1fr 1fr 1.2fr",
          },
          alignItems: "start",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* 1. CONTACT SECTION */}
        <Box>
          <Box
            component="img"
            src={apprelabLogoLight}
            alt="Apprelab Logo"
            sx={{ height: 32, mb: 3 }}
          />

          <Typography sx={{ fontSize: "0.95rem", mb: 1 }}>
            Call: +234 913 500 4402
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#B0B0B0",
              lineHeight: 1.6,
              mb: 1.5,
              maxWidth: "260px",
            }}
          >
            Apprelab helps you acquire practical tech skills through guided
            bootcamps, project-based learning, and mentorship.
          </Typography>

          <Typography sx={{ fontSize: "0.9rem", color: "#B0B0B0", mb: 3 }}>
            Email: support@apprelab.com
          </Typography>

          {/* SOCIALS */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
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
              component="a"
              href="https://instagram.com"
              target="_blank"
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
              component="a"
              href="https://linkedin.com"
              target="_blank"
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
              component="a"
              href="https://behance.net"
              target="_blank"
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

        {/* 2. EXPLORE */}
        <Box>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600, mb: 2 }}>
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
                mb: 1.2,
                textDecoration: "none",
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* 3. CATEGORY */}
        <Box>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600, mb: 2 }}>
            Category
          </Typography>

          {[
            { label: "Design", to: "/category/design" },
            { label: "Development", to: "/category/development" },
            { label: "Marketing", to: "/category/marketing" },
            { label: "Business", to: "/category/business" },
            { label: "Data Science", to: "/category/data-science" },
            { label: "Product Management", to: "/category/product-management" },
            { label: "Cyber Security", to: "/category/cyber-security" },
          ].map((item) => (
            <Typography
              key={item.label}
              component={Link}
              to={item.to}
              sx={{
                fontSize: "0.9rem",
                display: "block",
                color: "#B0B0B0",
                mb: 1.2,
                textDecoration: "none",
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* 4. SUBSCRIBE */}
        <Box>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600, mb: 2 }}>
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
            Join our newsletter to receive updates on new courses, tech career
            tips, and special offers.
          </Typography>

          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              backgroundColor: "#273164",
              borderRadius: "6px",
              input: { color: "#FFFFFF", fontSize: "0.9rem" },
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

      {/* FOOTER DIVIDER */}
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
          sx={{ height: 68, opacity: 0.9 }}
        />
      </Box>
    </Box>
  );
};

export default WebsiteFooter;
