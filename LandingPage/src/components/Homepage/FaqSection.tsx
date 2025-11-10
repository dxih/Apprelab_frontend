import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqimg from "../../assets/faqimg.png"; // ✅ adjust the path if needed

const faqs = [
  "What is Apprelab?",
  "Who can use Apprelab?",
  "How do I get started as a learner?",
  "Can I earn while learning on Apprelab?",
  "I’m an expert or mentor—how can I contribute?",
  "Can training institutions or academies use Apprelab?",
  "How can businesses or startups benefit from Apprelab?",
  "What types of skills or fields are available on Apprelab?",
  "Will I get recognition for my work or learning progress?",
  "How can I get help or support?",
];

// ✅ Dummy answers for now — same length as faqs
const answers = [
  "AppreLab is a digital platform where people can learn practical skills, work on real projects, and connect with experts and businesses—all within one ecosystem designed to help users grow, earn, and collaborate.",
  "AppreLab is open to learners, mentors, training academies, and businesses.\n• Learners build skills and portfolios.\n• Mentors share expertise and guide learners.\n• Academies host short digital programs.\n• Businesses find reliable digital talent for their projects.",
  "Create an account, choose a skill area you’re interested in, and start with short, practical learning modules. You can then join projects, challenges, or guided sessions to apply your skills.",
  "Yes. Learners can participate in real digital projects, internships, or collaboration opportunities that provide both experience and income when available.",
  "Mentors can teach short courses, guide learners through projects, or host focused sessions. It’s an opportunity to build credibility, impact others, and earn from your knowledge.",
  "Yes. Academies can use AppreLab to host and manage short digital programs, bootcamps, or workshops while tracking learners’ progress and outcomes in one place.",
  "Businesses can post digital projects and connect with skilled learners and mentors who can execute tasks professionally, saving cost while getting verified, high-quality work.",
  "AppreLab offers skills across web and app development, design, data, marketing, content, product management, and other fast-growing digital fields.",
  "Yes. Users earn certificates, verified project records, and portfolio badges that reflect their learning and project achievements—useful for job or freelance opportunities.",
  "You can contact AppreLab’s support team directly through the in-app Help Center or by emailing support@apprelab.com. There are also FAQs, guides, and tutorials available for quick assistance.",
];

const FaqSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: { xs: 6, md: 8 },
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 7, md: 9 },
        backgroundColor: "#4e577924",
      }}
    >
      {/* LEFT SECTION */}
      <Box
        sx={{
          flex: { xs: "none", md: "0 0 40%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: { md: "420px" },
          gap: 3,
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src={faqimg}
          alt="FAQ Illustration"
          sx={{
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            height: "50%",
          }}
        />

        {/* TEXT SECTION */}
        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#E9B300",
              fontWeight: 600,
              mb: 1.5,
            }}
          >
            FAQs
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.75rem", md: "2rem" },
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#0B0B31",
              mb: 2,
            }}
          >
            Our FAQs provides a wealth of information to help you navigate your
            Apprelab experience.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#0B0B31",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 500,
              px: 3,
              py: 1.2,
              width: "fit-content",
              "&:hover": {
                backgroundColor: "#020624",
              },
            }}
          >
            Get started
          </Button>
        </Box>
      </Box>

      {/* RIGHT SECTION — ACCORDIONS */}
      <Box
        sx={{
          flex: { xs: "none", md: "0 0 55%" },
          backgroundColor: "#a9aaae13",
        }}
      >
        {faqs.map((question, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            disableGutters
            elevation={0}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              mb: 1.5,
              "&:before": { display: "none" },
              boxShadow: "0px 4px 10px rgba(0,0,0,0.03)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#0B0B31" }} />}
              sx={{
                "& .MuiAccordionSummary-content": {
                  marginY: 0.5,
                },
                px: 3,
                py: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "#0B0B31",
                }}
              >
                {index + 1}. {question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                px: 3,
                pb: 2.5,
                pt: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: 1.7,
                      whiteSpace: "pre-line", // ✅ THIS FIXES THE ISSUE

                }}
              >
                {answers[index]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FaqSection;
