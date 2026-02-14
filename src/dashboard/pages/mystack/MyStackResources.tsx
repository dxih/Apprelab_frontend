// src/routes/dashboard/pages/stack/MyStackResources.tsx
import React from "react";
import { Box, Typography, Paper, Divider, Button, Stack } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LinkIcon from "@mui/icons-material/Link";
import { useParams } from "react-router-dom";
import { ongoingBootcamps } from "../../Data/MyStackBootcamp.data";
import type { IResource } from "../../Data/MyStackBootcamp.data";
const ResourceRow = ({ type, label }: { type: string; label: string }) => {
  // Map the type from data to the correct icon
  const getIcon = () => {
    switch (type.toLowerCase()) {
      case "video":
        return PlayCircleOutlineIcon;
      case "slides":
        return DescriptionIcon;
      case "brief":
        return AssignmentIcon;
      default:
        return LinkIcon;
    }
  };

  const Icon = getIcon();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1.8,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Icon sx={{ color: "#444", fontSize: "1.2rem" }} />
        <Typography sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
          {label}
        </Typography>
      </Stack>
      <Button
        variant="outlined"
        size="small"
        sx={{
          textTransform: "none",
          borderRadius: "8px",
          borderColor: "#E0E0E0",
          color: "#333",
          fontSize: "0.7rem",
          px: 2,
          "&:hover": {
            borderColor: "#001B44",
            bgcolor: "rgba(0, 27, 68, 0.04)",
          },
        }}
      >
        Mark as Viewed
      </Button>
    </Box>
  );
};

export default function MyStackResources() {
  const { id } = useParams<{ id: string }>();
  // Find the current bootcamp from your data using the URL ID
  const currentBootcamp = ongoingBootcamps.find((b) => b.id === id);

  // Group resources by "week" property
  const groupedResources = currentBootcamp?.resources?.reduce(
    (acc, resource) => {
      const week = resource.week;
      if (!acc[week]) acc[week] = [];
      acc[week].push(resource);
      return acc;
    },
    {} as Record<string, IResource[]>,
  );

  if (!currentBootcamp) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography color="text.secondary">Bootcamp data not found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 0 }}>
      {groupedResources && Object.keys(groupedResources).length > 0 ? (
        Object.keys(groupedResources).map((weekKey) => {
          const resourcesInWeek = groupedResources[weekKey];
          // Get the topic from the first resource of that week
          const topicName = resourcesInWeek[0]?.topic || "";

          return (
            <Box key={weekKey} sx={{ mb: 4 }}>
              {/* Dynamic Week and Topic Heading */}
              <Typography sx={{ fontWeight: 700, mb: 2, fontSize: "1rem" }}>
                {weekKey}: {topicName}
              </Typography>

              <Paper
                variant="outlined"
                sx={{
                  p: "0 16px",
                  borderRadius: "12px",
                  border: "1px solid #E9E9E9",
                  bgcolor: "#FFFFFF",
                }}
              >
                {resourcesInWeek.map((resource, index) => (
                  <React.Fragment key={index}>
                    <ResourceRow type={resource.type} label={resource.title} />
                    {/* Don't show divider after the last item */}
                    {index < resourcesInWeek.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </Paper>
            </Box>
          );
        })
      ) : (
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            border: "1px dashed #ccc",
            borderRadius: 2,
          }}
        >
          <Typography color="text.secondary">
            No resources have been uploaded for this bootcamp yet.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
