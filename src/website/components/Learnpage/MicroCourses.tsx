import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

import learncourse_img1 from "../../assets/images/course1.png";
import learncourse_img2 from "../../assets/images/course2.png";
import learncourse_img3 from "../../assets/images/course3.png";
import learncourse_img4 from "../../assets/images/course4.png";
import learncourse_img5 from "../../assets/images/course5.png";
import learncourse_img6 from "../../assets/images/course6.png";
import learncourse_img7 from "../../assets/images/course7.png";
import learncourse_img8 from "../../assets/images/course8.png";

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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0B0B31",
        color: "#fff",
        py: { xs: 10, md: 15 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            Micro{" "}
            <Box
              component="span"
              sx={{
                color: "#FFD60A",
                position: "relative",
              }}
            >
              Courses
            </Box>{" "}
            to scale your skills
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Level up with the most-sought after skills in the tech ecosystem.
          </Typography>
        </Box>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {courses.map((course, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={course.img}
                    alt={course.title}
                    sx={{
                      height: 200,
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      ".MuiCard-root:hover &": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        mb: 1,
                        lineHeight: 1.4,
                        color: "#F8FAFC",
                      }}
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#94A3B8",
                        fontSize: "0.875rem",
                        mb: 2,
                        fontWeight: 500,
                      }}
                    >
                      {course.author}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Rating
                        value={course.rating}
                        precision={0.5}
                        readOnly
                        size="small"
                        sx={{
                          "& .MuiRating-iconFilled": { color: "#FFD60A" },
                          "& .MuiRating-iconEmpty": { color: "rgba(255,255,255,0.1)" },
                        }}
                      />
                      <Typography
                        sx={{
                          ml: 1,
                          color: "#64748B",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        ({course.reviews})
                      </Typography>
                    </Box>

                    <Box sx={{ mt: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Box>
                        <Typography
                          sx={{
                            textDecoration: "line-through",
                            color: "#64748B",
                            fontSize: "0.8rem",
                            mb: -0.5,
                          }}
                        >
                          {course.oldPrice}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#F8FAFC",
                            fontWeight: 800,
                            fontSize: "1.2rem",
                          }}
                        >
                          {course.newPrice}
                        </Typography>
                      </Box>

                      <Button
                        component={Link}
                        to="/signup"
                        variant="contained"
                        sx={{
                          backgroundColor: "#FFD60A",
                          color: "#0B0B31",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          borderRadius: "10px",
                          textTransform: "none",
                          px: 3,
                          py: 1,
                          "&:hover": {
                            backgroundColor: "#FFE045",
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        Enroll
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* See More Link */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Button
            component={Link}
            to="/signup"
            sx={{
              color: "#94A3B8",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "underline",
              "&:hover": {
                color: "#FFD60A",
                backgroundColor: "transparent",
              },
            }}
          >
            Explore all micro-courses →
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MicroCourses;
