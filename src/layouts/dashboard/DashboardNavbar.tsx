import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const [exploreAnchorEl, setExploreAnchorEl] = useState<null | HTMLElement>(null);
  const exploreOpen = Boolean(exploreAnchorEl);

  const [logoutOpen, setLogoutOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  const dashboardLinks = [
    { label: "Explore", path: "/explore", dropdown: true },
    { label: "My Stack", path: "/dashboard/mystack" },
    { label: "My Mentor", path: "/dashboard/mymentor" },
    { label: "Worklabs", path: "/dashboard/worklabs" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMobileExploreOpen(false);
  };

  const handleExploreClick = () => setMobileExploreOpen((prev) => !prev);

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
          px: { xs: 1, md: 3 },
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt="apprelab"
              style={{
                maxHeight: isMobile ? 34 : 38,
                marginRight: isMobile ? -14 : 12,
              }}
            />
          </Link>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box
            sx={{
              ml: 2,
              display: "flex",
              alignItems: "center",
              gap: 3,
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
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
                    color: "#0B0B31",
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
                    "&:hover": { color: "#071A7E" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -6,
                      left: 0,
                      width: isActive ? "100%" : "0%",
                      height: "3px",
                      backgroundColor: "#FFD60A",
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
        )}

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, md: 2 },
          }}
        >
          <IconButton>
            <SearchIcon sx={{ fontSize: 23, color: "#0B0B31" }} />
          </IconButton>

          <IconButton onClick={() => navigate("/dashboard/shoppingcart")}>
            <ShoppingCartOutlinedIcon sx={{ fontSize: 23, color: "#0B0B31" }} />
          </IconButton>
          <Box sx={{ position: "relative" }}>
            <IconButton>
              <NotificationsNoneOutlinedIcon sx={{ fontSize: 23, color: "#0B0B31" }} />
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

        {/* Profile */}
        <Box
          onClick={handleMenuClick}
          sx={{
            ml: { xs: -1, md: 2 },
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, md: 1 },
            cursor: "pointer",
          }}
        >
          <Avatar
            src={profileImg}
            alt="user"
            sx={{
              width: 38,
              height: 38,
              border: "2px solid #eeeeee",
            }}
          />

          {/* MOBILE arrow */}
          {isMobile && (
            <ExpandMoreIcon
              sx={{
                fontSize: 20,
                color: "#0B0B31",
                mt: 0.3,
              }}
            />
          )}

          {/* Desktop text */}
          {!isMobile && (
            <Box sx={{ lineHeight: 1 }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#0B0B31" }}>
                Welcome, PΛYYY
              </Typography>
              <Typography sx={{ fontSize: "11px", color: "#666" }}>
                Ready to learn & grow?
              </Typography>
            </Box>
          )}
        </Box>

        {/* Profile Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              borderRadius: "12px",
              width: isMobile ? 240 : 180,
              boxShadow: "0px 4px 24px rgba(0,0,0,0.12)",
            },
          }}
        >
          {isMobile &&
            dashboardLinks.map(({ label, path, dropdown }) => (
              <Box key={label}>
                {dropdown ? (
                  <Box>
                    <MenuItem onClick={handleExploreClick}>
                      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                        {label}
                      </Typography>
                    </MenuItem>
                    <Collapse in={mobileExploreOpen}>
                      <MenuItem
                        component={Link}
                        to="/dashboard/courses"
                        onClick={handleClose}
                        sx={{ pl: 4 }}
                      >
                        Courses
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        to="/dashboard/microbootcamps"
                        onClick={handleClose}
                        sx={{ pl: 4 }}
                      >
                        Micro Bootcamps
                      </MenuItem>
                    </Collapse>
                  </Box>
                ) : (
                  <MenuItem component={Link} to={path} onClick={handleClose}>
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
              >
                My Profile
              </MenuItem>
              <MenuItem
                component={Link}
                to="/dashboard/settings"
                onClick={handleClose}
              >
                Settings
              </MenuItem>
            </>
          )}

          <MenuItem
            onClick={() => {
              handleClose();
              setLogoutOpen(true);
            }}
            sx={{ color: "red", fontWeight: 600 }}
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
              onClick={() => setExploreAnchorEl(null)}
            >
              Courses
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/microbootcamps"
              onClick={() => setExploreAnchorEl(null)}
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
              borderRadius: "16px",
              p: 2,
              textAlign: "center",
              width: "320px",
            },
          }}
          BackdropProps={{
            sx: {
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          }}
        >
          <DialogContent>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 1 }}>
              Are you sure?
            </Typography>

            <Typography sx={{ fontSize: ".9rem", color: "#555", mb: 3 }}>
              Do you really want to logout?
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setLogoutOpen(false)}
                sx={{
                  width: "110px",
                  borderRadius: "10px",
                  textTransform: "none",
                }}
              >
                No
              </Button>

              <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                  width: "110px",
                  borderRadius: "10px",
                  backgroundColor: "#D32F2F",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#B71C1C" },
                }}
              >
                Yes
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
