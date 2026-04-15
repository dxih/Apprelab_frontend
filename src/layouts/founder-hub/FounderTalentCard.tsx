import {
  Box,
  Typography,
  Stack,
  Avatar,
  Chip,
  Paper,
  Button,
} from "@mui/material";
import { motion, type Variants } from "framer-motion";

type Person = {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  projects?: number;
  years?: string;
  rate?: string;
  availability: string;
  bio: string;
  skills: string[];
  bootcamps: string[];
  avatar: string;
};

function AvailabilityBadge({ status }: { status: string }) {
  const isBusy = status === "Busy";
  const isLimited = status === "Limited";

  let bg = "rgba(34, 197, 94, 0.1)";
  let color = "#16A34A";

  if (isBusy) {
    bg = "rgba(239, 68, 68, 0.1)";
    color = "#DC2626";
  } else if (isLimited) {
    bg = "rgba(234, 179, 8, 0.1)";
    color = "#CA8A04";
  }

  return (
    <Box
      sx={{
        px: 2,
        py: 0.5,
        borderRadius: "10px",
        backgroundColor: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: color,
        }}
      >
        {status}
      </Typography>
    </Box>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function FounderTalentCard({
  person,
  cardType = "learner",
}: {
  person: Person;
  cardType?: "mentor" | "learner";
}) {
  const isMentor = cardType === "mentor";

  return (
    <motion.div variants={itemVariants}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: "28px",
          p: { xs: 3, md: 4 },
          mb: 3,
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.04)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          },
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={person.avatar}
              sx={{ 
                width: { xs: 80, md: 100 }, 
                height: { xs: 80, md: 100 }, 
                borderRadius: "24px",
                border: "4px solid #F8FAFF"
              }}
            />
            {/* Online Status Dot */}
            <Box 
              sx={{ 
                position: "absolute", 
                bottom: 0, 
                right: 0, 
                width: 20, 
                height: 20, 
                borderRadius: "50%", 
                backgroundColor: "#22C55E", 
                border: "3px solid #FFF",
                boxShadow: "0 2px 10px rgba(34, 197, 94, 0.3)"
              }} 
            />
          </Box>

          <Box flex={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ mb: 2 }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: 900, fontSize: "1.4rem", color: "#0B0B31", mb: 0.5, letterSpacing: "-0.02em" }}
                >
                  {person.name}
                </Typography>

                <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: "#3B82F6", mb: 2 }}>
                  {person.role}
                </Typography>

                <Stack direction="row" spacing={3} alignItems="center" sx={{ color: "#64748B" }}>
                  <Stack direction="row" spacing={0.8} alignItems="center">
                    <Box component="img" src="/src/assets/location.png" sx={{ width: 16, height: 16, opacity: 0.7 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>{person.location}</Typography>
                  </Stack>

                  <Stack direction="row" spacing={0.8} alignItems="center">
                    <Box component="img" src="/src/assets/star.png" sx={{ width: 16, height: 16 }} />
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#0B0B31" }}>{person.rating}</Typography>
                  </Stack>

                  {isMentor ? (
                    <>
                      {person.years && (
                        <Stack direction="row" spacing={0.8} alignItems="center">
                          <Box component="img" src="/src/assets/period.png" sx={{ width: 16, height: 16, opacity: 0.7 }} />
                          <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>{person.years}</Typography>
                        </Stack>
                      )}
                      {person.rate && (
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: "0.95rem",
                            color: "#16A34A",
                          }}
                        >
                          {person.rate}
                        </Typography>
                      )}
                    </>
                  ) : (
                    person.projects !== undefined && (
                      <Stack direction="row" spacing={0.8} alignItems="center">
                        <Box component="img" src="/src/assets/projects.png" sx={{ width: 16, height: 16, opacity: 0.7 }} />
                        <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
                          {person.projects} Projects
                        </Typography>
                      </Stack>
                    )
                  )}
                </Stack>
              </Box>

              <AvailabilityBadge status={person.availability} />
            </Stack>

            <Typography 
                sx={{ 
                    fontSize: "0.95rem", 
                    lineHeight: 1.7, 
                    color: "#64748B", 
                    fontWeight: 500, 
                    mb: 3,
                    maxWidth: "700px" 
                }}
            >
              {person.bio}
            </Typography>

            {/* Skills */}
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
              {person.skills.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    borderRadius: "10px",
                    backgroundColor: "#F1F5F9",
                    color: "#475569",
                    height: 28,
                    "& .MuiChip-label": { px: 1.5 },
                  }}
                />
              ))}
            </Stack>

            {/* Bootcamps */}
            {person.bootcamps.length > 0 && (
                <Box sx={{ mb: 4, p: 2, backgroundColor: "#F8FAFF", borderRadius: "16px", border: "1px solid rgba(59, 130, 246, 0.05)" }}>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 800, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1.5 }}>
                        Certified In:
                    </Typography>

                    <Stack direction="row" spacing={1.5} flexWrap="wrap">
                    {person.bootcamps.map((b) => (
                        <Box
                          key={b}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            backgroundColor: "#FFFFFF",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                          }}
                        >
                            <Box
                                component="img"
                                src="/src/assets/spark.png"
                                sx={{ width: 14, height: 14 }}
                            />
                            <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", color: "#334155" }}>{b}</Typography>
                        </Box>
                    ))}
                    </Stack>
                </Box>
            )}

            {/* Actions */}
            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#0B0B31",
                  color: "#ffffff",
                  borderRadius: "14px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textTransform: "none",
                  py: 1.5,
                  boxShadow: "none",
                  "&:hover": { 
                    backgroundColor: "#1C1E53",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(11, 11, 49, 0.2)"
                  },
                }}
                startIcon={<Box component="img" src="/src/assets/msgicon.png" sx={{ width: 16 }} />}
              >
                Connect & Hire
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderRadius: "14px",
                  borderColor: "rgba(0,0,0,0.1)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                  px: 4,
                  color: "#0B0B31",
                  "&:hover": { 
                    borderColor: "#0B0B31",
                    backgroundColor: "rgba(0,0,0,0.02)"
                  },
                }}
              >
                Portfolio
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </motion.div>
  );
}