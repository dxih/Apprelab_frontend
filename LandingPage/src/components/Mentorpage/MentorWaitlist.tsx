import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import mentorImage from "../../assets/mentor_waitlist.png"; // <-- Update path if needed

const MentorWaitlist: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #F9FAFF 0%, #FFFFFF 100%)",
        py: { xs: 8, md: 10 },
        px: { xs: 3, sm: 6, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 5, md: 8 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Left Image */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "80%", md: "45%" },
          maxWidth: 480,
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
            borderRadius: "20px",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.08)",
          }}
        />
        {/* Decorative shapes */}
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: -25,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#FFD400",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: -15,
            right: -15,
            width: 60,
            height: 60,
            border: "2px solid #1C1E53",
            borderRadius: "20px",
            transform: "rotate(15deg)",
          }}
        />
      </Box>

      {/* Right Text Section */}
      <Box sx={{ maxWidth: 480 }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.8rem", md: "2rem" },
            color: "#0B0B31",
            mb: 1.2,
            lineHeight: 1.3,
          }}
        >
          Ready to{" "}
          <Box component="span" sx={{ color: "#FFD400" }}>
            Mentor and Earn
          </Box>{" "}
          While Making Impact?
        </Typography>

        <Typography
          sx={{
            color: "#555770",
            mb: 3,
            fontSize: "1rem",
          }}
        >
          Start by joining our waitlist for free!
        </Typography>

        {/* Email Input + Button (Vertical Layout) */}
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
            placeholder="Email"
            fullWidth
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
              "& fieldset": {
                borderColor: "#C8C8D0",
              },
              "&:hover fieldset": {
                borderColor: "#1C1E53",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1C1E53",
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0B0B31",
              color: "white",
              py: 1.4,
              borderRadius: "10px",
              fontWeight: 600,
              textTransform: "none",
              width: "50%",
              fontSize: "0.95rem",
              "&:hover": {
                backgroundColor: "#1C1E53",
              },
            }}
          >
            Join Waitlist
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MentorWaitlist;
