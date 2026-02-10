import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const labelSx = {
  fontFamily: "Arial, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#364153",
  display: "flex",
  alignItems: "center",
};

const inputSx = {
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

const StepOne = () => {
  return (
    <Box>
      <Divider sx={{ mt: 1.5, mb: 2 }} />

      <Typography fontWeight={600} mb={0.5}>
        Tell us about yourself
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        We'd like to know who's building this amazing thing
      </Typography>

      {/* Founder Name */}
      <Box mb={1}>
        <Typography sx={labelSx} mb={1}>
          Founder Name
          <Typography component="span" sx={{ color: "#fb2c36", ml: 1,  }}>
            *
          </Typography>
        </Typography>

        <TextField
          fullWidth
          placeholder="John Doe"
          variant="outlined"
          sx={inputSx}
        />
      </Box>

      {/* Email */}
      <Box mb={1}>
        <Typography sx={labelSx} mb={1}>
          Email
          <Typography component="span" sx={{ color: "#fb2c36", ml: 1, }}>
            *
          </Typography>
        </Typography>

        <TextField
          fullWidth
          type="email"
          placeholder="john@startup.com"
          variant="outlined"
          sx={inputSx}
        />
      </Box>

      {/* Role */}
      <Box mb={2}>
        <Typography sx={labelSx} mb={1}>
          Role
          <Typography component="span" sx={{ color: "#fb2c36", ml: 1 }}>
            *
          </Typography>
        </Typography>

        <FormControl fullWidth>
          <Select
            defaultValue=""
            displayEmpty
            sx={{
              ...inputSx,
              px:2,
              "& .MuiSelect-select": {
                height: "100%",
                padding: 0,
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            <MenuItem value="" disabled>
              Select your role
            </MenuItem>
            <MenuItem value="option1">Founder</MenuItem>
            <MenuItem value="option2">Co-Founder</MenuItem>
            <MenuItem value="option3">Manager</MenuItem>
            <MenuItem value="option4">Other</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Short Bio */}
      <Box mb={1}>
        <Typography sx={labelSx}mb={1}>
          Short Bio
          <Typography component="span" sx={{ color: "#fb2c36", ml: 1 }}>
            *
          </Typography>
          <Typography component="span" sx={{ ml: 1, color: '#6a7282' }}>
            (0/200)
          </Typography>
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Tell us a bit about yourself and your journey"
          variant="outlined"
          sx={{
            height: 98,
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              padding: "12px 16px",
              "& fieldset": {
                borderTop: "1px solid #D1D5DC",
              },
            },
            "& .MuiInputBase-input": {
              padding: 0,
              overflow: "auto",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default StepOne;

