import {
  Box,
  Typography,
  Chip,
  Stack,
  Button,
  Divider,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useDashboard } from "../../context/DashboardContext";
import DashboardHeading from "./DashboardHeading";

// color mappings
const statusColors: Record<string, { bg: string; color: string }> = {
  open: { bg: "#DCFCE7", color: "#008236" },
  "in progress": { bg: "#DBEAFE", color: "#1447E6" },
  pending: { bg: "#FEF3C7", color: "#B45309" },
  completed: { bg: "#F3E8FF", color: "#8200DB" },
};

const categoryColors: Record<string, { bg: string; color: string }> = {
  Design: { bg: "#FCE7F3", color: "#C6005C" },
  Development: { bg: "#EDE9FE", color: "#7C3AED" },
  Data: { bg: "#DBEAFE", color: "#1D4ED8" },
};

export default function FounderProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useDashboard();

  const project = projects?.find((p: any) => p.id === Number(id));

  if (!project) {
    return (
      <Box p={4}>
        <Typography variant="h6">Project not found</Typography>
      </Box>
    );
  }

  const progress = Math.min((project.applications / 20) * 100, 100);

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
      {/* Header */}
      <Box
        sx={{
          pt: "16px",
          px: "32px",
          pb: "1px",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid",
          borderBottomColor: "divider",
          mt: 2,
          mb: 4,
        }}
      >
        <DashboardHeading
          title="Project Details"
          subtitle="View and manage this project"
          userName="Toluwalase"
          userRole="Founder"
          walletAmount="$2,450"
        />
      </Box>

      {/* Back button */}
      <Button
        onClick={() => navigate(-1)}
        sx={{
          mb: 3,
          textTransform: "none",
          color: "#010A45",
          fontSize: "14px",
        }}
      >
        ← Back to Projects
      </Button>

      {/* Main Card */}
      <Card
        sx={{
          borderRadius: "14px",
          border: "1px solid #E5E7EB",
          backgroundColor: "#FFFFFF",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Title + Chips */}
          <Stack mb={3} alignItems="flex-start" spacing={1}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#101828",
              }}
            >
              {project.title}
            </Typography>

            <Stack direction="row" spacing={1}>
              <Chip
                label={project.status}
                sx={{
                  backgroundColor:
                    statusColors[project.status?.toLowerCase()]?.bg ||
                    "#EEF2FF",
                  color:
                    statusColors[project.status?.toLowerCase()]?.color ||
                    "#010A45",
                  textTransform: "capitalize",
                }}
              />
              <Chip
                label={project.category}
                sx={{
                  backgroundColor:
                    categoryColors[project.category]?.bg || "#F3F4F6",
                  color: categoryColors[project.category]?.color || "#374151",
                  textTransform: "capitalize",
                }}
              />
            </Stack>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            {/* left */}
            <Box flex={2}>     
              {/* Description */}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  mb: 1,
                  color: "#101828",
                }}
              >
                
                Project Description
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#4A5565",
                  mb: 3,
                }}
              >
                
                {project.description}
              </Typography>
              <Divider sx={{ mb: 3, borderColor: "#E5E7EB" }} /> 
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  mb: 1,
                  color: "#101828",
                }}
              >
                
                Required Skills
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                
                {project.tags.map((tag: string) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{
                      backgroundColor: "#F3F4F6",
                      color: "#364153",
                      borderRadius: "9999px",
                      mb: 1,
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* right */}
            <Box
              flex={1.5}
              sx={{
                backgroundColor: "#F9FAFB",
                p: 3,
                borderRadius: "12px",
                border: "2px solid #E5E7EB",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  mb: 2,
                  color: "#101828",
                }}
              >
                Project Info
              </Typography>

              <Stack spacing={2}>
                <Box>
                  <Typography 
                   fontSize="13px" color="#6A7282">
                    Duration
                  </Typography>
                  <Typography fontWeight={500}>{project.duration}</Typography>
                </Box>

                <Box>
                  <Typography fontSize="13px" color="#6A7282">
                    Budget
                  </Typography>
                  <Typography fontWeight={500}>
                    {project.budget} {project.budgetType}
                  </Typography>
                </Box>

                <Box>
                  <Typography fontSize="13px" color="#6A7282">
                    Applications
                  </Typography>
                  <Typography fontWeight={500}>
                    {project.applications} applications
                  </Typography>

                  {/*  progress bar */}
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      height: 8,
                      borderRadius: 9999,
                      backgroundColor: "#E5E7EB",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#010A45",
                        borderRadius: 9999,
                      },
                      mt: 1,
                    }}
                  />
                </Box>

                <Box>
                  <Typography fontSize="13px" color="#6A7282">
                    Posted
                  </Typography>
                  <Typography fontWeight={500}>{project.posted}</Typography>
                </Box>
              </Stack>

              <Divider sx={{ my: 3 }} />

              {/* Action Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#010A45",
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#010A45" },
                }}
              >
                Manage Applications
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
