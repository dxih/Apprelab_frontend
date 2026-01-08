import React from "react";
import { Box, Typography, Card, CardMedia, LinearProgress, Button } from "@mui/material";

interface Bootcamp {
  title: string;
  description: string;
  duration: string;
  progress: number;
  nextClass: string;
  image: string;
}

interface Props {
  bootcamps: Bootcamp[];
}

const StackOngoingBootcamps: React.FC<Props> = ({ bootcamps }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Ongoing Bootcamps
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {bootcamps.map((bootcamp, i) => (
          <Card
            key={i}
            sx={{ display: "flex", p: 2, gap: 2, borderRadius: 2, bgcolor: "#F3F6FF" }}
          >
            <CardMedia
              component="img"
              image={bootcamp.image}
              alt={bootcamp.title}
              sx={{ width: 150, borderRadius: 1, objectFit: "cover" }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 600 }}>{bootcamp.title}</Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#555", mb: 1 }}>
                {bootcamp.description} <strong>(Duration: {bootcamp.duration})</strong>
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", mb: 0.5 }}>Progress Status</Typography>
              <LinearProgress
                variant="determinate"
                value={bootcamp.progress}
                sx={{ height: 8, borderRadius: 2, mb: 1 }}
              />
              <Typography sx={{ fontSize: "0.8rem", mb: 1 }}>{bootcamp.progress}% Completed</Typography>
              <Typography
                sx={{
                  display: "inline-block",
                  bgcolor: "#FFF59D",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: "0.75rem",
                  mb: 1,
                }}
              >
                Next Class: {bootcamp.nextClass}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                <Button variant="outlined" size="small">Resources</Button>
                <Button variant="contained" size="small">Assessments</Button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default StackOngoingBootcamps;
