import React from "react";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { Link } from "react-router-dom"; // Standard for SPA navigation
import featuredData from "../../../../Data/Worklab.data";


export interface PageWrapperProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  sx = {},
}) => (
  <Box
    sx={{
      width:{ xs:"100%", md: "95%"},
      maxWidth: "1400px",
      margin: "0 auto",
      px: { xs: 1, md: 3 },
      ...sx,
    }}
  >
    {children}
  </Box>
);

const WorkLabCard = () => {
  const theme = useTheme();

  return (
    <PageWrapper>
      {/* --- GRID OF FEATURED PROJECTS --- */}
      <Grid container spacing={3}>
        {featuredData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                borderRadius: "12px",
                border: "1px solid #EDEDED",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "",
                height: "100%",
                ml:{xs:"25px", md:0},
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
                  display: "block",
                  placeItems: "center",
                  height: "229px",
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
                    sx={{ fontSize: "10px", fontWeight: 700, color: "#333" }}
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
                    fontSize: theme.typography.h5.fontSize,
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
                    fontSize: "13px",
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
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography
                    sx={{ fontSize: "11px", color: "#888", fontWeight: 500 }}
                  >
                    {item.agency}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "11px", color: "#DDD", fontWeight: 300 }}
                  >
                    |
                  </Typography>
                  <Typography
                    sx={{ fontSize: "11px", color: "#888", fontWeight: 500 }}
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
                    fontSize: "11px",
                    fontWeight: 600,
                    borderRadius: "6px",
                    px: 2,
                    py: 0.8,
                    minWidth: "auto",
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

      {/* --- SEE MORE LINK (Refactored to Link) --- */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Typography
          component={Link}
          to="/worklabs/project-feeds"
          sx={{
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 600,
            color: theme.palette.primary.main,
            textDecoration: "none",
            cursor: "pointer",
            mr:{ xs: 2, md: 0 },
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Explore more
        </Typography>
      </Box>
    </PageWrapper>
  );
};
/* --- SMALL HELPER COMPONENT FOR TAGS --- */
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
    <Typography sx={{ fontSize: "10px", fontWeight: 700, color: "#333" }}>
      {text}
    </Typography>
  </Box>
);

export default WorkLabCard;
