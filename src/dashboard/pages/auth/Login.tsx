import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

// Images
import loginSideImg from "../../assets/images/auth/loginside1.png";
import logo from "../../../assets/logos/apprelab_logo_dark.png";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 4, md: 12 },
          py: 8,
          position: "relative",
        }}
      >
        {/* Logo */}
<Link
  to="/"
  style={{
    position: "absolute",
    top: 60,
    left: "50%",
    transform: "translateX(-50%)",
    textDecoration: "none",
  }}
>
  <Box
    component="img"
    src={logo}
    alt="Apprelab Logo"
    sx={{
      width: { xs: 250, md: 200 },
    }}
  />
</Link>


        {/* FORM WRAPPER */}
        <Box sx={{ width: "100%", maxWidth: 420 }}>
          {/* Title */}
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#0B0B31",
              mb: 1,
              mt: { xs: 10, md: 0 },
            }}
          >
            Login here
          </Typography>

          <Typography
            sx={{
              fontSize: "1.05rem",
              fontWeight: 400,
              color: "#5C5C77",
              mb: 4,
            }}
          >
            Welcome back you've been missed!
          </Typography>

          {/* Inputs */}
          <TextField
            fullWidth
            placeholder="Email"
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "#F6F7FB",
                borderRadius: "10px",
                height: 56,
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            sx={{
              mb: 1,
              "& .MuiInputBase-root": {
                backgroundColor: "#F6F7FB",
                borderRadius: "10px",
                height: 56,
              },
            }}
          />

          {/* Forgot password */}
          <Typography
            sx={{
              fontSize: ".85rem",
              textAlign: "right",
              color: "#0B0B31",
              fontWeight: 500,
              mb: 3,
              cursor: "pointer",
            }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot your password?
          </Typography>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
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
            Sign in
          </Button>

          {/* No account text */}
          <Typography sx={{ fontSize: ".95rem", textAlign: "center", mb: 3 }}>
            Don’t have an account?{" "}
            <Box
              component="span"
              sx={{
                color: "#0B0B31",
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Box>
          </Typography>

          {/* Divider */}
          <Divider sx={{ my: 3 }}>Or continue with</Divider>

          {/* Social Icons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton
              sx={{
                width: 44,
                height: 44,
                borderRadius: "10px",
                backgroundColor: "#F6F7FB",
              }}
            >
              <GoogleIcon />
            </IconButton>

            <IconButton
              sx={{
                width: 44,
                height: 44,
                borderRadius: "10px",
                backgroundColor: "#F6F7FB",
              }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              sx={{
                width: 44,
                height: 44,
                borderRadius: "10px",
                backgroundColor: "#F6F7FB",
              }}
            >
              <AppleIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE IMAGE */}
      <Box
        component="img"
        src={loginSideImg}
        alt="Login Illustration"
        sx={{
          width: "50%",
          display: { xs: "none", md: "block" },
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Login;
