import { Box, Grid, Typography } from "@mui/material";

const cardData = [
  {
    image: "/trust1.png",
    title: "150+",
    subtitle: "Startups using apprelab.",
  },
  {
    image: "/trust2.png",
    title: "500+",
    subtitle: "Vetted learners & mentors",
  },
  {
    image: "/trust3.png",
    title: "300+",
    subtitle: "Projects completed",
  },
  {
    image: "/trust4.png",
    title: "4.8/5",
    subtitle: "Average satisfaction rating",
  },
];

export default function Trusted() {
  return (
    <Box sx={{ bgcolor: "#FFF", py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          maxWidth: 1258,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
              <Box
                sx={{
                  width: "100%",
                  minHeight: 164,
                  borderRadius: 2,
                  bgcolor: "#FFF",
                  px: 3,
                  py: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: 0,
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    mb: 2,
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: 28, md: 36 },
                    lineHeight: { xs: "32px", md: "40px" },
                    color: "#101828",
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: 14, md: 16 },
                    lineHeight: { xs: "20px", md: "24px" },
                    color: "#4A5565",
                  }}
                >
                  {card.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

