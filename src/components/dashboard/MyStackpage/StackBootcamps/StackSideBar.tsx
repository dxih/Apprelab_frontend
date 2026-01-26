import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VerifiedIcon from "@mui/icons-material/Verified";
import BookIcon from "@mui/icons-material/Book";
import GroupsIcon from "@mui/icons-material/Groups";
import ReportIcon from "@mui/icons-material/Report";
import { useTheme } from "@mui/material/styles";

const quickActions = [
  { text: "View your certificates", icon: <VerifiedIcon fontSize="small" /> },
  { text: "Book a Mentor", icon: <BookIcon fontSize="small" /> },
  { text: "Join a Community", icon: <GroupsIcon fontSize="small" /> },
  { text: "Report an Issue", icon: <ReportIcon fontSize="small" /> },
];

export default function StackSideBar() {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 1, height: "100%" }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: "#edf1f3",
          borderRadius: "12px",
          border: "1px solid #E9E9E9",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Calendar Placeholder */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Your Calendar
        </Typography>
        {/* You can integrate a calendar library here later */}
        <Box
          sx={{
            mt: 2,
            p: 2,
            mb: 10,
            bgcolor: "#FFFFFF",
            borderRadius: "8px",
            border: "1px solid #E9E9E9",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 1,
            }}
          >
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <Typography
                key={day}
                variant="caption"
                sx={{ textAlign: "center", fontWeight: 600, color: "#666" }}
              >
                {day}
              </Typography>
            ))}
            {(() => {
              const currentDate = new Date(2026, 0, 1);
              const firstDayOfMonth = currentDate.getDay();
              const daysInMonth = 31;

              const calendarDays = [];

              for (let i = 0; i < firstDayOfMonth; i++) {
                calendarDays.push(null);
              }

              for (let i = 1; i <= daysInMonth; i++) {
                calendarDays.push(i);
              }

              return calendarDays.map((day, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    textAlign: "center",
                    fontSize: "12px",
                    bgcolor: day === null ? "#F8F9FA" : "#FFFFFF",
                    borderRadius: "6px",
                    cursor: day === null ? "default" : "pointer",

                    "&:hover":
                      day === null
                        ? {}
                        : { bgcolor: "#F0F7FF", borderColor: "#001B44" },
                  }}
                >
                  {day}
                </Box>
              ));
            })()}
          </Box>
        </Box>

        {/* Quick Actions */}

        <Box sx={{ mt: 4, flexGrow: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Quick Actions
          </Typography>
          <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {quickActions.map((action, index) => (
              <ListItem
                key={index}
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: "8px",

                  border: "1px solid #E9E9E9",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#F0F7FF" },
                }}
              >
                <ListItemIcon sx={{ minWidth: "35px", color: "#001B44" }}>
                  {action.icon}
                </ListItemIcon>
                <ListItemText
                  primary={action.text}
                  primaryTypographyProps={{ fontSize: "13px", fontWeight: 500, fontFamily: theme.typography.fontFamily }}
                />
                <ChevronRightIcon sx={{ color:theme.typography.h3.color, fontSize: "18px" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
}
