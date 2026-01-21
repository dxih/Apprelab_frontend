// src/routes/dashboard/pages/stack/tabs/AssessmentsTab.tsx
import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import { PageWrapper } from "../worklab/WorkLabCard";

interface AssessmentItemProps {
  type: "Project" | "Quiz";
  number: number;
  title: string;
  deadline: string;
}

const AssessmentCard: React.FC<AssessmentItemProps> = ({ type, number, title, deadline }) => (
  <Box sx={{ 
    bgcolor: "#F3F8FF", 
    p: 3, 
    borderRadius: "12px", 
    mb: 2,
    border: "1px solid #E3E9F2" 
  }}>
    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: "1.1rem" }}>
      <span style={{ textDecoration: "underline" }}>{type} {number}:</span> {title}
    </Typography>
    
    <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems="center">
      <Chip 
        label={`Deadline: ${deadline}`} 
        sx={{ 
          bgcolor: "#FFB800", 
          color: "white", 
          fontWeight: 600, 
          borderRadius: "8px",
          height: "32px"
        }} 
      />
      <Button 
        variant="outlined" 
        size="small" 
        sx={{ 
          textTransform: "none", 
          borderColor: "#001B44", 
          color: "#001B44", 
          bgcolor: "white",
          px: 3 
        }}
      >
        {type === "Project" ? "View Task Brief" : "Review Resources"}
      </Button>
      <Button 
        variant="contained" 
        size="small" 
        sx={{ 
          textTransform: "none", 
          bgcolor: "#001B44", 
          px: 3 
        }}
      >
        {type === "Project" ? "Submit Task" : "Take Quiz"}
      </Button>
    </Stack>
  </Box>
);

const AssessmentsTab = () => {

  return (
    <PageWrapper>
    <Box>
      {/* PENDING SECTION */}
      <Typography sx={{ fontWeight: 700, mb: 2, color: "#333" }}>Pending</Typography>
      <AssessmentCard 
        type="Project" 
        number={2} 
        title="Build the frontend framework for a calculator app" 
        deadline="12:00 Tomorrow" 
      />
      <AssessmentCard 
        type="Quiz" 
        number={2} 
        title="Test your knowledge on responsive layouts and design" 
        deadline="12:00 Tomorrow" 
      />

      {/* SUBMITTED SECTION */}
      <Typography sx={{ fontWeight: 700, mt: 4, mb: 2, color: "#333" }}>Submitted</Typography>
      <AssessmentCard 
        type="Project" 
        number={1} 
        title="Showcase your understanding of frontend design" 
        deadline="12:00 Tomorrow" 
      />
      <AssessmentCard 
        type="Quiz" 
        number={2} 
        title="Test your knowledge on HTML and CSS" 
        deadline="12:00 Tomorrow" 
      />
    </Box>
    </PageWrapper>
  );
};

export default AssessmentsTab;