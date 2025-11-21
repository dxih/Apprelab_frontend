import { Box } from "@mui/material";
import WebsiteNavbar from "./WebsiteNavbar";
import WebsiteFooter from "./WebsiteFooter";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <Box sx={{ backgroundColor: "#F9FAFF", minHeight: "100vh" }}>
      <WebsiteNavbar />
      <main>
        <Outlet />
      </main>
      <WebsiteFooter />
    </Box>
  );
};

export default WebsiteLayout;
