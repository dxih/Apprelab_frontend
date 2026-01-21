import React from "react";
import { Box, Typography, Button, Stack, Avatar, Grid } from "@mui/material";
import { PageWrapper } from "../worklab/WorkLabCard";

const DiscussionItem = ({ name, time, title, body, replies }: any) => (
  <Box sx={{ mb: 6 }}>
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
      <Avatar sx={{ width: 44, height: 44 }} />
      <Stack direction="row" spacing={1} alignItems="baseline">
        <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>{name}</Typography>
        <Typography sx={{ color: "#999", fontSize: "0.75rem" }}>{time}</Typography>
      </Stack>
    </Stack>
    
    <Box sx={{ pl: 7.5 }}> {/* Aligns text with the start of the name, not the avatar */}
      <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#333", mb: 2, fontSize: "0.9rem" }}>
        {body}
      </Typography>
      
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography 
          sx={{ 
            fontSize: "0.85rem", 
            fontWeight: 700, 
            textDecoration: "underline", 
            cursor: "pointer" 
          }}
        >
          Reply.....
        </Typography>
        <Typography sx={{ color: "#666", fontSize: "0.85rem" }}>
          {replies} replies
        </Typography>
      </Stack>
    </Box>
  </Box>
);

const SidebarCard = ({ title, items }: any) => (
  <Box 
    sx={{ 
      border: "1px solid #001B44", // Thin dark blue border from your screenshot
      borderRadius: "16px", 
      p: 3, 
      mb: 4,
      bgcolor: "transparent"
    }}
  >
    <Typography sx={{ fontWeight: 800, mb: 3, fontSize: "1.1rem" }}>
      {title}
    </Typography>
    <Stack spacing={2.5}>
      {items.map((item: string, i: number) => (
        <Typography 
          key={i} 
          sx={{ 
            color: "#333", 
            fontSize: "0.9rem", 
            fontWeight: 500,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" }
          }}
        >
          {item}
        </Typography>
      ))}
    </Stack>
  </Box>
);

const DiscussionsTab = () => {
  return (
    <PageWrapper>
    <Grid container spacing={5}>
      {/* LEFT CONTENT */}
      <Grid item xs={12} md={7.5}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 6 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
              Discussions
            </Typography>
            <Typography sx={{ color: "#666", fontSize: "0.85rem" }}>
              Share your thoughts, ask questions, collaborate with other learners
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: "#001B44", 
              textTransform: "none", 
              fontWeight: 700, 
              borderRadius: "8px",
              px: 3,
              py: 1,
              whiteSpace: "nowrap"
            }}
          >
            Start New Thread +
          </Button>
        </Stack>

        <DiscussionItem 
          name="Cynthia E." 
          time="2hrs ago." 
          title="How do I make my nav bar responsive?" 
          body="I’m struggling to make a responsive nav bar, can anyone help me?" 
          replies={3} 
        />
        
        <DiscussionItem 
          name="David E." 
          time="7hrs ago." 
          title="Frontend vs Backend" 
          body="What is the difference between frontend and backend development" 
          replies={8} 
        />
      </Grid>

      {/* RIGHT SIDEBAR */}
      <Grid item xs={12} md={4.5}>
        <SidebarCard 
          title="Trending Discussions" 
          items={[
            "Best tools for CSS", 
            "How to make a responsive nav bar", 
            "Frontend vs Backend"
          ]} 
        />
        
        <SidebarCard 
          title="Bootcamp Announcements" 
          items={[
            "In-Cohort Competition coming up", 
            "Tuesday’s class has been rescheduled to Friday", 
            "Joint class with Backend Dev coming up soon"
          ]} 
        />
      </Grid>
    </Grid>
    </PageWrapper>
  );
};

export default DiscussionsTab;