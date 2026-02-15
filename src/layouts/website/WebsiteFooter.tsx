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

<<<<<<< HEAD
import apprelabLogoLight from "../../assets/images/logos/apprelab_logo_light.png";
import dxhubLogo from "../../assets/images/logos/dxhub_logo.png";
=======
import apprelabLogoLight from "../../assets/logos/apprelab_logo_light.png";
import dxhubLogo from "../../assets/logos/dxhub_logo.png";
>>>>>>> ft/details

const WebsiteFooter: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
<<<<<<< HEAD
        backgroundColor: "#020C38",
        color: "#FFFFFF",
        px: { xs: 4, sm: 6, md: 10 },
        py: { xs: 8, md: 10 },
        fontFamily: "Inter, sans-serif",
=======
        backgroundColor: "#020C38", // Keep your custom dark blue
        color: "common.white",
        px: { xs: 4, sm: 6, md: 10 },
        py: { xs: 8, md: 10 },
>>>>>>> ft/details
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

<<<<<<< HEAD
          <Typography sx={{ fontSize: "0.95rem", mb: 1 }}>
=======
          <Typography variant="body1" sx={{ mb: 1 }}>
>>>>>>> ft/details
            Call: +234 913 500 4402
          </Typography>

          <Typography
<<<<<<< HEAD
            sx={{
              fontSize: "0.9rem",
              color: "#B0B0B0",
=======
            variant="body2"
            sx={{
              color: "text.disabled",
>>>>>>> ft/details
              lineHeight: 1.6,
              mb: 1.5,
              maxWidth: "260px",
            }}
          >
            Apprelab helps you acquire practical tech skills through guided
            bootcamps, project-based learning, and mentorship.
          </Typography>

<<<<<<< HEAD
          <Typography sx={{ fontSize: "0.9rem", color: "#B0B0B0", mb: 3 }}>
=======
          <Typography variant="body2" sx={{ color: "text.disabled", mb: 3 }}>
>>>>>>> ft/details
            Email: support@apprelab.com
          </Typography>

          {/* SOCIALS */}
          <Box sx={{ display: "flex", gap: 1 }}>
<<<<<<< HEAD
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
=======
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
>>>>>>> ft/details
          </Box>
        </Box>

        {/* 2. EXPLORE */}
        <Box>
<<<<<<< HEAD
          <Typography sx={{ fontSize: "1rem", fontWeight: 600, mb: 2 }}>
=======
          <Typography variant="h6" sx={{ mb: 2 }}>
>>>>>>> ft/details
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
<<<<<<< HEAD
              sx={{
                fontSize: "0.9rem",
                display: "block",
                color: "#B0B0B0",
                mb: 1.2,
                textDecoration: "none",
                "&:hover": { color: "#FFFFFF" },
=======
              variant="body2"
              sx={{
                display: "block",
                color: "text.disabled",
                mb: 1.2,
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": { color: "common.white" },
>>>>>>> ft/details
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* 3. CATEGORY */}
        <Box>
<<<<<<< HEAD
          <Typography sx={{ fontSize: "1rem", fontWeight: 600, mb: 2 }}>
=======
          <Typography variant="h6" sx={{ mb: 2 }}>
>>>>>>> ft/details
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
<<<<<<< HEAD
              sx={{
                fontSize: "0.9rem",
                display: "block",
                color: "#B0B0B0",
                mb: 1.2,
                textDecoration: "none",
                "&:hover": { color: "#FFFFFF" },
=======
              variant="body2"
              sx={{
                display: "block",
                color: "text.disabled",
                mb: 1.2,
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": { color: "common.white" },
>>>>>>> ft/details
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* 4. SUBSCRIBE */}
        <Box>
<<<<<<< HEAD
          <Typography sx={{ fontSize: "1rem", fontWeight: 600, mb: 2 }}>
=======
          <Typography variant="h6" sx={{ mb: 2 }}>
>>>>>>> ft/details
            Subscribe
          </Typography>

          <Typography
<<<<<<< HEAD
            sx={{
              fontSize: "0.9rem",
              color: "#B0B0B0",
=======
            variant="body2"
            sx={{
              color: "text.disabled",
>>>>>>> ft/details
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
<<<<<<< HEAD
              backgroundColor: "#273164",
              borderRadius: "6px",
              input: { color: "#FFFFFF", fontSize: "0.9rem" },
              mb: 2,
              "& fieldset": { border: "none" },
=======
              backgroundColor: "#273164", // Keep custom input background
              input: { color: "common.white" },
              mb: 2,
              "& fieldset": { border: "none" },
              "& .MuiInputBase-input::placeholder": {
                color: "text.disabled",
                opacity: 0.7,
              },
>>>>>>> ft/details
            }}
          />

          <Button
            variant="contained"
            fullWidth
<<<<<<< HEAD
            sx={{
              textTransform: "none",
              backgroundColor: "#00B67A",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "0.9rem",
              "&:hover": { backgroundColor: "#009E69" },
=======
            color="success"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: (theme) => theme.shadows[6],
              },
>>>>>>> ft/details
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>

      {/* FOOTER DIVIDER */}
      <Box
        sx={{
<<<<<<< HEAD
          borderTop: "1px solid rgba(255,255,255,0.1)",
=======
          borderTop: "1px solid",
          borderColor: "divider",
>>>>>>> ft/details
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

<<<<<<< HEAD
export default WebsiteFooter;
=======
export default WebsiteFooter;
>>>>>>> ft/details
