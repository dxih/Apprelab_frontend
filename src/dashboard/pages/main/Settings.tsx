import {
  Card,
  CardContent,
  Container,
  FormControlLabel,
  Switch,
  Stack,
  Typography,
} from "@mui/material";

const Settings = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h5" fontWeight={700} mb={3} mt={4}>
        Settings
      </Typography>

      <Stack spacing={3}>
        {/* Appearance */}
        <Card elevation={0} sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography fontWeight={600} mb={2}>
              Appearance
            </Typography>

            <Stack spacing={2}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Dark Mode"
              />
              <FormControlLabel
                control={<Switch />}
                label="Reduce animations"
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card elevation={0} sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography fontWeight={600} mb={2}>
              Notifications
            </Typography>

            <Stack spacing={2}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Course updates"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Mentor messages"
              />
              <FormControlLabel
                control={<Switch />}
                label="Weekly learning summary"
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card elevation={0} sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography fontWeight={600} mb={2}>
              Privacy
            </Typography>

            <Stack spacing={2}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Show profile to mentors"
              />
              <FormControlLabel
                control={<Switch />}
                label="Allow public portfolio"
              />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default Settings;
