import workFrameOppurtunity1 from "../../../../assets/images/components/worklabs/worklab_opportunity/workslab_frame_1.png";
import workframeOpportunity2 from "../../../../assets/images/components/worklabs/worklab_opportunity/workslab_frame_2.png";
import workframeOpportunity3 from "../../../../assets/images/components/worklabs/worklab_opportunity/workslab_frame_3.png";
import workframeOpportunity4 from "../../../../assets/images/components/worklabs/worklab_opportunity/workslab_frame_4.png";
import projectLeadLogo from "../../../../assets/images/components/worklabs/project-feed/project-feedLogo.png";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Button,
  Avatar,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { theme } from "../../../../theme";

const ProjectFeed = () => {
  const theme = useTheme();

  const projects = [
    {
      id: "market-researcher-solutions-inc",
      company: "Market Researchech Solutions Inc.",
      category: "Marketer",
      role: "Data Analyst for Non - Profit Organisation",
      description:
        "Create an app to connect farmers with customers, featuring a marketplace, order management, and delivery tracking.Looking for a team of two designers to create an app to connect farmers with customers, featuring a marketplace, order management, and delivery tracking.",
      duration: "4 Weeks",
      level: "Beginner",
      logo: projectLeadLogo,
      image: workFrameOppurtunity1,
    },
    {
      id: "creators-corner-social-media-manager",
      company: "Creators Corner.",
      category: "Technology",
      role: "Social media manager for a local bussiness",
      description:
        "Develop engaging social media posts and campaigns for a local cafe, including graphics and copy.",
      duration: "4 Weeks",
      level: "Beginner",
      logo: projectLeadLogo,
      image: workframeOpportunity2,
    },
    {
      id: "tech-solutions-backend-developer",
      company: "Tech Solutions Inc.",
      category: "Technology",
      role: "Backend Developer for Api Integration",
      description:
        "Build a robust and scalable API for a social media platform using Node.js and Express.",
      duration: "4 Weeks",
      level: "Beginner",
      logo: projectLeadLogo,
      image: workframeOpportunity3,
    },
    {
      id: "tech-solutions-ui-ux-designer",
      company: "Tech Solutions Inc.",
      category: "Technology",
      role: "UI/UX Designer for Mobile App",
      description:
        "Looking for a team of two designers to create an app to connect farmers with customers, featuring a marketplace, order management, and delivery tracking.",
      duration: "4 Weeks",
      level: "Beginner",
      logo: projectLeadLogo,
      image: workframeOpportunity4,
    },
  ];

  return (
    <Box
      sx={{ maxWidth: "1200px", margin: "0 auto", p: { xs: 2, sm: 3, md: 4 } }}
    >
      <TextField
        fullWidth
        placeholder="Search projects"
        variant="outlined"
        sx={{
          mb: { xs: 4, md: 6 },
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            backgroundColor: "#F3F4F6",
            "& fieldset": { border: "none" },
            fontFamily: theme.typography.fontFamily,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#9CA3AF" }} />
            </InputAdornment>
          ),
        }}
      />

      <Typography
        variant="h4"
        fontFamily={theme.typography.fontFamily}
        fontSize={{
          xs: theme.typography.h4.fontSize,
          md: theme.typography.h3.fontSize,
        }}
        fontWeight={theme.typography.h2.fontWeight}
        mb={{ xs: 2, md: 4 }}
        sx={{ color: "#111" }}
      >
        Project Feed
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export interface IProject {
  id: number | string;
  company: string;
  category: string;
  role: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        backgroundColor: theme.palette.background.default,
        borderRadius: "16px",
        border: "1px solid #EDEDED",
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": { boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" },
      }}
    >
      {/* Left Content */}
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "flex-start",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 2,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          <Avatar
            src={projectLeadLogo}
            sx={{ width: { xs: 50, md: 94 }, height: { xs: 50, md: 94 } }}
          />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: theme.typography.h3.fontWeight,
                color: theme.typography.h3.color,
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "0.9rem", sm: "1.25rem", md: "1.5rem" },
                wordBreak: "break-word",
              }}
            >
              {project.company} • {project.category}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 0.5,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                fontWeight: theme.typography.h6.fontWeight,
                color: theme.typography.h6.color,
                fontFamily: theme.typography.fontFamily,
                wordBreak: "break-word",
              }}
            >
              {project.role}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#666",
            mb: 3,
            lineHeight: theme.typography.subtitle1.lineHeight,
            fontFamily: theme.typography.fontFamily,
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.95rem" },
          }}
        >
          {project.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 2, md: 3 },
            mb: 3,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccessTimeIcon
              sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, color: "#666" }}
            />
            <Typography
              variant="caption"
              fontFamily={theme.typography.fontFamily}
              color="#666"
              sx={{ fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.75rem" } }}
            >
              {project.duration}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <SignalCellularAltIcon
              sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, color: "#666" }}
            />
            <Typography
              variant="caption"
              color="#666"
              sx={{ fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.75rem" } }}
            >
              {project.level}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2, md: 5 },
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            component={Link}
            to={`/project-feeds/details/${project.id}`}
            state={{ project }}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              px: { xs: 1.5, sm: 2, md: 3 },
              py: { xs: 1, md: 0.5 },
              height: { xs: "36px", md: "32px" },
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
              borderColor: "#E0E0E0",
              color: "#333",
              fontFamily: theme.typography.fontFamily,
              flex: { xs: 1, sm: "initial" },
              minWidth: "80px",
            }}
          >
            View Project
          </Button>
          <Button
            variant="contained"
            disableElevation
            component={Link}
            to={`/project-feeds/apply/${project.id}`}
            state={{ project }}
            sx={{
              backgroundColor: "#001B44",
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
              width: { xs: "100%", sm: "156px" },
              fontWeight: 600,
              borderRadius: "6px",
              px: { xs: 1.5, sm: 2, md: 2 },
              py: { xs: 1, md: 0.5 },
              height: { xs: "36px", md: "32px" },
              fontFamily: theme.typography.fontFamily,
              flex: { xs: 1, sm: "initial" },
              minWidth: "80px",
              "&:hover": { backgroundColor: "#003366" },
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>

      {/* Right Image - Responsive */}
      <Box
        sx={{
          width: { xs: "100%", md: "30%" },
          minHeight: { xs: "200px", sm: "250px", md: "auto" },
          minWidth: { md: "250px" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={project.image}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            maxWidth: "356px",
            maxHeight: "201px",
            margin: "0 auto",
            display: "block",
          }}
          alt={project.role}
        />
      </Box>
    </Box>
  );
};

export default ProjectFeed;
