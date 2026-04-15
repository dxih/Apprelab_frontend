import { Box, Typography, Button, Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { motion, type Variants } from "framer-motion";

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

export default function Hire() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255, 214, 10, 0.05) 0%, transparent 40%)",
      }}
    >
      <Helmet>
        <title>Hire Top Talent | Apprelab</title>
        <meta name="description" content="Connect with Africa's top tech talent. Our hiring platform is designed for speed, quality, and impact. Coming soon." />
        <meta property="og:title" content="Hire Top Talent | Apprelab" />
        <meta property="og:description" content="We're crafting a powerful hiring experience to connect companies with top tech talent tailored for impact." />
      </Helmet>

      <Container maxWidth="sm">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
        >
          {/* === Content === */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            <motion.div variants={fadeInUp}>
                <Box
                    sx={{
                        display: "inline-block",
                        px: 2,
                        py: 0.5,
                        borderRadius: "50px",
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        color: "#3B82F6",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        mb: 3,
                    }}
                >
                    Coming Soon
                </Box>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 900,
                  color: "#0B0B31",
                  mb: 3,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                Hire Africa's Best <Box component="span" sx={{ color: "#3B82F6" }}>Talent</Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#64748B",
                  mb: 5,
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                We’re crafting a powerful hiring experience to connect companies with 
                top-tier tech talent — tailored for speed, quality, and extreme impact.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0B0B31",
                  color: "#FFFFFF",
                  px: 6,
                  py: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(11, 11, 49, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                      backgroundColor: "#15173A",
                      transform: "translateY(-4px)",
                      boxShadow: "0 20px 50px rgba(11, 11, 49, 0.3)",
                  },
                }}
              >
                Notify Me
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
