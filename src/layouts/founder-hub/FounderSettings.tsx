import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Stack,
  TextField,
  Switch,
  FormControlLabel,
  Container,
  Divider,
} from "@mui/material";
import { motion, type Variants } from "framer-motion";
import DashboardHeading from "./DashboardHeading";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function FounderSettings() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box sx={{ mb: 6 }}>
            <DashboardHeading
              title="Account Settings"
              subtitle="Manage your profile, preferences and security"
              userName="Toluwalase"
              userRole="Founder"
              walletAmount="$2,450"
            />
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Profile Section */}
          <Grid item xs={12} md={8}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Card sx={{ borderRadius: "28px", p: { xs: 3, md: 5 }, border: "1px solid rgba(0,0,0,0.04)" }}>
                <Typography sx={{ fontWeight: 900, fontSize: "1.4rem", color: "#0B0B31", mb: 4 }}>
                  Personal Profile
                </Typography>
                
                <Stack spacing={4}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#64748B", mb: 1 }}>Full Name</Typography>
                      <TextField fullWidth defaultValue="Toluwalase Bakare" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "14px", backgroundColor: "#F8FAFF" }}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#64748B", mb: 1 }}>Email Address</Typography>
                      <TextField fullWidth defaultValue="tolu@apprelab.com" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "14px", backgroundColor: "#F8FAFF" }}} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#64748B", mb: 1 }}>Company Description</Typography>
                      <TextField fullWidth multiline rows={4} defaultValue="Building the next generation of fintech solutions for African SMEs." variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "14px", backgroundColor: "#F8FAFF" }}} />
                    </Grid>
                  </Grid>
                  
                  <Box>
                    <Button variant="contained" sx={{ backgroundColor: "#0B0B31", color: "#FFF", borderRadius: "14px", px: 4, py: 1.5, fontWeight: 800, textTransform: "none" }}>
                      Save Changes
                    </Button>
                  </Box>
                </Stack>
              </Card>

              {/* Security Section */}
              <Card sx={{ borderRadius: "28px", p: { xs: 3, md: 5 }, border: "1px solid rgba(0,0,0,0.04)", mt: 4 }}>
                <Typography sx={{ fontWeight: 900, fontSize: "1.2rem", color: "#0B0B31", mb: 4 }}>
                  Password & Security
                </Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography sx={{ fontWeight: 800, color: "#0B0B31" }}>Two-Factor Authentication</Typography>
                        <Typography sx={{ fontSize: "0.9rem", color: "#64748B" }}>Add an extra layer of security to your account.</Typography>
                    </Box>
                    <Switch defaultChecked />
                </Stack>
                <Divider sx={{ my: 3 }} />
                <Button variant="outlined" sx={{ borderRadius: "12px", textTransform: "none", fontWeight: 700 }}>
                    Change Password
                </Button>
              </Card>
            </motion.div>
          </Grid>

          {/* Preferences Sidebar */}
          <Grid item xs={12} md={4}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Card sx={{ borderRadius: "28px", p: 4, border: "1px solid rgba(0,0,0,0.04)" }}>
                <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0B0B31", mb: 3 }}>
                  Preferences
                </Typography>
                
                <Stack spacing={3}>
                    <FormControlLabel control={<Switch defaultChecked />} label={<Typography sx={{ fontWeight: 600, fontSize: "0.95rem" }}>Email Notifications</Typography>} />
                    <FormControlLabel control={<Switch defaultChecked />} label={<Typography sx={{ fontWeight: 600, fontSize: "0.95rem" }}>Project Updates</Typography>} />
                    <FormControlLabel control={<Switch />} label={<Typography sx={{ fontWeight: 600, fontSize: "0.95rem" }}>Marketing Mails</Typography>} />
                    <FormControlLabel control={<Switch defaultChecked />} label={<Typography sx={{ fontWeight: 600, fontSize: "0.95rem" }}>Talent Recommendations</Typography>} />
                </Stack>
              </Card>

              <Card sx={{ borderRadius: "28px", p: 4, mt: 4, backgroundColor: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.1)" }}>
                <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#DC2626", mb: 2 }}>
                  Danger Zone
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#7F1D1D", mb: 3 }}>
                    Permanently delete your account and all associated data. This action cannot be undone.
                </Typography>
                <Button fullWidth variant="contained" sx={{ backgroundColor: "#DC2626", color: "#FFF", borderRadius: "12px", py: 1.5, fontWeight: 800, textTransform: "none", "&:hover": { backgroundColor: "#B91C1C" } }}>
                    Delete Account
                </Button>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
