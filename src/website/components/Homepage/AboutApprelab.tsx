import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
// ✅ Outlined icons instead of filled ones
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const AboutApprelab = () => {
  const pillars = [
    {
      icon: <SchoolOutlinedIcon sx={{ fontSize: 40, color: "#142785d6" }} />,
      title: "Practical Learning",
      text: "Advance your career and increase earnings as an individual contributor. Build side hustles and generate additional revenue while maintaining your regular role, without being forced into management.",
    },
    {
      icon: <BuildOutlinedIcon sx={{ fontSize: 40, color: "#142785d6" }} />,
      title: "Hands On Creation",
      text: "Advance your career and increase earnings as an individual contributor. Build side hustles and generate additional revenue while maintaining your regular role, without being forced into management.",
    },
    {
      icon: <PaidOutlinedIcon sx={{ fontSize: 40, color: "#142785d6" }} />,
      title: "Earning Potentials",
      text: "Advance your career and increase earnings as an individual contributor. Build side hustles and generate additional revenue while maintaining your regular role, without being forced into management.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #F6F8FF 0%, #FFFFFF 100%)",
        py: 10,
      }}
    >
      {/* CONTAINER */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "#0F0F57",
          }}
        >
          Everything You Need to Know About{" "}
          <Box component="span" sx={{ color: "#E9B300" }}>
            Apprelab
          </Box>
        </Typography>

        {/* Sub */}
        <Typography
          sx={{
            color: "#252859",
            mb: { xs: 5, md: 10 },
          fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 200,
          }}
        >
          Three core pillars powering Apprelab
        </Typography>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            mb: { xs: 6, md: 10 },
          }}
        >
          {pillars.map((item, idx) => (
            <Card
              key={idx}
              elevation={3}
              sx={{
                width: 320,
                borderRadius: 5,
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    mb: 3,
                    width: 80,
                    height: 80,
                    mx: "auto",
                    borderRadius: "50%",
                    backgroundColor: "#ccd3ed49",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "#0B0B31",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#4A5565",
                    lineHeight: 1.6,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CTA */}
        <Button
          variant="contained"
         component={Link}
           to="/signup"
          sx={{
            backgroundColor: "#071A7E",
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "8px",
            px: 5,
            py: 1.4,
            mb: { xs: 2, md: 5 },
            "&:hover": { backgroundColor: "#0F28AA" },
          }}
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default AboutApprelab;
