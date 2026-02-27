import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DashboardHeading from "./DashboardHeading";
import {
  projects,
  teamMembers,
  projectChats,
  milestones,
  tasks,
  files,
} from "./FounderData";

const theme = createTheme({
  palette: { primary: { main: "#1a2340" } },
  typography: { fontFamily: "Inter, sans-serif" },
});

// ─── Helpers ────────────────────────────────────────────────────
function MilestoneIcon({ status }: { status: string }) {
  if (status === "done")
    return <CheckCircleIcon sx={{ color: "#00c950", fontSize: 24 }} />;
  if (status === "active")
    return <CircleIcon sx={{ color: "#1976d2", fontSize: 24 }} />;
  return <PanoramaFishEyeIcon sx={{ color: "#bdbdbd", fontSize: 24 }} />;
}

const cardSx = {
  borderRadius: 3,
  border: "1px solid #e8eaf0",
  backgroundColor: "#fff",
  overflow: "hidden",
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
};

const headingTypo = {
  fontFamily: "Arial, sans-serif",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#101828",
};

// ─── Main ────────────────────────────────────────────────────────
export default function FounderCollaboration() {
  const [activeProject, setActiveProject] = useState(projects[0].name);
  const chat = projectChats[activeProject];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
        {/* Header */}
        <Box
          sx={{
            opacity: 1,
            pt: "16px",
            px: "32px",
            pb: "1px",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid",
            borderBottomColor: "divider",
            boxSizing: "border-box",
            mt: 2,
            mb: 4,
          }}
        >
          <DashboardHeading
            title="Collaboration Hub"
            subtitle="Collaborate with your team in real-time"
            userName="Toluwalase"
            userRole="Founder"
            walletAmount="$2,450"
          />
        </Box>

        {/* ── 3-column card layout ── */}
        <Box
          sx={{
            maxWidth: "1060px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: "230px 1fr 300px",
            gap: 2.5,
            alignItems: "start",
          }}
        >
          {/* ══ LEFT: Projects + Team Members ══ */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {/* Projects Card */}
            <Box sx={cardSx}>
              <Box sx={{ px: 2.5, pt: 2.5, pb: 2 }}>
                <Typography sx={{ ...headingTypo, mb: 1.5 }}>
                  Active Projects
                </Typography>
                <List disablePadding dense>
                  {projects.map((p) => {
                    const isActive = activeProject === p.name;
                    return (
                      <ListItem
                        key={p.name}
                        disablePadding
                        onClick={() => setActiveProject(p.name)}
                        sx={{
                          mb: 0.5,
                          width: "100%",
                          borderRadius: 1.5,
                          borderLeft: isActive
                            ? "3px solid #1a2340"
                            : "3px solid transparent",
                          backgroundColor: isActive ? "#f7f8fa" : "transparent",
                          cursor: "pointer",
                          px: 1.5,
                          py: 1,
                          "&:hover": { backgroundColor: "#f7f8fa" },
                          transition: "background-color 0.15s ease",
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="body2"
                              fontWeight={isActive ? 600 : 400}
                              sx={{
                                fontSize: 13,
                                color: isActive ? "#1a2340" : "#555",
                              }}
                            >
                              {p.name}
                            </Typography>
                          }
                        />
                        {p.badge > 0 && (
                          <Box
                            sx={{
                              bgcolor: isActive ? "#1a2340" : "#e0e0e0",
                              color: isActive ? "#fff" : "#555",
                              borderRadius: "50%",
                              width: 22,
                              height: 22,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 11,
                              fontWeight: 700,
                              flexShrink: 0,
                              transition: "background-color 0.15s ease",
                            }}
                          >
                            {p.badge}
                          </Box>
                        )}
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Box>

            {/* Team Members Card */}
            <Box sx={cardSx}>
              <Box sx={{ px: 2.5, pt: 2.5, pb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <img src="/src/assets/team.png" alt="" />
                  <Typography sx={headingTypo}>Team Members</Typography>
                </Box>
                <List disablePadding dense>
                  {teamMembers.map((m) => (
                    <ListItem
                      key={m.name}
                      sx={{ px: 0, py: 1, display: "flex", alignItems: "center", gap: 2 }}
                    >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        badgeContent={
                          m.online ? (
                            <Box
                              sx={{
                                width: 10,
                                height: 10,
                                bgcolor: "#43a047",
                                borderRadius: "50%",
                                border: "2px solid #fff",
                              }}
                            />
                          ) : null
                        }
                      >
                        <Avatar src={m.avatar} sx={{ width: 40, height: 40 }} />
                      </Badge>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                        <Typography
                          sx={{
                            fontFamily: "Arial, sans-serif",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "#101828",
                          }}
                        >
                          {m.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Arial, sans-serif",
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "#6a7282",
                          }}
                        >
                          {m.role}
                        </Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>

          {/* ══ CENTER: Chat (driven by activeProject) ══ */}
          <Box sx={{ ...cardSx, display: "flex", flexDirection: "column", minHeight: 580 }}>
            {/* Chat header */}
            <Box
              sx={{
                px: 3,
                py: 2,
                borderBottom: "1px solid #e8eaf0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={headingTypo}>{chat.projectName}</Typography>
                <Typography
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#6a7282",
                  }}
                >
                  {chat.membersOnline} members online
                </Typography>
              </Box>
              <IconButton size="small">
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Messages */}
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                px: 3,
                py: 2.5,
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              {chat.messages.map((msg) =>
                msg.own ? (
                  <Box key={msg.id} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Box sx={{ maxWidth: "70%" }}>
                      <Box
                        sx={{
                          bgcolor: "#1a2340",
                          color: "#fff",
                          borderRadius: "10px",
                          px: 2.5,
                          py: 1.5,
                        }}
                      >
                        <Typography variant="body2" sx={{ fontSize: "12px", lineHeight: "16px" }}>
                          {msg.text}
                        </Typography>
                      </Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", textAlign: "right", mt: 0.5 }}
                      >
                        {msg.time}
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box key={msg.id} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                    <Avatar src={msg.avatar} sx={{ width: 40, height: 40, flexShrink: 0 }} />
                    <Box sx={{ maxWidth: "70%" }}>
                      <Typography
                        variant="caption"
                        fontWeight={700}
                        sx={{ mb: 0.5, display: "block", color: "#333" }}
                      >
                        {msg.sender}
                      </Typography>
                      <Box sx={{ bgcolor: "#f4f5f7", borderRadius: "10px", px: 2.5, py: 1.5 }}>
                        <Typography variant="body2" sx={{ fontSize: 13, lineHeight: 1.5 }}>
                          {msg.text}
                        </Typography>
                      </Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mt: 0.5 }}
                      >
                        {msg.time}
                      </Typography>
                    </Box>
                  </Box>
                )
              )}
            </Box>

            {/* Input bar */}
            <Box
              sx={{
                px: 2.5,
                py: 2,
                borderTop: "1px solid #e8eaf0",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton size="small" sx={{ color: "#888" }}>
                <img src="/src/assets/file.png" alt="" width={20} height={20} />
              </IconButton>
              <Box
                sx={{
                  flex: 1,
                  border: "1px solid #e0e0e0",
                  borderRadius: "10px",
                  px: 2,
                  py: 0.75,
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#fafafa",
                }}
              >
                <InputBase
                  placeholder="Type a message..."
                  sx={{ flex: 1, fontSize: 13, color: "#333" }}
                />
              </Box>
              <IconButton
                size="small"
                sx={{
                  bgcolor: "#1a2340",
                  color: "#fff",
                  width: 36,
                  height: 36,
                  "&:hover": { bgcolor: "#2d3a5c" },
                  borderRadius: "10px",
                }}
              >
                <img src="/src/assets/sendd.png" alt="" width={20} height={20} />
              </IconButton>
            </Box>
          </Box>

          {/* ══ RIGHT: Milestones + Tasks + Files ══ */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {/* Milestones Card */}
            <Box sx={cardSx}>
              <Box sx={{ px: 2.5, pt: 2.5, pb: 2 }}>
                <Typography sx={{ ...headingTypo, mb: 1.5 }}>Milestones</Typography>
                <List disablePadding dense>
                  {milestones.map((m) => (
                    <ListItem key={m.label} sx={{ px: 0, py: 0.75, alignItems: "center" }}>
                      <ListItemAvatar sx={{ minWidth: 34 }}>
                        <MilestoneIcon status={m.status} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: 13,
                              fontWeight: 500,
                              color: m.status === "pending" ? "#aaa" : "#222",
                            }}
                          >
                            {m.label}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="caption"
                            sx={{ color: m.status === "pending" ? "#ccc" : "text.secondary" }}
                          >
                            {m.amount}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            {/* Tasks Card */}
            <Box sx={cardSx}>
              <Box sx={{ px: 2.5, pt: 2.5, pb: 1.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 1.5 }}>
                  <img src="/src/assets/task.png" alt="" />
                  <Typography sx={headingTypo}>Tasks</Typography>
                </Box>
                <List disablePadding dense>
                  {tasks.map((t) => (
                    <ListItem key={t.label} sx={{ px: 0, py: 0.1, alignItems: "flex-start" }}>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: 14,
                              fontWeight: 400,
                              textDecoration: t.done ? "line-through" : "none",
                              color: t.done ? "#bbb" : "#222",
                              lineHeight: "20px",
                            }}
                          >
                            {t.label}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            sx={{
                              fontSize: 12,
                              fontWeight: 400,
                              textDecoration: t.done ? "line-through" : "none",
                              color: t.done ? "" : "#6a7282",
                              lineHeight: "16px",
                            }}
                          >
                            {t.assignee} • {t.due}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Divider />
              <Box sx={{ px: 2, py: 1 }}>
                <Button
                  startIcon={<AddIcon />}
                  fullWidth
                  size="small"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    color: "#010a45",
                    justifyContent: "center",
                    fontWeight: 400,
                    "&:hover": { bgcolor: "#f5f5f5" },
                  }}
                >
                  Add task
                </Button>
              </Box>
            </Box>

            {/* Files Card */}
            <Box sx={cardSx}>
              <Box sx={{ px: 2.5, pt: 2.5, pb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 1.5 }}>
                  <img src="/src/assets/files.png" alt="" />
                  <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: 14 }}>
                    Files
                  </Typography>
                </Box>
                <List disablePadding dense>
                  {files.map((f) => (
                    <ListItem key={f.name} sx={{ px: 0, py: 0.75 }}>
                      <ListItemAvatar sx={{ minWidth: 38 }}>
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: 1.5,
                            padding: 2,
                            background: "#E0E7FF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Arial, sans-serif",
                              fontWeight: 700,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#101828",
                            }}
                          >
                            {f.type.toUpperCase()}
                          </Typography>
                        </Box>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontFamily: "Arial, sans-serif",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "20px",
                              color: "#101828",
                            }}
                          >
                            {f.name}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            sx={{
                              fontFamily: "Arial, sans-serif",
                              fontWeight: 400,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#6a7282",
                            }}
                          >
                            {f.size} · {f.date}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}