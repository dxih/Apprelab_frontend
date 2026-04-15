import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Dialog,
  DialogContent,
  Button,
  Collapse,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import logo from "../../assets/logos/apprelab_logo_dark.png";
import profileImg from "../../dashboard/assets/images/dashboard/dashboardprofile.png";

const DashboardNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const [exploreAnchorEl, setExploreAnchorEl] = useState<null | HTMLElement>(null);
  const exploreOpen = Boolean(exploreAnchorEl);

  const [logoutOpen, setLogoutOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  const dashboardLinks = [
    { label: "Explore", path: "/explore", dropdown: true },
    { label: "My Stack", path: "/dashboard/mystack" },
    { label: "My Mentor", path: "/dashboard/mymentor" },
    { label: "Worklabs", path: "/dashboard/worklabs" },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMobileExploreOpen(false);
  };

  const handleExploreClick = () => setMobileExploreOpen((prev: boolean) => !prev);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        py: 0.5,
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          width: "95%",
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: 1.5, md: 3 },
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, md: 3 },
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <motion.img
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              src={logo}
              alt="apprelab"
              style={{
                maxHeight: isMobile ? 36 : 42,
              }}
            />
          </Link>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box
            sx={{
              ml: 4,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {dashboardLinks.map(({ label, path, dropdown }) => {
              const isActive = location.pathname === path;
              return dropdown ? (
                <Box
                  key={label}
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    setExploreAnchorEl(e.currentTarget)
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    cursor: "pointer",
                    position: "relative",
                    color: isActive ? "primary.main" : "#0B0B31",
                    fontWeight: 600,
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {label}
                  <KeyboardArrowDownIcon sx={{ fontSize: 18, transition: "transform 0.3s", transform: exploreOpen ? "rotate(180deg)" : "none" }} />
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: -18,
                        left: 0,
                        right: 0,
                        height: "3px",
                        backgroundColor: "#FFD60A",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                </Box>
              ) : (
                <Box
                  key={path}
                  component={Link}
                  to={path}
                  sx={{
                    position: "relative",
                    textDecoration: "none",
                    color: isActive ? "primary.main" : "#0B0B31",
                    fontWeight: 600,
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: -18,
                        left: 0,
                        right: 0,
                        height: "3px",
                        backgroundColor: "#FFD60A",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>
        )}

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, md: 1.5 },
          }}
        >
          <IconButton sx={{ backgroundColor: "rgba(0,0,0,0.03)", "&:hover": { backgroundColor: "rgba(0,0,0,0.06)" } }}>
            <SearchIcon sx={{ fontSize: 20, color: "#0B0B31" }} />
          </IconButton>

          <IconButton 
            onClick={() => navigate("/dashboard/shoppingcart")}
            sx={{ backgroundColor: "rgba(0,0,0,0.03)", "&:hover": { backgroundColor: "rgba(0,0,0,0.06)" } }}
          >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 20, color: "#0B0B31" }} />
          </IconButton>
          
          <Box sx={{ position: "relative" }}>
            <IconButton sx={{ backgroundColor: "rgba(0,0,0,0.03)", "&:hover": { backgroundColor: "rgba(0,0,0,0.06)" } }}>
              <NotificationsNoneOutlinedIcon sx={{ fontSize: 20, color: "#0B0B31" }} />
            </IconButton>
            <Box
              sx={{
                position: "absolute",
                top: 6,
                right: 6,
                width: 8,
                height: 8,
                backgroundColor: "#EF4444",
                borderRadius: "50%",
                border: "2px solid #fff",
              }}
            />
          </Box>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 1, opacity: 0.5, display: { xs: "none", sm: "block" } }} />

        {/* Profile */}
        <Box
          onClick={handleMenuClick}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
            p: 0.5,
            pr: { xs: 0.5, md: 1.5 },
            borderRadius: "50px",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.04)",
            },
          }}
        >
          <Avatar
            src={profileImg}
            alt="user"
            sx={{
              width: { xs: 32, md: 36 },
              height: { xs: 32, md: 36 },
              border: "2px solid #fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          />

          {!isMobile && (
            <Box sx={{ lineHeight: 1.2 }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#0B0B31" }}>
                PΛYYY
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "#6B7280", fontWeight: 500 }}>
                Pro Member
              </Typography>
            </Box>
          )}
          
          <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#9CA3AF", display: { xs: "none", md: "block" } }} />
        </Box>

        {/* Profile Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          TransitionComponent={Collapse}
          PaperProps={{
            sx: {
              mt: 1.5,
              borderRadius: "16px",
              width: isMobile ? 240 : 200,
              boxShadow: "0px 10px 40px rgba(0,0,0,0.12)",
              border: "1px solid rgba(0,0,0,0.05)",
              p: 1,
            },
          }}
        >
          {isMobile &&
            dashboardLinks.map(({ label, path, dropdown }) => (
              <Box key={label}>
                {dropdown ? (
                  <Box>
                    <MenuItem onClick={handleExploreClick} sx={{ borderRadius: "8px", py: 1.5 }}>
                      <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                        {label}
                      </Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <ExpandMoreIcon sx={{ fontSize: 18, transform: mobileExploreOpen ? "rotate(180deg)" : "none", transition: "0.3s" }} />
                    </MenuItem>
                    <Collapse in={mobileExploreOpen}>
                      <MenuItem
                        component={Link}
                        to="/dashboard/courses"
                        onClick={handleClose}
                        sx={{ pl: 4, fontSize: "13px", borderRadius: "8px" }}
                      >
                        Courses
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        to="/dashboard/microbootcamps"
                        onClick={handleClose}
                        sx={{ pl: 4, fontSize: "13px", borderRadius: "8px" }}
                      >
                        Micro Bootcamps
                      </MenuItem>
                    </Collapse>
                  </Box>
                ) : (
                  <MenuItem component={Link} to={path} onClick={handleClose} sx={{ borderRadius: "8px", py: 1.5, fontSize: "14px", fontWeight: 600 }}>
                    {label}
                  </MenuItem>
                )}
              </Box>
            ))}

          {!isMobile && (
            <>
              <MenuItem
                component={Link}
                to="/dashboard/profile"
                onClick={handleClose}
                sx={{ borderRadius: "8px", py: 1.2, fontSize: "14px" }}
              >
                My Profile
              </MenuItem>
              <MenuItem
                component={Link}
                to="/dashboard/settings"
                onClick={handleClose}
                sx={{ borderRadius: "8px", py: 1.2, fontSize: "14px" }}
              >
                Settings
              </MenuItem>
            </>
          )}

          <Divider sx={{ my: 1 }} />
          <MenuItem
            onClick={() => {
              handleClose();
              setLogoutOpen(true);
            }}
            sx={{ color: "#EF4444", fontWeight: 600, borderRadius: "8px", py: 1.2, fontSize: "14px" }}
          >
            Logout
          </MenuItem>
        </Menu>

        {/* Explore Dropdown Desktop */}
        {!isMobile && (
          <Menu
            anchorEl={exploreAnchorEl}
            open={exploreOpen}
            onClose={() => setExploreAnchorEl(null)}
            TransitionComponent={Collapse}
            PaperProps={{
              sx: {
                mt: 1.5,
                borderRadius: "16px",
                width: 200,
                boxShadow: "0px 10px 40px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.05)",
                p: 1,
              },
            }}
          >
            <MenuItem
              component={Link}
              to="/dashboard/courses"
              onClick={() => setExploreAnchorEl(null)}
              sx={{ borderRadius: "8px", py: 1.2, fontSize: "14px" }}
            >
              Courses
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/microbootcamps"
              onClick={() => setExploreAnchorEl(null)}
              sx={{ borderRadius: "8px", py: 1.2, fontSize: "14px" }}
            >
              Micro Bootcamps
            </MenuItem>
          </Menu>
        )}

        {/* Logout Modal */}
        <Dialog
          open={logoutOpen}
          onClose={() => setLogoutOpen(false)}
          PaperProps={{
            sx: {
              borderRadius: "24px",
              p: 2,
              textAlign: "center",
              width: "360px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            },
          }}
          BackdropProps={{
            sx: {
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0,0,0,0.2)",
            },
          }}
        >
          <DialogContent>
            <Box sx={{ mb: 3 }}>
                <Avatar sx={{ bgcolor: "rgba(239, 68, 68, 0.1)", color: "#EF4444", mx: "auto", width: 56, height: 56 }}>
                    <NotificationsNoneOutlinedIcon />
                </Avatar>
            </Box>
            <Typography sx={{ fontSize: "1.25rem", fontWeight: 800, mb: 1, color: "#0B0B31" }}>
              Are you sure?
            </Typography>

            <Typography sx={{ fontSize: "0.95rem", color: "#6B7280", mb: 4, lineHeight: 1.6 }}>
              You are about to logout of your account. You'll need to sign in again to access your dashboard.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setLogoutOpen(false)}
                sx={{
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.2,
                  borderColor: "#E5E7EB",
                  color: "#374151",
                  "&:hover": { borderColor: "#D1D5DB", bgcolor: "#F9FAFB" }
                }}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate("/")}
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#EF4444",
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.2,
                  "&:hover": { backgroundColor: "#DC2626" },
                  boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)"
                }}
              >
                Logout
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
