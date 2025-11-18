import { Routes, Route } from "react-router-dom";

// Layout
import WebsiteLayout from "./layouts/WebsiteLayout";

// 🌐 Website pages
import Home from "./routes/website/pages/Home";
import Mentor from "./routes/website/pages/Mentor";
import Learn from "./routes/website/pages/Learn";

// 🔐 Auth pages
import Signup from "./routes/auth/Signup";
import Login from "./routes/auth/Login";
import ForgotPassword from "./routes/auth/ForgotPassword";

function App() {
  return (
    <Routes>
      
      {/* 🌐 Public Website Layout (Navbar + Footer) */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/mentor" element={<Mentor />} />
      </Route>

      {/* 🔐 Auth Only (NO Navbar + NO Footer) */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

    </Routes>
  );
}

export default App;
