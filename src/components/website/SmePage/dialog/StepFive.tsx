import * as React from "react";
import { Box, Divider, Typography, Button, Stack, Paper } from "@mui/material";

const StepFive = () => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click(); 
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("Selected file:", file);
    }
  };

  return (
    <Box>
      <Divider sx={{ mt: 1.5, mb: 2 }} />

      <Paper elevation={0} sx={{ bgcolor: "background.paper", p: 0.5 }}>
        <Stack spacing={1.5}>
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "28px",
              letterSpacing: 0,
              color: "#101828",
            }}
          >
            Upload Additional Information{" "}
            <Box
              component="span"
              sx={{
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "28px",
                letterSpacing: 0,
                color: "#101828",
              }}
            >
              (Optional)
            </Box>
          </Typography>

          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: 0,
              color: "#4A5565",
            }}
          >
            Pitch deck / Brief / Doc
          </Typography>

          <Box
            sx={{
              height: { xs: 350, sm: 376 },
              gap: 1.5,
              transform: "rotate(0deg)",
              opacity: 1,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "currentColor",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#fff",
            }}
          >
            <Stack spacing={2} alignItems="center">
              <Box
                component="img"
                src="/cloud.png"
                alt="Description"
                sx={{
                  width: 108,
                  height: 82,
                  gap: 1,
                  transform: "rotate(0deg)",
                  opacity: 1,
                  display: "block",
                }}
              />

              <Typography
                sx={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  color: "#00000099",
                }}
              >
                Upload files not more than 5mb
              </Typography>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />

              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#010A45",
                  "&:hover": { bgcolor: "#010A45" },
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "16px",
                  borderRadius: "10px",
                  px: 3,
                  py: 1.1,
                  boxShadow: "0 10px 18px rgba(1,10,69,0.18)",
                }}
                onClick={handleFileClick} 
              >
                Browse Files
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default StepFive;
