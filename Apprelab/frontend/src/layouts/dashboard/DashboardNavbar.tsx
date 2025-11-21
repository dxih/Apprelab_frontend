import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import logo from "../../assets/images/logos/apprelab_logo_dark.png";
import profileImg from "../../assets/images/components/dashboardprofile.png";

const DashboardNavbar: React.FC = () => {
  const location = useLocation();

  // Profile menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  // Explore dropdown menu
  const [exploreAnchorEl, setExploreAnchorEl] = useState<null | HTMLElement>(null);
  const exploreOpen = Boolean(exploreAnchorEl);

  const dashboardLinks = [
    { label: "Explore", path: "/dashboard", dropdown: true },
    { label: "My Stack", path: "/dashboard/mystack" },
    { label: "My Mentor", path: "/dashboard/mymentor" },
    { label: "Worklabs", path: "/dashboard/worklabs" },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleExploreClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setExploreAnchorEl(event.currentTarget);
  };
  const handleExploreClose = () => setExploreAnchorEl(null);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid #E5E5E5",
        py: 1,
      }}
    >
      <Toolbar
        sx={{
          width: "95%",
          maxWidth: "1400px",
          margin: "0 auto",
          px: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <img src={logo} alt="apprelab" style={{ height: 35 }} />
          </Link>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            ml: 4,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {dashboardLinks.map(({ label, path, dropdown }) => {
            const isActive = location.pathname === path;

            return dropdown ? (
              <Box
                key={label}
                onClick={handleExploreClick}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "pointer",
                  position: "relative",
                  color: "#0B0B31",
                  fontSize: "15px",
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
                }}
              >
                {label}
                <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
              </Box>
            ) : (
              <Box
                key={path}
                component={Link}
                to={path}
                sx={{
                  position: "relative",
                  textDecoration: "none",
                  color: "#0B0B31",
                  fontSize: "15px",
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
                  "&:hover::after": { width: "100%" },
                }}
              >
                {label}
              </Box>
            );
          })}
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <SearchIcon sx={{ fontSize: 23, color: "#0B0B31" }} />
          </IconButton>

          <IconButton>
            <ShoppingCartOutlinedIcon sx={{ fontSize: 23, color: "#0B0B31" }} />
          </IconButton>

          <Box sx={{ position: "relative" }}>
            <IconButton>
              <NotificationsNoneOutlinedIcon
                sx={{ fontSize: 23, color: "#0B0B31" }}
              />
            </IconButton>
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 8,
                height: 8,
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>

        {/* Profile + Name */}
        <Box
          onClick={handleMenuClick}
          sx={{
            ml: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Avatar
            src={profileImg}
            alt="user"
            sx={{ width: 40, height: 40, border: "2px solid #eeeeee" }}
          />
          <Box sx={{ lineHeight: 1 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#0B0B31" }}>
              Welcome, PΛYYY
            </Typography>
            <Typography sx={{ fontSize: "11px", color: "#666" }}>
              Ready to learn & grow?
            </Typography>
          </Box>
        </Box>

        {/* Profile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              borderRadius: "12px",
              width: 180,
              boxShadow: "0px 4px 24px rgba(0,0,0,0.12)",
            },
          }}
        >
          <MenuItem component={Link} to="/dashboard/profile" onClick={handleClose}>
            My Profile
          </MenuItem>

          <MenuItem component={Link} to="/dashboard/settings" onClick={handleClose}>
            Settings
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              console.log("Logout");
            }}
            sx={{ color: "red", fontWeight: 600 }}
          >
            Logout
          </MenuItem>
        </Menu>

        {/* Explore Dropdown */}
        <Menu
          anchorEl={exploreAnchorEl}
          open={exploreOpen}
          onClose={handleExploreClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              borderRadius: "12px",
              width: 200,
              boxShadow: "0px 4px 24px rgba(0,0,0,0.12)",
            },
          }}
        >
          <MenuItem
            component={Link}
            to="/dashboard/courses"
            onClick={handleExploreClose}
          >
            Courses
          </MenuItem>

          <MenuItem
            component={Link}
            to="/dashboard/micro-bootcamps"
            onClick={handleExploreClose}
          >
            Micro Bootcamps
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
