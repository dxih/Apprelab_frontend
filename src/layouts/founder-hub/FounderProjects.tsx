import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  InputBase,
  Tabs,
  Tab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DashboardHeading from "./DashboardHeading";
import { useDashboard } from "../../context/DashboardContext";
import PostNewProjectDialog from "./PostNewProjectDialog";
import { useNavigate } from "react-router-dom";

// color mappings
const statusColors: Record<string, { bg: string; color: string }> = {
  Open: { bg: "#DCFCE7", color: "#008236" },
  "In Progress": { bg: "#DBEAFE", color: "#1447E6" },
  Pending: { bg: "#FEF3C7", color: "#B45309" },
  Completed: { bg: "#F3E8FF", color: "#8200DB" },
};

const categoryColors: Record<string, { bg: string; color: string }> = {
  Design: { bg: "#FCE7F3", color: "#C6005C" },
  Development: { bg: "#EDE9FE", color: "#7C3AED" },
  Data: { bg: "#DBEAFE", color: "#1D4ED8" },
};

const chipTypography = {
  fontFamily: "Arial",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: 0,
};

export default function FounderProjects() {
  const { projects, addProject } = useDashboard();

  const [tabValue, setTabValue] = useState(0);
  const [openNewProject, setOpenNewProject] = useState(false);

  const { setProjectsCount } = useDashboard();

  useEffect(() => {
    setProjectsCount(projects.length);
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleNewProjectSubmit = (projectData: any) => {
    addProject(projectData);
  };

  const navigate = useNavigate();

  const tabs = ["All", "Open", "In Progress", "Completed"];

  const filteredProjects =
    tabs[tabValue] === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.status.toLowerCase() === tabs[tabValue].toLowerCase(),
        );

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
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
          mb: 4,
        }}
      >
        <DashboardHeading
          title="Projects & Talent Requests"
          subtitle="Manage your projects and talent requests"
          userName="Toluwalase"
          userRole="Founder"
          walletAmount="$2,450"
        />
      </Box>

      {/* Search ,Tabs, and button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: 256,
            height: 42,
            display: "flex",
            alignItems: "center",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            px: 1,
            opacity: 1,
            transform: "rotate(0deg)",
            gap: 1,
          }}
        >
          <SearchIcon color="action" />
          <InputBase
            placeholder="Search projects..."
            sx={{
              ml: 1,
              flex: 1,
              height: "100%",
            }}
          />
        </Box>

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            px: "4px",
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "divider",
            minHeight: 42,
            opacity: 1,
            gap: "8px",
            backgroundColor: "#EEF2FF",
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {tabs.map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                my: 0.5,
                mx: 0.5,
                borderRadius: "4px",
                textTransform: "none",
                whiteSpace: "nowrap",
                fontFamily: "Arial",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                textAlign: "center",
                px: "16px",
                py: "6px",
                color: tabValue === index ? "#fff !important" : "#4A5565",
                backgroundColor: tabValue === index ? "#010a45" : "transparent",
                "&:hover": {
                  backgroundColor:
                    tabValue === index ? "#010a45" : "rgba(0,0,0,0.04)",
                },
              }}
            />
          ))}
        </Tabs>

        <Button
          sx={{
            width: 199.390625,
            height: 48,
            borderRadius: "10px",
            backgroundColor: "#010A45",
            color: "#fff",
            fontFamily: "Arial",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: 0,
            textAlign: "center",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            gap: 1,
            opacity: 1,
            "&:hover": { backgroundColor: "#010A45" },
          }}
          onClick={() => setOpenNewProject(true)}
        >
          <Box
            component="img"
            src="/src/assets/plusicon.png"
            alt=""
            sx={{ width: 16, height: 16 }}
          />
          Post New Project
        </Button>

        {/* Dialog */}
        <PostNewProjectDialog
          open={openNewProject}
          onClose={() => setOpenNewProject(false)}
          onSubmit={handleNewProjectSubmit}
        />
      </Box>

      {/* Project Cards */}
      <Stack spacing={2}>
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            variant="outlined"
            sx={{
              width: "full",
              py: 2,
              px: 1,
              gap: "16px",
              borderRadius: "14px",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "#ffffff",
              opacity: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontSize: "20px",
                      lineHeight: "28px",
                      letterSpacing: 0,
                      color: "#101828",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Chip
                    label={project.status}
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      px: 0.5,
                      backgroundColor:
                        statusColors[project.status]?.bg || "#F3F4F6",
                      color: statusColors[project.status]?.color || "#374151",
                      ...chipTypography,
                    }}
                  />

                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor:
                        categoryColors[project.category]?.bg || "#F3F4F6",
                      color:
                        categoryColors[project.category]?.color || "#374151",
                      ...chipTypography,
                    }}
                  />
                </Box>

                <img
                  src="/src/assets/dots.png"
                  alt=""
                  style={{ width: 16, height: 16 }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  color: "#4A5565",
                  mb: 2,
                }}
              >
                {project.description}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{
                      px: "12px",
                      py: "4px",
                      borderRadius: "9999px",
                      backgroundColor: "#F3F4F6",
                      color: "#364153",
                      fontFamily: "Arial",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: 0,
                      textTransform: "none",
                      border: "none",
                      height: 28,
                      minWidth: 101.22,
                    }}
                  />
                ))}
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.6,
                    }}
                  >
                    <img
                      src="/src/assets/clock.png"
                      alt=""
                      style={{ width: 16, height: 16 }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {project.duration}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.6,
                    }}
                  >
                    <img
                      src="/src/assets/dollar.png"
                      alt=""
                      style={{ width: 16, height: 16 }}
                    />

                    <Typography variant="body2" fontWeight="medium">
                      {project.budget} {project.budgetType}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.6,
                    }}
                  >
                    <img src="/src/assets/talent.png" alt="" />
                    <Typography variant="body2" fontWeight="medium">
                      {project.applications} applications
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {project.posted}
                </Typography>

                <Button
                  onClick={() => navigate(`/founder/projects/${project.id}`)}
                  sx={{
                    width: 95,
                    height: 20,
                    minHeight: 20,
                    padding: 0,
                    color: "#010A45",
                    fontFamily: "Arial",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: 0,
                    textAlign: "center",
                    textTransform: "none",
                    borderRadius: "4px",
                    opacity: 1,
                  }}
                >
                  View Details →
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
