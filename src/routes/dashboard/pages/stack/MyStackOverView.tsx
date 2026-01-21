import React from "react";
import { Box, Typography, Grid, Stack, Divider, Avatar, Rating, Button, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { PageWrapper } from "../worklab/WorkLabCard";

const OverviewTab = () => {
  return (
    <PageWrapper>
    <Box>
      {/* Bootcamp Agenda */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Bootcamp agenda</Typography>
      <Typography variant="body2" sx={{ color: "#555", mb: 4, lineHeight: 1.6 }}>
        Our 4-week Bootcamp is a hybrid format — combining a 1-hour live class every Monday with self-paced video lessons in the week.
      </Typography>

      {/* What you will learn */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>What you will learn</Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          "HTML, CSS, and JavaScript basics", "Building responsive web pages",
          "How to use AI tools for frontend design", "Deploying your first live project"
        ].map((text, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Stack direction="row" spacing={1} alignItems="center">
              <MenuBookIcon sx={{ fontSize: "1.1rem", color: "#666" }} />
              <Typography variant="body2">{text}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* Who is it for? */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Who is it for?</Typography>
      <Box sx={{ mb: 4, pl: 2 }}>
        <ul style={{ margin: 0, padding: 0, color: "#555", fontSize: "0.875rem" }}>
          <li>Beginners in tech or design</li>
          <li>Anyone looking to switch to web development</li>
          <li>Student and creatives exploring tech</li>
        </ul>
      </Box>

      {/* Level */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Level</Typography>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 4 }}>
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#00E676" }} />
        <Typography variant="body2">Beginner</Typography>
      </Stack>

      {/* What you will get */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>What you will get</Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        {[
          { text: "Certificate of completion", icon: <WorkspacePremiumIcon /> },
          { text: "Access to mentorship and community", icon: <PeopleIcon /> },
          { text: "Project-based learning", icon: <CheckCircleIcon /> },
          { text: "Portfolio-ready project", icon: <CheckCircleIcon /> }
        ].map((item, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Stack direction="row" spacing={1} alignItems="center">
              {React.cloneElement(item.icon as React.ReactElement, )}
              <Typography variant="body2">{item.text}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* Next Cohort & Ratings (Simplified) */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Previous Bootcamp Review and Ratings</Typography>
      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((review) => (
          <Grid item xs={12} sm={6} key={review}>
            <Stack spacing={1} sx={{ p: 2, border: "1px solid #eee", borderRadius: "12px" }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ width: 32, height: 32 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Jenny Miu</Typography>
                  <Rating value={5} readOnly size="small" />
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                Teaching style and patterns are very extremely good. Appropriate amount of exercise...
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
    </PageWrapper>
  );
};

export default OverviewTab;