import { Box, Typography, Card, CardContent, Container, Grid } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const WhyMentor = () => {
  const cards = [
    {
      icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 40, color: "#3B82F6" }} />,
      title: "Earn While You Teach",
      text: "Turn your skills into income by creating courses or hosting mentorship sessions. You’ll also earn bonuses whenever your students get hired — your impact directly fuels your rewards.",
      color: "#3B82F6"
    },
    {
      icon: <SchoolOutlinedIcon sx={{ fontSize: 40, color: "#FFD60A" }} />,
      title: "Build Your Professional Reputation",
      text: "Showcase your expertise and grow your visibility as a mentor. Each successful mentee and positive review strengthens your personal brand and credibility in your field.",
      color: "#FFD60A"
    },
    {
      icon: <EmojiObjectsOutlinedIcon sx={{ fontSize: 40, color: "#3B82F6" }} />,
      title: "Shape the Next Generation",
      text: "Make a real difference by guiding learners who are eager to grow. Your mentorship helps them gain confidence, build projects, and step into real job opportunities.",
      color: "#3B82F6"
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
        py: { xs: 12, md: 18 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#0B0B31",
                mb: 3,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                }}
              >
                Why mentor on{" "}
                <Box component="span" sx={{ color: "#3B82F6" }}>
                  Apprelab
                </Box>
              </Typography>
            </motion.div>

            {/* Subheading */}
            <motion.div variants={fadeInUp}>
              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 500,
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.7,
                }}
              >
                Share your expertise, build your influence, and earn as you help shape
                the next generation of digital talent globally.
              </Typography>
            </motion.div>
          </Box>

          {/* Cards Row */}
          <Grid container spacing={4}>
            {cards.map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "32px",
                      p: { xs: 4, md: 5 },
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(0,0,0,0.04)",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 40px 80px rgba(0,0,0,0.08)",
                        borderColor: item.color,
                        "& .icon-box": {
                            backgroundColor: item.color,
                            color: "#FFFFFF",
                            "& svg": { color: "#FFFFFF" }
                        }
                      },
                    }}
                  >
                    <CardContent sx={{ p:0 }}>
                      {/* Icon */}
                      <Box
                        className="icon-box"
                        sx={{
                          mb: 4,
                          width: 80,
                          height: 80,
                          borderRadius: "24px",
                          backgroundColor: `${item.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "0.4s ease",
                        }}
                      >
                        {item.icon}
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          mb: 2,
                          color: "#0B0B31",
                          fontSize: "1.4rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: "1rem",
                          lineHeight: 1.8,
                          fontWeight: 500,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhyMentor;
