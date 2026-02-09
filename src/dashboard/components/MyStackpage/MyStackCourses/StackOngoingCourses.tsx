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
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "center",
                      gap: 2,
                      mb: { xs: 2, md: 4.5 },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "0.8rem", fontWeight: 500 }}
                    >
                      Progress Status
                    </Typography>
                    <Box
                      sx={{
                        flex: 1,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={course.progress}
                        sx={{
                          height: 8,
                          borderRadius: 2,
                          bgcolor: "#e0e0e0",

                          "& .MuiLinearProgress-bar": { bgcolor: "#001B44" },
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: "0.75rem", mt: 0.5 }}
                      >
                        {course.progress}% Completed
                      </Typography>
                    </Box>
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
