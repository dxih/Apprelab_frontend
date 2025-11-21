import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Images
import logo from "../../assets/images/logos/apprelab_logo_dark.png";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // TODO: Integrate with your backend reset endpoint
    console.log("Sending reset link to:", email);
    alert("Reset link sent!");
  };

  return (
    <Box
      sx={{
        width: "97%",
        marginLeft: "4%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="apprelab logo" style={{ height: 50 }} />
        </Link>
      </Box>

      {/* CARD */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "#FFFFFF",
          borderRadius: "14px",
          boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
          p: { xs: 3, sm: 4, md: 5 },
          mt: { xs: 1, sm: 0 },
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.8rem" },
            fontWeight: 700,
            color: "#0B0B31",
            mb: 1,
            textAlign: "center",
          }}
        >
          Forgot Password
        </Typography>

        <Typography
          sx={{
            fontSize: ".95rem",
            fontWeight: 400,
            color: "#5C5C77",
            mb: 4,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Enter your email and we’ll send you a reset link.
        </Typography>

        {/* Email Input */}
        <TextField
          fullWidth
          placeholder="Email address"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          sx={{
            mb: 3,
            "& .MuiInputBase-root": {
              backgroundColor: "#F6F7FB",
              borderRadius: "10px",
              height: 56,
            },
          }}
        />

        {/* Reset Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#0B0B31",
            py: 1.6,
            fontWeight: 600,
            borderRadius: "10px",
            fontSize: "1rem",
            textTransform: "none",
            mb: 2,
            "&:hover": { backgroundColor: "#15173A" },
          }}
        >
          Send Reset Link
        </Button>

        {/* Back to Login */}
        <Typography
          onClick={() => navigate("/login")}
          sx={{
            fontSize: ".95rem",
            textAlign: "center",
            mt: 1,
            cursor: "pointer",
            color: "#0B0B31",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Back to Login
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
