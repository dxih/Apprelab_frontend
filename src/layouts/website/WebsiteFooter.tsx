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
<<<<<<< HEAD
=======

>>>>>>> main

const WebsiteFooter: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
<<<<<<< HEAD
        backgroundColor: "#020C38", // Keep your custom dark blue
=======
        backgroundColor: "#020C38", 
>>>>>>> main
        color: "common.white",
        px: { xs: 4, sm: 6, md: 10 },
        py: { xs: 8, md: 10 },
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

          <Typography variant="body1" sx={{ mb: 1 }}>
            Call: +234 913 500 4402
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.disabled",
<<<<<<< HEAD
=======

>>>>>>> main
              lineHeight: 1.6,
              mb: 1.5,
              maxWidth: "260px",
            }}
          >
            Apprelab helps you acquire practical tech skills through guided
            bootcamps, project-based learning, and mentorship.
          </Typography>
<<<<<<< HEAD

=======
>>>>>>> main
          <Typography variant="body2" sx={{ color: "text.disabled", mb: 3 }}>
            Email: support@apprelab.com
          </Typography>

          {/* SOCIALS */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {[
              { icon: <FacebookIcon />, href: "https://facebook.com" },
              { icon: <InstagramIcon />, href: "https://instagram.com" },
              { icon: <LinkedInIcon />, href: "https://linkedin.com" },
              { icon: <BehanceIcon />, href: "https://behance.net" },
            ].map((social, index) => (
              <IconButton
                key={index}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "common.white",
                  color: "#0B0B31",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    transform: "translateY(-2px)",
                  },
                  width: 36,
                  height: 36,
                  transition: "all 0.3s ease",
                }}
              >
                {React.cloneElement(social.icon, { sx: { fontSize: 18 } })}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* 2. EXPLORE */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
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
              variant="body2"
              sx={{
                display: "block",
                color: "text.disabled",
                mb: 1.2,
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": { color: "common.white" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* 3. CATEGORY */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
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
              variant="body2"
              sx={{
                display: "block",
                color: "text.disabled",
                mb: 1.2,
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": { color: "common.white" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* 4. SUBSCRIBE */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Subscribe
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.disabled",
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
              backgroundColor: "#273164", // Keep custom input background
              input: { color: "common.white" },
              mb: 2,
              "& fieldset": { border: "none" },
              "& .MuiInputBase-input::placeholder": {
                color: "text.disabled",
                opacity: 0.7,
<<<<<<< HEAD
              },
=======
              }
>>>>>>> main
            }}
          />

          <Button
            variant="contained"
            fullWidth
            color="success"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: (theme) => theme.shadows[6],
              },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>

      {/* FOOTER DIVIDER */}
      <Box
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
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
