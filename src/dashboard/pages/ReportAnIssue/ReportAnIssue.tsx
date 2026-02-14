import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  Paper,
  Stack,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import type { Theme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../worklab/WorkLabCard";

const ReportIssue: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // FORM ID: mojneogo
  const [state, handleSubmit] = useForm("mojneogo");

  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [fileError, setFileError] = useState<string>(""); // Size validation state
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setOpenModal(true);
    }
  }, [state.succeeded]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileError(""); // Reset error on new selection

    if (file) {
      // 500kb check (512,000 bytes)
      if (file.size > 512000) {
        setFileError("File is too large! Please upload an image under 500kb.");
        setFileName("");
        setPreviewUrl(null);
        setSelectedFile(null);
        event.target.value = ""; // Reset input
        return;
      }

      setSelectedFile(file);
      setFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCustomSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUploading(true);

    let finalImageUrl = "No image uploaded";

    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=19d2367294f5e10a59449bfac3ac49b3",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        if (data.success) {
          finalImageUrl = data.data.url;
        }
      } catch (error) {
        console.error("ImgBB Upload Error:", error);
      }
    }

    const formElement = event.currentTarget;
    const formDataForFormspree = new FormData(formElement);
    formDataForFormspree.append("screenshot_url", finalImageUrl);

    handleSubmit(formDataForFormspree);
    setIsUploading(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/dashboard");
  };

  return (
    <PageWrapper>
      <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh", py: 4 }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 4 } }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <IconButton onClick={() => navigate(-1)} size="small">
              <ArrowBackIosNewIcon sx={{ fontSize: "1.2rem", color: "#000" }} />
            </IconButton>
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, fontFamily: theme.typography.fontFamily }}
            >
              Report An Issue
            </Typography>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: "850px",
              mx: "auto",
              p: { xs: 3, md: 8 },
              borderRadius: "32px",
              border: "1px solid #010A4566",
            }}
          >
            <Box component="form" onSubmit={handleCustomSubmit}>
              <Stack spacing={3}>
                <Box>
                  <Typography sx={labelStyle(theme)}>Your Email Address</Typography>
                  <TextField fullWidth required name="email" type="email" placeholder="email@example.com" sx={inputStyle} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </Box>

                <Box>
                  <Typography sx={labelStyle(theme)}>Issue Type</Typography>
                  <TextField fullWidth required name="issueType" placeholder="Brief description" sx={inputStyle} />
                </Box>

                <Box>
                  <Typography sx={labelStyle(theme)}>Describe the Issue</Typography>
                  <TextField fullWidth required multiline rows={6} name="description" placeholder="Details..." sx={inputStyle} />
                  <ValidationError prefix="Message" field="description" errors={state.errors} />
                </Box>

                <Box>
                  <Typography sx={labelStyle(theme)}>Add Screenshot (Optional) Max 500kb</Typography>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          border: "1px dashed #001B44",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CloudUploadIcon sx={{ color: "#001B44" }} />
                      </Box>
                      <Button
                        variant="contained"
                        component="label"
                        sx={{
                          bgcolor: "#E0E4FF",
                          color: "#001B44",
                          textTransform: "none",
                          fontWeight: 600,
                          boxShadow: "none",
                          // Locking the hover color here:
                          "&:hover": { 
                             bgcolor: "#E0E4FF", 
                             boxShadow: "none" 
                          },
                        }}
                      >
                        Upload
                        <input hidden accept="image/*" type="file" onChange={handleFileChange} />
                      </Button>
                    </Stack>

                    {/* File Error Message */}
                    {fileError && (
                      <Typography variant="caption" sx={{ color: "red", fontWeight: 600 }}>
                        {fileError}
                      </Typography>
                    )}

                    {previewUrl && !fileError && (
                      <Stack spacing={1}>
                        <Box
                          component="img"
                          src={previewUrl}
                          sx={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "12px",
                            border: "1px solid #E5E7EB",
                          }}
                        />
                        <Typography variant="caption" sx={{ color: "#001B44", fontWeight: 600 }}>
                          {fileName}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Button
                    type="submit"
                    disabled={state.submitting || isUploading}
                    variant="contained"
                    sx={{
                      bgcolor: "#001B44",
                      color: "#fff",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 700,
                      py: 1.8,
                      width: { xs: "100%", sm: "473px" },
                      borderRadius: "12px",
                      "&:hover": { bgcolor: "#001230" },
                    }}
                  >
                    {state.submitting || isUploading ? "Processing..." : "Submit Report"}
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* SUCCESS MODAL */}
      <Dialog open={openModal} onClose={handleCloseModal} disableScrollLock
        PaperProps={{ sx: { borderRadius: "24px", p: 4, width: "95%", maxWidth: "480px", textAlign: "center" } }}>
        <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Thanks for the feedback.</Typography>
          <Typography sx={{ color: "#666", mb: 4 }}>Your report has been submitted. Our team will reach out within 24 hours.</Typography>
          <Button onClick={handleCloseModal} variant="contained" sx={{ bgcolor: "#001B44", color: "#fff", width: "100%", maxWidth: "250px", borderRadius: "10px" }}>
            Continue Browsing
          </Button>
        </DialogContent>
      </Dialog>
    </PageWrapper>
  );
};

const labelStyle = (theme: Theme) => ({
  fontWeight: 600,
  mb: 1,
  fontSize: "0.9rem",
  fontFamily: theme.typography.fontFamily,
});

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    bgcolor: "#F1F4FF",
    "& fieldset": { borderColor: "transparent" },
    "&.Mui-focused fieldset": { borderColor: "#001B44", borderWidth: "1.5px" },
  },
};

export default ReportIssue;