import {
  Box,
  Typography,
  Card,
  CardMedia,
  LinearProgress,
  Button,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link } from "react-router-dom"; 
>>>>>>> main
import type { IResource } from "../../../Data/MyStackBootcamp.data";
import type { IAssessment } from "../../../Data/MyStackBootcamp.data";
import type { IReview } from "../../../Data/MyStackBootcamp.data";
import type { IDiscussion } from "../../../Data/MyStackBootcamp.data";

<<<<<<< HEAD
export interface Bootcamp {
=======
 export interface Bootcamp {
>>>>>>> main
  id: string; // 1. ADDED ID HERE
  title: string;
  description: string;
  duration: string;
  progress: number;
  nextClass: string;
  image: string;
  agenda: string;
  learnList: string[];
  audience: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  nextCohort: {
    date: string;
<<<<<<< HEAD
    oldPrice: string;
    newPrice: string;
  };
  resources: IResource[];
  assessments: IAssessment[];
  reviews: IReview[];
  discussions: IDiscussion[];
  announcements: string[];
=======
    oldPrice: string; 
    newPrice: string;
  };
 resources: IResource[];
 assessments: IAssessment[];
 reviews: IReview[];
 discussions: IDiscussion[];
announcements: string[];

>>>>>>> main
}

interface Props {
  bootcamps: Bootcamp[];
}

const StackOngoingBootcamps: React.FC<Props> = ({ bootcamps }) => {
  const theme = useTheme();
<<<<<<< HEAD

=======
  
>>>>>>> main
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        {bootcamps.map((bootcamp, i) => (
          <Card
<<<<<<< HEAD
            key={bootcamp.id || i}
=======
            key={bootcamp.id || i} 
>>>>>>> main
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              p: { xs: 1, sm: 1.5, md: 2 },
              gap: { xs: 1.5, md: 2 },
              borderRadius: 2,
              bgcolor: "#edf1f3",
              justifyContent: "flex-start",
              position: "relative",
              overflow: "visible",
            }}
          >
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 100,
                color: "#666",
                bgcolor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>

<<<<<<< HEAD
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
=======
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
>>>>>>> main
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "flex-start",
                  gap: { xs: 2, md: 2 },
                  width: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={bootcamp.image}
                  alt={bootcamp.title}
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "292px" },
                    height: { xs: "200px", sm: "180px", md: "148px" },
                    borderRadius: 1,
                    objectFit: "cover",
                    mb: 1.5,
                  }}
                />
<<<<<<< HEAD

=======
                
>>>>>>> main
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: theme.typography.fontFamily,
                      pr: 4,
                    }}
                  >
                    {bootcamp.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.85rem" },
                      color: "#0a0909",
                      mb: 2.5,
                      fontFamily: theme.typography.fontFamily,
                      lineHeight: 1.5,
                      wordBreak: "break-word",
                    }}
                  >
                    {bootcamp.description}{" "}
                    <strong>(Duration: {bootcamp.duration})</strong>
                  </Typography>
<<<<<<< HEAD
                  
                  {/* Progress Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      mb: 4.5,
                    }}
                  >
                    {/* Row for Labels */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between", 
                        alignItems: "flex-end", 
                        mb: 1.5, 
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "#001B44",
                          lineHeight: 1, 
                        }}
                      >
                        Progress Status
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#001B44",
                          lineHeight: 1,
                        }}
                      >
                        {bootcamp.progress}% Completed
                      </Typography>
                    </Box>

                    {/* Progress Bar Container */}
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress
                        variant="determinate"
                        value={bootcamp.progress}
                        sx={{
                          height: 8,
                          borderRadius: 10,
                          bgcolor: "#F1F4FF",
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#001B44",
                            borderRadius: 10,
                          },
                        }}
                      />
                    </Box>
=======

                  {/* Progress Section */}
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 2, mb: 4.5 }}>
                    <Typography variant="subtitle1" sx={{ fontSize: "0.8rem", fontWeight: 500 }}>
                      Progress Status
                    </Typography>
                    <Box sx={{ flex: 1, width: "100%", display:"flex", flexDirection:"column", textAlign:"center" }}>
                      <LinearProgress variant="determinate" value={bootcamp.progress} sx={{ height: 8, borderRadius: 2 }} />
                      <Typography variant="subtitle2" sx={{ fontSize: "0.75rem", mt: 0.5 }}>
                        {bootcamp.progress}% Completed
                      </Typography>
                    </Box>
>>>>>>> main
                  </Box>
                </Box>
              </Box>

              {/* Footer */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 5 },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    bgcolor: "#001B44",
                    color: "white",
                    px: 1,
                    py: 1,
                    borderRadius: "16px",
                    width: { xs: "50%", md: "267px" },
                    minHeight: { xs: "40px", md: "66px" },
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Next Class: {bootcamp.nextClass}
                </Typography>

<<<<<<< HEAD
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  {/* 2. UPDATED RESOURCES BUTTON WITH LINK */}
                  <Button
                    component={Link}
                    to={`/bootcamp/${bootcamp.id}/resources`}
=======
                <Box sx={{ display: "flex", gap: 2, width: { xs: "100%", md: "auto" } }}>
                  {/* 2. UPDATED RESOURCES BUTTON WITH LINK */}
                  <Button
                    component={Link}
                    to={`/bootcamp/${bootcamp.id}/resources`} 
>>>>>>> main
                    variant="outlined"
                    size="small"
                    sx={{
                      width: { xs: "100%", md: "110px" },
                      height: "40px",
                      textTransform: "none",
                    }}
                  >
                    Resources
                  </Button>
<<<<<<< HEAD

=======
                  
>>>>>>> main
                  {/* 3. UPDATED ASSESSMENTS BUTTON WITH LINK */}
                  <Button
                    component={Link}
                    to={`/bootcamp/${bootcamp.id}/assessments`}
                    variant="contained"
                    size="small"
                    sx={{
                      background: "#001B44",
                      "&:hover": { backgroundColor: "#003366" },
                      width: { xs: "100%", md: "110px" },
                      height: "40px",
                      textTransform: "none",
                    }}
                  >
                    Assessments
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

<<<<<<< HEAD
export default StackOngoingBootcamps;
=======
export default StackOngoingBootcamps;
>>>>>>> main
