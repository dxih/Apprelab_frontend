import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import videoThumbnail from "../../assets/images/home_academy.png";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 4,
        py: { xs: 6, md: 10 },
        px: { xs: 2.5, md: 4 },
        background: "linear-gradient(to bottom, #eef1ffa3 0%, #FFFFFF 100%)",
      }}
    >
      {/* ✅ HEADLINE - Optimized for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.5rem" },
            fontWeight: 800,
            color: "text.primary",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Learn. Build.{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            Earn.
          </Box>
        </Typography>
      </motion.div>

      {/* ✅ SUBTITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h5"
          sx={{
            width: { xs: "100%", sm: "90%", md: "85%" },
            color: "text.secondary",
            lineHeight: 1.6,
            maxWidth: "750px",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Africa's first integrated Learn-Work-Earn ecosystem. Gain real-world
          skills, work on real projects, and earn while you learn.
        </Typography>
      </motion.div>

      {/* ✅ BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 3 },
            mt: 2,
            width: { xs: "100%", sm: "auto" },
            minWidth: { sm: "400px" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signup"
            size="large"
            sx={{
              px: { xs: 4, sm: 6 },
              py: 1.8,
              borderRadius: "12px",
              boxShadow: "0 4px 14px 0 rgba(0,87,255,0.39)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(0,87,255,0.23)",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            Get started
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/about"
            size="large"
            sx={{
              px: { xs: 4, sm: 6 },
              py: 1.8,
              borderRadius: "12px",
              bgcolor: "background.paper",
              color: "text.primary",
              borderColor: "divider",
              "&:hover": {
                bgcolor: "action.hover",
                borderColor: "primary.main",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            Learn more
          </Button>
        </Box>
      </motion.div>

      {/* ✅ SINGLE VIDEO BLOCK - Floating Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ width: "100%", maxWidth: "1050px" }}
      >
        <Box
          component={motion.div}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            width: "100%",
            mt: { xs: 4, md: 8 },
            borderRadius: { xs: 4, md: 6 },
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.1)",
            position: "relative",
          }}
        >
          <img
            src={videoThumbnail}
            alt="Academy overview video"
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block",
              objectFit: "cover" 
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;