import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  Grid,
  useTheme,
  TextField,
  Collapse,
} from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ongoingBootcamps } from "../../Data/MyStackBootcamp.data";

// --- Helper: Professional Time Formatting ---
const formatTime = (time: any) => {
  if (!time) return "Just now";
  // If it's old static data (string), return as is
  if (typeof time === "string") return time;

  const seconds = Math.floor((Date.now() - time) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  return new Date(time).toLocaleDateString();
};

// --- Sub-Component: Individual Discussion Thread ---
const DiscussionItem = ({ name, time, title, body, initialReplies }: any) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [repliesList, setRepliesList] = useState<any[]>([]);
  const [replyCount, setReplyCount] = useState(initialReplies || 0);

  // --- Live Time Logic ---
  const [displayTime, setDisplayTime] = useState(formatTime(time));

  useEffect(() => {
    // Update the timestamp string every 30 seconds
    const timer = setInterval(() => {
      setDisplayTime(formatTime(time));
    }, 30000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [time]);

  const handleReplySubmit = () => {
    if (!replyText.trim()) return;

    const newReply = {
      id: Date.now(),
      name: "PhAyyy", // Placeholder for current user
      text: replyText,
      time: Date.now(), // Real-time timestamp for the reply
    };

    setRepliesList([...repliesList, newReply]);
    setReplyCount(replyCount + 1);
    setReplyText("");
    setShowReplyInput(false);
  };

  return (
    <Box sx={{ mb: 6, maxWidth: "600px" }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
        <Avatar sx={{ width: 42, height: 42, bgcolor: "#f0f0f0" }} />
        <Stack direction="row" spacing={1} alignItems="baseline">
          <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
            {name}
          </Typography>
          <Typography sx={{ color: "#999", fontSize: "0.75rem" }}>
            {displayTime}
          </Typography>
        </Stack>
      </Stack>

      <Box sx={{ pl: 7.2 }}>
        <Typography
          sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 0.5, color: "#000" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#4F4F4F", mb: 2, fontSize: "0.9rem", lineHeight: 1.6 }}
        >
          {body}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            onClick={() => setShowReplyInput(!showReplyInput)}
            sx={{
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "underline",
              cursor: "pointer",
              color: "#001B44",
            }}
          >
            {showReplyInput ? "Cancel" : "Reply....."}
          </Typography>
          <Typography sx={{ color: "#828282", fontSize: "0.85rem" }}>
            {replyCount} {replyCount === 1 ? "reply" : "replies"}
          </Typography>
        </Stack>

        {/* Input Pop-out Area */}
        <Collapse in={showReplyInput}>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                },
              }}
            />
            <Button
              onClick={handleReplySubmit}
              variant="contained"
              size="small"
              sx={{
                mt: 1,
                bgcolor: "#001B44",
                textTransform: "none",
                borderRadius: "8px",
                "&:hover": { bgcolor: "#001030" },
              }}
            >
              Submit Reply
            </Button>
          </Box>
        </Collapse>

        {/* Display the list of replies */}
        {repliesList.length > 0 && (
          <Box sx={{ mt: 3, pl: 2, borderLeft: "2px solid #f0f0f0" }}>
            {repliesList.map((reply) => (
              <Box key={reply.id} sx={{ mb: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography sx={{ fontWeight: 700, fontSize: "0.85rem" }}>
                    {reply.name}
                  </Typography>
                  <Typography sx={{ color: "#999", fontSize: "0.7rem" }}>
                    {formatTime(reply.time)}
                  </Typography>
                </Stack>
                <Typography sx={{ fontSize: "0.85rem", color: "#4F4F4F" }}>
                  {reply.text}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

// --- Sidebar Card Component ---
const SidebarCard = ({ title, items }: { title: string; items: string[] }) => (
  <Box
    sx={{ border: "1.5px solid #001B44", borderRadius: "16px", p: 3, mb: 4 }}
  >
    <Typography
      sx={{ fontWeight: 800, mb: 3, fontSize: "1.1rem", color: "#000" }}
    >
      {title}
    </Typography>
    <Stack spacing={2.5}>
      {items.length > 0 ? (
        items.map((item, i) => (
          <Typography
            key={i}
            sx={{
              color: "#333",
              fontSize: "0.9rem",
              fontWeight: 500,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {item}
          </Typography>
        ))
      ) : (
        <Typography
          sx={{ color: "#999", fontSize: "0.85rem", fontStyle: "italic" }}
        >
          No recent items
        </Typography>
      )}
    </Stack>
  </Box>
);

// --- Main Page Component ---
const DiscussionsTab = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const bootcamp = ongoingBootcamps.find((b) => b.id === id);
  const [localDiscussions, setLocalDiscussions] = useState(
    bootcamp?.discussions || [],
  );

  useEffect(() => {
    if (location.state?.newThread) {
      const { newThread } = location.state;
      setLocalDiscussions((prev) => {
        if (prev.some((t) => t.id === newThread.id)) return prev;
        return [newThread, ...prev];
      });
      // Clear the navigation state after catching the thread
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  if (!bootcamp)
    return <Typography sx={{ p: 4 }}>Bootcamp not found.</Typography>;

  return (
    <Box sx={{ mt: 4, pb: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7.5}>
          <Box sx={{ mb: 6 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Discussions
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate(`/bootcamp/${id}/start-thread`)}
                sx={{
                  bgcolor: "#001B44",
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: "8px",
                  "&:hover": { bgcolor: "#001030" },
                }}
              >
                Start New Thread +
              </Button>
            </Stack>
            <Typography
              sx={{ color: "#666", fontSize: "0.85rem", maxWidth: "450px" }}
            >
              Share your thoughts and collaborate with others in the{" "}
              {bootcamp.title} cohort.
            </Typography>
          </Box>

          {localDiscussions.length > 0 ? (
            localDiscussions.map((disc: any) => (
              <DiscussionItem
                key={disc.id}
                {...disc}
                initialReplies={disc.replies}
              />
            ))
          ) : (
            <Typography sx={{ color: "#999", fontStyle: "italic", mt: 4 }}>
              No discussions started yet.
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} md={4.5}>
          <SidebarCard
            title="Trending Discussions"
            items={localDiscussions
              .filter((d: any) => d.trending)
              .map((d: any) => d.title)}
          />
          <SidebarCard
            title="Bootcamp Announcements"
            items={bootcamp.announcements || []}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscussionsTab;
