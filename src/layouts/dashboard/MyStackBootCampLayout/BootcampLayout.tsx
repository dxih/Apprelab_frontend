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
  Card,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams, useNavigate } from "react-router-dom";
import { PageWrapper } from "../../../dashboard/pages/worklab/WorkLabCard";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT YOUR DATA ARRAY - Using your specific paths
import { ongoingBootcamps } from "../../../dashboard/Data/MyStackBootcamp.data";
import ResourcesTab from "../../../dashboard/pages/mystack/MyStackResources";
import AssessmentsTab from "../../../dashboard/pages/mystack/MyStackAssetsment";
import OverviewTab from "../../../dashboard/pages/mystack/MyStackOverView";
import DiscussionsTab from "../../../dashboard/pages/mystack/MyStackDiscussion";

const BootcampLayout = () => {
  const { id, tab } = useParams<{ id: string; tab: string }>();
  const navigate = useNavigate();

  const currentBootcamp = ongoingBootcamps.find((b) => b.id === id);

  const tabMap: Record<string, number> = {
    overview: 0,
    resources: 1,
    assessments: 2,
    discussions: 3,
  };

  const activeTab = tab !== undefined ? tabMap[tab] : 1;
  const showSidebar = activeTab === 1 || activeTab === 2;

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    const paths = ["overview", "resources", "assessments", "discussions"];
    navigate(`/bootcamp/${id}/${paths[newValue]}`, { replace: true });
  };

  const renderContent = () => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                {(() => {
                    switch (activeTab) {
                        case 0: return <OverviewTab />;
                        case 1: return <ResourcesTab />;
                        case 2: return <AssessmentsTab />;
                        case 3: return <DiscussionsTab />;
                        default: return <ResourcesTab />;
                    }
                })()}
            </motion.div>
        </AnimatePresence>
    );
  };

  return (
    <PageWrapper>
      <Box sx={{ bgcolor: "#F9FAFB", minHeight: "100vh" }}>
        {/* HEADER SECTION */}
        <Box sx={{ pt: 6, borderBottom: "1px solid rgba(0,0,0,0.05)", backgroundColor: "#FFFFFF" }}>
          <Container maxWidth="lg">
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 4 }}
            >
              <IconButton
                onClick={() => navigate("/dashboard/mystack")}
                sx={{ 
                    backgroundColor: "#F1F5F9", 
                    "&:hover": { backgroundColor: "#E2E8F0" },
                    borderRadius: "12px",
                    width: 40,
                    height: 40
                }}
              >
                <ArrowBackIosIcon sx={{ fontSize: "0.9rem", ml: 0.5, color: "#0B0B31" }} />
              </IconButton>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  color: "#0B0B31",
                  letterSpacing: "-0.02em"
                }}
              >
                {currentBootcamp?.title || "Bootcamp Details"}
              </Typography>
            </Stack>

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                mb: -0.1,
                "& .MuiTabs-flexContainer": {
                  gap: 4
                },
                "& .MuiTabs-indicator": {
                  bgcolor: "#3B82F6",
                  height: 3,
                  borderRadius: "3px 3px 0 0"
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#94A3B8",
                  minWidth: "auto",
                  px: 1,
                  pb: 2,
                  transition: "0.3s"
                },
                "& .Mui-selected": {
                  color: "#3B82F6 !important",
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
        <Container maxWidth="lg" sx={{ mt: 6, pb: 10 }}>
          <Grid container spacing={showSidebar ? 5 : 0}>
            {/* LEFT: DYNAMIC CONTENT */}
            <Grid item xs={12} md={showSidebar ? 7.5 : 12}>
              {renderContent()}
            </Grid>

            {/* RIGHT: PERSISTENT SIDEBAR */}
            {showSidebar && (
              <Grid item xs={12} md={4.5}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <Card
                    sx={{
                        p: 4,
                        borderRadius: "32px",
                        border: "1px solid rgba(0,0,0,0.04)",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.02)"
                    }}
                    >
                    <Box sx={{ mb: 4 }}>
                        <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>Your Progress</Typography>
                        <Stack spacing={2}>
                            <Box>
                                <Stack direction="row" justifyContent="space-between" mb={1.5}>
                                    <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#0B0B31" }}>Course Completion</Typography>
                                    <Typography sx={{ fontWeight: 900, color: "#3B82F6", fontSize: "0.9rem" }}>{currentBootcamp?.progress || 0}%</Typography>
                                </Stack>
                                <LinearProgress
                                    variant="determinate"
                                    value={currentBootcamp?.progress || 0}
                                    sx={{
                                        height: 10,
                                        borderRadius: 5,
                                        bgcolor: "#F1F5F9",
                                        "& .MuiLinearProgress-bar": {
                                            borderRadius: 5,
                                            backgroundColor: "#3B82F6"
                                        }
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Box>

                    <Stack spacing={3} sx={{ mb: 4 }}>
                        <Stack direction="row" justifyContent="space-between" sx={{ p: 2, borderRadius: "16px", backgroundColor: "#F8FAFF" }}>
                            <Typography sx={{ fontWeight: 700, color: "#64748B", fontSize: "0.9rem" }}>Attendance</Typography>
                            <Typography sx={{ fontWeight: 900, color: "#0B0B31" }}>75%</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" sx={{ p: 2, borderRadius: "16px", backgroundColor: "#F8FAFF" }}>
                            <Typography sx={{ fontWeight: 700, color: "#64748B", fontSize: "0.9rem" }}>Assessments</Typography>
                            <Typography sx={{ fontWeight: 900, color: "#0B0B31" }}>90%</Typography>
                        </Stack>
                    </Stack>

                    <Box
                        sx={{
                        p: 3,
                        borderRadius: "24px",
                        backgroundColor: "#0B0B31",
                        color: "#FFF",
                        mb: 4,
                        }}
                    >
                        <Typography
                        sx={{
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.6)",
                            textTransform: "uppercase",
                            mb: 1
                        }}
                        >
                        Next Class
                        </Typography>
                        <Typography sx={{ fontWeight: 800, fontSize: "1rem", mb: 3 }}>
                            {currentBootcamp?.nextClass || "No scheduled classes"}
                        </Typography>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => navigate(`/bootcamp/${id}/lobby`)}
                            sx={{
                                backgroundColor: "#FFF",
                                color: "#0B0B31",
                                textTransform: "none",
                                borderRadius: "14px",
                                py: 1.5,
                                fontWeight: 900,
                                fontSize: "0.9rem",
                                "&:hover": { backgroundColor: "#F1F5F9" },
                            }}
                        >
                        Join Class
                        </Button>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                borderColor: "#E2E8F0",
                                color: "#64748B",
                                textTransform: "none",
                                borderRadius: "14px",
                                py: 1.2,
                                fontWeight: 800,
                                fontSize: "0.85rem",
                                "&:hover": { borderColor: "#CBD5E1", backgroundColor: "#F8FAFF" },
                            }}
                        >
                        Contact Tutor
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                borderColor: "#E2E8F0",
                                color: "#64748B",
                                textTransform: "none",
                                borderRadius: "14px",
                                py: 1.2,
                                fontWeight: 800,
                                fontSize: "0.85rem",
                                "&:hover": { borderColor: "#CBD5E1", backgroundColor: "#F8FAFF" },
                            }}
                        >
                        Ask Question
                        </Button>
                    </Stack>
                    </Card>
                </motion.div>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </PageWrapper>
  );
};

export default BootcampLayout;
