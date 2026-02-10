import * as React from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const BRAND_BLUE = "#010A45";

type Option = {
  id: string;
  title: string;
  subtitle: string;
};

const OPTIONS: Option[] = [
  {
    id: "hire",
    title: "Hire learners",
    subtitle: "Find talented developers and designers",
  },
  {
    id: "mentors",
    title: "Find mentors",
    subtitle: "Get guidance from experienced professionals",
  },
  {
    id: "mvp",
    title: "Build MVP",
    subtitle: "Need help building your minimum viable product",
  },
  {
    id: "pilot",
    title: "Run pilot project",
    subtitle: "Test out collaboration on a small project first",
  },
  {
    id: "long",
    title: "Long-term collaboration",
    subtitle: "Looking for ongoing partnership",
  },
];

function OptionCard({
  checked,
  onChange,
  title,
  subtitle,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  title: string;
  subtitle: string;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "2px solid",
        borderColor: checked ? BRAND_BLUE : "grey.300",
        px: 2.25,
        py: 2,
        borderRadius: "10px",
        opacity: 1,
        height: 82,
      }}
    >
      <FormControlLabel
        sx={{ m: 0, width: "100%", alignItems: "flex-start" }}
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            icon={
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "4px",
                  border: `2px solid ${BRAND_BLUE}`,
                }}
              />
            }
            checkedIcon={
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "4px",
                  backgroundColor: BRAND_BLUE,
                }}
              />
            }
            sx={{
              p: 0,
              mr: 2,
              mt: "2px",
            }}
          />
        }
        label={
          <Box>
            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0px",
                color: "#101828",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0px",
                color: "#4A5565",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        }
      />
    </Paper>
  );
}

const StepFour = () => {
  const [selected, setSelected] = React.useState<Record<string, boolean>>({
    hire: true,
    mentors: false,
    mvp: true,
    pilot: false,
    long: false,
  });

  const toggle = (id: string, next: boolean) => {
    setSelected((prev) => ({
      ...prev,
      [id]: next,
    }));
  };

  return (
    <Box>
      <Divider sx={{ mt: 1.5, mb: 2 }} />

      <Typography fontWeight={600} mb={0.5}>
        What you want from apprelab
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Select all that apply
      </Typography>

      <Stack spacing={2}>
        {OPTIONS.map((option) => (
          <OptionCard
            key={option.id}
            checked={Boolean(selected[option.id])}
            onChange={(next) => toggle(option.id, next)}
            title={option.title}
            subtitle={option.subtitle}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default StepFour;
