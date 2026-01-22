import React from "react";
import { Box, Typography, Card, CardMedia, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Bootcamp {
  title: string;
  description: string;
  duration: string;
  startDate: string;
  image: string;
}

interface Props {
  bootcamps: Bootcamp[];
}

const StackPreSavedBootcamps: React.FC<Props> = ({ bootcamps }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: 6, fontFamily: theme.typography.fontFamily }}>
      <Typography
        variant="h3"
        sx={{ mb: 2, fontWeight: 600, fontFamily: theme.typography.fontFamily }}
      >
        Pre-Saved Bootcamps
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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
              overflow: "visible", 
            }}
          >
            {/* FLOATING BUTTON */}
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 100,
                color: "#666",
                bgcolor: "rgba(255, 255, 255, 0.5)",
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
                {/* TEXT WRAPPING FIX */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: theme.typography.fontFamily,
                      pr: 4,
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
                      wordBreak: "break-word",
                    }}
                  >
                    {bootcamp.description}{" "}
                    <strong>(Duration: {bootcamp.duration})</strong>
                  </Typography>
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
                    width: { xs: "60%", md: "267px" },
                    minHeight: { xs: "30px", md: "66px" },
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Starting: {bootcamp.startDate}
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
                    Details
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

export default StackPreSavedBootcamps;