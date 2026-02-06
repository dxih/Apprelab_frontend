import { Box, Typography, Button } from "@mui/material";
import HowItWork from "../../../components/website/SmePage/HowItWork";
import WhoItsFor from "../../../components/website/SmePage/WhoItsFor";
import Trusted from "../../../components/website/SmePage/Trusted";
import TrustedByInnovators from "../../../components/website/SmePage/TrustedByInnovators";
import { useState } from "react";
import StartupDialog from "../../../components/website/SmePage/dialog/StartupDialog";
import ConfirmationDialog from "../../../components/website/SmePage/dialog/Confirmation";

export default function Sme() {
  const [open, setOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { md: 618 },
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 5, md: 5, lg: 18 },
          px: { xs: 3, md: 2, lg: 8 },
          py: { xs: 5, md: 4 },
          background:
            "linear-gradient(180deg, #EEF2FF 0%, #FAF5FF 50%, #FDF2F8 100%)",
        }}
      >
        {/* Hero Left */}
        <Box
          sx={{
            width: { xs: "100%", md: 602 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Pill */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 28,
              px: 2,
              borderRadius: "9999px",
              backgroundColor: "#F3E8FF",
              width: "fit-content",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontSize: 14,
                lineHeight: "20px",
                color: "#7C3AED",
                whiteSpace: "nowrap",
              }}
            >
              🏢 For Startups & SMEs
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              fontSize: { xs: 36, md: 48 },
              lineHeight: { xs: "48px", md: "60px" },
              color: "#101828",
            }}
          >
            Build faster with vetted learners & mentors
          </Typography>

          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "32.5px",
              letterSpacing: 0,
              color: "#4A5565",
            }}
          >
            Post projects, hire talent, and collaborate — all in one place.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
            <>
              <Button
                disableRipple
                sx={{
                  height: 56,
                  width: "313px",
                  px: 3,
                  borderRadius: 2,
                  backgroundColor: "#010A45",
                  color: "#fff",
                  textTransform: "none",
                  boxShadow: "0px 4px 6px -4px #0000001A",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover, &:active": {
                    backgroundColor: "#010A45",
                    boxShadow: "0px 4px 6px -4px #0000001A",
                  },
                }}
                onClick={() => setOpen(true)}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    whiteSpace: "nowrap",
                  }}
                >
                  Get Started as a Startup
                </Typography>
                <Box
                  component="img"
                  src="/arrow.png"
                  alt="arrow"
                  sx={{ width: 16, height: 16 }}
                />
              </Button>

              {/* Startup Dialog */}
              <StartupDialog
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={() => {
                  setOpen(false); 
                  setConfirmationOpen(true); 
                }}
   
              />

              {/* Confirmation Dialog */}
              <ConfirmationDialog
                open={confirmationOpen}
                onClose={() => setConfirmationOpen(false)}
              />
            </>

            <Button
              disableRipple
              sx={{
                height: 56,
                px: 3,
                borderRadius: 2,
                border: "1px solid #010A45",
                color: "#010A45",
                textTransform: "none",
                boxShadow: "0px 4px 6px -4px #0000001A",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { backgroundColor: "transparent" },
                "&:active": {
                  boxShadow: "0px 10px 15px -3px #0000001A",
                },
              }}
            >
              Not a Startup?
              <Box
                component="img"
                src="/arrow2.png"
                alt="arrow"
                sx={{ width: 16, height: 16 }}
              />
            </Button>
          </Box>

          {/* Features */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            {["Free to post", "Vetted talent", "Quick setup"].map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Box
                  component="img"
                  src="/checkGreen.png"
                  alt="check"
                  sx={{ width: 20, height: 20 }}
                />
                <Typography
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: 0,
                    color: "#4A5565",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Hero Right */}
        <Box
          component="img"
          src="/heroImg.png"
          alt="hero visual"
          sx={{
            width: { xs: "100%", md: "559px" },
            height: { xs: "auto", md: "419.25px" },
            opacity: 1,
            objectFit: "contain",
          }}
        />
      </Box>

      <HowItWork />
      <WhoItsFor />
      <Trusted />
      <TrustedByInnovators />
    </>
  );
}
