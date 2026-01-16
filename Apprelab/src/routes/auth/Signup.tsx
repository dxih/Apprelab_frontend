import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

//Icons
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";


// Images
import signupSideImg1 from "../../assets/images/components/auth/signupside1.png";
import signupSideImg2 from "../../assets/images/components/auth/signupside2.png";
import signupSideImg3 from "../../assets/images/components/auth/signupside3.png";
import signupSideImg4 from "../../assets/images/components/auth/signupside4.png";
import signupSideImg5 from "../../assets/images/components/auth/signupside5.png";
import logo from "../../assets/images/logos/apprelab_logo_dark.png";

const SignUp: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [stage, setStage] = useState(1);
  const [purpose, setPurpose] = useState("");
  const [experience, setExperience] = useState("");
  const [goal, setGoal] = useState("");

  const getSideImage = () => {
    switch (stage) {
      case 2:
        return signupSideImg1;
      case 3:
        return signupSideImg2;
      case 4:
        return signupSideImg3;
      case 5:
        return signupSideImg4;
      default:
        return signupSideImg5;
    }
  };

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
        {/* LOGO */}
        <Box
          component="img"
          src={logo}
          alt="Apprelab Logo"
          sx={{
            position: "absolute",
            top: { xs: 65, md: 30 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: 230, md: 200 },
          }}
        />

        {/* ---------------- STAGE 1: SIGN UP FORM ---------------- */}
        {stage === 1 && (
          <Box sx={{ width: "100%", maxWidth: 420 }}>
            
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#0B0B31",
                mb: 1,
                mt: { xs: 10, md: 0 },
              }}
            >
              Create Account
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#5C5C77", mb: 4 }}>
              Create an account so you can explore
            </Typography>

            <TextField
              fullWidth
              placeholder="First Name"
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
              placeholder="Email/Phone number"
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
              placeholder="Confirm Password"
              type="password"
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  backgroundColor: "#F6F7FB",
                  borderRadius: "10px",
                  height: 56,
                },
              }}
            />

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
              }}
              onClick={() => setStage(2)}
            >
              Sign Up
            </Button>

            <Typography sx={{ textAlign: "center", mb: 3 }}>
              Already have an account?{" "}
            <Box
              component={Link}
              to="/login"
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "inherit",
              }}
            >
              Sign in
            </Box>

            </Typography>

            <Divider sx={{ my: 3 }}>Or continue with</Divider>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <IconButton sx={{ width: 44, height: 44, background: "#F6F7FB" }}>
                <GoogleIcon />
              </IconButton>
              <IconButton sx={{ width: 44, height: 44, background: "#F6F7FB" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ width: 44, height: 44, background: "#F6F7FB" }}>
                <AppleIcon />
              </IconButton>
            </Box>
          </Box>
        )}

        {/* ---------------- STAGE 2: PURPOSE ---------------- */}
        {stage === 2 && (
          <Box sx={{ width: "100%", maxWidth: 420 }}>
                    {/* BACK BUTTON */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 3,
        cursor: "pointer",
        width: "fit-content",
      }}
      onClick={() => setStage(stage - 1)}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4A4C66",
          fontSize: "1rem",
          fontWeight: 900,
        }}
      >
        ←
      </Box>

      <Typography sx={{ fontWeight: 600, color: "#4A4C66",          alignItems: "center",
          justifyContent: "center", display: "flex", mt: { xs: 1, md: 0}  }}>
        Back
      </Typography>
    </Box>
            <Typography sx={{ fontSize: "1.8rem", fontWeight: 700, mb: 4 }}>
              What do you want to use Apprelab for
            </Typography>

            <RadioGroup
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <FormControlLabel value="learn" control={<Radio />} label="Learn" />
              <FormControlLabel value="mentor" control={<Radio />} label="Mentor" />
              <FormControlLabel value="hire" control={<Radio />} label="Hire" />
            </RadioGroup>

            <Button
              fullWidth
              variant="contained"
              disabled={!purpose}
              sx={{
                backgroundColor: "#0B0B31",
                mt: 4,
                py: 1.6,
                borderRadius: "10px",
                "&.Mui-disabled": { backgroundColor: "#DCDCE6" },
              }}
              onClick={() => setStage(3)}
            >
              Next
            </Button>
          </Box>
        )}

