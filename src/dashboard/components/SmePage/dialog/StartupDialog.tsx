import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Typography,
  LinearProgress,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

import arrowLeft from "../../../assets/icons/arrowleft.png";
import arrowRight from "../../../assets/icons/arrowright.png";

interface StartupDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const TOTAL_STEPS = 5;

const StartupDialog: React.FC<StartupDialogProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [step, setStep] = React.useState(1);

  const progress = (step / TOTAL_STEPS) * 100;

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    } else {
      onSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 672,
          borderRadius: "16px",
          bgcolor: "#FFFFFF",
          opacity: 1,
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(6px)", 
          backgroundColor: "rgba(0, 0, 0, 0.35)", 
        },
      }}
    >
      {/* Header */}
      <DialogTitle sx={{ pb: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontWeight={600} fontSize={18}>
            Startup Application
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
        >
          <Typography variant="caption" sx={{ color: "#010A45" }}>
            Step {step} of {TOTAL_STEPS}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {Math.round(progress)}%
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ mt: 1, height: 6, borderRadius: 5 }}
        />
      </DialogTitle>

      {/* Content */}
      <DialogContent sx={{ pt: 2 }}>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        {step === 4 && <StepFour />}
        {step === 5 && <StepFive />}
      </DialogContent>

      {/* Divider before footer */}
      <Divider sx={{ width: "91%", mx: "auto", mt: 2, mb: 2 }} />

      {/* Footer */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={2}
      >
        <Button
          disabled={step === 1}
          onClick={handleBack}
          sx={{
            width: 108.65625,
            height: 48,
            opacity: step === 1 ? 0.4 : 1,
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <img src= {arrowLeft} alt="Back" />
          <Typography fontSize={16}>Back</Typography>
        </Button>

        <Button
          variant="contained"
          sx={{
            width: 126.578125,
            height: 48,
            borderRadius: "10px",
            backgroundColor: "#010A45",
            textTransform: "none",
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            "&:hover": { backgroundColor: "#020F66", boxShadow: "none" },
          }}
          onClick={handleNext}
        >
          <Typography sx={{ color: "#FFFFFF" }}>{step === TOTAL_STEPS ? "Submit" : "Next"}</Typography>
          <img src= {arrowRight} alt="" /> 
        </Button>
      </Box>
    </Dialog>
  );
};

export default StartupDialog;
