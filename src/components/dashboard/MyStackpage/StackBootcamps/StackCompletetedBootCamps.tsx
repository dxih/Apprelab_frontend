import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";
import stackCompletedBootCamps_img2 from "../../../../assets/images/components/PreSavedBootCamp/PreSavedBootCamps_2.png";

const completedData = [
  {
    title: "Wireframing, the basis of Ux Design (Cohort 2)",
    description: "Go from beginner to intermediate frontend developer in four weeks",
    duration: "4 Weeks",
    date: "Completed on 6th November, 2025",
    image: stackCompletedBootCamps_img2,
  },
  {
    title: "Using Figma Like a Pro (Cohort 6)",
    description: "Go from beginner to intermediate frontend developer in four weeks",
    duration: "4 Weeks",
    date: "Completed on 1st November, 2025",
    image: stackCompletedBootCamps_img2,
  },
];

export default function StackCompletedBootcamps() {
  const theme = useTheme();
  return (
    <Box sx={{ mt: 6, pb: 4 }}>
      <Typography
        variant="h5"
        sx={{ 
          fontWeight: 700, 
          mb: 3, 
          color: "#111", 
          fontSize: "1.1rem",
          fontFamily: theme.typography.fontFamily,
        }}
      >
        Completed Bootcamps
      </Typography>

      <Grid container spacing={3}>
        {completedData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "#F3F6FF",
                borderRadius: "16px",
                overflow: "visible", 
                border: "1px solid #E9E9E9",
                position: "relative", 
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" }
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
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" }
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
                      pr: 3, 
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: "0.75rem", 
                      color: "#555", 
                      lineHeight: 1.4,
                      wordBreak: "break-word",
                    }}
                  >
                    {item.description} <br />
                    <Box component="span" sx={{ fontWeight: 700, color: "#111" }}>
                      (Duration: {item.duration})
                    </Box>
                  </Typography>
                </Box>
              </Box>

              {/* === FOOTER WITH RESPONSIVE FLEX DIRECTION === */}
              <Box
                sx={{
                  display: "flex",
                  // Mobile: Column | Desktop: Row
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                  bgcolor: "rgba(0, 27, 68, 0.03)",
                  borderTop: "1px solid #E9E9E9",
                  gap: { xs: 2, sm: 1 }, // Gap between date and buttons
                }}
              >
                {/* Completed Date Tag */}
                <Box
                  sx={{
                    bgcolor: "#001B44",
                    color: "white",
                    px: 2,
                    py: 1,
                    borderRadius: "12px",
                    width: { xs: "50%", sm: "154px" },
                    minHeight: { xs: "30px", md: "55px" },
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "11px", color: "white", fontWeight: 600 }}>
                    {item.date}
                  </Typography>
                </Box>

                {/* Buttons Container */}
                <Box 
                  sx={{ 
                    display: "flex", 
                    gap: 1.5, 
                    width: { xs: "100%", sm: "auto" },
                    justifyContent: "center"
                  }}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: "11px",
                      textTransform: "none",
                      borderColor: "#001B44",
                      color: "#001B44",
                      borderRadius: "12px",
                      fontWeight: 600,
                      width: { xs: "100%", sm: "140px", md: "133px" },
                      height: 40,
                      "&:hover": { 
                        borderColor: "#003366", 
                        bgcolor: "rgba(0,27,68,0.05)" 
                      }
                    }}
                  >
                    View Certificate
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      bgcolor: "#001B44",
                      fontSize: "11px",
                      textTransform: "none",
                      borderRadius: "12px",
                      fontWeight: 600,
                      width: { xs: "100%", sm: "140px", md: "153px" },
                      height: 40,
                      "&:hover": { bgcolor: "#003366" }
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
}