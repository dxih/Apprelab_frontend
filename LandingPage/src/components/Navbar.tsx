import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/apprelab_logo_dark.png";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { label: "Learn", path: "/learn" },
    { label: "Mentor", path: "/mentor" },
    { label: "Create", path: "/create" },
    { label: "Hire", path: "/hire" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <Toolbar
        sx={{
          width: "95%",
          maxWidth: "1400px",
          margin: "0 auto",
          px: { xs: 2, md: 4 },
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="apprelab logo" style={{ height: 32 }} />
          </Link>
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            ml: 4,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
            fontWeight: 500,
          }}
        >
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Box
                key={path}
                component={Link}
                to={path}
                sx={{
                  position: "relative",
                  textDecoration: "none",
                  color: isActive ? "#0B0B31" : "#0B0B31",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  "&:hover": { color: "#071A7E" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    width: isActive ? "100%" : "0%",
                    height: "3px",
                    backgroundColor: "#FFD60A",
                    borderRadius: "3px",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {label}
              </Box>
            );
          })}
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Search Icon */}
        <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchIcon sx={{ fontSize: 22, color: "#0B0B31" }} />
        </IconButton>

        {/* Sign In */}
        <Button
          variant="outlined"
          component={Link}
          to="/signin"
          sx={{
            display: { xs: "none", md: "flex" },
            textTransform: "none",
            borderRadius: "8px",
            borderColor: "#0B0B31",
            color: "#0B0B31",
            px: 3,
            height: 40,
            fontWeight: 500,
            "&:hover": {
              borderColor: "#071A7E",
              color: "#071A7E",
            },
          }}
        >
          Sign in
        </Button>

        {/* Get Started */}
        <Button
          variant="contained"
          component={Link}
          to="/get-started"
          sx={{
            display: { xs: "none", md: "flex" },
            backgroundColor: "#071A7E",
            textTransform: "none",
            borderRadius: "8px",
            px: 3,
            height: 40,
            fontWeight: 500,
            "&:hover": { backgroundColor: "#0F28AA" },
          }}
        >
          Get started
        </Button>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon sx={{ color: "#0B0B31" }} />
          </IconButton>
        </Box>

        {/* ✅ Themed Mobile Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0px 6px 24px rgba(0,0,0,0.1)",
              mt: 1.5,
              px: 1,
              py: 0.5,
              minWidth: 220,
            },
          }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          {navLinks.map((item) => (
            <MenuItem
              key={item.label}
              onClick={handleMenuClose}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: "8px",
                textDecoration: "none",
                color:
                  location.pathname === item.path ? "#071A7E" : "#0B0B31",
                fontWeight: location.pathname === item.path ? 600 : 500,
                fontSize: "0.95rem",
                px: 2,
                "&:hover": {
                  backgroundColor: "#f5f6ff",
                  color: "#071A7E",
                },
              }}
            >
              {item.label}
            </MenuItem>
          ))}

          <Box sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}>
            <Button
              variant="outlined"
              fullWidth
              component={Link}
              to="/signin"
              sx={{
                textTransform: "none",
                borderColor: "#0B0B31",
                color: "#0B0B31",
                fontWeight: 500,
                "&:hover": {
                  borderColor: "#071A7E",
                  color: "#071A7E",
                },
              }}
            >
              Sign In
            </Button>

            <Button
              variant="contained"
              fullWidth
              component={Link}
              to="/get-started"
              sx={{
                textTransform: "none",
                backgroundColor: "#071A7E",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#0F28AA",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
