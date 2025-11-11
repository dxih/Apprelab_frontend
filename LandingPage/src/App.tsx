import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";
import Learn from "./pages/Learn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F9FAFF",
        minHeight: "100vh",
      }}
    >
      {/* === Glowing Blue Background Blobs === */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-20%",
          width: 900,
          height: 900,
          background: "radial-gradient(circle, rgba(0,102,255,0.45) 0%, transparent 70%)",
          filter: "blur(180px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "-15%",
          width: 1000,
          height: 1000,
          background: "radial-gradient(circle, rgba(0,153,255,0.4) 0%, transparent 75%)",
          filter: "blur(200px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "15%",
          width: 1200,
          height: 1200,
          background: "radial-gradient(circle, rgba(0,128,255,0.35) 0%, transparent 80%)",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "70%",
          right: "20%",
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(0,102,255,0.4) 0%, transparent 80%)",
          filter: "blur(200px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: 1000,
          height: 1000,
          background: "radial-gradient(circle, rgba(51, 153, 255, 0.96) 0%, transparent 20%)",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      />

      {/* === Foreground Content === */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/mentor" element={<Mentor />} />
          </Routes>
        </main>

        <Footer />
      </Box>
    </Box>
  );
}

export default App;
