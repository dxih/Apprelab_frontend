import { Box, Divider, TextField, Typography } from "@mui/material";

const StepThree = () => {
  const inputSx = {
    width: "100%",
    borderRadius: "10px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      padding: "12px 16px",
      alignItems: "flex-start",
      "& fieldset": {
        borderTop: "1px solid #D1D5DC",
      },
    },
    "& .MuiInputBase-input": {
      padding: 0,
      overflow: "auto",
      lineHeight: "20px",
    },
  };

  const labelSx = {
    fontFamily: "Arial, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#364153",
    display: "flex",
    alignItems: "center",
    mb: 1,
  };

  return (
    <Box>
      <Divider sx={{ mt: 1.5, mb: 2 }} />

      <Typography fontWeight={600} mb={0.5}>
        What are you building
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Tell us about your vision and goals
      </Typography>

      {/* Project / Business Description */}
      <Box mb={4}>
        <Typography sx={labelSx}>
          Project / Business Description
          <Typography component="span" sx={{ color: "#fb2c36", ml: 1 }}>
            *
          </Typography>
          <Typography component="span" sx={{ ml: 1, color: "#6a7282" }}>
            (0 characters)
          </Typography>
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Describe what your startup does, the problem you're solving, and who your target audience is..."
          variant="outlined"
          sx={inputSx}
        />
      </Box>

      {/* Vision / Goal */}
      <Box mb={2}>
        <Typography sx={labelSx}>
          Vision / Goal
          <Typography component="span" sx={{ ml: 1, color: "#6a7282" }}>
            (Optional)
          </Typography>
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Where do you see this going? What's your long-term vision?"
          variant="outlined"
          sx={inputSx}
        />
      </Box>
    </Box>
  );
};

export default StepThree;
