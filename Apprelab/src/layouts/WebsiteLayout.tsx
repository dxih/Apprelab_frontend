import { Box } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <Box sx={{ backgroundColor: "#F9FAFF", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};

export default WebsiteLayout;
