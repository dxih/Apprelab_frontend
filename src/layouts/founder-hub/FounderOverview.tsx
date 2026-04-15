import {
  Box,
  Typography,
  Card,
  Stack,
  Button,
  Avatar,
  Divider,
  LinearProgress,
  Grid,
} from "@mui/material";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { activities, statsCards } from "./dashboardData";
import DashboardHeading from "./DashboardHeading";
import { useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export default function FounderOverview() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Welcome Banner */}
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: "24px",
                background: "linear-gradient(135deg, #0B0B31 0%, #3B82F6 100%)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 4,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative Glow */}
              <Box sx={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.1)", blur: "50px" }} />
              
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                    mb: 0.5,
                    letterSpacing: "-0.01em"
                  }}
                >
                  🎉 Welcome to your Founder Hub!
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    opacity: 0.8,
                  }}
                >
                  You're all set. Start posting projects or browse talent to scale your vision.
                </Typography>
              </Box>

              <Button
                onClick={() => setShowBanner(false)}
                sx={{
                  color: "#fff",
                  minWidth: "auto",
                  p: 1,
                  fontSize: "1.2rem",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" }
                }}
              >
                ✕
              </Button>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div variants={fadeInUp}>
            <Box
            sx={{
                mb: 6,
                backgroundColor: "transparent",
            }}
            >
            <DashboardHeading
                title="Dashboard Overview"
                subtitle="Welcome back! Here's what's happening with your projects"
                userName="Toluwalase"
                userRole="Founder"
                walletAmount="$2,450"
            />
            </Box>
        </motion.div>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {statsCards.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.label}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: "28px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.04)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    }
                  }}
                >
                  <Stack spacing={2.5}>
                    <Box
                      sx={{ 
                          width: 56, 
                          height: 56, 
                          borderRadius: "16px", 
                          backgroundColor: "#F8FAFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 1.5,
                      }}
                    >
                        <Box
                        component="img"
                        src={item.icon}
                        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                    </Box>

                    <Box>
                        <Typography
                        sx={{
                            fontWeight: 900,
                            fontSize: "2.2rem",
                            lineHeight: 1,
                            color: "#0B0B31",
                            mb: 0.5,
                        }}
                        >
                        {item.value}
                        </Typography>

                        <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            color: "#64748B",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                        >
                        {item.label}
                        </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: "#3B82F6",
                        backgroundColor: "rgba(59, 130, 246, 0.08)",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "20px",
                        display: "inline-block",
                        width: "fit-content"
                      }}
                    >
                      {item.sub}
                    </Typography>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Section */}
        <Grid container spacing={4}>
          {/* Recent Activity */}
          <Grid item xs={12} lg={8}>
            <motion.div variants={fadeInUp}>
                <Card
                sx={{
                    borderRadius: "28px",
                    p: 4,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.04)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
                >
                {/* Header */}
                <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box>
                        <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: "1.25rem",
                            color: "#0B0B31",
                            mb: 0.5,
                        }}
                        >
                        Recent Activity
                        </Typography>
                        <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: "0.95rem",
                            color: "#64748B",
                        }}
                        >
                        Stay updated on your projects and team
                        </Typography>
                    </Box>
                    <Button
                        sx={{ 
                            textTransform: "none", 
                            fontWeight: 700, 
                            color: "#3B82F6",
                            backgroundColor: "rgba(59, 130, 246, 0.05)",
                            borderRadius: "12px",
                            px: 2,
                            "&:hover": { backgroundColor: "rgba(59, 130, 246, 0.1)" }
                        }}
                    >
                        View all
                    </Button>
                </Box>

                {/* Activity List */}
                <Stack spacing={3}>
                    {activities.map((activity, index) => (
                    <Box key={index}>
                        <Stack direction="row" spacing={2.5} alignItems="center">
                        <Avatar 
                            src={activity.icon} 
                            sx={{ 
                                width: 52, 
                                height: 52, 
                                borderRadius: "16px",
                                border: "1px solid rgba(0,0,0,0.05)"
                            }} 
                        />
                        <Box sx={{ flex: 1 }}>
                            <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "1rem",
                                color: "#0B0B31",
                            }}
                            >
                            {activity.title}
                            </Typography>
                            <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "0.9rem",
                                color: "#64748B",
                                mb: 0.5,
                            }}
                            >
                            {activity.desc}
                            </Typography>
                            <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: "0.8rem",
                                color: "#94A3B8",
                            }}
                            >
                            {activity.time}
                            </Typography>
                        </Box>
                        </Stack>
                        {index !== activities.length - 1 && (
                        <Divider sx={{ my: 3, opacity: 0.5 }} />
                        )}
                    </Box>
                    ))}
                </Stack>
                </Card>
            </motion.div>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={4}>
              <motion.div variants={fadeInUp}>
                <Card
                    sx={{
                    borderRadius: "28px",
                    p: 4,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.04)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                    }}
                >
                    <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: "1.25rem",
                        color: "#0B0B31",
                        mb: 3,
                    }}
                    >
                    Quick Actions
                    </Typography>

                    <Stack spacing={2}>
                    {["Post New Project", "Browse Talent", "View Messages"].map(
                        (item) => (
                        <Button
                            key={item}
                            variant="contained"
                            sx={{
                            backgroundColor: "#0B0B31",
                            color: "#fff",
                            textTransform: "none",
                            borderRadius: "16px",
                            fontWeight: 700,
                            fontSize: "1rem",
                            py: 1.8,
                            boxShadow: "none",
                            transition: "0.3s",
                            "&:hover": {
                                backgroundColor: "#111151",
                                transform: "translateY(-2px)",
                                boxShadow: "0 10px 20px rgba(11, 11, 49, 0.15)",
                            },
                            }}
                        >
                            {item}
                        </Button>
                        ),
                    )}
                    </Stack>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card
                    sx={{
                    p: 4,
                    borderRadius: "28px",
                    background: "linear-gradient(135deg, #3B82F6 0%, #0B0B31 100%)",
                    color: "#fff",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                    position: "relative",
                    overflow: "hidden",
                    }}
                >
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 2.5 }}>Complete Your Profile</Typography>
                        
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                            <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", opacity: 0.9 }}>
                                80% Complete
                            </Typography>
                            <Typography sx={{ fontWeight: 800, fontSize: "0.9rem" }}>
                                Almost there!
                            </Typography>
                        </Stack>

                        <Box sx={{ mb: 4 }}>
                            <LinearProgress
                            variant="determinate"
                            value={80}
                            sx={{
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: "rgba(255,255,255,0.15)",
                                "& .MuiLinearProgress-bar": {
                                backgroundColor: "#FFFFFF",
                                borderRadius: 10,
                                },
                            }}
                            />
                        </Box>

                        <Button
                            sx={{
                            backgroundColor: "rgba(255,255,255,0.15)",
                            color: "#fff",
                            textTransform: "none",
                            fontWeight: 700,
                            borderRadius: "12px",
                            px: 3,
                            py: 1,
                            backdropFilter: "blur(10px)",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" }
                            }}
                        >
                            Finish setup →
                        </Button>
                    </Box>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card
                    sx={{
                    p: 3.5,
                    borderRadius: "28px",
                    border: "1px solid #FFD60A",
                    backgroundColor: "rgba(255, 214, 10, 0.05)",
                    color: "#713F12",
                    }}
                >
                    <Stack spacing={1.5}>
                    <Typography
                        sx={{
                        fontWeight: 900, 
                        fontSize: "1.1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        }}
                    >
                        💡 Pro Tip
                    </Typography>

                    <Typography
                        sx={{
                        fontWeight: 600, 
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        opacity: 0.9,
                        }}
                    >
                        Projects with detailed descriptions receive 3x more quality applications. Take time to be specific!
                    </Typography>
                    </Stack>
                </Card>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}
