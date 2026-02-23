import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { userCertificates } from "../../Data/CertificateData";
import type { Certificate } from "../../Data/CertificateData";
import { PageWrapper } from "../worklab/WorkLabCard";

const CertificatesList: React.FC = () => {
  const theme = useTheme();
  const hasCerts = userCertificates.length > 0;

  return (
    <PageWrapper>
      <Box
        sx={{
          pt: 3,
          maxWidth: "1200px",
          margin: "0 auto",
          px: { xs: 2, md: 0 },
        }}
      >
        {/* HERO SECTION */}
        <Box
          sx={{
            background: "linear-gradient(to right, #3F4CA6 0%, #4B63FF 50%)",
            borderRadius: "16px",
            p: { xs: 3, md: 5 },
            color: "white",
            mb: 6,
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              fontFamily: theme.typography.fontFamily,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {hasCerts 
              ? `Congratulations! You've completed ${userCertificates.length} programs!!`
              : "Your Certificates"}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              color: "white",
              mb: hasCerts ? 10 : 2, 
              fontFamily: theme.typography.fontFamily,
            }}
          >
            {hasCerts 
              ? "Keep learning to unlock more certifications"
              : "You haven't earned any certificates yet. Complete your programs to see them here."}
          </Typography>

          {hasCerts && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, fontFamily: theme.typography.fontFamily }}
              >
                Total Certificates: {userCertificates.length}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#010A45",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "12px",
                  px: 3,
                  fontWeight: 600,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Download All (ZIP)
              </Button>
            </Stack>
          )}
        </Box>

        {/* SECTION TITLE */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            mb: 3,
            color: "#000",
            fontFamily: theme.typography.fontFamily,
          }}
        >
          My Certificates
        </Typography>

        {/* CERTIFICATES GRID OR EMPTY STATE */}
        <Box sx={{ maxWidth: { xs: "100%", md: "75%" }, width: "100%" }}>
          {hasCerts ? (
            <Grid container spacing={3}>
              {userCertificates.map((cert: Certificate) => (
                <Grid item xs={12} md={6} key={cert.id}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: "12px",
                      p: 2,
                      border: "1px solid #000",
                      bgcolor: "#FFFFFF",
                      height: "100%",
                    }}
                  >
                    <CardContent sx={{ display: "flex", gap: 2, p: 0, mb: 3 }}>
                      <CardMedia
                        component="img"
                        image={cert.image}
                        sx={{
                          width: 60,
                          height: 40,
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 700,
                            color: "#000",
                            fontFamily: theme.typography.fontFamily,
                            lineHeight: 1.2,
                          }}
                        >
                          {cert.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#666",
                            fontFamily: theme.typography.fontFamily,
                          }}
                        >
                          by {cert.issuer}
                        </Typography>
                      </Box>
                    </CardContent>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      <Button
                        component={Link}
                        to={`/certificates/${cert.id}`}
                        variant="contained"
                        sx={{
                          bgcolor: "#001B44",
                          textTransform: "none",
                          fontSize: "0.65rem",
                          px: 1.5,
                          borderRadius: "8px",
                          fontFamily: theme.typography.fontFamily,
                          boxShadow: "none",
                          minWidth: "114px",
                        }}
                      >
                        View Certificate
                      </Button>

                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          fontSize: "0.65rem",
                          px: 1.5,
                          borderRadius: "8px",
                          borderColor: "#000",
                          color: "#000",
                          fontFamily: theme.typography.fontFamily,
                          minWidth: "117px",
                          "&:hover": {
                            borderColor: "#333",
                            bgcolor: "rgba(0,0,0,0.04)",
                          },
                        }}
                      >
                        Download PDF
                      </Button>

                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          fontSize: "0.65rem",
                          px: 1.5,
                          borderRadius: "8px",
                          borderColor: "#000",
                          color: "#000",
                          fontFamily: theme.typography.fontFamily,
                          minWidth: "104px",
                          "&:hover": {
                            borderColor: "#333",
                            bgcolor: "rgba(0,0,0,0.04)",
                          },
                        }}
                      >
                        Share
                      </Button>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            /* PROFESSIONAL EMPTY STATE WITH CTA */
            <Box 
              sx={{ 
                p: 6, 
                textAlign: "center", 
                bgcolor: "#F9FAFB", 
                borderRadius: "16px",
                border: "1px dashed #D1D5DB",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2
              }}
            >
              <Typography sx={{ color: "#6B7280", fontFamily: theme.typography.fontFamily, fontWeight: 500 }}>
                No certificates available yet. Your achievements will appear here once you finish a program.
              </Typography>
              <Button
                component={Link}
                to="/dashboard" 
                variant="contained"
                sx={{
                  bgcolor: "#3F4CA6",
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 4,
                  fontWeight: 600,
                  fontFamily: theme.typography.fontFamily,
                  "&:hover": { bgcolor: "#2C3573" }
                }}
              >
                Continue Learning
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default CertificatesList;