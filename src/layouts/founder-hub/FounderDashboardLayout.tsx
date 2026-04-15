import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDashboard } from "../../context/DashboardContext";

const drawerWidth = 260;

const navItems = [
  { label: "Overview", img: "/src/assets/overview.png", path: "/founder/overview" },
  { label: "Projects", img: "/src/assets/projects.png", path: "/founder/projects" },
  { label: "Talent", img: "/src/assets/talent.png", path: "/founder/talent" },
  { label: "Collaboration", img: "/src/assets/collab.png", path: "/founder/collaboration" },
  { label: "Wallet", img: "/src/assets/wallet.png", path: "/founder/wallet" },
  { label: "Settings", img: "/src/assets/settings.png", path: "/founder/settings" },
];

export default function FounderDashboardLayout() {
  const { counts } = useDashboard();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        py: 3,
        px: 2,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Logo + Nav */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 1 }}>
          <Box>
            <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src="/src/assets/flogo.png" 
                alt="Apprelab" 
                style={{ width: 140, height: "auto", objectFit: "contain" }} 
            />
            <Typography sx={{ fontSize: 10, color: "#94A3B8", fontWeight: 600, mt: 0.5, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Founder Hub
            </Typography>
          </Box>
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#64748B" }}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>

        <Box sx={{ mt: 5 }}>
            <Typography sx={{ px: 2, fontSize: 11, fontWeight: 700, color: "#94A3B8", mb: 2, textTransform: "uppercase" }}>
                Main Menu
            </Typography>
            <List sx={{ px: 0 }}>
            {navItems.map((item) => {
                const badgeCount = item.label === "Projects" ? counts.projects : null;

                return (
                <ListItemButton
                    key={item.label}
                    component={NavLink}
                    to={item.path}
                    end={item.path === "/founder/overview"}
                    onClick={() => isMobile && setMobileOpen(false)}
                    sx={{
                    mb: 1,
                    borderRadius: "12px",
                    px: 2,
                    py: 1.2,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    "& .MuiChip-root": { backgroundColor: "#F1F5F9", color: "#64748B" },
                    "&.active": {
                        backgroundColor: "#EEF2FF",
                        "& .MuiListItemText-root": { color: "#4F46E5", fontWeight: 700 },
                        "& .MuiListItemIcon-root img": { filter: "invert(31%) sepia(94%) saturate(2258%) hue-rotate(228deg) brightness(101%) contrast(101%)" }, // Indigo filter
                        "& .MuiChip-root": { backgroundColor: "#4F46E5", color: "#FFFFFF" },
                    },
                    "&:hover:not(.active)": { backgroundColor: "#F8FAFC" },
                    }}
                >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box 
                        component="img" 
                        src={item.img} 
                        alt={item.label} 
                        sx={{ width: 22, height: 22, transition: "filter 0.2s" }} 
                    />
                    </ListItemIcon>
                    <ListItemText 
                        primary={item.label} 
                        sx={{ 
                            "& .MuiTypography-root": { 
                                fontSize: "14px", 
                                fontWeight: 500,
                                color: "#475569"
                            } 
                        }} 
                    />
                    {badgeCount !== null && badgeCount > 0 && (
                    <Chip
                        label={badgeCount}
                        size="small"
                        sx={{ fontSize: 10, fontWeight: 700, height: 18 }}
                    />
                    )}
                </ListItemButton>
                );
            })}
            </List>
        </Box>
      </Box>

      {/* Support Box */}
      <Box sx={{ 
          p: 2.5, 
          borderRadius: "20px", 
          backgroundColor: "#F8FAFC", 
          border: "1px solid #F1F5F9",
          position: "relative",
          overflow: "hidden"
      }}>
        <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography sx={{ fontSize: 14, fontWeight: 800, mb: 0.5, color: "#1E293B" }}>Need Help?</Typography>
            <Typography sx={{ fontSize: 12, color: "#64748B", mb: 2 }}>
            Get expert assistance for your venture
            </Typography>
            <Button
            fullWidth
            variant="contained"
            sx={{ 
                backgroundColor: "#1E293B", 
                textTransform: "none", 
                borderRadius: "10px", 
                fontSize: 13, 
                fontWeight: 600,
                py: 1,
                "&:hover": { backgroundColor: "#0F172A" }
            }}
            >
            Get Support
            </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "#FAFBFF", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Mobile Top AppBar */}
      {isMobile && (
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <img src="/src/assets/flogo.png" alt="Apprelab" style={{ width: 110, height: "auto" }} />
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#1E293B" }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: "1px solid rgba(0,0,0,0.05)",
              boxShadow: isMobile ? "20px 0 60px rgba(0,0,0,0.1)" : "none",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3, md: 4 },
          mt: isMobile ? "64px" : 0,
          minWidth: 0,
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Outlet />
        </motion.div>
      </Box>
    </Box>
  );
}