import { useState } from "react";
import { 
  Box, Typography, Stack, Avatar, IconButton, Paper, 
  TextField, InputAdornment, Button, Divider 
} from "@mui/material";
import { Send, MoreHorizontal, Mic, MicOff, Video, VideoOff, ChevronDown } from "lucide-react";

interface SidebarProps {
  participants: {
    id: number;
    name: string;
    img: string;
    isMuted: boolean;
    isVideoOff: boolean;
  }[];
}

const LiveSidebar = ({ participants }: SidebarProps) => {
  const [message, setMessage] = useState("");
  const [showAllMessages, setShowAllMessages] = useState(false);
  
  const [chatHistory, setChatHistory] = useState([
    { id: 1, name: "Anita Bailley", time: "1:30 PM", text: "Welcome everyone please check the shared figma link." },
    { id: 2, name: "Mitch Ross", time: "1:32 PM", text: "Alright Thanks. I'm having a bit of trouble with the prototype though." },
    { id: 3, name: "Sarah May", time: "1:35 PM", text: "I'll demonstrate that in a bit!" },
    { id: 4, name: "Anita Bailley", time: "1:36 PM", text: "Great, standing by." },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setChatHistory([...chatHistory, {
      id: Date.now(),
      name: "PhAyyy",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: message
    }]);
    setMessage("");
  };

  // Logic for Show More
  const visibleMessages = showAllMessages ? chatHistory : chatHistory.slice(-3);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      
      {/* SECTION 1: PARTICIPANTS */}
      <Paper
        elevation={0}
        sx={{ 
            p: 2, 
            bgcolor: "#FFFFFF", 
            borderRadius: "16px", 
            border: "1px solid #F0F0F0" 
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center" 
          sx={{ 
            mb: 2, 
            bgcolor: "rgba(1, 10, 69, 0.05)", 
            px: 2, 
            py: 1,
            borderRadius: "8px" 
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#010A45" }}>
            Participants ({participants.length + 1})
          </Typography>
          <IconButton size="small" sx={{ color: "#010A45" }}>
            <MoreHorizontal size={18} />
          </IconButton>
        </Stack>
        {/* the instructor */}
        <Stack spacing={2} sx={{ maxHeight: "200px", overflowY: "auto", px: 1 }}>
          {/* Instructor */}
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar sx={{ width: 32, height: 32, bgcolor: "#001B44", fontSize: "0.8rem" }}>SM</Avatar>
              <Typography sx={{ fontWeight: 600, fontSize: "0.85rem" }}>Sarah May (Instructor)</Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ color: "#666" }}>
              <Mic size={14} />
              <Video size={14} />
            </Stack>
          </Stack>

          {/* Dynamic Participants */}
          {participants.map((user) => (
            <Stack key={user.id} direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar src={user.img} sx={{ width: 32, height: 32 }} />
                <Typography sx={{ fontWeight: 600, fontSize: "0.85rem" }}>{user.name}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ color: "#666" }}>
                {user.isMuted ? <MicOff size={14} color="#FF4D4D" /> : <Mic size={14} />}
                {user.isVideoOff ? <VideoOff size={14} color="#FF4D4D" /> : <Video size={14} />}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Paper>

      {/* SECTION 2: MESSAGES */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          bgcolor: "#FFFFFF",
          borderRadius: "16px",
          border: "1px solid #F0F0F0",
          height: "480px",
          display: "flex",
          mt:10,
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", mb: 2, color: "#010A45" }}>
          Messages
        </Typography>
        
        <Box sx={{ flexGrow: 1, overflowY: "auto", mb: 2, pr: 1 }}>
          {/* Show More Button */}
          {chatHistory.length > 3 && (
            <Box sx={{ textAlign: "center", mb: 2 }}>
                <Button 
                    size="small" 
                    onClick={() => setShowAllMessages(!showAllMessages)}
                    endIcon={<ChevronDown size={14} style={{ transform: showAllMessages ? 'rotate(180deg)' : 'none' }}/>}
                    sx={{ textTransform: "none", color: "#666", fontSize: "0.75rem" }}
                >
                    {showAllMessages ? "Show less" : "Show earlier messages"}
                </Button>
                <Divider sx={{ my: 1, opacity: 0.5 }} />
            </Box>
          )}

          {visibleMessages.map((msg) => (
            <Stack key={msg.id} direction="row" spacing={1.5} sx={{ mb: 2.5 }}>
              <Avatar sx={{ width: 28, height: 28, fontSize: "0.7rem" }}>{msg.name[0]}</Avatar>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "0.75rem", display: "flex", alignItems: "center", gap: 1 }}>
                  {msg.name} 
                  <Typography component="span" sx={{ fontWeight: 400, color: "#999", fontSize: "0.65rem" }}>
                    {msg.time}
                  </Typography>
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#444", lineHeight: 1.4, mt: 0.3 }}>
                  {msg.text}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Box>

        <TextField
          fullWidth
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          variant="outlined"
          sx={{ 
            "& .MuiOutlinedInput-root": { 
                bgcolor: "#F8F9FA", 
                borderRadius: "12px",
                fontSize: "0.85rem",
                "& fieldset": { borderColor: "#E0E0E0" },
                "&:hover fieldset": { borderColor: "#001B44" },
            } 
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSendMessage} sx={{ color: "#001B44" }}>
                  <Send size={18} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
};

export default LiveSidebar;