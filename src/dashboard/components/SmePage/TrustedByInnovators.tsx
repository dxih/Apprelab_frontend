import { Box, Container, Grid, Typography } from "@mui/material";

const reviewData = [
  {
    stars: "/star.png",
    description:
      "“Apprelab helped us find the perfect developer for our MVP. The quality of talent is exceptional.”",
    profileImage: "/innov1.png",
    name: "Sarah Chen",
    position: "Founder, TechFlow",
  },
  {
    stars: "/star.png",
    description:
      "“We've hired 3 designers through apprelab. The platform makes collaboration seamless and efficient.”",
    profileImage: "/innov2.png",
    name: "David Okonkwo",
    position: "CTO, MarketPulse",
  },
  {
    stars: "/star.png",
    description:
      "“As a solo founder, apprelab gave me access to a team I couldn't afford to hire full-time. Game changer!”",
    profileImage: "/innov3.png",
    name: "Amina Hassan",
    position: "CEO, EduConnect",
  },
];

export default function TrustedByInnovators() {
  return (
    <Box sx={{ textAlign: "center", py: { xs: 4, md: 6 }, bgcolor: "#FFFFFF" }}>
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 700,
          fontSize: { xs: 24, md: 30 },
          lineHeight: { xs: "30px", md: "36px" },
          color: "#101828",
        }}
      >
        Trusted By Innovators
      </Typography>

      <Typography
        sx={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 400,
          fontSize: { xs: 16, md: 20 },
          lineHeight: { xs: "22px", md: "28px" },
          color: "#4A5565",
          mt: 2,
        }}
      >
        Hear from startups that are building with apprelab talent
      </Typography>

      {/* Reviews Grid */}
      <Container>
        <Box sx={{ width: "100%", py: { xs: 4, md: 6 } }}>
          <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center">
            {reviewData.map((review, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 367,
                    minHeight: 232,
                    borderRadius: "14px",
                    bgcolor: "linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)",
                    border: "1px solid #E5E7EB",
                    px: { xs: 3, md: 3 },
                    py: { xs: 5, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Stars */}
                  <Box sx={{ display: "flex", gap: { xs: 1, md: 1 }, mb: 1 }}>
                    {[...Array(5)].map((_, i) => (
                      <Box
                        key={i}
                        component="img"
                        src={review.stars}
                        alt="star"
                        sx={{
                          width: { xs: 12, md: 16 },
                          height: { xs: 12, md: 16 },
                        }}
                      />
                    ))}
                  </Box>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: { xs: 14, md: 16 },
                      lineHeight: { xs: "20px", md: "26px" },
                      color: "#364153",
                      mb: 2,
                      textAlign: "left",
                    //   flexGrow: 1,
                    }}
                  >
                    {review.description}
                  </Typography>

                  {/* Profile */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: "auto" }}>
                    <Box
                      component="img"
                      src={review.profileImage}
                      alt={review.name}
                      sx={{
                        width: { xs: 32, md: 40 },
                        height: { xs: 32, md: 40 },
                        borderRadius: "50%",
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 700,
                          fontSize: { xs: 14, md: 16 },
                          lineHeight: "24px",
                          color: "#101828",
                        }}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 400,
                          fontSize: { xs: 12, md: 14 },
                          lineHeight: "20px",
                          color: "#6A7282",
                        }}
                      >
                        {review.position}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}


