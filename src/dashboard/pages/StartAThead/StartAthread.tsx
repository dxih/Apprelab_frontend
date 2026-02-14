import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Paper,
  CircularProgress,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useParams } from "react-router-dom";
import { ongoingBootcamps } from "../../Data/MyStackBootcamp.data";
import { PageWrapper } from "../worklab/WorkLabCard";

const StartThread: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // --- State for inputs and loading ---
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  
  // --- Validation States ---
  const [errors, setErrors] = useState({ title: false, description: false });

  const bootcamp = ongoingBootcamps.find((b) => b.id === id);

  const handlePost = () => {
    // Check for empty fields
    const titleError = !title.trim();
    const descError = !description.trim();

    if (titleError || descError) {
      setErrors({ title: titleError, description: descError });
      return;
    }

    setLoading(true);
    setErrors({ title: false, description: false });

    // Simulate network delay
   setTimeout(() => {
  const newThread = {
    id: Date.now().toString(),
    name: "PhAyyy", 
    time: Date.now(),
    title: title,
    body: description,
    replies: 0,
    trending: false,
  };
// testing

      setLoading(false);
      navigate(`/bootcamp/${id}/discussions`, { state: { newThread } });
    }, 1500); 
  };

  if (!bootcamp) return <Typography>Bootcamp not found</Typography>;
  

  return (
    <PageWrapper>
    <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh", py: 4 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 4 } }}>
        
        <Stack spacing={0.5} sx={{ mb: 4 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton onClick={() => navigate(-1)} size="small" sx={{ p: 0 }}>
              <ArrowBackIosNewIcon sx={{ fontSize: "1.2rem", color: "#000" }} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, cursor: "pointer" }}
              onClick={() => navigate(-1)}
            >
              {bootcamp.title}
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Start New Thread
        </Typography>
        <Typography sx={{ color: "#666", mb: 5, fontSize: "0.9rem" }}>
          Share your thoughts, ask questions, collaborate with other learners
        </Typography>

        <Stack spacing={4}>
          <Box>
            <Typography sx={labelStyle}>Thread Title</Typography>
            <TextField
              fullWidth
              placeholder="Enter a descriptive title for your thread..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors({ ...errors, title: false });
              }}
              error={errors.title}
              helperText={errors.title ? "Title is required" : ""}
              sx={inputStyle}
              disabled={loading}
            />
          </Box>

          <Box>
            <Typography sx={labelStyle}>Description</Typography>
            <TextField
              fullWidth
              multiline
              rows={8}
              placeholder="Provide more details about your question..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description) setErrors({ ...errors, description: false });
              }}
              error={errors.description}
              helperText={errors.description ? "Description is required" : ""}
              sx={inputStyle}
              disabled={loading}
            />
          </Box>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={handlePost}
              disabled={loading}
              sx={{
                bgcolor: "#001B44",
                color: "#fff",
                textTransform: "none",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                minWidth: "140px",
                "&:hover": { bgcolor: "#001030" },
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Post Thread"
              )}
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              disabled={loading}
              sx={{
                color: "#001B44",
                borderColor: "#001B44",
                textTransform: "none",
                fontWeight: 700,
                px: 4,
                borderRadius: "8px",
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>

        <Paper
          elevation={0}
          sx={{
            mt: 6,
            p: 3,
            borderRadius: "16px",
            border: "1px solid #001B44",
            bgcolor: "transparent",
          }}
        >
          <Typography sx={{ fontWeight: 800, mb: 2 }}>
            Tips for Creating Great Threads
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0, "& li": { mb: 1, fontSize: "0.9rem" } }}>
            <li>Use a clear, descriptive title that summarizes your question</li>
            <li>Provide enough context and details in your description</li>
            <li>Search for existing threads before creating a new one</li>
            <li>Be respectful and constructive in your communication</li>
          </Box>
        </Paper>
      </Box>
    </Box>
    </PageWrapper>
  );
};

const labelStyle = { fontWeight: 700, mb: 1.5, fontSize: "1rem" };
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": { borderColor: "#001B44" },
    "&:hover fieldset": { borderColor: "#001B44" },
    "&.Mui-error fieldset": { borderColor: "#d32f2f" },
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    fontWeight: 500,
  }
};

export default StartThread;