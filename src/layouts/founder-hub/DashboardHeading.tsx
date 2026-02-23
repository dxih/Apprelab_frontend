import { Box, Typography, Avatar } from "@mui/material";

interface DashboardHeadingProps {
  title: string;
  subtitle: string;
  userName: string;
  userRole: string;
  walletAmount: string;
}

export default function DashboardHeading({
  title,
  subtitle,
  userName,
  userRole,
  walletAmount,
}: DashboardHeadingProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      {/* Left */}
      <Box>
        <Typography
          sx={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "32px",
            color: "#101828",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Arial",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#4A5565",
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Right */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Notification */}
        <Box sx={{ position: "relative", width: 15, height: 12.5 }}>
          <Box
            component="img"
            src="/src/assets/bell.png"
            sx={{ width: 15, height: 12.5 }}
          />
          <Box
            sx={{
              position: "absolute",
              top: -2,
              right: 0,
              width: 8,
              height: 8,
              bgcolor: "#fb2c36",
              borderRadius: "50%",
              border: "1px solid #fff",
            }}
          />
        </Box>

        {/* Wallet */}
        <Box
          sx={{
            height: 40,
            px: "16px",
            borderRadius: "10px",
            backgroundColor: "#EEF2FF",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor:'pointer'
          }}
        >
          <Box component="img" src="/src/assets/wallet.png" sx={{ width: 16 }} />
          <Typography
            sx={{
              fontFamily: "Arial",
              fontSize: "16px",
              color: "#010a45",
            }}
          >
            {walletAmount}
          </Typography>
        </Box>

        {/* User */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box>
            <Typography fontSize={14} color="#101828">
              {userName}
            </Typography>
            <Typography fontSize={12} color="#4A5565" textAlign="right">
              {userRole}
            </Typography>
          </Box>

          <Avatar src="/src/assets/dp.png" sx={{ width: 40, height: 40 }} />
        </Box>
      </Box>
    </Box>
  );
}
