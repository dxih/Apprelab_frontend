import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Chip,
  useTheme,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QrCode2Icon from "@mui/icons-material/QrCode2";

// Import the Logo image
import Logo from "../../../../assets/images/logos/apprelab_logo_dark.png";

import { userCertificates } from "../../../../Data/CertificateData";
import type { Certificate } from "../../../../Data/CertificateData";
import { CompletedBootcampData } from "../../../../Data/MyStackBootcamp.data";

const CertificateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const certificate = CompletedBootcampData.find((item) => item.id === id);

  const certInfo = userCertificates.find(
    (cert: Certificate) => cert.id.toString() === id,
  );

  if (!certInfo) {
    return (
      <Box
        sx={{
          p: 5,
          textAlign: "center",
          fontFamily: theme.typography.fontFamily,
        }}
      >
        <Typography variant="h5" sx={{fontFamily:theme.typography.fontFamily, mb:3}}>Certificate Not Found</Typography>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        maxWidth: "1400px",
        margin: "0 auto",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{
          color: "#000",
          textTransform: "none",
          fontWeight: 600,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        Back
      </Button>

      <Grid container spacing={3} alignItems="stretch">
        {/* LEFT SIDE: PREVIEW CONTAINER */}
        <Grid item xs={12} md={8.5}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#F3F4FF",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // p: { xs: 3, md: 6 },
              minHeight: "650px",
            }}
          >
            {/* THE ACTUAL CERTIFICATE CARD */}
            <Box
              sx={{
                bgcolor: "#F3F4FF",
                width: "100%",
                maxWidth: "600px",
                aspectRatio: "1.4/1",
                border: "1.5px solid #000000",
                borderRadius: "8px",
                p: 4,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                boxShadow: "2px 2px 15px 0px #00000026", 
                backgroundImage: `
      radial-gradient(#AEB5DF 0.8px, transparent 0.8px), 
      radial-gradient(#AEB5DF 0.8px, #F3F4FF 0.8px)
    `,
                backgroundSize: "14px 14px",
                backgroundPosition: "0 0, 7px 7px",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.03,
                  pointerEvents: "none",
                  backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`, // Adds organic paper fiber
                  borderRadius: "8px",
                },
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="Apprelab Logo"
                sx={{ height: "40px", mb: 1, objectFit: "contain" }}
              />

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  mb: 2,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                CERTIFICATE OF COMPLETION
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  fontStyle: "italic",
                  mb: 1,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                presented to
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#000",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {certInfo.userName || "Oronsaye Precious Toluwalase"}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  fontSize: "0.8rem",
                  mb: 0.5,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                For completing a 2-month Bootcamp on
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  color: "#000",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {certInfo.title}
              </Typography>
            </Box>
            {/* ACTION BUTTONS UNDER CERT */}
            <Stack spacing={2} sx={{ width: "100%", mt: 5, maxWidth: "540px" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#010A45",
                  borderRadius: "12px",
                  textTransform: "none",
                  py: 1.5,
                  fontWeight: 700,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Download PDF
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#000",
                  borderColor: "#000",
                  borderRadius: "12px",
                  textTransform: "none",
                  py: 1.2,
                  fontWeight: 700,
                  borderWidth: "1.5px",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Share
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* RIGHT SIDE: SIDEBAR DETAILS */}
        <Grid item xs={12} md={3.5}>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: "16px",
              borderColor: "#E0E0E0",
              height: "100%",
              boxShadow: "2px 2px 10px 0px #0000000D",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                mb: 4,
                textAlign: "center",
                fontSize: "1.1rem",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Certificate Details
            </Typography>

            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Program Duration:
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    mt: 0.5,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {certInfo.duration || "4 Weeks"}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Issued By:
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    mt: 0.5,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {certInfo.issuer}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Certificate ID
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    mt: 0.5,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {certInfo.certId || `AFR- 6780`}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Skill Tags
                </Typography>
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1.5 }}
                >
                  {(
                    certInfo.tags || [
                      "#HTML",
                      "#Frontend",
                      "#CSS",
                      "#Javascript",
                    ]
                  ).map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: "#F3F4FF",
                        borderRadius: "6px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        fontFamily: theme.typography.fontFamily,
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ pt: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Verification
                </Typography>
                <Stack direction="column" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      p: 1,
                      border: "1px solid #EEE",
                      bgcolor: "#FFF",
                      borderRadius: "8px",
                    }}
                  >
                    <QrCode2Icon sx={{ fontSize: { xs: 150, md: 75 } }} />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: { md: "0.9rem" },
                      color: "#666",
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    Scan QR code to verify certificate
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CertificateDetail;
