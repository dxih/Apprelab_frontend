import React from "react";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
// Import assets (Assuming these paths are correct in your TS config)
import workLabHero from "../../../../assets/images/components/worklabs/worklabhero.png";
import workFrame_1 from "../../../../assets/images/components/worklabs/worklabFrames/worklabframe1.png";
import workFrame_2 from "../../../../assets/images/components/worklabs/worklabFrames/worklabframe2.png";
import workFrame_3 from "../../../../assets/images/components/worklabs/worklabFrames/worklabframe3.png";
import workFrame_4 from "../../../../assets/images/components/worklabs/worklabFrames/worklabframe4.png";
import workFrame_works from "../../../../assets/images/components/worklabs/worklabFrames/worksLabworks.png";
import WorklabCard from "./WorkLabCard";


/* ================= TYPES & INTERFACES ================= */



interface PageWrapperProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

/* ================= SHARED WRAPPER ================= */

const PageWrapper: React.FC<PageWrapperProps> = ({ children, sx = {} }) => (
  <Box
    sx={{
      width: "95%",
      maxWidth: "1400px",
      margin: "0 auto",
      px: { xs: 1, md: 3 },
      ...sx,
    }}
  >
    {children}
  </Box>
);
const Worklabs: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      {/* ================= HERO ================= */}
      <PageWrapper sx={{ mt: { xs: 2, md: 6 } }}>
        <Box
          sx={{
            borderRadius: "11.96px",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: 6,
            },
          }}
        >
          <Box
            component="img"
            src={workLabHero}
            alt="Worklab Hero"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </PageWrapper>

      {/* ================= TOP CATEGORIES ================= */}
      <PageWrapper sx={{ mt: 8 }}>
        <Typography
          variant="h3"
          fontWeight={theme.typography.h3.fontWeight}
          fontFamily={theme.typography.fontFamily}
          color={theme.typography.h3.color}
          fontSize={theme.typography.h3.fontSize}
          mb={2}
        >
          Top Categories
        </Typography>

        <Typography
          color={theme.typography.subtitle2.color}
          sx={{ fontFamily: theme.typography.fontFamily }}
          mb={3}
        >
          Explore our most popular work opportunities
        </Typography>

        <Grid container spacing={3}>
          {[workFrame_1, workFrame_2, workFrame_3, workFrame_4].map(
            (img, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Box
                  component="img"
                  src={img}
                  sx={{
                    width: "100%",
                    height: 229,
                    borderRadius: "11.96px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                />
              </Grid>
            )
          )}
        </Grid>
      </PageWrapper>

      {/* ================= FEATURED OPPORTUNITIES ================= */}
      <PageWrapper sx={{ mt: 10 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          color={theme.palette.text.primary}
          sx={{ fontFamily: theme.typography.fontFamily }}
          mb={1}
        >
          Featured Opportunities
        </Typography>
        <Box
          color={theme.typography.subtitle2.color}
          sx={{ fontFamily: theme.typography.fontFamily }}
          mb={5}
        >
          Explore our most popular work opportunities
        </Box>
      </PageWrapper>
      <Grid container spacing={3}>
            <WorklabCard/>
       
      </Grid>

      {/* ================= HOW IT WORKS ================= */}
      <PageWrapper sx={{ mt: 12 }}>
        <Typography
          variant="h3"
          align="center"
          mb={6}
          sx={{
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          How Worklab{" "}
          <Box component="span" sx={{ color: theme.palette.warning.main }}>
            Works
          </Box>
        </Typography>
        <Box
          component="img"
          src={workFrame_works}
          sx={{ width: "100%", display: "block" }}
        />
      </PageWrapper>

      {/* ================= CTA ================= */}
      <PageWrapper sx={{ mt: 14, mb: 12 }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: "16px",
            textAlign: "center",
            py: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: theme.typography.h3.fontSize,
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Have a project?
          </Typography>
          <Typography mb={4} sx={{ color: theme.palette.text.disabled }}>
            Submit your project brief and let our talented pool of learners
            guided by industry learners, bring your project to life
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.typography.caption.color,
              color: theme.palette.warning.contrastText,
              "&:hover": { backgroundColor: "white" },
            }}
          >
            Post a project
          </Button>
        </Box>
      </PageWrapper>
    </Box>
  );
};




export default Worklabs;
