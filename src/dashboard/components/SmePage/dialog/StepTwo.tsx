import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const StepTwo = () => {
  const industries = [
    "EdTech",
    "HealthTech",
    "SaaS",
    "Clean Energy",
    "Entertainment",
    "FinTech",
    "E-commerce",
    "AgriTech",
    "Social Impact",
    "Other",
  ];

  const stages = ["Idea", "Prototype", "MVP", "Launched"];

  const inputSx = {
    width: "100%",
    height: 50,
    borderRadius: "10px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      padding: "12px 16px",
      "& fieldset": {
        borderTop: "1px solid #D1D5DC",
      },
    },
    "& .MuiInputBase-input": {
      height: "100%",
      padding: 0,
    },
  };

  const labelSx = {
    fontFamily: "Arial, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: 0,
    color: "#364153",
    display: "flex",
    alignItems: "center",
    mb: 1,
  };

  return (
    <Box>
      <Divider sx={{ mt: 1.5, mb: 2 }} />
      <Typography fontWeight={600} mb={0.5}>
        About your startup
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Help us understand what you're building
      </Typography>

      {/* Startup Name */}
      <Box mb={2}>
        <Typography sx={labelSx}>
          Startup / Project Name
          <Typography component="span" sx={{ color: "#fb2c36", ml: 1 }}>
            *
          </Typography>
        </Typography>
        <TextField placeholder="Acme Inc." variant="outlined" sx={inputSx} />
      </Box>

      {/* Industry / Category */}
      <Typography sx={labelSx}>
        Industry / Category
        <Typography component="span" sx={{ color: "#fb2c36", ml: 1 }}>
          *
        </Typography>
        <Typography component="span" sx={{ ml: 1 }}>
          (Select all that apply)
        </Typography>
      </Typography>

      <Grid container spacing={1} mb={2}>
        {industries.map((item) => (
          <Grid item xs={6} key={item}>
            <FormControlLabel control={<Checkbox />} label={item} />
          </Grid>
        ))}
      </Grid>

      {/* Stage */}
      <Box mb={3}>
        <Typography sx={labelSx}>
          Stage
          <Typography component="span" sx={{ color: "#fb2c36", ml: 1 }}>
            *
          </Typography>
        </Typography>

        <Grid container spacing={2} mb={2}>
          {stages.map((stage) => (
            <Grid item xs={6} key={stage}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  borderColor: "#D1D5DC",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  px: 2,
                  py: 1.5,
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  color: "#364153",
                }}
              >
                {stage}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Size */}
      <Box mb={2}>
        <Typography sx={labelSx}>Team size (Optional)</Typography>

        <FormControl fullWidth>
          <Select
            defaultValue=""
            displayEmpty
            sx={{
              ...inputSx,
              px: 2,
              "& .MuiSelect-select": {
                height: "100%",
                padding: 0,
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            <MenuItem value="" disabled>
              Select team size
            </MenuItem>
            <MenuItem value="option1">Just Me</MenuItem>
            <MenuItem value="option2">2-5 people</MenuItem>
            <MenuItem value="option3">6-10 people</MenuItem>
            <MenuItem value="option4">11-20 people</MenuItem>
            <MenuItem value="option5">20+ people</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default StepTwo;
