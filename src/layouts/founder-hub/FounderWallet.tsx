import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  Stack,
  Container,
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const transactions = [
  { id: 1, type: "Project Payment", title: "Mobile App Development", amount: "-$1,200", date: "Oct 24, 2023", status: "Completed" },
  { id: 2, type: "Wallet Deposit", title: "Balance Top-up", amount: "+$2,500", date: "Oct 21, 2023", status: "Completed" },
  { id: 3, type: "Hiring Fee", title: "Talent Matchmaking", amount: "-$150", date: "Oct 18, 2023", status: "Completed" },
  { id: 4, type: "Project Refund", title: "Canceled Data Project", amount: "+$450", date: "Oct 15, 2023", status: "Completed" },
];

export default function FounderWallet() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#F9FAFB", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box sx={{ mb: 6 }}>
            <DashboardHeading
              title="Wallet & Finances"
              subtitle="Securely manage your funds and project payments"
              userName="Toluwalase"
              userRole="Founder"
              walletAmount="$2,450"
            />
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Main Balance Card */}
          <Grid item xs={12} md={7}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Card
                    sx={{
                        borderRadius: "32px",
                        background: "linear-gradient(135deg, #0B0B31 0%, #1C1E53 100%)",
                        color: "#FFF",
                        p: { xs: 3, md: 5 },
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 25px 50px rgba(11, 11, 49, 0.2)"
                    }}
                >
                    {/* Decorative Blobs */}
                    <Box sx={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(59, 130, 246, 0.2)", filter: "blur(60px)" }} />
                    <Box sx={{ position: "absolute", bottom: -20, left: 20, width: 100, height: 100, borderRadius: "50%", background: "rgba(168, 85, 247, 0.2)", filter: "blur(40px)" }} />

                    <Stack spacing={4}>
                        <Box>
                            <Typography sx={{ opacity: 0.7, fontWeight: 600, fontSize: "0.9rem", mb: 1, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                Available Balance
                            </Typography>
                            <Typography sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 900, letterSpacing: "-0.02em" }}>
                                $2,450.00
                            </Typography>
                        </Box>

                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    color: "#0B0B31",
                                    borderRadius: "16px",
                                    fontWeight: 800,
                                    px: 4,
                                    py: 1.5,
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#F1F5F9" }
                                }}
                            >
                                Top Up Wallet
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "rgba(255,255,255,0.2)",
                                    color: "#FFF",
                                    borderRadius: "16px",
                                    fontWeight: 700,
                                    px: 4,
                                    py: 1.5,
                                    textTransform: "none",
                                    "&:hover": { borderColor: "#FFF", backgroundColor: "rgba(255,255,255,0.05)" }
                                }}
                            >
                                Withdraw
                            </Button>
                        </Stack>
                    </Stack>
                </Card>
            </motion.div>

            {/* Transaction List */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ marginTop: "32px" }}>
                <Typography sx={{ fontWeight: 900, fontSize: "1.2rem", color: "#0B0B31", mb: 3 }}>
                    Recent Activity
                </Typography>
                <Stack spacing={2}>
                    {transactions.map((tx) => (
                        <motion.div key={tx.id} variants={fadeInUp}>
                            <Box
                                sx={{
                                    p: 3,
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "24px",
                                    border: "1px solid rgba(0,0,0,0.04)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    transition: "0.3s",
                                    "&:hover": { transform: "translateX(8px)", borderColor: "rgba(59, 130, 246, 0.2)" }
                                }}
                            >
                                <Stack direction="row" spacing={2.5} alignItems="center">
                                    <Box sx={{ width: 48, height: 48, borderRadius: "14px", backgroundColor: tx.amount.startsWith("-") ? "rgba(239, 68, 68, 0.05)" : "rgba(34, 197, 94, 0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Typography sx={{ fontSize: "1.2rem" }}>{tx.amount.startsWith("-") ? "↓" : "↑"}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 800, color: "#0B0B31" }}>{tx.title}</Typography>
                                        <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#94A3B8" }}>{tx.type} • {tx.date}</Typography>
                                    </Box>
                                </Stack>
                                <Typography sx={{ fontWeight: 800, color: tx.amount.startsWith("-") ? "#EF4444" : "#22C55E", fontSize: "1.1rem" }}>
                                    {tx.amount}
                                </Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Stack>
            </motion.div>
          </Grid>

          {/* Quick Actions / Stats Sidebar */}
          <Grid item xs={12} md={5}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Stack spacing={4}>
                    <Card sx={{ borderRadius: "28px", p: 4, border: "1px solid rgba(0,0,0,0.04)" }}>
                        <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0B0B31", mb: 3 }}>
                            Financing Plan
                        </Typography>
                        <Box sx={{ p: 3, borderRadius: "20px", backgroundColor: "#F8FAFF", border: "1px solid rgba(59, 130, 246, 0.05)", mb: 3 }}>
                            <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
                                Current Tier
                            </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: "1.4rem", color: "#0B0B31" }}>
                                Pro Scale Account
                            </Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", color: "#64748B", mb: 4 }}>
                            You have $4,500 in approved project credits remaining for this quarter.
                        </Typography>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{ borderRadius: "14px", py: 1.5, fontWeight: 800, textTransform: "none" }}
                        >
                            View Billing History
                        </Button>
                    </Card>

                    <Card sx={{ borderRadius: "28px", p: 4, background: "#F1F5F9", border: "none" }}>
                        <Typography sx={{ fontWeight: 900, fontSize: "1.1rem", color: "#0B0B31", mb: 2 }}>
                            Need instant funding?
                        </Typography>
                        <Typography sx={{ fontWeight: 500, color: "#64748B", mb: 3 }}>
                            Our Startup Credit program helps founders scale faster with up to $10k in upfront credits.
                        </Typography>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: "#3B82F6",
                                borderRadius: "14px",
                                py: 1.5,
                                fontWeight: 800,
                                textTransform: "none",
                                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)"
                            }}
                        >
                            Apply for Credit
                        </Button>
                    </Card>
                </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
