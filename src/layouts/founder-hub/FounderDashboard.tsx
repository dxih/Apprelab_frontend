import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import FounderDashboardLayout from "../../layouts/founder-hub/FounderDashboardLayout";

const FounderDashboard: React.FC = () => {
  return (
    <FounderDashboardLayout>
      {/* <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2 }}>Projects Posted</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2 }}>Active Mentors</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2 }}>Ongoing Bootcamps</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2 }}>Messages</Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, minHeight: 200 }}>Main Content / Analytics Charts</Paper>
      </Box> */}
    </FounderDashboardLayout>
  );
};

export default FounderDashboard;

