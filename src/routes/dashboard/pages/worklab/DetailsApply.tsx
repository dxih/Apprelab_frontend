import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  useTheme,
  Grid,
  Skeleton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import featuredData from "../../../../Data/Worklab.data";
import { PageWrapper } from "./WorkLabCard";

const ProjectApply = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const [project, setProject] = useState<{
    displayTitle: string;
    displaySubtitle: string;
    id: string | number;
    Date: string;
  } | null>(null);

  useEffect(() => {
    let sourceData = state?.project;
    if (!sourceData && id) {
      sourceData = featuredData.find((p: any) => String(p.id) === String(id));
    }
    if (sourceData) {
      setProject({
        id: sourceData.id,
        Date: sourceData.Date || "25th Dec 2025",
        displayTitle: sourceData.title || sourceData.role || "Project Position",
        displaySubtitle:
          sourceData.subtitle ||
          sourceData.company ||
          sourceData.agency ||
          "Organization",
      });
    }
  }, [id, state]);

  const SkeletonLoader = () => (
    <Grid container spacing={3}>
      {[1, 2, 3, 4].map((i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Skeleton
            variant="rectangular"
            height={229}
            sx={{ borderRadius: "12px" }}
          />
          <Skeleton variant="text" sx={{ fontSize: "1rem", mt: 1 }} />
          <Skeleton variant="text" width="60%" />
        </Grid>
      ))}
    </Grid>
  );

  if (!project) {
    return (
      <Box sx={{ p: { xs: 4, md: 10 }, textAlign: "center" }}>
        <Typography>{SkeletonLoader()}</Typography>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, md: 8 },
      }}
    >
      <PageWrapper>
        {/* HEADER */}
        <Box sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontFamily: theme.typography.fontFamily,
              fontSize: { xs: "1.875rem", sm: "2.3rem" },
            }}
          >
            Apply for: {project.displayTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {project.displaySubtitle} • {project.Date}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={6}
              fullWidth
              placeholder="Briefly describe your motivation for applying for this project and your relevant experience"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography fontWeight={700} variant="body1" mb={1.5}>
              Upload CV
            </Typography>
            <Button
              component="label"
              variant="outlined"
              fullWidth
              sx={{
                height: { xs: "48px", md: "56px" },
                justifyContent: "space-between",
                borderColor: "#E0E0E0",
                color: "#999",
                borderRadius: "8px",
                textTransform: "none",
                px: { xs: 2, md: 3 },
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              Select a file
              <input type="file" hidden />
              <CloudUploadIcon
                sx={{ color: "#1976D2", fontSize: { xs: "20px", md: "24px" } }}
              />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={700} mb={1.5}>
              Availability
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                select
                fullWidth
                defaultValue=""
                label="Select Status"
                size="small"
              >
                <MenuItem value="full">Full-Time</MenuItem>
                <MenuItem value="part">Part-Time</MenuItem>
              </TextField>
              <TextField
                select
                fullWidth
                defaultValue=""
                label="Select Notice Period"
                size="small"
              >
                <MenuItem value="now">Immediate</MenuItem>
                <MenuItem value="1week">1 Week Notice</MenuItem>
                <MenuItem value="2weeks">2 Weeks Notice</MenuItem>
              </TextField>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              fontFamily={theme.typography.fontFamily}
              variant="h6"
              fontWeight={700}
              mb={1}
            >
              Skills Confirmation
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {[
                "Data Analysis",
                "Statistical Modeling",
                "Data Visualization",
                "front-end",
                "Backend",
              ].map((skill) => (
                <FormControlLabel
                  key={skill}
                  control={
                    <Checkbox sx={{ "&.Mui-checked": { color: "#1976D2" } }} />
                  }
                  label={<Typography variant="body2">{skill}</Typography>}
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "flex-end",
                gap: 2,
                mt: 4,
              }}
            >
              <Button
                onClick={() => navigate(-1)}
                variant="outlined"
                sx={{
                  bgcolor: "#F3F4F6",
                  color: "#333",
                  px: 4,
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#1976D2",
                  px: 5,
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Submit Application
              </Button>
            </Box>
          </Grid>
        </Grid>
      </PageWrapper>
    </Box>
  );
};

export default ProjectApply;
