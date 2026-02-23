import React from "react";
import {
  Box,
  Stack,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Chip,
} from "@mui/material";

interface PostNewProjectDialogContentProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeSelect: (type: string) => void;
}

const skillsList = [
  "React",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Python",
  "Node js",
  "Firebase",
  "Figma",
  "UI/UX",
  "Data Analysis",
];

const projectTypes = ["Design", "Development", "Data", "Business"];
const applicantsList = ["Learners", "Mentors", "Both"];

export default function PostNewProjectDialogContent({
  formData,
  handleChange,
  handleTypeSelect,
}: PostNewProjectDialogContentProps) {
  return (
    <Stack spacing={3}>
      {/* Project Title */}
      <Box>
        <label
          htmlFor="project-title"
          style={{
            display: "block",
            fontFamily: "Arial",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "#364153",
            marginBottom: 4,
          }}
        >
          Project Title
          <span style={{ color: "#fb2c36", marginLeft: 4 }}>*</span>
        </label>

        <TextField
          id="project-title"
          fullWidth
          placeholder="e.g. Mobile App Development"
          name="title"
          value={formData.title}
          onChange={handleChange}
          variant="outlined"
          size="small"
          sx={{
            height: "50px",
            opacity: 1,
            "& .MuiOutlinedInput-root": {
              height: "50px",
              borderRadius: "10px",
              padding: "12px 16px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
            },
            "& input": {
              padding: 0,
            },
          }}
        />
      </Box>

      {/* Project Type */}
      <Box>
        <label
          htmlFor="project-type"
          style={{
            display: "block",
            fontFamily: "Arial",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "#364153",
            marginBottom: 4,
          }}
        >
          Project Type
          <span style={{ color: "#fb2c36", marginLeft: 4 }}>*</span>
        </label>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {projectTypes.map((type) => (
            <Chip
              key={type}
              label={type}
              clickable
              onClick={() => handleTypeSelect(type)}
              sx={{
                borderRadius: "10px",
                bgcolor: formData.type === type ? "#010a45" : "grey.200",
                color: formData.type === type ? "white" : "text.primary",
                fontWeight: formData.type === type ? 600 : 400,
                px: 2.5,
                py: 3,
                "&:hover": {
                  bgcolor: formData.type === type ? "#010a45" : "grey.200",
                },
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Description */}
      <Box>
        <label
          htmlFor="project-description"
          style={{
            display: "block",
            fontFamily: "Arial",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "#364153",
            marginBottom: 4,
          }}
        >
          Description
          <span style={{ color: "#fb2c36", marginLeft: 4 }}>*</span>
          <span style={{ color: "#6A7282", marginLeft: 4 }}>
            ({formData.description.length} characters)
          </span>
        </label>

        <TextField
          id="project-description"
          fullWidth
          multiline
          rows={4}
          placeholder="Describe what you need, the problem you're solving, and any specific requirements..."
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          sx={{
            height: "122px",
            "& .MuiOutlinedInput-root": {
              height: "122px",
              borderRadius: "10px",
              padding: "12px 16px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
            },
            "& textarea": {
              padding: 0,
            },
            "& input::placeholder, & textarea::placeholder": {
              fontFamily: "Arial",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: 0,
            },
          }}
        />
      </Box>

      {/* Required Skills */}
      <Box>
        <label
          htmlFor="project-skills"
          style={{
            display: "block",
            fontFamily: "Arial",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "#364153",
            marginBottom: 4,
          }}
        >
          Required Skills
          <span style={{ color: "#fb2c36", marginLeft: 4 }}>*</span>
          <span style={{ color: "#6A7282", marginLeft: 4 }}>
            (Select all that apply)
          </span>
        </label>

        <FormGroup id="project-skills">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: "12px",
              rowGap: "-5px",
            }}
          >
            {skillsList.map((skill) => (
              <FormControlLabel
                key={skill}
                control={
                  <Checkbox
                    checked={formData.skills.includes(skill)}
                    onChange={handleChange}
                    name="skills"
                    value={skill}
                    size="small"
                  />
                }
                label={<Typography variant="body2">{skill}</Typography>}
                sx={{ margin: 0 }}
              />
            ))}
          </Box>
        </FormGroup>
      </Box>

      {/* Duration */}
      <Box>
        <label
          htmlFor="project-duration"
          style={{
            display: "block",
            fontFamily: "Arial",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: 0,
            color: "#364153",
            marginBottom: "4px",
          }}
        >
          Duration
          <span
            style={{
              color: "#fb2c36",
              marginLeft: "4px",
            }}
          >
            *
          </span>
        </label>
        <TextField
          id="project-duration"
          fullWidth
          placeholder="e.g. 3 months"
          name="title"
          value={formData.title}
          onChange={handleChange}
          variant="outlined"
          size="small"
          sx={{
            height: "50px",
            opacity: 1,
            "& .MuiOutlinedInput-root": {
              height: "50px",
              borderRadius: "10px",
              padding: "12px 16px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
            },
            "& input": {
              padding: 0,
            },
          }}
        />
      </Box>

      {/* Budget */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <label
            htmlFor="project-budget"
            style={{
              display: "block",
              fontFamily: "Arial",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: 0,
              color: "#364153",
              marginBottom: "4px",
            }}
          >
            Budget Amount
            <span
              style={{
                color: "#fb2c36",
                marginLeft: "4px",
              }}
            >
              *
            </span>
          </label>
          <TextField
            id="project-budget"
            fullWidth
            placeholder="$ 1000"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{
              height: "50px",
              opacity: 1,
              "& .MuiOutlinedInput-root": {
                height: "50px",
                borderRadius: "10px",
                padding: "12px 16px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: "1px",
              },
              "& input": {
                padding: 0,
              },
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <label
            htmlFor="project-budget-type"
            style={{
              display: "block",
              fontFamily: "Arial",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: 0,
              color: "#364153",
              marginBottom: "4px",
            }}
          >
            Budget Type
            <span
              style={{
                color: "#fb2c36",
                marginLeft: "4px",
              }}
            >
              *
            </span>
          </label>
          <TextField
            id="project-budget-type"
            fullWidth
            name="budgetAmount"
            value={formData.budgetAmount}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{
              height: "50px",
              opacity: 1,
              "& .MuiOutlinedInput-root": {
                height: "50px",
                borderRadius: "10px",
                padding: "12px 16px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: "1px",
              },
              "& input": {
                padding: 0,
              },
            }}
          />
        </Box>
      </Box>

      {/* Applicants */}
      <Box>
        <label
          htmlFor="project-applicants"
          style={{
            display: "block",
            fontFamily: "Arial",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "#364153",
            marginBottom: 4,
          }}
        >
          Who can apply?
          <span style={{ color: "#fb2c36", marginLeft: 4 }}>*</span>
        </label>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {applicantsList.map((type) => (
            <Chip
              key={type}
              label={type}
              clickable
              onClick={() => handleTypeSelect(type)}
              sx={{
                borderRadius: "10px",
                bgcolor: formData.type === type ? "#010a45" : "grey.200",
                color: formData.type === type ? "white" : "text.primary",
                fontWeight: formData.type === type ? 600 : 400,
                px: 5.6,
                py: 3,
                "&:hover": {
                  bgcolor: formData.type === type ? "#010a45" : "grey.200",
                },
              }}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
