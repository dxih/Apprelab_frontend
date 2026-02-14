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
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logos/apprelab_logo_dark.png";


const WebsiteNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

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
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
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
            gap: 5,
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
                  color: theme.palette.text.primary,
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                  "&:hover": { 
                    color: theme.palette.primary.main 
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    width: isActive ? "100%" : "0%",
                    height: "3px",
                    backgroundColor: theme.palette.secondary.main,
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
        <IconButton 
          sx={{ 
            display: { xs: "none", md: "flex" },
            color: theme.palette.text.primary,
          }}
        >
          <SearchIcon sx={{ fontSize: 22 }} />
        </IconButton>

        {/* Login */}
        <Button
          variant="outlined"
          component={Link}
          to="/login"
          sx={{
            display: { xs: "none", md: "flex" },
            textTransform: "none",
            borderRadius: theme.shape.borderRadius,
            borderColor: theme.palette.text.primary,
            color: theme.palette.text.primary,
            px: 3,
            height: 40,
            fontWeight: 500,
            "&:hover": {
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              backgroundColor: "rgba(0, 87, 255, 0.04)",
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
            backgroundColor: theme.palette.primary.main,
            textTransform: "none",
            borderRadius: theme.shape.borderRadius,
            px: 3,
            height: 40,
            fontWeight: 500,
            "&:hover": { 
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Get Started
        </Button>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={() => toggleDrawer(true)}>
            {isDrawerOpen ? (
              <CloseIcon sx={{ color: theme.palette.text.primary }} />
            ) : (
              <MenuIcon sx={{ color: theme.palette.text.primary }} />
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
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(16px)",
              width: "80%",
              maxWidth: 320,
              borderTopLeftRadius: theme.shape.borderRadius,
              borderBottomLeftRadius: theme.shape.borderRadius,
              boxShadow: theme.shadows[8],
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
                        color: location.pathname === path 
                          ? theme.palette.primary.main 
                          : theme.palette.text.primary,
                        fontWeight: location.pathname === path ? 600 : 500,
                        "&:hover": {
                          backgroundColor: "rgba(0, 87, 255, 0.08)",
                          color: theme.palette.primary.main,
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
                    borderColor: theme.palette.text.primary,
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
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
                    backgroundColor: theme.palette.primary.main,
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
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

export default WebsiteNavbar;