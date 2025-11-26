import { Routes, Route } from "react-router-dom";

// Layouts
import WebsiteLayout from "./layouts/website/WebsiteLayout";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";

// 🌐 Website Pages
import Home from "./routes/website/pages/Home";
import Mentor from "./routes/website/pages/Mentor";
import Learn from "./routes/website/pages/Learn";
import Hire from "./routes/website/pages/Hire";
import Create from "./routes/website/pages/Create";
import About from "./routes/website/pages/About";

// 🧑‍💻 Dashboard Pages
import DashboardHome from "./routes/dashboard/pages/DashboardHome";
import Courses from "./routes/dashboard/pages/Courses";
import Microbootcamps from "./routes/dashboard/pages/Microbootcamps";
import OngoingBootcampsPage from "./routes/dashboard/pages/OngoingBootcampsPage";
import UpcomingBootcampsPage from "./routes/dashboard/pages/UpcomingBootcampsPage";
import CourseDetail from "./routes/dashboard/pages/CourseDetail";

// import MyStack from "./routes/dashboard/pages/MyStack";
// import MyMentor from "./routes/dashboard/pages/MyMentor";
// import Worklabs from "./routes/dashboard/pages/Worklabs";

// 🔐 Auth Pages
import Signup from "./routes/auth/Signup";
import Login from "./routes/auth/Login";
import ForgotPassword from "./routes/auth/ForgotPassword";

function App() {
  return (
    <Routes>

      {/* 🌐 Public Website (Navbar + Footer) */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* 🧑‍💻 Dashboard (DashboardNavbar + Sidebar) */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/courses" element={<Courses />} />
        <Route path="/dashboard/microbootcamps" element={<Microbootcamps />} />
        <Route path="/dashboard/ongoing-bootcamps" element={<OngoingBootcampsPage />} />
        <Route path="/dashboard/upcoming-bootcamps" element={<UpcomingBootcampsPage />} />
        <Route path="/dashboard/coursedetail" element={<CourseDetail />} />
        {/*<Route path="/dashboard/mystack" element={<MyStack />} />
        <Route path="/dashboard/mymentor" element={<MyMentor />} />
        <Route path="/dashboard/worklabs" element={<Worklabs />} />*/}
      </Route>

      {/* 🔐 Auth (NO navbar + NO footer) */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

    </Routes>
  );
}

export default App;
