// src/layouts/BootcampLayout.tsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Stack,
  Grid,
  LinearProgress,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams, useNavigate } from "react-router-dom";
import { PageWrapper } from "../../../dashboard/pages/worklab/WorkLabCard";
import { useTheme } from "@mui/material/styles";

// IMPORT YOUR DATA ARRAY - Using your specific paths
import { ongoingBootcamps } from "../../../dashboard/Data/MyStackBootcamp.data";
import ResourcesTab from "../../../dashboard/pages/mystack/MyStackResources";
import AssessmentsTab from "../../../dashboard/pages/mystack/MyStackAssetsment";
import OverviewTab from "../../../dashboard/pages/mystack/MyStackOverView";
import DiscussionsTab from "../../../dashboard/pages/mystack/MyStackDiscussion";

const BootcampLayout = () => {
  const { id, tab } = useParams<{ id: string; tab: string }>();
  const navigate = useNavigate();
  const theme = useTheme();

  // 1. FIND DATA BASED ON URL ID
  const currentBootcamp = ongoingBootcamps.find((b) => b.id === id);

  // 2. MAP URL PATHS TO TAB INDEX NUMBERS
  const tabMap: Record<string, number> = {
    overview: 0,
    resources: 1,
    assessments: 2,
    discussions: 3,
  };

  // Get current index from URL (default to Resources/1 if not found)
  const activeTab = tab !== undefined ? tabMap[tab] : 1;

  // LOGIC: Only show sidebar on Resources (1) and Assessments (2)
  const showSidebar = activeTab === 1 || activeTab === 2;

  // 3. TAB CHANGE HANDLER
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    const paths = ["overview", "resources", "assessments", "discussions"];
    // Using { replace: true } helps with the back button issue we fixed earlier
    navigate(`/bootcamp/${id}/${paths[newValue]}`, { replace: true });
  };

  // 4. CONTENT RENDERER
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <OverviewTab />;
      case 1:
        return <ResourcesTab />;
      case 2:
        return <AssessmentsTab />;
      case 3:
        return <DiscussionsTab />;
      default:
        return <ResourcesTab />;
    }
  };

  return (
    <PageWrapper>
      <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
        {/* HEADER SECTION - FIXED ACROSS ALL TABS */}
        <Box sx={{ pt: 4, borderBottom: "1px solid #EEE" }}>
          <Container maxWidth="xl">
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 2 }}
            >
              <IconButton
                onClick={() => navigate("/dashboard/mystack")}
                size="small"
              >
                <ArrowBackIosIcon sx={{ fontSize: "1rem" }} />
              </IconButton>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {currentBootcamp?.title || "Bootcamp Details"}
              </Typography>
            </Stack>

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                width: { xs: "100%", md: "90%" },
                "& .MuiTabs-flexContainer": {
                  justifyContent: "space-between",
                  display: "flex",
                },
                "& .MuiTabs-indicator": {
                  bgcolor: "#D4AF37",
                  height: 3,
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#666",
                  minWidth: "auto",
                  px: 0,
                },
                "& .Mui-selected": {
                  color: "#000 !important",
                  borderBottom: "none",
                },
              }}
            >
              <Tab label="Overview" />
              <Tab label="Resources" />
              <Tab label="Assessments" />
              <Tab label="Discussions" />
            </Tabs>
          </Container>
        </Box>

        {/* MAIN CONTENT AREA */}
        <Container maxWidth="xl" sx={{ mt: 5, pb: 8 }}>
          <Grid container spacing={showSidebar ? 6 : 0}>
            {/* LEFT: DYNAMIC CONTENT - Changes width based on sidebar */}
            <Grid item xs={12} md={showSidebar ? 7 : 12}>
              {renderContent()}
            </Grid>

            {/* RIGHT: PERSISTENT SIDEBAR - Only shows when showSidebar is true */}
            {showSidebar && (
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    bgcolor: "#F3F6FF",
                    p: 4,
                    borderRadius: "20px",
                    textAlign: "center",
                    mt: { xs: 0, md: 5 },
                    pt: { sx: 0, md: 6 },
                  }}
                >
                  <Box sx={{ position: "relative", mb: 4 }}>
                    <LinearProgress
                      variant="determinate"
                      value={currentBootcamp?.progress || 0}
                      sx={{
                        height: 6,
                        borderRadius: 5,
                        bgcolor: "#E0E0E0",
                        mb: 3,
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: -4,
                        left: `${currentBootcamp?.progress || 0}%`,
                        width: 14,
                        height: 14,
                        bgcolor: "white",
                        border: "3px solid #0056FF",
                        borderRadius: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                    <Typography
                      sx={{ color: "#666", fontSize: "0.85rem", mb: 2 }}
                    >
                      Your bootcamp is {currentBootcamp?.progress || 0}% through
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      mb: 3,
                      textDecoration: "underline",
                    }}
                  >
                    Your Progress
                  </Typography>

                  <Stack spacing={2} sx={{ mb: 4 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={{ fontWeight: 600 }}>
                        Attendance
                      </Typography>
                      <Typography sx={{ fontWeight: 700 }}>75%</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={{ fontWeight: 600 }}>
                        Assessments
                      </Typography>
                      <Typography sx={{ fontWeight: 700 }}>90%</Typography>
                    </Box>
                  </Stack>

                  <Box
                    sx={{
                      border: "1px solid #001B44",
                      p: 2,
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        textAlign: "left",
                        fontWeight: 600,
                      }}
                    >
                      Next Class: <br />{" "}
                      {currentBootcamp?.nextClass || "Loading..."}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => navigate(`/bootcamp/${id}/lobby`)}
                      sx={{
                        bgcolor: "#001B44",
                        textTransform: "none",
                        width: "121px",
                        height: "40px",
                        borderRadius: "12px",
                        whiteSpace: "nowrap",
                        fontSize: "0.85rem",
                        "&:hover": { bgcolor: "#001030" },
                      }}
                    >
                      Join Class
                    </Button>
                  </Box>

                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#001B44",
                        textTransform: "none",
                        borderRadius: "12px",
                        width: "121px",
                        height: "40px",
                        whiteSpace: "nowrap",
                        fontSize: "0.8rem",
                        "&:hover": { bgcolor: "#001030" },
                      }}
                    >
                      Contact Tutor
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#001B44",
                        color: "#001B44",
                        textTransform: "none",
                        borderRadius: "12px",
                        width: "121px",
                        height: "40px",
                        whiteSpace: "nowrap",
                        fontSize: "0.8rem",
                        "&:hover": {
                          borderColor: "#001B44",
                          bgcolor: "rgba(0, 27, 68, 0.04)",
                        },
                      }}
                    >
                      Ask a Question
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </PageWrapper>
  );
};

export default BootcampLayout;
