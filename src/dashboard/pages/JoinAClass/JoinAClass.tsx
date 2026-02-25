import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import {
  Box,
  Typography,
  Grid,
  Stack,
  Button,
  Snackbar,
  Alert,
  Chip,
} from "@mui/material";
import { ongoingBootcamps } from "../../../dashboard/Data/MyStackBootcamp.data";
import LiveSidebar from "../../components/JoinAClass/LiveSessionSideBar";
import ParticipantVideo from "../../components/JoinAClass/ParticipantVideo";
import { PageWrapper } from "../../pages/worklab/WorkLabCard";

const JoinAclass = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); 
  const currentBootcamp = ongoingBootcamps.find((b) => b.id === id);
  const [openToast, setOpenToast] = useState(false);

  // MANAGE PARTICIPANTS STATE HERE
  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: "PhAyyy (You)",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=500",
      isMuted: false,
      isVideoOff: false,
    },
    {
      id: 2,
      name: "Anita Bailley",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
      isMuted: true,
      isVideoOff: false,
    },
    {
      id: 3,
      name: "Mitch Ross",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
      isMuted: false,
      isVideoOff: false,
    },
  ]);

  // toggle mute
  const toggleMute = (participantId: number) => {
    setParticipants((prev) =>
      prev.map((p) =>
        p.id === participantId ? { ...p, isMuted: !p.isMuted } : p,
      ),
    );
  };

  // toggle video
  const toggleVideo = (participantId: number) => {
    setParticipants((prev) =>
      prev.map((p) =>
        p.id === participantId ? { ...p, isVideoOff: !p.isVideoOff } : p,
      ),
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setOpenToast(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // --- SAFETY CHECK START ---
  // This stops the code from running further if the bootcamp doesn't exist
  if (!currentBootcamp) {
    return (
      <PageWrapper>
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6">Session not found.</Typography>
          <Button onClick={() => navigate(-1)} sx={{ mt: 2 }}>Go Back</Button>
        </Box>
      </PageWrapper>
    );
  }
  // --- SAFETY CHECK END ---

  return (
    <PageWrapper>
      <Box
        sx={{
          p: { xs: 1.5, md: 2 },
          bgcolor: "#FFFFFF",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* 1. TOP HEADER */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          sx={{ mb: 4, gap: { xs: 2, sm: 0 } }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
              }}
            >
              LIVE BOOTCAMP SESSION - {currentBootcamp.title}
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ mt: 1, flexWrap: "wrap" }}
            >
              <Chip
                label="LIVE"
                size="small"
                sx={{
                  bgcolor: "#FFD6D6",
                  color: "#FF4D4D",
                  fontWeight: 800,
                  borderRadius: "4px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
              >
                today by {currentBootcamp.displayTimeSession || "4:00 PM"}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontWeight: 600,
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
              >
                Ongoing
              </Typography>
            </Stack>
          </Box>

          <Button
            variant="contained"
            onClick={() => navigate(`/dashboard/mark-attendance/${currentBootcamp.id}`)}
            sx={{
              bgcolor: "#001B44",
              borderRadius: "8px",
              textTransform: "none",
              px: 3,
              width: { xs: "100%", sm: "auto" },
              fontWeight: 600,
            }}
          >
            Click here to mark attendance
          </Button>
        </Stack>

        {/* 2. THE MAIN CONTENT AREA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            gap: 4,
          }}
        >
          {/* LEFT - VIDEOS */}
          <Box sx={{ width: { xs: "100%", sm: "68%" }, flexShrink: 0 }}>
            <Stack spacing={3}>
              <ParticipantVideo
                isInstructor
                name={currentBootcamp.instructor || "Sarah May"}
                img={currentBootcamp.instructorImg ||"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"}
              />

              <Box
                sx={{
                  maxHeight: { xs: "none", sm: "600px" },
                  overflowY: "auto",
                  pr: { xs: 0, sm: 1 },
                  "&::-webkit-scrollbar": { width: "6px" },
                  "&::-webkit-scrollbar-thumb": {
                    bgcolor: "#E0E0E0",
                    borderRadius: "10px",
                  },
                }}
              >
                <Grid container spacing={2}>
                  {participants.map((user) => (
                    <Grid item xs={6} sm={4} key={user.id}>
                      <ParticipantVideo
                        name={user.name}
                        img={user.img}
                        isMuted={user.isMuted}
                        onToggleMute={() => toggleMute(user.id)}
                        isVideoOff={user.isVideoOff}
                        onToggleVideo={() => toggleVideo(user.id)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Box>

          {/* RIGHT - SIDEBAR */}
          <Box
            sx={{
              width: { xs: "100%", sm: "30%" },
              position: { sm: "sticky" },
              top: { sm: 32 },
              flexShrink: 0,
            }}
          >
            <LiveSidebar participants={participants} />
          </Box>
        </Box>

        <Snackbar
          open={openToast}
          autoHideDuration={4000}
          onClose={() => setOpenToast(false)}
        >
          <Alert
            severity="info"
            variant="filled"
            sx={{ bgcolor: "#001B44", borderRadius: "12px" }}
          >
            Oluwatosin just joined the session
          </Alert>
        </Snackbar>
      </Box>
    </PageWrapper>
  );
};

export default JoinAclass;
 