{/* ---------------- STAGE 3 WITH PERFECT OUTLINE ICONS ---------------- */}
{stage === 3 && (
  <Box sx={{ width: "100%", maxWidth: 520, mx: "auto" }}>
        {/* BACK BUTTON */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 3,
        cursor: "pointer",
        width: "fit-content",
      }}
      onClick={() => setStage(stage - 1)}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4A4C66",
          fontSize: "1rem",
          fontWeight: 900,
        }}
      >
        ←
      </Box>

      <Typography sx={{ fontWeight: 600, color: "#4A4C66",          alignItems: "center",
          justifyContent: "center", display: "flex" , mt: { xs: 1, md: 0}  }}>
        Back
      </Typography>
    </Box>
    <Typography sx={{ fontSize: "1.8rem", fontWeight: 700, mb: 1 }}>
      Let’s personalize your learning
    </Typography>

    <Typography sx={{ color: "#5C5C77", mb: 4 }}>
      Tell us what you want to learn so we can shape your experience
    </Typography>

    {/* ALWAYS 3 PER ROW */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        rowGap: 2,
        columnGap: { xs: 4, md: 5 },
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {[
        { label: "UI/UX", icon: <DesignServicesOutlinedIcon /> },
        { label: "Web Dev", icon: <TerminalOutlinedIcon /> },
        { label: "Cyber Security", icon: <SecurityOutlinedIcon /> },
        { label: "Data Analysis", icon: <AnalyticsOutlinedIcon /> },
        { label: "Product Design", icon: <ArchitectureOutlinedIcon /> },
        { label: "Frontend Dev", icon: <CodeOutlinedIcon /> },
        { label: "Backend Dev", icon: <StorageOutlinedIcon /> },
        { label: "Mobile Dev", icon: <PhoneIphoneOutlinedIcon /> },
        { label: "AI/ML", icon: <SmartToyOutlinedIcon /> },
        { label: "Database", icon: <StorageOutlinedIcon /> },
        { label: "IOS dev", icon: <PhoneIphoneOutlinedIcon /> },
        { label: "Robotics", icon: <SmartToyOutlinedIcon /> },
      ].map((item, i) => {
        const isActive = selectedSkills.includes(item.label);

        return (
          <Box
            key={i}
            onClick={() => {
              setSelectedSkills(
                isActive
                  ? selectedSkills.filter((s) => s !== item.label)
                  : [...selectedSkills, item.label]
              );
            }}
            sx={{
              background: isActive ? "#E8EDFF" : "#F6F7FB",
              border: isActive ? "2px solid #1A3EF0" : "1.5px solid #E0E0EC",
              padding: "10px 9px",
              width: "100%",
              borderRadius: "12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 1,
              transition: "0.25s ease",
              "&:hover": {
                background: isActive ? "#E2E9FF" : "#F0F2F8",
              },
            }}
          >
            {/* PERFECT OUTLINE ICON CIRCLE */}
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: "2px solid #B9BDD4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#676A87",

                /* Force icon uniform size */
                "& svg": {
                  fontSize: "17px", // SAME SIZE FOR ALL OUTLINE ICONS
                },
              }}
            >
              {item.icon}
            </Box>

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "0.61rem" , md: "0.7rem" },
                color: "#1A1A33",
                paddingLeft: "px", 
              }}
            >
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>

    <Button
      fullWidth
      variant="contained"
      sx={{
        backgroundColor: "#0B0B31",
        mt: 5,
        py: 1.6,
        borderRadius: "10px",
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "none",
      }}
      onClick={() => setStage(4)}
    >
      Next
    </Button>
  </Box>
)}



        {/* ---------------- STAGE 4: EXPERIENCE ---------------- */}
        {stage === 4 && (
          <Box sx={{ width: "100%", maxWidth: 420 }}>
                  {/* BACK BUTTON */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 3,
        cursor: "pointer",
        width: "fit-content",
      }}
      onClick={() => setStage(stage - 1)}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4A4C66",
          fontSize: "1rem",
          fontWeight: 900,
        }}
      >
        ←
      </Box>

      <Typography sx={{ fontWeight: 600, color: "#4A4C66",          alignItems: "center",
          justifyContent: "center", display: "flex", mt: { xs: 2, md: 0} }}>
        Back
      </Typography>
    </Box>
            <Typography sx={{ fontSize: "1.8rem", fontWeight: 700, mb: 4 }}>
              What's your experience level
            </Typography>

            <RadioGroup
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
              <FormControlLabel
                value="intermediate"
                control={<Radio />}
                label="Intermediate"
              />
              <FormControlLabel value="advance" control={<Radio />} label="Advance" />
            </RadioGroup>

            <Button
              fullWidth
              variant="contained"
              disabled={!experience}
              sx={{
                backgroundColor: "#0B0B31",
                mt: 4,
                py: 1.6,
                borderRadius: "10px",
                "&.Mui-disabled": { backgroundColor: "#DCDCE6" },
              }}
              onClick={() => setStage(5)}
            >
              Next
            </Button>
          </Box>
        )}

        {/* ---------------- STAGE 5: GOALS ---------------- */}
        {stage === 5 && (
          <Box sx={{ width: "100%", maxWidth: 420 }}>
                    {/* BACK BUTTON */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 3,
        cursor: "pointer",
        width: "fit-content",
      }}
      onClick={() => setStage(stage - 1)}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4A4C66",
          fontSize: "1rem",
          fontWeight: 900,
        }}
      >
        ←
      </Box>

      <Typography sx={{ fontWeight: 600, color: "#4A4C66",          alignItems: "center",
          justifyContent: "center", display: "flex" }}>
        Back
      </Typography>
    </Box>
            <Typography sx={{ fontSize: "1.8rem", fontWeight: 700, mb: 4 }}>
              What's your learning goal
            </Typography>

            <RadioGroup value={goal} onChange={(e) => setGoal(e.target.value)}>
              <FormControlLabel value="job" control={<Radio />} label="Get a job" />
              <FormControlLabel
                value="project"
                control={<Radio />}
                label="Build a project"
              />
              <FormControlLabel value="advance" control={<Radio />} label="Advance" />
            </RadioGroup>

            <Button
              fullWidth
              variant="contained"
              disabled={!goal}
              sx={{
                backgroundColor: "#0B0B31",
                mt: 4,
                py: 1.6,
                borderRadius: "10px",
                "&.Mui-disabled": { backgroundColor: "#DCDCE6" },
              }}
              onClick={() => alert("DONE – Redirect to dashboard")}
            >
              Continue
            </Button>
          </Box>
        )}
      </Box>

      {/* RIGHT SIDE IMAGE */}
      <Box
        component="img"
        src={getSideImage()}
        alt="Signup Illustration"
        sx={{
          width: "50%",
          display: { xs: "none", md: "block" },
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default SignUp;
