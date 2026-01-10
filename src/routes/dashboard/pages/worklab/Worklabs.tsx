import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import workLabHero from "../../../../assets/images/components/worklabs/work_lab_hero.png";
import workFrame_1 from "../../../../assets/images/components/worklabs/worklab_Frames/Worklab_frame_1.png";
import workFrame_2 from "../../../../assets/images/components/worklabs/worklab_Frames/worklab_frame_2.png";
import workFrame_3 from "../../../../assets/images/components/worklabs/worklab_Frames/Worklab_frame_3.png";
import workFrame_4 from "../../../../assets/images/components/worklabs/worklab_Frames/Worklab_frame_4.png";
import workFrame_works from "../../../../assets/images/components/worklabs/worklab_Frames/WorksLab_works.png";
import workFrameOppurtunity1 from "../../../../assets/images/components/worklabs/worklab_opportunity/workslab_frame_1.png";
import workframeOpportunity2 from "../../../../assets/images/components/worklabs/worklab_opportunity/workslab_frame_2.png";
import workframeOpportunity3 from "../../../../assets/images/components/worklabs/worklab_opportunity/workslab_frame_3.png";
import workframeOpportunity4 from "../../../../assets/images/components/worklabs/worklab_opportunity/workslab_frame_4.png";

/* ================= SHARED WRAPPER ================= */
const PageWrapper = ({
  children,
  sx = {},
}: {
  children: React.ReactNode;
  sx?: any;
}) => (
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
const featuredData = [
  {
    title: "Frontend Developer for E-commerce Website",
    subtitle: "Re-imagining our customers facing data Analystic dashboard for better",
    category: "TECH",
    duration: "6 weeks",
    agency: "DigiNext",
    jobType: "Contract",
    tags: ["Frontend"],
    tags2: ["Backend"],
    image: workframeOpportunity4,
  },
  {
    title: "Junior Data Analyst Position",
    subtitle: "Re-imagining our customers facing data Analystic dashboard for better",
    category: "DESIGN",
    duration: "6 weeks",
    agency: "AgriTech",
    jobType: "Internship",
    tags: ["UI", "UX"],
    tags2: ["Backend"],
    image: workFrameOppurtunity1,
  },
  {
    title: "UI/UX Designer for Agricultural Company",
    subtitle: "Re-imagining our customers facing data Analystic dashboard for better",
    category: "MARKETING",
    duration: "6 weeks",
    agency: "Socially",
    jobType: "Full-time",
    tags: ["Social Media"],
    tags2: ["Backend"],
    image: workframeOpportunity2,
  },
  {
    title: "Social Media Manager Role",
    subtitle: "Re-imagining our customers facing data Analystic dashboard for better",
    category: "DATA",
    duration: "6 weeks",
    agency: "DataPoint",
    jobType: "Internship",
    tags: ["Analysis"],
    tags2: ["Backend"],
    image: workframeOpportunity3,
  },
];
const Worklabs = () => {
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
          color={theme.typography.h3.color}
          fontSize={theme.typography.h3.fontSize}
          mb={2}
        >
          Top Categories
        </Typography>

        <Typography
          color={theme.typography.subtitle2.color}
          fontFamily={theme.typography.fontFamily}
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
      {/* ================= FEATURED OPPORTUNITIES ================= */}
      <PageWrapper sx={{ mt: 10 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          color={theme.palette.text.primary}
          fontFamily={theme.typography.fontFamily}
          mb={4}
        >
          Featured Opportunities
        </Typography>

        <Grid container spacing={3}>
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
                  // Transition Logic
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
                {/* --- IMAGE SECTION (229px) --- */}
                <Box
                  sx={{
                    position: "relative",
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
                      transition: "transform 0.5s ease", // Smooth zoom on hover
                    }}
                  />

                  {/* FLOATING DURATION TAG */}
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

                {/* --- DIV 1: TAGS SECTION (Immediately after image) --- */}
                <Box
                  sx={{
                    px: 2,
                    pt: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {item.tags.map((tag, i) => (
                    <Box
                      key={i}
                      sx={{
                        backgroundColor: theme.palette.success.light,
                        px: 1.2,
                        py: 0.4,
                        borderRadius: "10.8px",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#333",
                        }}
                      >
                        {tag}
                      </Typography>
                    </Box>
                  ))}

                  {item.tags2.map((tags, i) => (
                    <Box
                      key={i}
                      sx={{
                        backgroundColor: theme.palette.success.main,

                        px: 1.2,
                        py: 0.4,
                        borderRadius: "10.8px",
                        border: "1px solid #E0E0E0",
                        boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#333",
                        }}
                      >
                        {tags}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* --- DIV 2: INFO SECTION (Category & Title) --- */}
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

                {/* --- DIV 3: FOOTER SECTION (Agency | Job Type) --- */}
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
                      transition: "background-color 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#003366",
                      },
                    }}
                  >
                    Apply
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </PageWrapper>

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
            fontSize={theme.typography.h3.fontSize}
            fontWeight={600}
            fontFamily={theme.typography.fontFamily}
          >
            Have a project?
          </Typography>
          <Typography mb={4} color={theme.palette.text.disabled}>
            Submit your project brief and let our talented pool of learners
            guided by industry learners, bring your project to life
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.typography.caption.color,
              color: theme.palette.warning.contrastText,
              "&:hover": {
                backgroundColor: "white",
              },
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
