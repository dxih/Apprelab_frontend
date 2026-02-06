import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  Grid,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { ongoingBootcamps } from "../../../../Data/MyStackBootcamp.data";

// --- Sub-Component: Individual Discussion Thread ---
const DiscussionItem = ({ name, time, title, body, replies }: any) => (
  <Box sx={{ mb: 6, maxWidth: "600px" }}>
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
      <Avatar sx={{ width: 42, height: 42, bgcolor: "#f0f0f0" }} />
      <Stack direction="row" spacing={1} alignItems="baseline">
        <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
          {name}
        </Typography>
        <Typography sx={{ color: "#999", fontSize: "0.75rem" }}>
          {time}
        </Typography>
      </Stack>
    </Stack>

    {/* Indented content to align with the name, */}
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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{
            fontSize: "0.85rem",
            fontWeight: 700,
            textDecoration: "underline",
            cursor: "pointer",
            color: "#000",
          }}
        >
          Reply.....
        </Typography>
        <Typography sx={{ color: "#828282", fontSize: "0.85rem" }}>
          {replies} replies
        </Typography>
      </Stack>
    </Box>
  </Box>
);

// --- Sub-Component: Sidebar Cards (Trending & Announcements) ---
const SidebarCard = ({ title, items }: { title: string; items: string[] }) => (
  <Box
    sx={{
      border: "1.5px solid #001B44",
      borderRadius: "16px",
      p: 3,
      mb: 4,
      bgcolor: "transparent",
    }}
  >
    <Typography
      sx={{ fontWeight: 800, mb: 3, fontSize: "1.1rem", color: "#000" }}
    >
      {title}
    </Typography>
    <Stack spacing={2.5}>
      {items.length > 0 ? (
        items.map((item: string, i: number) => (
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

const DiscussionsTab = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();

  // Find the specific bootcamp data dynamically based on URL ID
  const bootcamp = ongoingBootcamps.find((b) => b.id === id);

  if (!bootcamp)
    return <Typography sx={{ p: 4 }}>Bootcamp not found.</Typography>;

  return (
    <Box sx={{ mt: 4, pb: 8 }}>
      <Grid container spacing={6}>
        {/* LEFT CONTENT: Discussion Threads */}
        <Grid item xs={12} md={7.5}>
          {/* Header Section based on your screenshot */}
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
                sx={{
                  bgcolor: "#001B44",
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: "8px",
                  px: 2.5,
                  py: 0.7,
                  fontSize: "0.85rem",
                  whiteSpace: "nowrap",
                  "&:hover": { bgcolor: "#001030" },
                }}
              >
                Start New Thread +
              </Button>
            </Stack>

            <Typography
              sx={{ color: "#666", fontSize: "0.85rem", maxWidth: "450px" }}
            >
              Share your thoughts, ask questions, collaborate with other
              learners in the {bootcamp.title} cohort.
            </Typography>
          </Box>

          {/* Render Discussions from Data */}
          {bootcamp.discussions && bootcamp.discussions.length > 0 ? (
            bootcamp.discussions.map((disc) => (
              <DiscussionItem key={disc.id} {...disc} />
            ))
          ) : (
            <Typography sx={{ color: "#999", fontStyle: "italic", mt: 4 }}>
              No discussions started yet. Be the first to start a conversation!
            </Typography>
          )}
        </Grid>

        {/* RIGHT SIDEBAR: Trending & Announcements */}
        <Grid item xs={12} md={4.5}>
          {/* Trending items are filtered from discussions where trending is true */}
          <SidebarCard
            title="Trending Discussions"
            items={
              bootcamp.discussions
                ?.filter((d: any) => d.trending)
                .map((d: any) => d.title) || []
            }
          />

          {/* Announcements are pulled from the bootcamp announcements array */}
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
