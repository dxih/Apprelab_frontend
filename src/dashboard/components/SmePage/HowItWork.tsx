import { Box, Grid, Typography } from "@mui/material";

import work1 from "../../assets/icons/work1.png";
import work2 from "../../assets/icons/work2.png";
import work3 from "../../assets/icons/work3.png";


export default function HowItWork() {
  const cards = [
    {
      id: 1,
      image: work1,
      title: "Submit your startup info",
      description:
        "Tell us about your company, team size, and what you're building.",
    },
    {
      id: 2,
      image: work2,
      title: "Post a project or role",
      description:
        "Define your requirements, timeline, and budget. Get matched with qualified talent.",
    },
    {
      id: 3,
      image: work3,
      title: "Hire & collaborate",
      description:
        "Review applications, interview candidates, and start working together seamlessly.",
    },
  ];

  return (
    <Box
      sx={{
        pt: 8,
        pb: 12,
        px: { xs: 2, md: 4 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: "40px",
            textAlign: "center",
            color: "#101828",
          }}
        >
          How It Works
        </Typography>
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "28px",
            textAlign: "center",
            color: "#4A5565",
            mt: 2,
          }}
        >
          Get started in three simple steps and connect with top talent from
          apprelab
        </Typography>

        {/* card grid */}
        <Box sx={{ mt: 4, px: 2, py: 4 }}>
          <Grid container spacing={{ xs: 4, lg: 8 }} justifyContent="center">
            {cards.map((card, index) => (
              <Grid
                item
                key={card.id}
                xs={12}
                sm={6}
                lg={4} 
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* line in btw cards */}
                {index < cards.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "40%",
                      left: "100%",
                      width: 200,
                      height: 2,
                      bgcolor: "#E0E0E0",
                      display: { xs: "none", lg: "block" },
                      transform: "translateY(-50%)",
                      zIndex: 0,
                    }}
                  />
                )}

                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: 367.33 },
                    height: { xs: "auto", md: 246 },
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    px: 3,
                    py: 4,
                    bgcolor: "#fff",
                    boxShadow: 1,
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                  }}
                >
                  {/* Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -15,
                      left: -15,
                      width: 40,
                      height: 40,
                      borderRadius: "9999px",
                      bgcolor: "#010A45",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 16,
                      lineHeight: "75px",
                      letterSpacing: 0,
                    }}
                  >
                    {card.id}
                  </Box>

                  {/* Image */}
                  <Box
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: { xs: 60, md: 64 },
                      height: { xs: 60, md: 64 },
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />

                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                      lineHeight: "28px",
                      color: "#101828",
                      mt: 2,
                      textAlign: "left",
                    }}
                  >
                    {card.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "26px",
                      color: "#4A5565",
                      mt: 1,
                      textAlign: "left",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
