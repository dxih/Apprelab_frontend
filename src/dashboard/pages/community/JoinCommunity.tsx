import React, { useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { useForm, ValidationError } from "@formspree/react";
import { PageWrapper } from "../worklab/WorkLabCard";

const JoinCommunity: React.FC = () => {
  const theme = useTheme();

  // Formspree Hook
  const [state, handleSubmit] = useForm("mjgonnnb");

  // Scroll to top when state.succeeded changes to true
  useEffect(() => {
    if (state.succeeded) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [state.succeeded]);

  return (
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 4, md: 6 },
          bgcolor: "#FFFFFF",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "90%",
            maxWidth: "650px",
            p: { xs: 3, md: 5 },
            borderRadius: "24px",
            textAlign: "center",
            bgcolor: "#F3F4FF",
            border: "1px solid #E5E7EB",
          }}
        >
          {state.succeeded ? (
            <Stack spacing={2} sx={{ py: 4 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: "#001B44", fontFamily:theme.typography.fontFamily }}
              >
                Success! 🎉
              </Typography>
              <Typography sx={{ color: "#666", fontFamily:theme.typography.fontFamily }}>
                Thank you for joining. We've received your request and will
                reach out shortly.
              </Typography>
              <Button 
                component="a" 
                href="/dashboard" 
                sx={{ 
                    fontWeight: 700, 
                    textTransform: "none", 
                    color: "#001B44", 
                    fontFamily: theme.typography.fontFamily,
                }}
              >
                Back to Dashboard
              </Button>
            </Stack>
          ) : (
            <>
              <Avatar
                sx={{
                  bgcolor: "#001B44",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                  mb: 2,
                }}
              >
                <GroupsIcon sx={{ fontSize: 30 }} />
              </Avatar>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#000",
                  fontFamily: theme.typography.fontFamily,
                  mb: 1,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Join Apprelab community
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  mb: 4,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Connect with innovators and industry leaders
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2.5} sx={{ textAlign: "left", mb: 4 }}>
                  <Box>
                    <Typography
                      sx={{ fontWeight: 600, mb: 1, fontSize: "0.9rem" }}
                    >
                      Full Name
                    </Typography>
                    <TextField
                      fullWidth
                      required
                      id="name"
                      name="name"
                      placeholder="e.g. Oronsaye Precious"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          bgcolor: "#F9FAFB",
                        },
                      }}
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name" 
                      errors={state.errors} 
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{ fontWeight: 600, mb: 1, fontSize: "0.9rem" }}
                    >
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      required
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          bgcolor: "#F9FAFB",
                        },
                      }}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Box>
                </Stack>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  variant="contained"
                  sx={{
                    bgcolor: "#001B44",
                    color: "#fff",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 700,
                    py: 1.8,
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0 4px 14px 0 rgba(0,27,68,0.3)",
                    "&:hover": { bgcolor: "#001230" },
                  }}
                >
                  {state.submitting ? "Joining..." : "Join Now →"}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Box>
    </PageWrapper>
  );
};

export default JoinCommunity;