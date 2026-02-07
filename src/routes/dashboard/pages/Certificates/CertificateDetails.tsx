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

import Logo from "../../../../assets/images/logos/apprelab_logo_dark.png";

import { userCertificates } from "../../../../Data/CertificateData";
import type { Certificate } from "../../../../Data/CertificateData";

const CertificateDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  // 🚨 Guard against undefined param
  if (!id) {
    return (
      <Box p={5} textAlign="center">
        <Typography variant="h5">Invalid Certificate</Typography>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
    );
  }

  // ✅ Normalize ID comparison
  const certInfo: Certificate | undefined = userCertificates.find(
    (cert) => String(cert.id) === String(id)
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
        <Typography variant="h5" mb={3}>
          Certificate Not Found
        </Typography>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        maxWidth: "1400px",
        mx: "auto",
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
        }}
      >
        Back
      </Button>

      <Grid container spacing={3}>
        {/* LEFT: CERTIFICATE */}
        <Grid item xs={12} md={8.5}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#F3F4FF",
              borderRadius: "16px",
              minHeight: "650px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 600,
                aspectRatio: "1.4/1",
                border: "1.5px solid #000",
                borderRadius: "8px",
                p: 4,
                textAlign: "center",
                boxShadow: "2px 2px 15px #00000026",
                backgroundImage: `
                  radial-gradient(#AEB5DF 0.8px, transparent 0.8px),
                  radial-gradient(#AEB5DF 0.8px, #F3F4FF 0.8px)
                `,
                backgroundSize: "14px 14px",
                backgroundPosition: "0 0, 7px 7px",
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="Apprelab Logo"
                sx={{ height: 40, mb: 1 }}
              />

              <Typography variant="h4" fontWeight={800} mb={2}>
                CERTIFICATE OF COMPLETION
              </Typography>

              <Typography fontStyle="italic" color="#666">
                presented to
              </Typography>

              <Typography variant="h5" fontWeight={700} my={2}>
                {certInfo.userName}
              </Typography>

              <Typography fontSize="0.8rem" color="#666">
                For completing a bootcamp on
              </Typography>

              <Typography fontSize="1.25rem" fontWeight={800}>
                {certInfo.title}
              </Typography>
            </Box>

            <Stack spacing={2} mt={5} width="100%" maxWidth={540}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#010A45",
                  borderRadius: "12px",
                  py: 1.5,
                  fontWeight: 700,
                }}
              >
                Download PDF
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  py: 1.2,
                  fontWeight: 700,
                  borderColor: "#000",
                  color: "#000",
                }}
              >
                Share
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* RIGHT: DETAILS */}
        <Grid item xs={12} md={3.5}>
          <Paper
            sx={{
              p: 3,
              borderRadius: "16px",
              boxShadow: "2px 2px 10px #0000000D",
            }}
          >
            <Typography fontWeight={800} mb={4} textAlign="center">
              Certificate Details
            </Typography>

            <Stack spacing={3}>
              <Detail label="Program Duration" value={certInfo.duration} />
              <Detail label="Issued By" value={certInfo.issuer} />
              <Detail label="Certificate ID" value={certInfo.certId} />

              <Box>
                <Typography fontWeight={600} fontSize="0.75rem">
                  Skill Tags
                </Typography>
                <Box mt={1.5} display="flex" flexWrap="wrap" gap={1}>
                  {certInfo.tags?.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ bgcolor: "#F3F4FF", fontWeight: 700 }}
                    />
                  ))}
                </Box>
              </Box>

              <Box pt={2} textAlign="center">
                <Typography fontWeight={800} mb={2}>
                  Verification
                </Typography>
                <QrCode2Icon sx={{ fontSize: 120 }} />
                <Typography color="#666" fontSize="0.85rem">
                  Scan to verify certificate
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CertificateDetail;

/* 🔹 Small helper component */
const Detail = ({ label, value }: { label: string; value?: string }) => (
  <Box>
    <Typography fontSize="0.75rem" fontWeight={600}>
      {label}
    </Typography>
    <Typography fontWeight={700}>{value || "—"}</Typography>
  </Box>
);
