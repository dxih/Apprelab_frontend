import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// ✅ Outlined icons instead of filled ones
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const AboutApprelab = () => {
  const pillars = [
    {
      icon: <SchoolOutlinedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Practical Learning",
      text: "Advance your career and increase earnings as an individual contributor. Build side hustles and generate additional revenue while maintaining your regular role.",
    },
    {
      icon: <BuildOutlinedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Hands On Creation",
      text: "Build real projects with real-world impact. Our platform focuses on bridging the gap between theoretical knowledge and practical execution.",
    },
    {
      icon: <PaidOutlinedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Earning Potentials",
      text: "Unlock multiple revenue streams. From project-based work to employment opportunities, we ensure your skills correlate directly with earnings.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #F6F8FF 0%, #FFFFFF 100%)",
        py: { xs: 8, md: 15 },
      }}
    >
      {/* CONTAINER */}
      <Box
        sx={{
          maxWidth: "1240px",
          mx: "auto",
          px: { xs: 2.5, md: 4 },
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.2rem", md: "3rem" },
              color: "#0F0F57",
              letterSpacing: "-0.01em",
            }}
          >
            Everything You Need to Know About{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              Apprelab
            </Box>
          </Typography>
        </motion.div>

        {/* Sub */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography
            sx={{
              color: "#252859",
              mb: { xs: 6, md: 10 },
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
              opacity: 0.8,
            }}
          >
            Three core pillars powering Apprelab
          </Typography>
        </motion.div>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3, md: 4 },
            justifyContent: "center",
            mb: { xs: 6, md: 10 },
          }}
        >
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  borderRadius: 6,
                  p: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(229, 231, 235, 0.5)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    borderColor: "primary.light",
                    backgroundColor: "white",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 0 }}>
                  <Box
                    sx={{
                      mb: 4,
                      width: 80,
                      height: 80,
                      mx: "auto",
                      borderRadius: "24px",
                      backgroundColor: "rgba(238, 242, 255, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "rotate(10deg) scale(1.1)" },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#0B0B31",
                      fontSize: "1.25rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            sx={{
              backgroundColor: "primary.main",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "12px",
              px: 6,
              py: 1.8,
              fontSize: "1.1rem",
              boxShadow: "0 10px 20px rgba(1, 10, 69, 0.15)",
              "&:hover": { 
                backgroundColor: "primary.dark",
                transform: "translateY(-2px)",
                boxShadow: "0 15px 30px rgba(1, 10, 69, 0.2)",
              },
              transition: "all 0.2s ease",
            }}
          >
            Get started
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};
;

export default AboutApprelab;
