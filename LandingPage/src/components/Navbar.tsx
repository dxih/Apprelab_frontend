import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

// ✅ Import your logo image
import logo from "../assets/apprelab_logo.png";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
        {/* ✅ Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="apprelab logo" style={{ height: 32 }} />
          </Link>
        </Box>

        {/* ✅ Desktop Menu */}
        <Box
          sx={{
            ml: 4,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
            fontWeight: 500,
          }}
        >
          {/* Learn */}
          <Box
            component={Link}
            to="/learn"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.3,
              cursor: "pointer",
              textDecoration: "none",
              color: "#0B0B31",
              "&:hover": { color: "#071A7E" },
            }}
          >
            Learn <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
          </Box>

          <Box
            component={Link}
            to="/mentor"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#0B0B31",
              "&:hover": { color: "#071A7E" },
            }}
          >
            Mentor
          </Box>

          <Box
            component={Link}
            to="/create"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#0B0B31",
              "&:hover": { color: "#071A7E" },
            }}
          >
            Create
          </Box>

          <Box
            component={Link}
            to="/hire"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#0B0B31",
              "&:hover": { color: "#071A7E" },
            }}
          >
            Hire
          </Box>
        </Box>

        {/* Spacer pushes items to right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* ✅ Search icon */}
        <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchIcon sx={{ fontSize: 22, color: "#0B0B31" }} />
        </IconButton>

        {/* ✅ Sign In */}
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

        {/* ✅ Get started */}
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

        {/* ✅ Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon sx={{ color: "#0B0B31" }} />
          </IconButton>
        </Box>

        {/* ✅ Mobile dropdown */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {[
            { label: "Learn", path: "/learn" },
            { label: "Mentor", path: "/mentor" },
            { label: "Create", path: "/create" },
            { label: "Hire", path: "/hire" },
          ].map((item) => (
            <MenuItem
              key={item.label}
              onClick={handleMenuClose}
              component={Link}
              to={item.path}
              sx={{
                textDecoration: "none",
                color: "#0B0B31",
                "&:hover": { color: "#071A7E" },
              }}
            >
              {item.label}
            </MenuItem>
          ))}

          <MenuItem onClick={handleMenuClose}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "none" }}
              component={Link}
              to="/signin"
            >
              Sign In
            </Button>
          </MenuItem>

          <MenuItem onClick={handleMenuClose}>
            <Button
              variant="contained"
              fullWidth
              sx={{ textTransform: "none" }}
              component={Link}
              to="/get-started"
            >
              Get Started
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
