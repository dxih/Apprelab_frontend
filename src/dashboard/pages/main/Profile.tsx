import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Profile = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Profile
      </Typography>

      <Card elevation={0} sx={{ borderRadius: 3 }}>
        <CardContent>
          <Stack spacing={4}>
            {/* Avatar Section */}
            <Stack direction="row" spacing={3} alignItems="center">
              <Avatar
                sx={{ width: 90, height: 90 }}
                src="/avatar.png"
              />
              <Stack>
                <Typography fontWeight={600}>PAYYYY</Typography>
                <Typography variant="body2" color="text.secondary">
                  Frontend Developer • Student
                </Typography>

                <Button size="small" sx={{ mt: 1 }}>
                  Change photo
                </Button>
              </Stack>
            </Stack>

            <Divider />

            {/* Profile Form */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="First Name"
                  fullWidth
                  value="Brendan"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Last Name"
                  fullWidth
                  value="Mebuge"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  value="brendanmebson@gmail.com"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Bio"
                  multiline
                  rows={3}
                  fullWidth
                  placeholder="Tell us about your learning journey..."
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" disableElevation>
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
