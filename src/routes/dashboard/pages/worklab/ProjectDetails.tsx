import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button, Chip, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import type { IProject } from "./projectfeeds";
import { PageWrapper } from "./WorkLabCard";
import featuredData from "../../../../Data/Worklab.data";

export default function FeaturedPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Grab the project from the state
  const project = location.state?.project as IProject;

  // 2. Fallback: If someone goes to the URL directly without clicking a card
  if (!project) {
    return (
      <Box
        sx={{
          p: { xs: 2, sm: 3, md: 5 },
          textAlign: "center",
          fontFamily: theme.typography.fontFamily,
        }}
      >
        <Typography>No project data found.</Typography>
        <Button onClick={() => navigate("/worklabs/project-feed")}>
          Go back to feed
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{ mx: "auto", px: { xs: 2, sm: 2, md: 3 }, mt: { xs: 5, md: 10 } }}
    >
      <PageWrapper>
        {/* BACK BUTTON */}
        <Typography
          onClick={() => navigate(-1)}
          sx={{
            fontSize: { xs: "12px", sm: "13px", md: "14px" },
            color: "#666",
            cursor: "pointer",
            mb: 3,
            display: "flex",
            alignItems: "center",
            "&:hover": { color: theme.palette.primary.main },
          }}
        >
          ← Back to Project Feed
        </Typography>

        {/* HEADER SECTION - Dynamically populated */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on mobile, side-by-side on desktop
            gap: 2,
            width: "100%",
          }}
        >
          {/* --- IMAGE HALF --- */}
          <Box
            component="img"
            src={project.image}
            sx={{
              width: { xs: "100%", md: "356px" },
              height: { xs: "220px", sm: "250px", md: "201px" },
              objectFit: "cover",
              borderRadius: "12px",
              flexShrink: 0,
            }}
          />

          {/* --- CONTENT HALF --- */}
          <Box sx={{ flexGrow: 1, width: "100%" }}>
            <Typography
              variant="h3"
              fontFamily={theme.typography.fontFamily}
              fontSize={{ xs: "20px", sm: "24px", md: "28px" }}
              fontWeight={700}
              mb={1}
            >
              {project.role}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", lg: "row" }, // Keeps text and button aligned
                alignItems: "self-end",
                justifyContent: "space-center",
                gap: 6,
              }}
            >
              <Box>
                <Typography
                  fontSize={{ xs: "14px", md: "16px" }}
                  color="#666"
                  sx={{ mb: 0.5 }}
                >
                  {project.company} – {project.category}
                </Typography>

                <Typography fontSize={{ xs: "12px", md: "14px" }} color="#888">
                  Est. Time: {project.duration} · {project.level} Level
                </Typography>
              </Box>

              <Button
                variant="contained"
                component={Link}
                to={`/project-feeds/apply/${project.id}`}
                state={{ project }}
                sx={{
                  backgroundColor: theme.palette.primary.dark,
                  borderRadius: "8px",
                  width: { xs: "100%", sm: "108px" },
                  height: "36px",
                  fontSize: "13px",
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  "&:hover": { backgroundColor: theme.palette.primary.main },
                }}
              >
                Apply Now
              </Button>
            </Box>
          </Box>
        </Box>

        {/* DESCRIPTION SECTION */}
        <Box mt={{ xs: 4, md: 6 }}>
          <Typography
            variant="h3"
            fontWeight={700}
            fontFamily={theme.typography.fontFamily}
            color={theme.typography.h3.color}
            mb={2}
            fontSize={{ xs: "18px", md: "24px" }}
          >
            Project Description
          </Typography>
          <Typography
            variant="body1"
            fontSize={{ xs: "14px", md: "15px" }}
            color={theme.typography.body1.color}
            lineHeight={1.8}
            mb={5}
          >
            {project.description}
          </Typography>
        </Box>

        {/* SKILLS */}
        <Box mt={{ xs: 4, md: 5 }}>
          <Typography
            fontWeight={700}
            mb={2}
            variant="h3"
            fontFamily={theme.typography.fontFamily}
            color={theme.typography.h3.color}
            fontSize={{ xs: "16px", md: "18px" }}
          >
            Skills Required
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb:10}}>
            {[
              "UI Design",
              "UX Research",
              "Prototyping",
              "programming",
              "web development",
              "software engineering",
            ].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  bgcolor: "#d3d4d54f",
                  fontWeight: 600,
                  fontSize: { xs: "12px", md: "14px" },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* SIMILAR OPPORTUNITIES */}
        <Box mt={{ xs: 5, md: 7 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3,
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 0 },
            }}
          >
            <Typography
              fontWeight={700}
              fontFamily={theme.typography.fontFamily}
              color={theme.typography.h3.color}
              fontSize={{ xs: "18px", md: "24px" }}
            >
              Similar Opportunities
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "12px", md: "13px" },
                color: theme.palette.primary.main,
                cursor: "pointer",
              }}
            >
              See more…
            </Typography>
          </Box>

          {/* --- GRID OF FEATURED PROJECTS --- */}
          <Grid container spacing={{ xs: 2, sm: 2, md: 3 }}>
            {featuredData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    borderRadius: "12px",
                    border: "1px solid #EDEDED",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    position: "relative",
                    transition:
                      "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 12px 30px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      "& img": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  {/* --- IMAGE SECTION --- */}
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: "180px", sm: "200px", md: "229px" },
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "12px 12px 0 0",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "20px",
                        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "9px", md: "10px" },
                          fontWeight: 700,
                          color: "#333",
                        }}
                      >
                        {item.duration}
                      </Typography>
                    </Box>
                  </Box>

                  {/* --- TAGS SECTION --- */}
                  <Box
                    sx={{
                      px: 2,
                      pt: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.tags.map((tag, i) => (
                      <TagBox
                        key={i}
                        text={tag}
                        bgColor={theme.palette.success.light}
                      />
                    ))}
                    {item.tags2.map((tag, i) => (
                      <TagBox
                        key={i}
                        text={tag}
                        bgColor={theme.palette.success.main}
                      />
                    ))}
                  </Box>

                  {/* --- INFO SECTION --- */}
                  <Box sx={{ p: 2, pt: 1.5, flexGrow: 1 }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          md: theme.typography.h5.fontSize,
                        },
                        fontWeight: 700,
                        color: "#111",
                        lineHeight: 1.3,
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", md: "13px" },
                        fontWeight: 400,
                        color: "#666",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>

                  {/* --- FOOTER SECTION --- */}
                  <Box
                    sx={{
                      p: "14px 16px",
                      borderTop: "1px solid #F5F5F5",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                      flexWrap: { xs: "wrap", sm: "nowrap" },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", md: "11px" },
                          color: "#888",
                          fontWeight: 500,
                        }}
                      >
                        {item.agency}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", md: "11px" },
                          color: "#DDD",
                          fontWeight: 300,
                        }}
                      >
                        |
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", md: "11px" },
                          color: "#888",
                          fontWeight: 500,
                        }}
                      >
                        {item.jobType}
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      component={Link}
                      to={`/project-feeds/apply/${item.id}`}
                      state={{ project: item }}
                      disableElevation
                      sx={{
                        backgroundColor: "#001B44",
                        textTransform: "none",
                        fontSize: { xs: "10px", md: "11px" },
                        fontWeight: 600,
                        borderRadius: "6px",
                        px: 2,
                        py: 0.8,
                        minWidth: "auto",
                        whiteSpace: "nowrap",
                        "&:hover": { backgroundColor: "#003366" },
                      }}
                    >
                      Apply
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </PageWrapper>
    </Box>
  );
}

const TagBox: React.FC<{ text: string; bgColor: string }> = ({
  text,
  bgColor,
}) => (
  <Box
    sx={{
      backgroundColor: bgColor,
      px: 1.2,
      py: 0.4,
      borderRadius: "10.8px",
      border: "1px solid #E0E0E0",
      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: "9px", md: "10px" },
        fontWeight: 700,
        color: "#333",
      }}
    >
      {text}
    </Typography>
  </Box>
);
