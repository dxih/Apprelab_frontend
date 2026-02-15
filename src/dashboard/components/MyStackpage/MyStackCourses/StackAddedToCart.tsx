import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import type { Course } from "./StackOngoingCourses";

interface StackAddedToCartProps {
  courses: Course[];
}

const StackAddedToCart: React.FC<StackAddedToCartProps> = ({ courses }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 3 } }}
    >
      {courses.map((course) => (
        <Card
          key={course.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#edf1f3",
            borderRadius: 2,
            p: { xs: 1.5, md: 2 },
            gap: { xs: 1.5, md: 3 },
            position: "relative",
            boxShadow: "none",
          }}
        >
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              top: { xs: 8, md: 12 },
              right: { xs: 8, md: 12 },
              color: "#666",
              zIndex: 10,
            }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>

          {/* LEFT WRAPPER: Image + Buttons */}
          <Box
            sx={{
              display: { xs: "contents", md: "flex" },
              flexDirection: "column",
              gap: 1.5,
              width: { md: "292px" },
            }}
          >
            <CardMedia
              component="img"
              image={course.image}
              alt={course.title}
              sx={{
                width: { xs: "100%", md: "292px" },
                height: { xs: "180px", sm: "200px", md: "148px" },
                borderRadius: 1,
                objectFit: "cover",
                mt: { xs: 3, md: 0 },
                order: 1, 
              }}
            />

            {/* BUTTON BOX */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
                justifyContent: "flex-start",
                width: "100%",
                order: { xs: 3, md: 2 }, 
                mb: { xs: 1, md: 0 },
              }}
            >
              <Button
                component={Link}
                to={`/payment/${course.id}`}
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  bgcolor: theme.palette.warning.light,
                  color: "#000",
                  fontWeight: 700,
                  height: "36px",
                  px: { xs: 1, md: 2 },
                  fontSize: { xs: "0.7rem", md: "0.75rem" },
                  boxShadow: "none",
                  flex: { xs: 1, sm: "auto" },
                  "&:hover": {
                    bgcolor: theme.palette.warning.main,
                    boxShadow: "none",
                  },
                }}
              >
                Make Payment
              </Button>

              <Button
                component={Link}
                to={`/course/${course.id}/details`}
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  bgcolor: "#001B44",
                  color: "white",
                  fontWeight: 600,
                  height: "36px",
                  px: { xs: 1, md: 2 },
                  fontSize: { xs: "0.7rem", md: "0.75rem" },
                  boxShadow: "none",
                  flex: { xs: 1, sm: "auto" },
                  "&:hover": { bgcolor: "#003366", boxShadow: "none" },
                }}
              >
                View Details
              </Button>
            </Box>
          </Box>

          {/* TEXT CONTENT */}
          <Box
            sx={{
              flex: 1,
              pt: { md: 1 },
              minWidth: 0,
              px: { xs: 0, md: 1 },
              order: 2, 
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                mb: 1,
                pr: { xs: 4, md: 4 },
                fontFamily: theme.typography.fontFamily,
              }}
            >
              {course.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#444",
                lineHeight: 1.6,
                mb: 1,
                fontSize: { xs: "0.875rem", md: "1rem" },
                fontFamily: theme.typography.fontFamily,
              }}
            >
              {course.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "0.8rem", md: "0.875rem" },
              }}
            >
              (Duration: {course.length})
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default StackAddedToCart;