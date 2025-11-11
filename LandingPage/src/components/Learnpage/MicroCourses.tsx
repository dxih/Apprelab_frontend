import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
} from "@mui/material";

import learncourse_img1 from "../../assets/learncourse_img1.png";
import learncourse_img2 from "../../assets/learncourse_img2.png";
import learncourse_img3 from "../../assets/learncourse_img3.png";
import learncourse_img4 from "../../assets/learncourse_img4.png";
import learncourse_img5 from "../../assets/learncourse_img5.png";
import learncourse_img6 from "../../assets/learncourse_img6.png";
import learncourse_img7 from "../../assets/learncourse_img7.png";
import learncourse_img8 from "../../assets/learncourse_img8.png";

const courses = [
  {
    title: "Advanced UI/UX design in Figma: Expert Level",
    author: "Veronica Winston, UI/UX Studio",
    rating: 4.5,
    reviews: 3200,
    oldPrice: "₦40,000",
    newPrice: "₦20,000",
    img: learncourse_img1,
  },
  {
    title: "Figma for Beginners, Vol. 2",
    author: "D.L.O Studio",
    rating: 4.5,
    reviews: 2800,
    oldPrice: "₦30,000",
    newPrice: "₦10,000",
    img: learncourse_img2,
  },
  {
    title: "The Art of Getting Paid to Design User Centered Products",
    author: "Clara UX Workshop",
    rating: 4.5,
    reviews: 2500,
    oldPrice: "₦45,000",
    newPrice: "₦25,000",
    img: learncourse_img3,
  },
  {
    title: "Introduction to Figma: Beginner Bootcamp, Vol. 1",
    author: "Tim Sparks, Figma Academy",
    rating: 4.5,
    reviews: 3000,
    oldPrice: "₦20,000",
    newPrice: "₦8,000",
    img: learncourse_img4,
  },
  {
    title: "Advanced UI/UX design in Figma: Intermediate",
    author: "Veronica Winston, UI/UX Studio",
    rating: 4.5,
    reviews: 2900,
    oldPrice: "₦40,000",
    newPrice: "₦20,000",
    img: learncourse_img5,
  },
  {
    title: "Advanced Data Analysis in Tableau: Intermediate",
    author: "Marcus Yoma, Data Circle",
    rating: 4.5,
    reviews: 2100,
    oldPrice: "₦45,000",
    newPrice: "₦25,000",
    img: learncourse_img6,
  },
  {
    title: "Advanced Python in Frontend: Intermediate",
    author: "Veronica Winston, UI/UX Studio",
    rating: 4.5,
    reviews: 2800,
    oldPrice: "₦50,000",
    newPrice: "₦25,000",
    img: learncourse_img7,
  },
  {
    title: "Advanced Motion design: Intermediate",
    author: "Veronica Winston, UI/UX Studio",
    rating: 4.5,
    reviews: 2600,
    oldPrice: "₦40,000",
    newPrice: "₦20,000",
    img: learncourse_img8,
  },
];

const MicroCourses = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0B0B31",
        color: "#fff",
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          mb: 1.5,
          display: "inline-block",
          position: "relative",
        }}
      >
        Micro{" "}
        <Box
          component="span"
          sx={{
            color: "#FFD400",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 2,
              width: "100%",
              height: "6px",
              background:
                "radial-gradient(circle at center, #00FFFF 50%, transparent 70%)",
              borderRadius: "50%",
              transform: "scaleY(0.6)",
            },
          }}
        >
          Courses
        </Box>{" "}
        that helps you scale
      </Typography>

      <Typography
        sx={{
          color: "#D0D3E2",
          fontSize: "1rem",
          mb: 6,
        }}
      >
        Level up with the most-sought after skill.
      </Typography>

      {/* Courses Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {courses.map((course, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              backgroundColor: "#10103A",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
              color: "#fff",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <CardMedia
              component="img"
              image={course.img}
              alt={course.title}
              sx={{ height: 180, objectFit: "cover" }}
            />
            <CardContent sx={{ textAlign: "left", p: 2.5 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 0.5,
                  lineHeight: 1.4,
                }}
              >
                {course.title}
              </Typography>
              <Typography
                sx={{
                  color: "#A6A8C3",
                  fontSize: "0.85rem",
                  mb: 1.2,
                }}
              >
                {course.author}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Rating
                  value={course.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": { color: "#FFD400" },
                  }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    color: "#A6A8C3",
                    fontSize: "0.85rem",
                  }}
                >
                  ({course.reviews})
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "#A6A8C3",
                      fontSize: "0.85rem",
                    }}
                  >
                    {course.oldPrice}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {course.newPrice}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFD400",
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    borderRadius: "6px",
                    textTransform: "none",
                    px: 2.5,
                    py: 0.7,
                    "&:hover": { backgroundColor: "#E6C000" },
                  }}
                >
                  Enroll
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* See More */}
      <Typography
        sx={{
          color: "#D0D3E2",
          mt: 5,
          fontSize: "0.95rem",
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { color: "#FFD400" },
        }}
      >
        See more...
      </Typography>
    </Box>
  );
};

export default MicroCourses;
