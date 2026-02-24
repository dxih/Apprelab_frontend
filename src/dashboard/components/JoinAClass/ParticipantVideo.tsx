// import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  IconButton,
  Chip,
} from "@mui/material";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";

interface ParticipantProps {
  name?: string;
  img: string;
  isInstructor?: boolean;
  isMuted?: boolean;
  isVideoOff?: boolean; 
  onToggleMute?: () => void;
onToggleVideo?: () => void;
}

const ParticipantVideo = ({
  name,
  img,
  isInstructor,
  isMuted,
  isVideoOff, // Destructure from props
  onToggleVideo, // Destructure from props
  onToggleMute,
}: ParticipantProps) => {
//   const [isVideoOff, setIsVideoOff] = useState(isVideoOff || false);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          borderRadius: "24px",
          height: isInstructor ? { xs: "300px", md: "450px" } : "240px",
          position: "relative",
          overflow: "hidden",
          bgcolor: "#1a1a1a",
          border: isInstructor ? "none" : "1px solid #ECECEC",
          boxShadow: isInstructor ? "none" : "0px 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        {/* video overlay */}
       {/* Use the isVideoOff from props here */}
        {isVideoOff ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100%", color: "#666" }}
          >
            <Avatar sx={{ width: { xs: 40, md: 80 }, height: { xs: 40, md: 80 }, mb: 1 }} />
            <Typography variant="caption">Camera Off</Typography>
          </Stack>
        ) : (
          <Box
            component="img"
            src={img}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        {/* Name overlay */}

        {name && (
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              bgcolor: "rgba(20, 20, 20, 0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              px: 1.5,
              py: 0.5,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#fff" }}
            >
              {name}
            </Typography>
            {isMuted && <MicOff size={12} color="#FF4D4D" />}
          </Box>
        )}
        {/* isInstructor overlay */}

        {isInstructor && (
          <Chip
            label="Instructor"
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              bgcolor: "#001B44",
              color: "#fff",
              fontWeight: 700,
              borderRadius: "4px",
            }}
          />
        )}
      </Box>

     {!isInstructor && (
        <Stack direction="row" spacing={3} sx={{ mt: 1.5, ml: 1 }}>
          <Stack alignItems="center">
            <IconButton
              onClick={onToggleVideo} // Call the parent function here
              sx={{
                bgcolor: isVideoOff ? "#FF4D4D" : "#E0E0E0",
                color: isVideoOff ? "white" : "#000",
                width: 32,
                height: 32,
              }}
            >
              {isVideoOff ? <VideoOff size={16} /> : <Video size={16} />}
            </IconButton>
            <Typography variant="caption" sx={{ fontSize: "0.7rem", mt: 0.5, fontWeight: 600 }}>
              Cam
            </Typography>
          </Stack>

          <Stack alignItems="center">
            <IconButton
              onClick={onToggleMute}
              sx={{
                bgcolor: isMuted ? "#FF4D4D" : "#E0E0E0",
                color: isMuted ? "white" : "#000",
                p: 1,
                width: 32,
                height: 32,
              }}
            >
              {isMuted ? <MicOff size={16} /> : <Mic size={16} />}
            </IconButton>
            <Typography
              variant="caption"
              sx={{ fontSize: "0.7rem", mt: 0.5, fontWeight: 600 }}
            >
              vol
            </Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};
export default ParticipantVideo;