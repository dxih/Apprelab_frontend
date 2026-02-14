import {
  Box,
  Typography,
  Card,
  Stack,
  Button,
  Avatar,
  Divider,
  LinearProgress,
} from "@mui/material";
import { activities, statsCards } from "./dashboardData";
import DashboardHeading from "./DashboardHeading";

export default function FounderOverview() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Welcome Banner */}
      <Box
        sx={{
          opacity: 1,
          p: 2.5,
          background: "linear-gradient(90deg, #010A45 0%, #2B7FFF 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "28px",
            }}
          >
            🎉 Welcome to your Founder Hub!
          </Typography>

          <Typography
            sx={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              opacity: 0.9,
            }}
          >
            You're all set. Start posting projects or browse talent to get
            started.
          </Typography>
        </Box>

        <Typography
          sx={{
            cursor: "pointer",
            fontSize: "16px",
            lineHeight: "24px",
            userSelect: "none",
          }}
        >
          ✕
        </Typography>
      </Box>

      {/* Header */}
      <Box
        sx={{
          opacity: 1,
          pt: "16px",
          px: "32px",
          pb: "1px",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid",
          borderBottomColor: "divider",
          boxSizing: "border-box",
          mt: 2,
          mb: 6,
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

      {/* Stats Cards */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        mb={3}
        sx={{
          flexWrap: "wrap", // lets cards go to next line if screen is small
          justifyContent: "flex-start", // aligns left normally
        }}
      >
        {statsCards.map((item) => (
          <Card
            key={item.label}
            sx={{
              width: 205.5,
              height: 197,
              p: "25px",
              flex: 0.5,
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack spacing="9px">
              <Box
                component="img"
                src={item.icon}
                sx={{ width: 48, height: 48 }}
              />

              {/* <Typography
                sx={{
                  fontFamily: "Arial",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#101828",
                }}
              >
                {item.value}
              </Typography> */}
              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontWeight: 700, // Bold
                  fontStyle: "normal",
                  fontSize: "30px",
                  lineHeight: "36px",
                  letterSpacing: 0,
                  color: "#101828",
                }}
              >
                {item.value}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  color: "#4A5565",
                  px: "4px",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
              >
                {item.label}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: 0,
                  color: "#6A7282",
                  px: "4px",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
              >
                {item.sub}
              </Typography>
            </Stack>
          </Card>
        ))}
      </Stack>

      {/* Bottom Section */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        {/* Recent Activity */}
        <Card
          sx={{
            borderRadius: "14px",
            px: 3,
            py: 3,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxSizing: "border-box",
            flex: 2,
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontFamily: "Arial",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#101828",
              }}
            >
              Recent Activity
            </Typography>
            <Typography
              sx={{
                fontFamily: "Arial",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#101828",
              }}
            >
              Stay updated on your projects and team
            </Typography>
          </Box>

          <Divider sx={{ my: 2, mx: -4 }} />

          {/* Activity List */}
          <Stack spacing={2}>
            {activities.map((activity, index) => (
              <Box key={index}>
                <Stack direction="row" spacing={2}>
                  <Avatar src={activity.icon} sx={{ width: 40, height: 40 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Arial",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#101828",
                      }}
                    >
                      {activity.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Arial",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#4A5565",
                      }}
                    >
                      {activity.desc}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Arial",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "16px",
                        color: "#6A7282",
                      }}
                    >
                      {activity.time}
                    </Typography>
                  </Box>
                </Stack>

                {/* Full width divider */}
                {index !== activities.length - 1 && (
                  <Divider sx={{ my: 1.5, mx: -4 }} />
                )}
              </Box>
            ))}
          </Stack>

          <Divider sx={{ my: 2, mx: -4 }} />
          {/* View all activity */}
          <Box
            sx={{
              backgroundColor: "#F9FAFB",
              width: "100%",
              p: 1,
            }}
          >
            <Button
              sx={{
                fontFamily: "Arial",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#4F39F6",
                backgroundColor: "transparent",
                boxShadow: "none",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              View all activity →
            </Button>
          </Box>
        </Card>

        {/* Right Column */}
        <Stack spacing={2} flex={1}>
          <Card
            //    sx={{ p: 2, borderRadius: "14px" }}
            sx={{
              borderRadius: "14px",
              px: 3,
              py: 3,
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Arial",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: 0,
                textAlign: "center",
                verticalAlign: "middle",
                color: "#101828",
                mb: 1,
              }}
            >
              Quick Actions
            </Typography>

            <Stack spacing={1.5}>
              {["Post New Project", "Browse Talent", "View Messages"].map(
                (item) => (
                  <Button
                    key={item}
                    variant="contained"
                    sx={{
                      backgroundColor: "#010a45",
                      color: "#fff",
                      textTransform: "none",
                      borderRadius: "8px",
                      fontFamily: "Arial",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: 0,
                      textAlign: "center",
                      px: 3,
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "#010a45",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ),
              )}
            </Stack>
          </Card>

          <Card
            sx={{
              p: 2.5,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #615FFF 0%, #010A45 100%)",
              color: "#fff",
            }}
          >
            <Stack spacing={3}>
              <Typography fontWeight={600}>Complete Your Profile</Typography>
              <Typography fontSize={13} sx={{ opacity: 0.9, mb: 3 }}>
                80% complete – almost there!
              </Typography>

              <Box sx={{ my: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  sx={{
                    height: 8,
                    borderRadius: 9999,
                    backgroundColor: "#D1D5DB",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#FFFFFF",
                      borderRadius: 9999,
                    },
                  }}
                />
              </Box>

              <Button
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  textTransform: "none",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  display: "flex",
                  justifyContent: "flex-start", // aligns text to the left
                  textAlign: "left",
                  padding: 0, // optional: remove extra padding if needed
                }}
              >
                Complete profile →
              </Button>
            </Stack>
          </Card>

          {/* <Card
            sx={{
              p: 2.5,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #615FFF 0%, #010A45 100%)",
              color: "#fff",
            }}
          > */}
          <Card
            sx={{
              p: 2.5,
              borderRadius: "14px",
              border: "1px solid #FEE685",
              backgroundColor: "#FFFBEB",
              color: "#7B3306",
            }}
          >
            <Stack spacing={1}>
              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontWeight: 700, 
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                }}
              >
                💡 Pro Tip
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontWeight: 400, 
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  maxWidth: '224px'
                }}
              >
                Projects with detailed descriptions receive 3x more quality applications. Take time to be specific!
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
}
