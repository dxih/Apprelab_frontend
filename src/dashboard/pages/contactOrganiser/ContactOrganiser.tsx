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
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import { useForm, ValidationError } from "@formspree/react";

const ContactOrganizers: React.FC = () => {
  const theme = useTheme();

  // Formspree Hook with your ID
  const [state, handleSubmit] = useForm("mjgonnnb");

  // Scroll to top on success - This handles the "scroll up" behavior
  useEffect(() => {
    if (state.succeeded) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [state.succeeded]);

  return (
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
          maxWidth: "700px",
          p: { xs: 3, md: 5 },
          borderRadius: "24px",
          textAlign: "center",
          bgcolor: "#F4F5FF",
          border: "1px solid #E5E7EB",
        }}
      >
        {state.succeeded ? (
          /* SUCCESS MESSAGE VIEW */
          <Stack spacing={2} sx={{ py: 4 }} alignItems="center">
            <Avatar
              sx={{
                bgcolor: "#001B44",
                width: 60,
                height: 60,
                mb: 2,
              }}
            >
              <span style={{ fontSize: "30px" }}>🎉</span>
            </Avatar>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#001B44",
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Success!
            </Typography>
            <Typography
              sx={{
                color: "#666",
                fontFamily: theme.typography.fontFamily,
                maxWidth: "400px",
              }}
            >
              Thank you for reaching out. Your message has been sent
              successfully. The organizers will get back to you shortly.
            </Typography>
            <Button
              href="/dashboard/mystack"
              variant="text"
              sx={{
                mt: 2,
                fontWeight: 700,
                textTransform: "none",
                color: "#001B44",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Continue learning
            </Button>
          </Stack>
        ) : (
          /* FORM VIEW */
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
              <MessageIcon sx={{ fontSize: 30, color: "white" }} />
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
              Contact Organizers
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#666",
                mb: 4,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Have a question or need an assistance? Send us a message
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2.5} sx={{ textAlign: "left", mb: 4 }}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "0.9rem",
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    Your Name
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    name="name"
                    placeholder="Big Phayyy"
                    variant="outlined"
                    sx={inputStyle(theme)}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "0.9rem",
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    name="email"
                    type="email"
                    placeholder="GlobalPhayyy@gmail.com"
                    variant="outlined"
                    sx={inputStyle(theme)}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "0.9rem",
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    Subject
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    name="subject"
                    placeholder="How can we help"
                    variant="outlined"
                    sx={inputStyle(theme)}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "0.9rem",
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    Message
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Type your message here....."
                    variant="outlined"
                    sx={inputStyle(theme)}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Box>
              </Stack>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Button
                  type="submit"
                  disabled={state.submitting}
                  variant="contained"
                  endIcon={!state.submitting && <SendIcon />} 
                  sx={{
                    bgcolor: "#001B44",
                    color: "#fff",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 700,
                    py: 1.8,
                    width: { xs: "100%", sm: "473px" },
                    borderRadius: "12px",
                    fontFamily: theme.typography.fontFamily,
                    boxShadow: "0 4px 14px 0 rgba(0,27,68,0.3)",
                    "&:hover": { bgcolor: "#001230" },
                    "&.Mui-disabled": {
                      bgcolor: "#001B44",
                      color: "rgba(255, 255, 255, 0.7)", 
                      boxShadow: "none",
                    },
                  }}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

const inputStyle = (theme: any) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    bgcolor: "#FFFFFF", 
    fontFamily: theme.typography.fontFamily,
    "& fieldset": {
      borderColor: "#001B44",
      borderWidth: "1.5px",
    },
    "&:hover fieldset": {
      borderColor: "#001B44",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#001B44",
    },
  },
});

export default ContactOrganizers;
