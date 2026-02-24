import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  Avatar,
  Paper,
  CircularProgress,
  Backdrop,
  Alert,
} from "@mui/material";
import { MapPin, Clock, Calendar, Timer, XCircle } from "lucide-react";
import { ongoingBootcamps } from "../../../dashboard/Data/MyStackBootcamp.data";
import { PageWrapper } from "../../pages/worklab/WorkLabCard";

const JoinLobby = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentBootcamp = ongoingBootcamps.find((b) => b.id === id);

  const [isJoining, setIsJoining] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [canJoin, setCanJoin] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    if (!currentBootcamp?.timeSession) {
      setCanJoin(true);
      return;
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const startTime = new Date(currentBootcamp.timeSession).getTime();

      // Calculate End Time: Start Time + 1 hour 30 mins (90 minutes)
      // 90 mins * 60 seconds * 1000 milliseconds
      const durationInMs = 90 * 60 * 1000;
      const endTime = startTime + durationInMs;

      if (isNaN(startTime)) {
        setCanJoin(true);
        clearInterval(timer);
        return;
      }

      // SCENARIO 1: The session is completely finished
      if (now > endTime) {
        setIsEnded(true);
        setCanJoin(false);
        clearInterval(timer);
      }
      // SCENARIO 2: The session is currently happening
      else if (now >= startTime && now <= endTime) {
        setIsEnded(false);
        setCanJoin(true);
        setTimeLeft("00:00:00");
      }
      // SCENARIO 3: The session is in the future (Countdown)
      else {
        setIsEnded(false);
        setCanJoin(false);
        const difference = startTime - now;
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(
          `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentBootcamp]);

  const handleJoinSession = () => {
    if (!canJoin || isEnded) return;

    setIsJoining(true);
    setTimeout(() => {
      navigate(`/bootcamp/${id}/live-session`);
    }, 2500);
  };

  if (!currentBootcamp)
    return (
      <PageWrapper>
        <Typography>Not Found</Typography>
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <Box sx={{ p: { xs: 2, md: 4 }, minHeight: "80vh" }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
          LIVE BOOTCAMP SESSION - {currentBootcamp.title}
        </Typography>

        {/* STATUS ALERTS */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          {isEnded ? (
            <Alert
              severity="error"
              icon={<XCircle size={20} />}
              sx={{ borderRadius: "12px", fontWeight: 600, bgcolor: "#FFF5F5" }}
            >
              This session has ended. You can no longer join the live room.
            </Alert>
          ) : !canJoin ? (
            <Alert
              severity="info"
              icon={<Timer size={20} />}
              sx={{
                borderRadius: "12px",
                bgcolor: "#E3F2FD",
                color: "#01579B",
                fontWeight: 600,
              }}
            >
              The session hasn't started. Countdown: <strong>{timeLeft}</strong>
            </Alert>
          ) : null}
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Chip
              label={isEnded ? "FINISHED" : canJoin ? "LIVE NOW" : "UPCOMING"}
              size="small"
              sx={{
                bgcolor: isEnded ? "#EEEEEE" : canJoin ? "#FFD6D6" : "#E0E0E0",
                color: isEnded ? "#757575" : canJoin ? "#FF4D4D" : "#666",
                fontWeight: 800,
              }}
            />
            <Typography variant="body2" sx={{ color: "#666" }}>
              Scheduled Time: {currentBootcamp.displayTime || "4:00 PM"}
            </Typography>
          </Stack>
        </Stack>

        <Paper
          elevation={0}
          sx={{
            bgcolor: "#F5F7FF",
            borderRadius: "24px",
            p: { xs: 3, md: 6 },
            textAlign: "center",
            opacity: isEnded ? 0.6 : 1,
            border: canJoin ? "2px solid #001B44" : "2px solid transparent",
            transition: "0.3s",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>
            {currentBootcamp.title} - Practical Class
          </Typography>

          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "16px",
              p: 3,
              textAlign: "left",
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
            }}
          >
            <Stack spacing={2.5}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  src={currentBootcamp.instructorImg}
                  sx={{ width: 32, height: 32 }}
                />
                <Typography sx={{ fontWeight: 600 }}>
                  Instructor: {currentBootcamp.instructor}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ color: "#1a1a1a" }}
              >
                <MapPin size={20} />
                <Typography variant="body2">Online Live Room</Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ color: "#1a1a1a" }}
              >
                <Clock size={20} />
                <Typography variant="body2">
                  Duration: {currentBootcamp.durationLiveSession}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ color: "#1a1a1a" }}
              >
                <Calendar size={20} />
                <Typography variant="body2">
                  {currentBootcamp.classStep}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          {/* Button for submission */}
          <Button
            variant="contained"
            fullWidth
            disabled={!canJoin || isJoining || isEnded}
            onClick={handleJoinSession}
            sx={{
              bgcolor: isEnded ? "#999" : "#001B44",
              color: "#fff",
              py: 1.8,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 700,
              maxWidth: "800px",
              fontSize: "1rem",
              "&:disabled": {
                bgcolor: "#CCCCCC",
                color: "#888888",
              },
            }}
          >
            {isJoining
              ? "Connecting..."
              : isEnded
                ? "Session Ended"
                : canJoin
                  ? "Join Live Session"
                  : `Starts in ${timeLeft}`}
          </Button>
        </Paper>
      </Box>

      {/* FETCHING OVERLAY */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: 9999,
          flexDirection: "column",
          gap: 2,
          bgcolor: "rgba(0, 27, 68, 0.98)",
        }}
        open={isJoining}
      >
        <CircularProgress color="inherit" thickness={5} size={60} />
        <Typography variant="h6">Connecting to Live Room...</Typography>
        <Typography variant="body2" sx={{ color: "#ddd" }}>
          Please wait while we set things up for you.
        </Typography>
      </Backdrop>
    </PageWrapper>
  );
};

export default JoinLobby;
