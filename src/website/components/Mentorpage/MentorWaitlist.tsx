import React from "react";
import { Box, Typography, TextField, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import mentorImage from "../../assets/images/mentorwaitlist.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const MentorWaitlist: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
        py: { xs: 10, md: 15 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 500,
                  mx: "auto",
                }}
              >
                <Box
                  component="img"
                  src={mentorImage}
                  alt="Mentor helping student"
                  sx={{
                    width: "100%",
                    zIndex: 2,
                    position: "relative",
                    borderRadius: "40px",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,255,255,0.8)",
                  }}
                />
                {/* Decorative shapes */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -30,
                    left: -30,
                    width: 80,
                    height: 80,
                    borderRadius: "24px",
                    backgroundColor: "#FFD60A",
                    zIndex: 1,
                    opacity: 0.2,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -20,
                    right: -20,
                    width: 120,
                    height: 120,
                    border: "2px solid #3B82F6",
                    borderRadius: "40px",
                    zIndex: 1,
                    opacity: 0.1,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Right Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <Box sx={{ maxWidth: 500, textAlign: { xs: "center", md: "left" }, mx: { xs: "auto", md: 0 } }}>
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: "2.5rem", md: "3.2rem" },
                      color: "#0B0B31",
                      mb: 3,
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Ready to{" "}
                    <Box component="span" sx={{ color: "#3B82F6" }}>
                      Mentor & Earn
                    </Box>{" "}
                    While Making Impact?
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    sx={{
                      color: "#64748B",
                      mb: 5,
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      lineHeight: 1.7,
                    }}
                  >
                    Join our exclusive circle of industry experts. Share your wisdom, 
                    build your legacy, and earn rewards for every success story you help create.
                  </Typography>
                </motion.div>

                {/* Email Input + Button */}
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      gap: 2,
                      width: "100%",
                    }}
                  >
                    <TextField
                      variant="outlined"
                      placeholder="Enter your work email"
                      fullWidth
                      sx={{
                        backgroundColor: "#FFFFFF",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                          p: 1,
                          fontSize: "1.1rem",
                        },
                        "& fieldset": {
                          borderColor: "rgba(0,0,0,0.08)",
                          borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                          borderColor: "#3B82F6",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#3B82F6",
                        },
                      }}
                    />

                    <Button
                      component={Link}
                      to="/signup"
                      variant="contained"
                      sx={{
                        backgroundColor: "#0B0B31",
                        color: "white",
                        py: 2,
                        borderRadius: "16px",
                        fontWeight: 700,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        boxShadow: "0 10px 40px rgba(11, 11, 49, 0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#1C1E53",
                          transform: "translateY(-4px)",
                          boxShadow: "0 20px 50px rgba(11, 11, 49, 0.3)",
                        },
                      }}
                    >
                      Secure My Spot
                    </Button>
                  </Box>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                    <Typography sx={{ mt: 3, color: "#94A3B8", fontSize: "0.85rem", fontWeight: 600, textAlign: { xs:"center", md:"left" } }}>
                        Join 2,500+ mentors already making waves.
                    </Typography>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MentorWaitlist;
