import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  Paper,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { ongoingBootcamps } from "../../../dashboard/Data/MyStackBootcamp.data";
import { PageWrapper } from "../../pages/worklab/WorkLabCard";

const MarkAttendance = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentBootcamp = ongoingBootcamps.find((b) => b.id === id);

  // LOCAL STATE: Track if attendance is already recorded for this specific time slot
  const [hasAlreadyMarked, setHasAlreadyMarked] = useState(false);

  // FORMSPREE: Integration using your project ID
  const [state, handleSubmit] = useForm("mjgonnnb");

  // DATE & TIME LOGIC
  const today = new Date();
  const dateKey = today.toISOString().split("T")[0];

  /** * DYNAMIC STORAGE KEY:
   * We include currentBootcamp.displayTime in the key.
   * If the admin changes the session time from "10:00 AM" to "2:00 PM",
   * the storageKey changes, and the "Already Marked" state resets to normal.
   */
  const sessionTime = currentBootcamp?.displayTimeSession || "default-time";
  const storageKey = `attendance_${id}_${dateKey}_${sessionTime.replace(/\s+/g, "")}`;

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // SIDE EFFECT: Check if this specific session/time combo was already marked
  useEffect(() => {
    const record = localStorage.getItem(storageKey);
    if (record) {
      setHasAlreadyMarked(true);
    } else {
      // Reset if the session time has changed since the last visit
      setHasAlreadyMarked(false);
    }
  }, [storageKey]);

  // SIDE EFFECT: Save record upon successful Formspree submission
  useEffect(() => {
    if (state.succeeded) {
      localStorage.setItem(storageKey, "marked");
      setHasAlreadyMarked(true);
    }
  }, [state.succeeded, storageKey]);

  if (!currentBootcamp) {
    return (
      <PageWrapper>
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography>Session Not Found</Typography>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </Box>
      </PageWrapper>
    );
  }

  // --- 1. SUCCESSFUL STATE RENDERING (Shown immediately after clicking button) ---
  if (state.succeeded) {
    return (
      <PageWrapper>
        <Box
          sx={{
            p: { xs: 2, md: 4 },
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: "#001B44", mb: 1 }}
          >
            Mark Your Attendance
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", mb: 4 }}>
            LIVE BOOTCAMP SESSION - {currentBootcamp.title}
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: "40px",
              border: "1px solid #E0E4EC",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                bgcolor: "#D1FAE5",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <CheckCircle2 size={40} color="#10B981" />
            </Box>

            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: "#111827", mb: 1 }}
            >
              Attendance Marked Successfully!
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
              Your attendance for this session has been recorded.
            </Typography>

            <Box
              sx={{
                width: "100%",
                bgcolor: "#F9FAFB",
                borderRadius: "16px",
                p: 3,
                mb: 4,
              }}
            >
              <SuccessRow label="Session:" value={currentBootcamp.title} />
              <SuccessRow label="Date:" value={formattedDate} />
              <SuccessRow label="Time Slot:" value={sessionTime} />
              <SuccessRow label="Status:" value="Present" isStatus />
            </Box>

            <Button
              variant="contained"
              onClick={() => navigate(-1)}
              sx={{
                bgcolor: "#001B44",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 700,
                "&:hover": { bgcolor: "#001030" },
              }}
            >
              Return to Session
            </Button>
          </Paper>
        </Box>
      </PageWrapper>
    );
  }

  // --- 2. INITIAL FORM STATE / PREVIOUSLY MARKED WARNING ---
  return (
    <PageWrapper>
      <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "800px", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: "#001B44", mb: 1 }}
          >
            Mark Your Attendance
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            LIVE BOOTCAMP SESSION - {currentBootcamp.title}
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: "40px",
            border: "1px solid #E0E4EC",
            bgcolor: "#FFFFFF",
          }}
        >
          <Stack spacing={3}>
            {/* ALREADY MARKED ALERT: This only appears if the user has already marked THIS specific time slot */}
            {hasAlreadyMarked && (
              <Alert
                severity="warning"
                icon={<AlertCircle size={20} />}
                sx={{ borderRadius: "12px", fontWeight: 600 }}
              >
                Heyy, you can only mark once per session until the next session.
              </Alert>
            )}

            <Stack direction="row" spacing={2} alignItems="center">
              <Chip
                label="LIVE"
                size="small"
                sx={{
                  bgcolor: "#FEE2E2",
                  color: "#EF4444",
                  fontWeight: 800,
                  borderRadius: "4px",
                }}
              />
              <Typography sx={{ fontWeight: 600, color: "#6B7280" }}>
                Ongoing
              </Typography>
            </Stack>

            <Box component="form" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="bootcamp_title"
                value={currentBootcamp.title}
              />
              <input type="hidden" name="session_time" value={sessionTime} />
              <input type="hidden" name="student_name" value="PhAyyy" />
              <input
                type="hidden"
                name="timestamp"
                value={`${formattedDate} ${formattedTime}`}
              />

              <Stack spacing={2} sx={{ mb: 4 }}>
                <DataRow label="Date:" value={formattedDate} />
                <DataRow label="Session Time:" value={sessionTime} />
                <DataRow label="Student:" value="PhAyyy" />
              </Stack>

              <Divider sx={{ mb: 4 }} />

              <Typography
                variant="h6"
                sx={{ fontWeight: 800, mb: 2, color: "#111827" }}
              >
                Attendance Instructions
              </Typography>
              <Stack spacing={1.5} sx={{ mb: 4 }}>
                <InstructionItem text="You can only mark attendance during live sessions" />
                <InstructionItem text="Attendance can only be marked once per session" />
                <InstructionItem text="Ensure you're actively participating in the session" />
              </Stack>

              <Button
                type="submit"
                fullWidth
                disabled={state.submitting || hasAlreadyMarked}
                variant="contained"
                sx={{
                  bgcolor: "#001B44",
                  py: 2,
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#001030" },
                  "&.Mui-disabled": { bgcolor: "#CCCCCC", color: "#888" },
                }}
              >
                {state.submitting ? (
                  <CircularProgress size={24} color="inherit" />
                ) : hasAlreadyMarked ? (
                  "Attendance Already Marked"
                ) : (
                  "Mark Attendance"
                )}
              </Button>
              <ValidationError
                prefix="Form"
                field="form"
                errors={state.errors}
              />
            </Box>
          </Stack>
        </Paper>
      </Box>
    </PageWrapper>
  );
};

// HELPER COMPONENTS
const DataRow = ({ label, value }: { label: string; value: string }) => (
  <Stack direction="row" spacing={4}>
    <Typography sx={{ color: "#6B7280", fontWeight: 600, width: "110px" }}>
      {label}
    </Typography>
    <Typography sx={{ color: "#111827", fontWeight: 700 }}>{value}</Typography>
  </Stack>
);

const SuccessRow = ({
  label,
  value,
  isStatus,
}: {
  label: string;
  value: string;
  isStatus?: boolean;
}) => (
  <Stack direction="row" justifyContent="space-between" sx={{ mb: 1.5 }}>
    <Typography sx={{ color: "#6B7280", fontWeight: 500 }}>{label}</Typography>
    <Typography
      sx={{ color: isStatus ? "#10B981" : "#111827", fontWeight: 700 }}
    >
      {value}
    </Typography>
  </Stack>
);

const InstructionItem = ({ text }: { text: string }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    <Box
      sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#9CA3AF" }}
    />
    <Typography variant="body2" sx={{ color: "#4B5563", fontWeight: 500 }}>
      {text}
    </Typography>
  </Stack>
);

export default MarkAttendance;
