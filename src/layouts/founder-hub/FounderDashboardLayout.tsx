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
  Divider,
  Chip,
  Button,
} from "@mui/material";
import { useDashboard } from "../../context/DashboardContext";

const drawerWidth = 260;

const navItems = [
  { label: "Overview", img: "/overview.png", path: "/founder/overview" },
  { label: "Projects", img: "/projects.png", path: "/founder/projects" },
  { label: "Talent", img: "/talent.png", path: "/founder/talent" },
  {
    label: "Collaboration",
    img: "/collab.png",
    path: "/founder/collaboration",
  },
  { label: "Wallet", img: "/wallet.png", path: "/founder/wallet" },
  { label: "Settings", img: "/settings.png", path: "/founder/settings" },
];

export default function FounderDashboardLayout() {
  const { counts } = useDashboard();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #E5E7EB",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            py: 2,
            px: 2,
          },
        }}
      >
        {/*  Logo + Nav */}
        <Box>
          {/* Logo */}
          <Box>
            <img
              src="/flogo.png"
              alt="Apprelab"
              style={{ width: 166, height: 40 }}
            />
            <Typography
              sx={{
                fontSize: 12,
                color: "#6A7282",
              }}
            >
              Founder Hub
            </Typography>
          </Box>

          <Divider sx={{ py: 1 }} />

          <List sx={{ px: 1, pt: 5 }}>
            {navItems.map((item) => {
              const badgeCount =
                item.label === "Projects" ? counts.projects : null;

              return (
                <ListItemButton
                  key={item.label}
                  component={NavLink}
                  to={item.path}
                  end={item.path === "/founder/overview"}
                  sx={{
                    mb: 0.5,
                    borderRadius: "10px",
                    textDecoration: "none",

                    "& .MuiChip-root": {
                      backgroundColor: "#E5E7EB",
                      color: "#364153",
                    },

                    "&.active": {
                      backgroundColor: "#EEF2FF",

                      "& .MuiListItemText-root": {
                        color: "#010A45",
                      },

                     
                      "& .MuiChip-root": {
                        backgroundColor: "#010A45",
                        color: "#FFFFFF",
                      },
                    },

                    "&:hover": {
                      backgroundColor: "#F4F6FF",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.label}
                      sx={{ width: 20, height: 20 }}
                    />
                  </ListItemIcon>

                  <ListItemText
                    primary={item.label}
                    sx={{ fontFamily: "Arial", fontSize: 16, ml: -2 }}
                  />

                  {badgeCount !== null && badgeCount > 0 && (
                    <Chip
                      label={badgeCount}
                      size="small"
                      sx={{
                        fontSize: 12,
                        height: 20,
                        backgroundColor: "#E5E7EB",
                        color: "#364153",
                      }}
                    />
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </Box>

        {/* BOTTOM SECTION: Support Box */}
        <Box
          sx={{
            mt: 2,
            p: 2,
            borderRadius: "12px",
            backgroundColor: "#EEF2FF",
          }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
            Need Help?
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#4B5563", mb: 1.5 }}>
            Chat with our support team
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#010A45",
              textTransform: "none",
              borderRadius: "8px",
              fontSize: 14,
            }}
          >
            Get Support
          </Button>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Nested routes render here */}
        <Outlet />
      </Box>
    </Box>
  );
}
