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
import DashboardHome from "./routes/dashboard/pages/main/DashboardHome";
// import Courses from "../draft/Courses";
import Microbootcamps from "./routes/dashboard/pages/bootcamps/Microbootcamps";
import OngoingBootcampsPage from "./routes/dashboard/pages/bootcamps/OngoingBootcampsPage";
// import OngoingCoursesPage from "../draft/OngoingCoursesPage";
import UpcomingBootcampsPage from "./routes/dashboard/pages/bootcamps/UpcomingBootcampsPage";
// import UpcomingCoursesPage from "../draft/UpcomingCoursesPage";
import BootcampDetail from "./routes/dashboard/pages/bootcamps/BootcampDetail";
// import CourseDetail from "../draft/CourseDetail";
import ShoppingCart from "./routes/dashboard/pages/payment/ShoppingCart";
import Checkout from "./routes/dashboard/pages/payment/Checkout";
import MyMentor from "./routes/dashboard/pages/mentor/MyMentor";
import OurMentors from "./routes/dashboard/pages/mentor/OurMentorsPage";
// mystack pages
import MyStack from "./routes/dashboard/pages/stack/MyStack";
import MyStackResourcePage from "./routes/dashboard/pages/stack/MyStackResources";
import MyStackAssetsmentPage from "./routes/dashboard/pages/stack/MyStackAssetsment";
import MyStackOverviewPage from "./routes/dashboard/pages/stack/MyStackOverView";
import MyStackDiscussionPage from "./routes/dashboard/pages/stack/MyStackDiscussion";
import BootcampLayout from "./layouts/website/MyStackBootCampLayout/BootcampLayout";
// WORKLAB PAGES
import Worklabs from "./routes/dashboard/pages/worklab/Worklabs";
import ProjectFeeds from "./routes/dashboard/pages/worklab/projectfeeds";
import ProjectDetails from "./routes/dashboard/pages/worklab/ProjectDetails";
import ApplyPage from "./routes/dashboard/pages/worklab/DetailsApply";

// Certificates Pages
import CertificatesList from "./routes/dashboard/pages/Certificates/CertificatesList"
import CertificateDetail from "./routes/dashboard/pages/Certificates/CertificateDetails";

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
        {/* <Route path="/dashboard/courses" element={<Courses />} /> */}
        <Route path="/dashboard/microbootcamps" element={<Microbootcamps />} />
        <Route path="/dashboard/ongoing-bootcamps" element={<OngoingBootcampsPage />} />
        {/* <Route path="/dashboard/ongoing-courses" element={<OngoingCoursesPage />} /> */}
        <Route path="/dashboard/upcoming-bootcamps" element={<UpcomingBootcampsPage />} />
        {/* <Route path="/dashboard/upcoming-courses" element={<UpcomingCoursesPage />} /> */}
        <Route path="/dashboard/bootcampdetail" element={<BootcampDetail />} />
        {/* <Route path="/dashboard/coursedetail" element={<CourseDetail />} /> */}
        {/* Mentor Pages */}
        <Route path="/dashboard/mymentor" element={<MyMentor />} />
        <Route path="/dashboard/ourmentors" element={<OurMentors />} />
        {/* MYSTACK PAGES */}
        <Route path="/dashboard/mystack" element={<MyStack />} />
        <Route path="/bootcamp/:id/:tab" element={<BootcampLayout />}>
          <Route path="overview" element={<div />} />
          <Route path="resources" element={<MyStackResourcePage />} />
          <Route path="assessments" element={<MyStackAssetsmentPage />} />
          <Route path="overview" element={<MyStackOverviewPage />} />
          <Route path="discussions" element={<MyStackDiscussionPage />} />
        </Route>
        {/* Certificate */}
        <Route path="/certificates" element={<CertificatesList />} />
        <Route path="/certificates/:id" element={<CertificateDetail />} />
        {/* Payment Pages */}
        <Route path="/dashboard/shoppingcart" element={<ShoppingCart />} />
        <Route path="/dashboard/checkout" element={<Checkout />} />
        {/*           WORKLABS PAGES */}
        <Route path="/dashboard/worklabs" element={<Worklabs />} />
        <Route path="/worklabs/project-feeds" element={<ProjectFeeds />} />
        <Route path="/project-feeds/Details/:id" element={<ProjectDetails />} />
        <Route path="/project-feeds/apply/:id" element={<ApplyPage />} />
      </Route>

      {/* 🔐 Auth (NO navbar + NO footer) */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
