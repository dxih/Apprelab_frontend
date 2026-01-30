import { Box, Typography, Grid, Stack, Avatar, Rating, Chip, useTheme, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ongoingBootcamps } from "../../../../../Data/MyStackBootcamp.data";

const OverviewTab = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const bootcamp = ongoingBootcamps.find((b) => b.id === id);

  if (!bootcamp) return null;

  // Global styles for "Sided" layout
  const headerStyle = { 
    fontWeight: 700, 
    mb: 1.5, 
    fontFamily: theme.typography.fontFamily,
    fontSize: "1.1rem",
    color: "#000"
  };

  const textContainerStyle = {
    maxWidth: "600px", 
    width: "100%",
    wordBreak: "break-word", 
  };

  const bodyStyle = { 
    fontFamily: theme.typography.fontFamily, 
    color: "#4F4F4F", 
    lineHeight: 1.6, 
    fontSize: "0.9rem",
  };

  return (
    <Box sx={{ mt: 4, pb: 10 }}>
      {/* 1. Agenda  */}
      <Box sx={{ mb: 6, ...textContainerStyle }}>
        <Typography variant="h6" sx={headerStyle}>Bootcamp agenda</Typography>
        <Typography sx={bodyStyle}>{bootcamp.agenda}</Typography>
      </Box>

      {/* 2. What you will learn */}
      <Box sx={{ mb: 6, ...textContainerStyle }}>
        <Typography variant="h6" sx={headerStyle}>What you will learn</Typography>
        <Grid container spacing={1}>
          {bootcamp.learnList.map((text, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ py: 0.3 }}>
                <MenuBookIcon sx={{ fontSize: "1rem", color: "#666", mt: 0.3 }} />
                <Typography variant="body2" sx={{ ...bodyStyle, fontSize: "0.85rem" }}>
                  {text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 3. Who is it for? */}
      <Box sx={{ mb: 6, ...textContainerStyle }}>
        <Typography variant="h6" sx={headerStyle}>Who is it for?</Typography>
        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          {bootcamp.audience.map((item, i) => (
            <Typography component="li" key={i} sx={{ ...bodyStyle, mb: 0.5 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* 4. Level */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" sx={headerStyle}>Level</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#00E676" }} />
          <Typography sx={{ ...bodyStyle, fontWeight: 600 }}>{bootcamp.level}</Typography>
        </Stack>
      </Box>

      {/* 5. What you will get */}
      <Box sx={{ mb: 6, ...textContainerStyle }}>
        <Typography variant="h6" sx={headerStyle}>What you will get</Typography>
        <Grid container spacing={1}>
          {[
            { text: "Certificate of completion", icon: <WorkspacePremiumIcon /> },
            { text: "Access to mentorship and community", icon: <PeopleIcon /> },
            { text: "Project-based learning", icon: <CheckCircleIcon /> },
            { text: "Portfolio-ready project", icon: <CheckCircleIcon /> }
          ].map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ py: 0.3 }}>
                <Box sx={{ mt: 0.3, "& svg": { fontSize: "1rem", color: "#666" } }}>{item.icon}</Box>
                <Typography variant="body2" sx={{ ...bodyStyle, fontSize: "0.85rem" }}>
                  {item.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 6. Fees  */}
      <Box sx={{ mb: 8, ...textContainerStyle }}>
        <Typography variant="h6" sx={headerStyle}>Next Cohort- {bootcamp.nextCohort.date}</Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2, flexWrap: "wrap" }}>
          <Typography sx={{ color: "#555", fontSize: "0.9rem", fontFamily: theme.typography.fontFamily }}>Fee</Typography>
          <Typography sx={{ color: "#BDBDBD", textDecoration: "line-through", fontSize: "0.9rem" }}>
            {bootcamp.nextCohort.oldPrice}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800, fontFamily: theme.typography.fontFamily }}>
            {bootcamp.nextCohort.newPrice}
          </Typography>
          <Chip label="Early Bird" size="small" sx={{ bgcolor: "#FFB800", color: "#fff", fontWeight: 700, borderRadius: "4px", height: "18px", fontSize: "0.6rem" }} />
        </Stack>

        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: "#001B44", 
            textTransform: "none", 
            px: 2, py: 0.6, 
            borderRadius: "8px", 
            fontSize: "0.85rem",
            fontWeight: 600,
            fontFamily: theme.typography.fontFamily,
            "&:hover": { bgcolor: "#001030" }
          }}
        >
          Reserve a seat
        </Button>
      </Box>

      
      {/* 7. Reviews Section  */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h6" sx={headerStyle}>
          Previous Bootcamp Review and Ratings
        </Typography>
        
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            maxWidth: "1000px", 
            alignItems: "stretch"
          }}
        >
          {bootcamp.reviews.map((review) => (
            <Grid item xs={12} sm={6} key={review.id} sx={{ display: "flex" }}>
              <Stack 
                spacing={2} 
                sx={{ 
                  width: "100%",
                  maxWidth: "450px", 
                  p: 2,
                }}
              >
                {/* Header: Avatar and Name */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar 
                    src={review.avatar} 
                    sx={{ width: 44, height: 44, bgcolor: "#eee" }} 
                  />
                  <Box>
                    <Typography 
                      sx={{ 
                        fontWeight: 700, 
                        fontFamily: theme.typography.fontFamily, 
                        fontSize: "0.95rem",
                        color: "#000"
                      }}
                    >
                      {review.name}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating value={review.rating} readOnly size="small" />
                      <Typography 
                        variant="caption" 
                        sx={{ color: "#828282", mt: 0.3 }}
                      >
                        ({review.date})
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                {/* Comment: Wraps within the maxWidth */}
                <Typography 
                  sx={{ 
                    ...bodyStyle, 
                    fontSize: "0.85rem", 
                    color: "#4F4F4F", 
                    lineHeight: 1.6,
                    maxWidth: "100%", 
                    textAlign: "justify" 
                  }}
                >
                  {review.comment}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OverviewTab;