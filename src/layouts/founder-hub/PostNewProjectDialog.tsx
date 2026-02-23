import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PostNewProjectDialogContent from "./PostNewProjectDialogContent";

interface PostNewProjectDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (projectData: any) => void;
}

interface ProjectFormData {
  title: string;
  type: string;
  description: string;
  skills: string[];
  duration: string;
  budgetAmount: string;
  budgetType: "fixed" | "milestone" | "hourly";
  applicants: "learners" | "mentors" | "both";
}

const initialFormData: ProjectFormData = {
  title: "",
  type: "",
  description: "",
  skills: [],
  duration: "",
  budgetAmount: "",
  budgetType: "fixed",
  applicants: "both",
};

export default function PostNewProjectDialog({
  open,
  onClose,
  onSubmit,
}: PostNewProjectDialogProps) {
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, type }));
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(formData);
    setFormData(initialFormData);
    onClose();
  };

  const isFormValid = Boolean(
    formData.title.trim() &&
    formData.type &&
    formData.description.trim() &&
    formData.skills.length > 0 &&
    formData.duration.trim() &&
    formData.budgetAmount.trim(),
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: 768,
          height: 1075,
          borderRadius: "16px",
          opacity: 1,
          p: 1,
          boxSizing: "border-box",
          overflowX: "hidden",
        },
      }}
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
      {/* Dialog Header */}
      <DialogTitle sx={{ pb: 1, pt: 3, px: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "32px",
              color: "#101828",
            }}
          >
            Post New Project
          </Typography>
          <CloseIcon
            onClick={onClose}
            sx={{
              cursor: "pointer",
              color: "text.secondary",
              width: 24,
              height: 24,
            }}
          />
        </Box>
      </DialogTitle>

      <Divider sx={{ my: 2, mx: -2 }} />

      {/* Dialog Content */}
      <DialogContent sx={{ px: 3, py: 2 }}>
        <PostNewProjectDialogContent
          formData={formData}
          handleChange={handleChange}
          handleTypeSelect={handleTypeSelect}
        />
      </DialogContent>

      <Divider sx={{ my: 2, mx: -2 }} />
      <DialogActions sx={{ px: 3, pb: 3, pt: 1 }}>
        <Button
          onClick={onClose}
          sx={{
            width: 95.83,
            height: 48,
            textTransform: "none",
            color: "#010A45",
            borderRadius: "10px",
            border: "1px solid #010A45",
            opacity: 1,
            px: 4,
            fontFamily: "Arial",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!isFormValid}
          sx={{
            width: 171.97,
            height: 48,
            gap: 8,
            borderRadius: "10px",
            padding: "12px 32px",
            backgroundColor: "#4F39F6",
            color: "#FFFFFF",
            textTransform: "none",
            boxShadow:
              "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
            fontFamily: "Arial",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
            "&:hover": {
              backgroundColor: "#4F39F6",
              boxShadow:
                "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
            },
          }}
        >
          Publish Project
        </Button>
      </DialogActions>
    </Dialog>
  );
}
