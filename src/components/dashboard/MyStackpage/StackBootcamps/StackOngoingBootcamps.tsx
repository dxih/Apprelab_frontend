import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  LinearProgress,
  Button,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Bootcamp {
  title: string;
  description: string;
  duration: string;
  progress: number;
  nextClass: string;
  image: string;
}

interface Props {
  bootcamps: Bootcamp[];
}

const StackOngoingBootcamps: React.FC<Props> = ({ bootcamps }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        {bootcamps.map((bootcamp, i) => (
          <Card
            key={i}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              p: { xs: 1, sm: 1.5, md: 2 },
              gap: { xs: 1.5, md: 2 },
              borderRadius: 2,
              bgcolor: "#edf1f3",
              justifyContent: "flex-start",
              position: "relative",
              overflow: "visible", // Prevents button from being clipped on mobile
            }}
          >
            {/* FLOATING BUTTON - High zIndex for mobile visibility */}
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 100,
                color: "#666",
                bgcolor: "rgba(255, 255, 255, 0.5)", // Makes it visible against image
              }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>

            {/* Main container */}
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "flex-start",
                  gap: { xs: 2, md: 2 },
                  width: "100%",
                  flexShrink: 1,
                }}
              >
                <CardMedia
                  component="img"
                  image={bootcamp.image}
                  alt={bootcamp.title}
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "292px" },
                    height: { xs: "200px", sm: "180px", md: "148px" },
                    borderRadius: 1,
                    objectFit: "cover",
                    mb: 1.5,
                  }}
                />
                {/* TEXT WRAPPING FIX: flex: 1 and minWidth: 0 */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: theme.typography.fontFamily,
                      pr: 4, // Prevents text overlap with menu icon
                    }}
                  >
                    {bootcamp.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.85rem" },
                      color: "#0a0909",
                      mb: 2.5,
                      fontFamily: theme.typography.fontFamily,
                      lineHeight: 1.5,
                      wordBreak: "break-word", // Critical for long sentences
                    }}
                  >
                    {bootcamp.description}{" "}
                    <strong>(Duration: {bootcamp.duration})</strong>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { xs: "flex-start", md: "center" },
                      gap: { xs: 1.5, md: 2 },
                      mb: 4.5,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.8rem" },
                        whiteSpace: "nowrap",
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 500,
                      }}
                    >
                      Progress Status
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.75,
                        width: { xs: "100%", md: "auto" },
                        alignItems: { xs: "flex-start", md: "center" },
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={bootcamp.progress}
                        sx={{
                          height: 8,
                          borderRadius: 2,
                          width: { xs: "100%", md: "120px" },
                          fontFamily: theme.typography.fontFamily,
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.8rem" },
                          color: "#333",
                          fontFamily: theme.typography.fontFamily,
                        }}
                      >
                        {bootcamp.progress}% Completed
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* footer */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 5,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    bgcolor: "#001B44",
                    color: "white",
                    px: 1,
                    py: 1,
                    borderRadius: "16px",
                    width: { xs: "90%", md: "267px" },
                    minHeight: { xs: "30px", md: "66px" },
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Next Class: {bootcamp.nextClass}
                </Typography>

                <Box sx={{ display: "flex", gap: { xs: 1, sm: 2, md: 3 } }}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      width: { xs: "230px", md: "110px" },
                      height: "40px",
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                    }}
                  >
                    Resources
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      background: "#001B44",
                      "&:hover": { backgroundColor: "#003366" },
                      width: { xs: "230px", md: "110px" },
                      height: "40px",
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                    }}
                  >
                    Assessments
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default StackOngoingBootcamps;