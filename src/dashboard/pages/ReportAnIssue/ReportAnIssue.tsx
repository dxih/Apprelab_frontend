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
import CancelIcon from "@mui/icons-material/Cancel";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../worklab/WorkLabCard";

const ReportIssue: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Added 'reset' to the useForm hook
  const [state, handleSubmit, reset] = useForm("mojneogo");

  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [fileError, setFileError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      //  Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });

      //  Open Modal
      setOpenModal(true);
      setIsUploading(false);

      //  CLEAN THE UI (The Wise UI Move)
      reset();
      setFileName("");
      setPreviewUrl(null);
      setSelectedFile(null);
      setFileError("");
    }
  }, [state.succeeded, reset]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileError("");

    if (file) {
      if (file.size > 512000) {
        setFileError("File is too large! Please upload an image under 500kb.");
        setFileName("");
        setPreviewUrl(null);
        setSelectedFile(null);
        event.target.value = "";
        return;
      }
      setSelectedFile(file);
      setFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCustomSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setIsUploading(true);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (selectedFile) {
      const imgData = new FormData();
      imgData.append("image", selectedFile);

      try {
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=19d2367294f5e10a59449bfac3ac49b3",
          { method: "POST", body: imgData },
        );
        const result = await response.json();
        if (result.success) {
          data["Screenshot_URL"] = result.data.url;
        } else {
          data["Screenshot_URL"] = "Upload failed";
        }
      } catch (error) {
        console.error("ImgBB Error:", error);
        data["Screenshot_URL"] = "Error during upload";
      }
    } else {
      data["Screenshot_URL"] = "No image attached";
    }

    handleSubmit(data);
  };
  // function to close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/dashboard");
  };
  // button to remove the file
  const handleRemoveFile = () => {
    setFileName("");
    setPreviewUrl(null);
    setSelectedFile(null);
    setFileError("");
  };

  return (
    <PageWrapper>
      <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh", py: 4 }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 4 } }}>
          <Stack spacing={0.5} sx={{ mb: 3 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                onClick={() => navigate(-1)}
                size="small"
                sx={{ p: 0 }}
              >
                <ArrowBackIosNewIcon
                  sx={{ fontSize: "1.2rem", color: "#000" }}
                />
              </IconButton>
              <Typography
                variant="h5"
                onClick={() => navigate(-1)}
                sx={{
                  fontWeight: 800,
                  fontFamily: theme.typography.fontFamily,
                  cursor: "pointer",
                  "&:hover": { opacity: 0.7 },
                }}
              >
                Report An Issue
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: "#001B44", ml: 4, fontWeight: 500 }}
            >
              If something is not working as expected, tell us about it and
              we'll fix it.
            </Typography>
          </Stack>
          {/* form section */}
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
                  <Typography sx={labelStyle(theme)}>
                    Your Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    sx={inputStyle}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Box>

                <Box>
                  <Typography sx={labelStyle(theme)}>Issue Type</Typography>
                  <TextField
                    fullWidth
                    required
                    name="issueType"
                    placeholder="Brief description"
                    sx={inputStyle}
                  />
                </Box>

                <Box>
                  <Typography sx={labelStyle(theme)}>
                    Describe the Issue
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={6}
                    name="description"
                    placeholder="Give a detailed Description..."
                    sx={inputStyle}
                  />
                  <ValidationError
                    prefix="Message"
                    field="description"
                    errors={state.errors}
                  />
                </Box>

                <Box>
                  <Typography sx={labelStyle(theme)}>
                    Add Screenshot (Optional) Max 500kb
                  </Typography>
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
                          "&:hover": { bgcolor: "#E0E4FF", boxShadow: "none" },
                        }}
                      >
                        Upload
                        <input
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={handleFileChange}
                        />
                      </Button>
                    </Stack>

                    {fileError && (
                      <Typography
                        variant="caption"
                        sx={{ color: "red", fontWeight: 600 }}
                      >
                        {fileError}
                      </Typography>
                    )}

                    {previewUrl && !fileError && (
                      <Stack
                        direction="row"
                        alignItems="flex-start"
                        spacing={1}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: "120px",
                            height: "120px",
                          }}
                        >
                          <Box
                            component="img"
                            src={previewUrl}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "12px",
                              border: "1px solid #E5E7EB",
                            }}
                          />
                          {/* The Cancel Button */}
                          <IconButton
                            onClick={handleRemoveFile}
                            size="small"
                            sx={{
                              position: "absolute",
                              top: -10,
                              right: -10,
                              bgcolor: "#fff",
                              boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                              "&:hover": { bgcolor: "#f0f0f0" },
                            }}
                          >
                            <CancelIcon
                              sx={{ color: "red", fontSize: "1.2rem" }}
                            />
                          </IconButton>
                        </Box>

                        <Typography
                          variant="caption"
                          sx={{ color: "#001B44", fontWeight: 600, mt: 1 }}
                        >
                          {fileName}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                </Box>
                {/* SUMBIT BUTTON */}
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
                      "&.Mui-disabled": {
                        bgcolor: "#001B44",
                        color: "#fff",
                        opacity: 0.7,
                      },
                      "&:hover": { bgcolor: "#001230" },
                    }}
                  >
                    {state.submitting || isUploading
                      ? "Processing..."
                      : "Submit Report"}
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Box>
      {/* dialog section */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        disableScrollLock
        PaperProps={{
          sx: {
            borderRadius: "24px",
            p: 4,
            width: "95%",
            maxWidth: "480px",
            textAlign: "center",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            Thanks for the feedback.
          </Typography>
          <Typography sx={{ color: "#666", mb: 4 }}>
            Your report has been submitted. Our team will reach out within 24
            hours.
          </Typography>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            sx={{
              bgcolor: "#001B44",
              color: "#fff",
              width: "100%",
              maxWidth: "250px",
              borderRadius: "10px",
            }}
          >
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
