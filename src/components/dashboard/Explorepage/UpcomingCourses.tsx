import React from "react";
import { Box, Typography, Card, CardMedia, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Images
import uiuxImg from "../../../assets/images/components/microbootcamps/upcoming/uiuxup.png";
import contentImg from "../../../assets/images/components/microbootcamps/upcoming/contentup.png";
import webdevImg from "../../../assets/images/components/microbootcamps/upcoming/webdevup.png";

export const courses = [
  {
    image: uiuxImg,
    title: "UI/UX Design Course",
    desc: "Master human-centered design and build interfaces users love",
    price: "₦120,000",
    oldPrice: "₦180,000",
    discount: "33% off",
    level: "Beginner",
    duration: "Self-paced – 8 Weeks",
    topics: [
      "Design thinking and user research",
      "Wireframing and prototyping with Figma",
      "User journey mapping",
      "Usability testing and feedback loops",
    ],
    audience: [
      "Beginners interested in design",
      "Developers transitioning to UI/UX",
      "Creatives seeking digital skills",
    ],
    benefits: [
      "Certificate of completion",
      "Live mentor feedback",
      "Real-world design projects",
      "Access to design community",
    ],
  },
  {
    image: contentImg,
    title: "Advanced Content Creation Course",
    desc: "Create standout content with strategy, storytelling, and style that sells.",
    price: "₦95,000",
    oldPrice: "₦140,000",
    discount: "32% off",
    level: "Advanced",
    duration: "Self-paced – 4 Weeks",
    topics: [
      "Content strategy & planning",
      "Storytelling for brands",
      "Copywriting frameworks",
      "Content monetization techniques",
    ],
    audience: [
      "Experienced content creators",
      "Digital marketers",
      "Brand managers",
    ],
    benefits: [
      "Brand-ready portfolio pieces",
      "Advanced content templates",
      "1-on-1 review sessions",
      "Certificate of excellence",
    ],
  },
  {
    image: webdevImg,
    title: "Web Development Course",
    desc: "Build responsive, high-performing websites from scratch — the modern way.",
    price: "₦150,000",
    oldPrice: "₦220,000",
    discount: "50% off",
    level: "Beginner",
    duration: "Self-paced – 12 Weeks",
    topics: [
      "HTML, CSS & JavaScript fundamentals",
      "Responsive design with Flexbox & Grid",
      "React basics",
      "Deploying live websites",
    ],
    audience: [
      "Absolute beginners",
      "Students entering tech",
      "Entrepreneurs building products",
    ],
    benefits: [
      "Certificate of completion",
      "Job-ready portfolio project",
      "Access to dev mentorship",
      "Community & networking",
      "GitHub project showcase",
    ],
  },
];

const data = [...courses, ...courses];

const UpcomingCourses: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", backgroundColor: "#0B1A57", py: { xs: 4, md: 5 } }}>
      <Box sx={{ width: "96%", maxWidth: "1100px", mx: "auto", py: { xs: 4, md: 6 } }}>

        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={{ xs: 3, sm: 6 }}
          px={{ xs: 1, sm: 0 }}
        >
          <Typography
            fontSize={{ xs: "1.3rem", sm: "2rem" }}
            fontWeight={700}
            color="#fff"
          >
            Upcoming Courses
          </Typography>

          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: 500,
              color: "#BFBFBF",
              fontSize: { xs: ".75rem", sm: "1rem" },
            }}
            onClick={() => navigate("/dashboard/upcoming-courses")}
          >
            See All &gt;
          </Typography>
        </Box>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2.2, sm: 3, md: 4 },
            px: { xs: 1, sm: 0 },
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              onClick={() => {
                navigate("/dashboard/coursedetail", {
                  state: { course: item },
                });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              sx={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #e3e6ed",
                cursor: "pointer",
                transition: "0.3s",
                bgcolor: "#fff",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box position="relative">
                <CardMedia
                  component="img"
                  height="150"
                  sx={{
                    objectFit: "cover",
                    "@media (max-width: 450px)": {
                      height: "125px",
                    },
                  }}
                  src={item.image}
                />

                <Chip
                  label="● Upcoming"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    background: "#FFD60A",
                    color: "#fff",
                    fontSize: "0.65rem",
                    px: 0.5,
                  }}
                />
              </Box>

              <Box p={{ xs: 1.2, sm: 2 }}>
                <Typography
                  fontWeight={900}
                  fontSize={{ xs: "0.72rem", sm: "1rem" }}
                  lineHeight={1.3}
                >
                  {item.title}
                </Typography>

                <Typography
                  fontSize={{ xs: "0.55rem", sm: "0.9rem" }}
                  color="#555"
                  mb={0.8}
                >
                  {item.desc}
                </Typography>

                <Typography
                  fontSize={{ xs: "0.55rem", sm: "0.9rem" }}
                  color="#777"
                  mb={0.8}
                >
                  {item.duration}
                </Typography>

                <Typography
                  fontSize={{ xs: "0.55rem", sm: "0.9rem" }}
                  color="#777"
                  mb={0.8}
                >
                  <span style={{ color: "#111", fontWeight: 600 }}>
                    {item.price}
                  </span>{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#777",
                    }}
                  >
                    {item.oldPrice}
                  </span>{" "}
                  <Chip label={item.discount} size="small" color="warning" />
                </Typography>

                <Chip
                  label={item.level}
                  sx={{
                    mt: 1,
                    fontSize: { xs: "0.6rem", sm: "0.75rem" },
                    background:
                      item.level === "Advanced"
                        ? "#FFD66B"
                        : item.level === "Beginner"
                        ? "#E9E9E9"
                        : "#E3E6FF",
                  }}
                />
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UpcomingCourses;