import React from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  Chip,
  Paper,
  Button,
} from "@mui/material";

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

  return (
    <Box
      sx={{
        width: isBusy ? "49.53px" : "73.23px",
        height: "24px",
        opacity: 1,
        borderRadius: isBusy ? "33554400px" : "9999px",
        paddingTop: "4px",
        paddingBottom: "4px",
        paddingLeft: "12px",
        paddingRight: "12px",
        background: isBusy ? "#FFE2E2" : "#DCFCE7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Arimo, sans-serif",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0px",
          color: isBusy ? "#C10007" : "#008236",
        }}
      >
        {status}
      </Typography>
    </Box>
  );
}

const metaTextSx = {
  fontFamily: "Arimo, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0px",
  color: "#6a7282",
};

const iconStyle = { width: "16px", height: "16px" };

export default function FounderTalentCard({
  person,
  cardType = "learner",
}: {
  person: Person;
  cardType?: "mentor" | "learner";
}) {
  const isMentor = cardType === "mentor";

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #e8edf2",
        borderRadius: 3,
        p: 3,
        mb: 2.5,
        transition: "0.2s",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(25,118,210,0.10)",
          borderColor: "#90caf9",
        },
      }}
    >
      <Stack direction="row" spacing={2.5}>
        <Avatar
          src={person.avatar}
          sx={{ width: 96, height: 96, border: "2px solid #e3f2fd" }}
        />

        <Box flex={1}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700, fontSize: "20px", color: "#101828" }}
              >
                {person.name}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#4A5565" }}>
                {person.role}
              </Typography>

              <Stack direction="row" mt={1} spacing={2} alignItems="center">
                {/* Location — always shown */}
                <Stack direction="row" spacing={0.4} alignItems="center">
                  <img src="/src/assets/location.png" alt="" style={iconStyle} />
                  <Typography sx={metaTextSx}>{person.location}</Typography>
                </Stack>

                {/* Rating — always shown */}
                <Stack direction="row" spacing={0.4} alignItems="center">
                  <img src="/src/assets/star.png" alt="" style={iconStyle} />
                  <Typography sx={metaTextSx}>{person.rating}</Typography>
                </Stack>

                {/* Learner: projects | Mentor: years + rate */}
                {isMentor ? (
                  <>
                    {person.years && (
                      <Stack direction="row" spacing={0.4} alignItems="center">
                        <img src="/src/assets/period.png" alt="" style={iconStyle} />
                        <Typography sx={metaTextSx}>{person.years}</Typography>
                      </Stack>
                    )}
                    {person.rate && (
                      <Stack direction="row" spacing={0.4} alignItems="center">
                        <Typography
                          sx={{
                            fontFamily: "Arimo, sans-serif",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "0px",
                            color: "#00A63E",
                          }}
                        >
                          {person.rate}
                        </Typography>
                      </Stack>
                    )}
                  </>
                ) : (
                  person.projects !== undefined && (
                    <Stack direction="row" spacing={0.4} alignItems="center">
                      <img src="/src/assets/projects.png" alt="" style={iconStyle} />
                      <Typography sx={metaTextSx}>
                        {person.projects} projects
                      </Typography>
                    </Stack>
                  )
                )}
              </Stack>
            </Box>

            <AvailabilityBadge status={person.availability} />
          </Stack>

          <Typography variant="body2" color="text.secondary" mt={3}>
            {person.bio}
          </Typography>

          {/* Skills */}
          <Stack direction="row" spacing={1} flexWrap="wrap" mt={1.5}>
            {person.skills.map((s) => (
              <Chip
                key={s}
                label={s}
                sx={{
                  height: "28px",
                  opacity: 1,
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  background: isMentor ? "#EEF2FF" : "#EEF2FF",
                  fontFamily: "Arimo, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  color: isMentor ? "#010A45" : "#432DD7",
                  "& .MuiChip-label": { padding: 0 },
                }}
              />
            ))}
          </Stack>

          {/* Bootcamps */}
          <Box mt={2}>
            <Typography sx={{ ...metaTextSx, mb: 0.6 }}>
              Completed Bootcamps:
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap">
              {person.bootcamps.map((b) => (
                <Chip
                  key={b}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <img
                        src="/src/assets/spark.png"
                        alt=""
                        style={{ width: "12px", height: "12px" }}
                      />
                      <span>{b}</span>
                    </Box>
                  }
                  sx={{
                    width: "150.02px",
                    height: "24px",
                    opacity: 1,
                    borderRadius: "4px",
                    background: "#F3F4F6",
                    fontFamily: "Arimo, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0px",
                    color: "#364153",
                    "& .MuiChip-label": { padding: "0 8px" },
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Actions */}
          <Stack direction="row" spacing={1.5} mt={2}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: "327.64px",
                height: "40px",
                opacity: 1,
                borderRadius: "10px",
                background: "#010A45",
                fontFamily: "Arimo, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0px",
                textTransform: "none",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                "&:hover": { background: "#010A45" },
              }}
            >
              <img
                src="/src/assets/msgicon.png"
                alt=""
                style={{ width: "13.33px", height: "12.66px" }}
              />
              Invite to Project
            </Button>

            <Button
              variant="outlined"
              disableElevation
              sx={{
                width: "156.36px",
                height: "42px",
                opacity: 1,
                borderRadius: "10px",
                border: "1px solid #D1D5DC",
                fontFamily: "Arimo, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0px",
                textTransform: "none",
                color: "#364153",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                "&:hover": {
                  border: "1px solid #D1D5DC",
                  background: "transparent",
                },
              }}
            >
              <img
                src="/src/assets/portt.png"
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
              View Portfolio
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}