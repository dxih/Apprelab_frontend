// src/routes/dashboard/pages/stack/tabs/AssessmentsTab.tsx
import React from "react";
import { Box, Typography, Button, Stack, Chip, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { ongoingBootcamps } from "../../../../Data/MyStackBootcamp.data";

interface AssessmentItemProps {
  type: "Project" | "Quiz";
  number: number;
  title: string;
  deadline: string;
  status: "pending" | "submitted";
}

// REMOVED THE THEME FROM HERE (Outside)

const AssessmentCard: React.FC<AssessmentItemProps> = ({ type, number, title, deadline, status }) => {
  const theme = useTheme(); // MOVED INSIDE THE COMPONENT

  return (
    <Box sx={{ 
      bgcolor: "#F3F8FF", 
      p: 3,
      borderRadius: "12px", 
      mb: 2,
      border: "1px solid #E3E9F2" 
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 700, 
          mb: 2, 
          fontSize: "1.1rem",
          fontFamily: theme.typography.fontFamily 
        }}
      >
        <span style={{ textDecoration: "underline" }}>{type} {number}:</span> {title}
      </Typography>
      
      <Stack 
        direction={{ xs: "column", sm: "row" }} 
        spacing={1} 
        display="flex" 
        justifyContent={{xs:"flex-start", md:"center"}}
        alignItems={{xs:"flex-start", md:"center"}}
      >
        <Chip 
          label={`Deadline: ${deadline}`} 
          sx={{ 
            bgcolor: "#FFB800", 
            color: "white", 
            fontWeight: 700, 
            borderRadius: "8px",
            height: "32px",
            fontSize: "0.75rem",
            fontFamily: theme.typography.fontFamily,
            px: 1
          }} 
        />
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:{xs:3, md:1}}}>

       
        
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            borderColor: "#E0E0E0", 
            color: "#333",          
            fontSize: "0.75rem",   
            fontWeight: 500,
            bgcolor: "white",
            fontFamily: theme.typography.fontFamily,
            px: 2,
            "&:hover": {
              borderColor: "#001B44",
              bgcolor: "rgba(0, 27, 68, 0.04)",
            },
          }}
        >
          {type === "Project" ? "View Task Brief" : "Review Resources"}
        </Button>

        <Button
          variant="contained"
          size="small"
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            bgcolor: "#001B44",     
            color: "white",
            fontSize: "0.75rem",   
            fontWeight: 600,
            fontFamily: theme.typography.fontFamily,
            px: 2,
            boxShadow: "none",      
            "&:hover": {
              bgcolor: "#001030",
              boxShadow: "none",
            },
          }}
        >
          {status === "submitted"
            ? "View Submission"
            : type === "Project"
            ? "Submit Task"
            : "Take Quiz"}
        </Button>
         </Box>
      </Stack>
    </Box>
  );
};

const AssessmentsTab = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme(); // MOVED INSIDE THE COMPONENT

  const bootcamp = ongoingBootcamps.find((b) => b.id === id);

  if (!bootcamp) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography sx={{ color: "text.secondary", fontFamily: theme.typography.fontFamily }}>
          No assessment data found for this bootcamp.
        </Typography>
      </Box>
    );
  }

  const pendingAssessments = bootcamp.assessments?.filter(a => a.status === "pending") || [];
  const submittedAssessments = bootcamp.assessments?.filter(a => a.status === "submitted") || [];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontWeight: 700, mb: 2, color: "#333", fontFamily: theme.typography.fontFamily }}>
        Pending
      </Typography>
      {pendingAssessments.length > 0 ? (
        pendingAssessments.map((item) => (
          <AssessmentCard 
            key={item.id}
            type={item.type} 
            number={item.number} 
            title={item.title} 
            deadline={item.deadline}
            status="pending"
          />
        ))
      ) : (
        <Typography sx={{ color: "gray", mb: 4, fontStyle: 'italic', fontFamily: theme.typography.fontFamily }}>
          No pending tasks.
        </Typography>
      )}

      <Typography sx={{ fontWeight: 700, mt: 4, mb: 2, color: "#333", fontFamily: theme.typography.fontFamily }}>
        Submitted
      </Typography>
      {submittedAssessments.length > 0 ? (
        submittedAssessments.map((item) => (
          <AssessmentCard 
            key={item.id}
            type={item.type} 
            number={item.number} 
            title={item.title} 
            deadline={item.deadline}
            status="submitted"
          />
        ))
      ) : (
        <Typography sx={{ color: "gray", fontStyle: 'italic', fontFamily: theme.typography.fontFamily }}>
          No submissions yet.
        </Typography>
      )}
    </Box>
  );
};

export default AssessmentsTab;