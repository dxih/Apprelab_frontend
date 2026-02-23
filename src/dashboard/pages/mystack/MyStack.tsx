import { Box, Typography } from "@mui/material";
import { useState } from "react";
import StackNavbar from "../../components/MyStackpage/StackNavbar";
import StackOngoingBootcamps from "../../components/MyStackpage/StackBootcamps/StackOngoingBootcamps";
import StackPreSavedBootcamps from "../../components/MyStackpage/StackBootcamps/StackPreSavedBootcamps";
import StackSideBar from "../../components/MyStackpage/StackBootcamps/StackSideBar";
import StackCompletedBootcamps from "../../components/MyStackpage/StackBootcamps/StackCompletetedBootCamps";
import { PageWrapper } from "../worklab/WorkLabCard";
import { useTheme } from "@mui/material/styles";
import { ongoingBootcamps } from "../../Data/MyStackBootcamp.data";
import { preSavedBootcamps } from "../../Data/MyStackBootcamp.data";

// IMPORT the interface to type the local array
import StackOngoingCourses from "../../components/MyStackpage/MyStackCourses/StackOngoingCourses";
import StackAddedToCart from "../../components/MyStackpage/MyStackCourses/StackAddedToCart";
import StackCompletedCourses from "../../components/MyStackpage/MyStackCourses/StackCompletedCourses";
import { ongoingCoursesData } from "../../Data/MyStackCourses.data";
import { cartCoursesData } from "../../Data/MyStackCourses.data";

export default function MyStack() {
  const theme = useTheme();
  // Changed this to state so it can be updated
  const [activeTab, setActiveTab] = useState<string>("Bootcamp");

  return (
    <PageWrapper>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          width: "100%",
          display: "block",
          flexDirection: "coloumn",
          placeContent: "center",
        }}
      >
        {/* Pass state and setter to the Navbar */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <StackNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </Box>

        <Box sx={{ height: { xs: 4, sm: 6 } }} />

        {/* --- BOOTCAMP CONTENT --- */}
        {activeTab === "Bootcamp" && (
          <>
            <Typography
              variant="h4"
              sx={{
                mb: 1,
                fontWeight: 600,
                px: { xs: 1, sm: 2, md: 2 },
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Ongoing Bootcamps
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 3, md: 4 },
                py: { xs: 1, md: 2 },
                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  flex: { xs: 1, md: 1.9 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minWidth: 0,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                <StackOngoingBootcamps bootcamps={ongoingBootcamps} />
                <StackPreSavedBootcamps bootcamps={preSavedBootcamps} />
              </Box>

              <Box
                sx={{
                  flex: { xs: 1, md: 1 },
                  width: "100%",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                <StackSideBar />
              </Box>
            </Box>

            <Box sx={{ height: { xs: 30, md: 40 } }} />
            <StackCompletedBootcamps />
          </>
        )}

        {/* --- COURSES CONTENT --- */}
        {activeTab === "Courses" && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 3, md: 4 },
                py: { xs: 1, md: 2 },
                alignItems: { md: "flex-start", xs: "flex" },
                width: "100%",
              }}
            >
              {/* LEFT CONTAINER (Ongoing + Cart) */}
              <Box
                sx={{
                  flex: { xs: 1, md: 1.9 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  minWidth: 0,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    px: {
                      xs: 1,
                      sm: 2,
                      md: 2,
                      fontFamily: theme.typography.fontFamily,
                    },
                  }}
                >
                  Ongoing Courses
                </Typography>
                <StackOngoingCourses courses={ongoingCoursesData} />

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mt: 4,
                    mb: 1,
                    px: { xs: 1, sm: 2, md: 0 },
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Added to Cart
                </Typography>
                <StackAddedToCart courses={cartCoursesData} />
              </Box>

              {/* RIGHT CONTAINER (Sidebar) */}
              <Box
                sx={{
                  flex: { xs: 1, md: 1 },
                  width: "100%",
                  mt: { xs: 2, md: "44px" },
                }}
              >
                <StackSideBar />
              </Box>
            </Box>

            {/* --- COMPLETED COURSES SECTION --- */}
            {/* This sits outside the flex-row so it spans the width correctly */}
            <Box sx={{ mt: 5 }}>
              <StackCompletedCourses />
            </Box>
          </>
        )}
        {/* --- MENTORSHIP CONTENT --- */}
        {activeTab === "Mentorship Sessions" && (
          <Box sx={{ py: 10, textAlign: "center", px: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Mentorship Sessions
            </Typography>
            <Typography color="text.secondary">
              No Upcoming and past mentorship sessions yet. Coming soon...
            </Typography>
          </Box>
        )}
      </Box>
    </PageWrapper>
  );
}
