import { Box, Typography, Grid, Button } from "@mui/material";

const cardData = [
  {
    id: 1,
    image: "/img1.png",
    title: "Early-stage startups",
    description:
      "Building your MVP and need technical talent to bring your vision to life.",
  },
  {
    id: 2,
    image: "/img2.png",
    title: "SMEs",
    description:
      "Established businesses looking to scale with experienced developers and designers.",
  },
  {
    id: 3,
    image: "/img3.png",
    title: "Solo Founders",
    description:
      "Need a development partner or team to execute on your product roadmap",
  },
  {
    id: 4,
    image: "/img4.png",
    title: "Agencies",
    description:
      "Expand your capacity with reliable freelance talent for client projects",
  },
];

export default function WhoItsFor() {
  return (
    <Box sx={{ bgcolor: "#Fff", py: 12 }}>
      <Box
        sx={{
          maxWidth: "1258px",
          width: "100%",
          minHeight: "539px",
          mx: "auto", // center it
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          pt: "24px",
          pb: "24px",
          px: "16px",
          bgcolor: "#F9FAFB",
          opacity: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "40px",
            letterSpacing: "0px",
            textAlign: "center",
            color: "#101828",
            mt: 1,
          }}
        >
          Who This Is For
        </Typography>

        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "0px",
            textAlign: "center",
            color: "#4A5565",
            maxWidth: "652px",
            mx: "auto",
          }}
        >
          Whether you're just starting or scaling up, apprelab connects you with
          the right talent
        </Typography>

        {/* Cards Grid */}
        <Box sx={{ maxWidth: 1258, mx: "auto", py: 4, px: { xs: 0, md: 1 } }}>
          <Grid container spacing={3}>
            {cardData.map((card) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 288.5,
                    height: 223,
                    bgcolor: "#FFFFFF",
                    borderRadius: "14px",
                    border: "1px solid #F3F4F6",
                    borderTop: "1px solid #F3F4F6",
                    p: 3,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "10px",
                      opacity: 1,
                      objectFit: "cover",
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontSize: "18px",
                      lineHeight: "28px",
                      letterSpacing: "0px",
                      color: "#101828",
                      mt: 2,
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "22.75px",
                      letterSpacing: "0px",
                      color: "#4A5565",
                      maxWidth: "219px",
                      mt: 1,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
            textAlign: "center",
            color: "#4A5565",
          }}
        >
          Ready to get started?
        </Typography>

        <Button
          disableRipple
          sx={{
            width: '244.23px',
            height: "48px",
            borderRadius: "10px",
            backgroundColor: "#010A45",
            color: "#FFFFFF",
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
            textAlign: "center",
            mx: "auto",
            textTransform: "none",
            "&:hover, &:active": {
              backgroundColor: "#010A45",
            },
          }}
        >
          Submit Your Startup Info
        </Button>
      </Box>
    </Box>
  );
}
