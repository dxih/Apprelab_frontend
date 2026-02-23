<<<<<<< HEAD
import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
=======
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
>>>>>>> main
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";
import { CompletedCourseData } from "../../../Data/MyStackCourses.data";
import { Link } from "react-router-dom";

// Interface to ensure data consistency
interface CompletedCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  image: string;
}

export default function StackCompletedCourses() {
  const theme = useTheme();
<<<<<<< HEAD

=======
  
>>>>>>> main
  return (
    <Box sx={{ mt: 6, pb: 4 }}>
      <Typography
        variant="h5"
<<<<<<< HEAD
        sx={{
          fontWeight: 700,
          mb: 3,
          color: "#111",
=======
        sx={{ 
          fontWeight: 700, 
          mb: 3, 
          color: "#111", 
>>>>>>> main
          fontSize: "1.1rem",
          fontFamily: theme.typography.fontFamily,
        }}
      >
        Completed Courses
      </Typography>

      <Grid container spacing={3}>
        {(CompletedCourseData as CompletedCourse[]).map((item, index) => (
          <Grid item xs={12} md={6} key={item.id || index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "#F3F6FF",
                borderRadius: "16px",
<<<<<<< HEAD
                overflow: "visible",
                border: "1px solid #E9E9E9",
                position: "relative",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" },
=======
                overflow: "visible", 
                border: "1px solid #E9E9E9",
                position: "relative", 
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" }
>>>>>>> main
              }}
            >
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 8,
                  zIndex: 100,
                  color: "#666",
                  bgcolor: "rgba(255, 255, 255, 0.6)",
<<<<<<< HEAD
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" },
=======
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" }
>>>>>>> main
                }}
              >
                <MoreVertIcon sx={{ fontSize: "1.2rem" }} />
              </IconButton>

              <Box sx={{ display: "flex", p: 1.5, gap: 2 }}>
                <Box
                  sx={{
                    width: { xs: 100, sm: 160, md: 180 },
                    height: 90,
                    borderRadius: "10px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      lineHeight: 1.3,
                      mb: 1,
                      color: "#000",
                      fontFamily: theme.typography.fontFamily,
<<<<<<< HEAD
                      pr: 3,
=======
                      pr: 3, 
>>>>>>> main
                    }}
                  >
                    {item.title}
                  </Typography>
<<<<<<< HEAD
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "#555",
=======
                  <Typography 
                    sx={{ 
                      fontSize: "0.75rem", 
                      color: "#555", 
>>>>>>> main
                      lineHeight: 1.4,
                      wordBreak: "break-word",
                    }}
                  >
                    {item.description} <br />
<<<<<<< HEAD
                    <Box
                      component="span"
                      sx={{ fontWeight: 700, color: "#111" }}
                    >
=======
                    <Box component="span" sx={{ fontWeight: 700, color: "#111" }}>
>>>>>>> main
                      (Duration: {item.duration})
                    </Box>
                  </Typography>
                </Box>
              </Box>

              {/* FOOTER - Original Styling Maintained */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                  bgcolor: "rgba(0, 27, 68, 0.03)",
                  borderTop: "1px solid #E9E9E9",
<<<<<<< HEAD
                  gap: { xs: 2, sm: 1 },
=======
                  gap: { xs: 2, sm: 1 }, 
>>>>>>> main
                }}
              >
                <Box
                  sx={{
                    bgcolor: theme.palette.warning.light,
                    color: theme.palette.text.primary,
                    px: 2,
                    py: 1,
                    borderRadius: "12px",
                    width: { xs: "50%", sm: "154px" },
                    minHeight: { xs: "30px", md: "55px" },
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
<<<<<<< HEAD
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                    }}
                  >
=======
                    justifyContent: "center"
                  }}
                >
                  <Typography sx={{ fontSize: "11px", color: theme.palette.text.primary, fontWeight: 600 }}>
>>>>>>> main
                    {item.date}
                  </Typography>
                </Box>

<<<<<<< HEAD
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    width: { xs: "100%", sm: "auto" },
                    justifyContent: "center",
=======
                <Box 
                  sx={{ 
                    display: "flex", 
                    gap: 1.5, 
                    width: { xs: "100%", sm: "auto" },
                    justifyContent: "center"
>>>>>>> main
                  }}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    component={Link}
                    to={`/certificates/${item.id}`}
                    sx={{
                      fontSize: "11px",
                      textTransform: "none",
                      borderColor: "#001B44",
                      color: "#001B44",
                      borderRadius: "12px",
                      fontWeight: 600,
                      width: { xs: "100%", sm: "140px", md: "133px" },
                      height: 40,
<<<<<<< HEAD
                      "&:hover": {
                        borderColor: "#003366",
                        bgcolor: "rgba(0,27,68,0.05)",
                      },
=======
                      "&:hover": { 
                        borderColor: "#003366", 
                        bgcolor: "rgba(0,27,68,0.05)" 
                      }
>>>>>>> main
                    }}
                  >
                    View Certificate
                  </Button>
                  <Button
                    size="small"
<<<<<<< HEAD
                    component={Link}
                    to="/contact-organizers"
=======
>>>>>>> main
                    variant="contained"
                    sx={{
                      bgcolor: "#001B44",
                      fontSize: "11px",
                      textTransform: "none",
                      borderRadius: "12px",
                      fontWeight: 600,
                      width: { xs: "100%", sm: "140px", md: "153px" },
                      height: 40,
<<<<<<< HEAD
                      "&:hover": { bgcolor: "#003366" },
=======
                      "&:hover": { bgcolor: "#003366" }
>>>>>>> main
                    }}
                  >
                    Contact Organizers
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> main
