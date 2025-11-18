import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logos/apprelab_logo_dark.png";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Learn", path: "/learn" },
    { label: "Mentor", path: "/mentor" },
    { label: "Create", path: "/create" },
    { label: "Hire", path: "/hire" },
  ];

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

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
                  color: "#0B0B31",
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

        {/* Login */}
        <Button
          variant="outlined"
          component={Link}
          to="/login"
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
          Login
        </Button>

        {/* Sign Up */}
        <Button
          variant="contained"
          component={Link}
          to="/signup"
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
          Get Started
        </Button>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={() => toggleDrawer(true)}>
            {isDrawerOpen ? (
              <CloseIcon sx={{ color: "#0B0B31" }} />
            ) : (
              <MenuIcon sx={{ color: "#0B0B31" }} />
            )}
          </IconButton>
        </Box>

        {/* Animated Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#ffffffcc",
              backdropFilter: "blur(16px)",
              width: "80%",
              maxWidth: 320,
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
              boxShadow: "0px 4px 24px rgba(0,0,0,0.15)",
              p: 2,
            },
          }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <List sx={{ mt: 2 }}>
                {navLinks.map(({ label, path }, index) => (
                  <motion.div
                    key={path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ListItemButton
                      component={Link}
                      to={path}
                      onClick={() => toggleDrawer(false)}
                      sx={{
                        borderRadius: "10px",
                        py: 1.2,
                        color:
                          location.pathname === path ? "#071A7E" : "#0B0B31",
                        fontWeight:
                          location.pathname === path ? 600 : 500,
                        "&:hover": {
                          backgroundColor: "#f5f6ff",
                          color: "#071A7E",
                        },
                      }}
                    >
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </motion.div>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              {/* Mobile Auth Buttons */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/login"
                  onClick={() => toggleDrawer(false)}
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
                  Login
                </Button>

                <Button
                  variant="contained"
                  component={Link}
                  to="/signup"
                  onClick={() => toggleDrawer(false)}
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
            </motion.div>
          </AnimatePresence>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
