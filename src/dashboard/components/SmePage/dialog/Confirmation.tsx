import * as React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 448,
          borderRadius: "16px",
          p: 1,
          textAlign: "center",
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(6px)", 
          backgroundColor: "rgba(0, 0, 0, 0.35)", 
        },
      }}
    >
      <DialogContent sx={{ pt: 6, px: 4 }}>
        {/* Check Icon */}
        <Box
          component="img"
          src="/checkicon.png"
          alt="Success"
          sx={{
            width: 80,
            height: 80,
            mb: 4, 
            mx: "auto",
            display: "block",
            borderRadius: "50%",
          }}
        />

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "30px",
            lineHeight: "36px",
            letterSpacing: 0,
            textAlign: "center",
            mb: 2, 
          }}
        >
          You're All Set! 🎉
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "26px",
            letterSpacing: 0,
            textAlign: "center",
            color: "#4A5565",
            mb: 1.5,
          }}
        >
          Welcome to Apprelab! Your Founder Hub is ready.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "26px",
            letterSpacing: 0,
            textAlign: "center",
            color: "#4A5565",
            mb: 4, 
          }}
        >
          You can start posting projects and connecting with talent immediately.
        </Typography>

        <Stack spacing={2} mt={3}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              height: 48,
              borderRadius: "10px",
              backgroundColor: "#010A45",
              textTransform: "none",
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: 0,
              textAlign: "center",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#020F66",
              },
            }}
          >
            Go to Founder Hub
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{
              height: 48,
              borderRadius: "10px",
              backgroundColor: "#f3f4f6",
              textTransform: "none",
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: 0,
              textAlign: "center",
              color: "#364153",
              "&:hover": {
                backgroundColor: "#f3f4f6",
              },
            }}
          >
            Post Your First Project
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
