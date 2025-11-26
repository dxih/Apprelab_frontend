import { Box } from "@mui/material";
import DashboardNavbar from "./DashboardNavbar";
import DashboardFooter from "./DashboardFooter";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Box sx={{ backgroundColor: "#F9FAFF", minHeight: "100vh" }}>
      <DashboardNavbar />
      <main>
        <Outlet />
      </main>
      <DashboardFooter />
    </Box>
  );
};

export default DashboardLayout;
