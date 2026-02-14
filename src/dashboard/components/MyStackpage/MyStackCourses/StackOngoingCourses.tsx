import {
  Box,
  Typography,
  Card,
  CardMedia,
  LinearProgress,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

// Interface for Course data
export interface Course {
  id: string;
  title: string;
  description: string;
  length: string;
  progress: number;
  image: string;
  currentLesson: string;
  // optional
  instructor?: string;
  nextLesson?: string;
  timeLeft?: string;
}

export interface Props {
  courses: Course[];
}

const StackOngoingCourses: React.FC<Props> = ({ courses }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 5, sm: 2.5, md: 2 },
        }}
      >
        {courses.map((course, i) => (
          <Card
            key={course.id || i}
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
              boxShadow: "none",
            }}
          >
            {/* Options Menu Icon */}
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 100,
                color: "#666",
                bgcolor: "rgba(255, 255, 255, 0.5)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.8)" },
              }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>

            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "flex-start",
                  gap: { xs: 2, md: 2 },
                  width: "100%",
                }}
              >
                {/* Course Thumbnail */}
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "292px" },
                    height: { xs: "200px", sm: "180px", md: "148px" },
                    borderRadius: 1,
                    objectFit: "cover",
                    mb: { xs: 2, md: 1.5 },
                  }}
                />

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
                    {course.title}
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
                    {course.description}{" "}
                    <strong>(Length: {course.length})</strong>
                  </Typography>

                  {/* Progress Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column", // Stack vertically for a cleaner mobile look
                      width: "100%",
                      mb: { xs: 2, md: 4.5 },
                    }}
                  >
                    {/* Top Label Row: Status on left, Percentage on right */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1, // Space between text and the bar
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: { xs: "0.75rem", md: "0.8rem" },
                          fontWeight: 600,
                          color: "#001B44",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Progress Status
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: { xs: "0.75rem", md: "0.8rem" },
                          fontWeight: 700,
                          color: "#001B44",
                        }}
                      >
                        {course.progress}%
                      </Typography>
                    </Box>

                    {/* The Progress Bar */}
                    <LinearProgress
                      variant="determinate"
                      value={course.progress}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: "#F1F4FF", 
                        "& .MuiLinearProgress-bar": {
                          bgcolor: "#001B44",
                          borderRadius: 4, 
                        },
                      }}
                    />

                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "0.7rem",
                        color: "#666",
                        mt: 0.5,
                        display: { xs: "block", md: "none" }, 
                      }}
                    >
                      Keep going! You're doing great.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Action Buttons Footer */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "stretch", md: "center" },
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 1.5,
                  mt: "auto",
                }}
              >
                {/* Resources & Assessments Group */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 1.5,
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  <Button
                    component={Link}
                    to={`/course/${course.id}/resources`}
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      borderColor: "#001B44",
                      color: "#001B44",
                      fontWeight: 600,
                      borderRadius: "8px",
                      height: "36px",
                      px: 2.5,
                      fontSize: "0.8rem",
                      width: { xs: "100%", sm: "auto" },
                      "&:hover": {
                        borderColor: "#003366",
                        bgcolor: "rgba(0, 27, 68, 0.04)",
                      },
                    }}
                  >
                    Resources
                  </Button>

                  <Button
                    component={Link}
                    to={`/course/${course.id}/assessments`}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      bgcolor: "#001B44",
                      fontWeight: 600,
                      borderRadius: "8px",
                      height: "36px",
                      px: 2.5,
                      fontSize: "0.8rem",
                      width: { xs: "100%", sm: "auto" },
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#003366",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Assessments
                  </Button>
                </Box>

                {/* Continue Learning Button */}
                <Button
                  component={Link}
                  to={`/course/${course.id}/learn`}
                  variant="contained"
                  sx={{
                    bgcolor: "#001B44",
                    color: "white",
                    borderRadius: "8px",
                    height: "36px",
                    px: 3,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    whiteSpace: "nowrap",
                    boxShadow: "none",
                    width: { xs: "100%", md: "auto" },
                    "&:hover": {
                      backgroundColor: "#003366",
                      boxShadow: "none",
                    },
                  }}
                >
                  Continue Learning: {course.currentLesson}
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default StackOngoingCourses;
