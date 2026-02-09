import { Routes, Route } from "react-router-dom";

// Layouts
import WebsiteLayout from "./layouts/website/WebsiteLayout";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";

// 🌐 Website Pages
import Home from "./website/pages/Home";
import Mentor from "./website/pages/Mentor";
import Learn from "./website/pages/Learn";
import Hire from "./website/pages/Hire";
import Create from "./website/pages/Create";
import About from "./website/pages/About";

// 🧑‍💻 Dashboard Pages
import DashboardHome from "./dashboard/pages/main/DashboardHome";
import Courses from "./dashboard/pages/courses/Courses";
import Microbootcamps from "./dashboard/pages/microbootcamps/Microbootcamps";
import OngoingBootcampsPage from "./dashboard/pages/microbootcamps/OngoingBootcampsPage";
import OngoingCoursesPage from "./dashboard/pages/courses/OngoingCoursesPage";
import UpcomingBootcampsPage from "./dashboard/pages/microbootcamps/UpcomingBootcampsPage";
import UpcomingCoursesPage from "./dashboard/pages/courses/UpcomingCoursesPage";
import BootcampDetail from "./dashboard/pages/microbootcamps/MicrobootcampDetail";
import CourseDetail from "./dashboard/pages/courses/CourseDetail";
import ShoppingCart from "./dashboard/pages/payment/ShoppingCart";
import Checkout from "./dashboard/pages/payment/Checkout";
import MyMentor from "./dashboard/pages/mentor/MyMentor";
import OurMentors from "./dashboard/pages/mentor/OurMentorsPage";
import Profile from "./dashboard/pages/main/Profile";
import Settings from "./dashboard/pages/main/Settings";
// mystack pages
import MyStack from "./dashboard/pages/mystack/MyStack";
import MyStackResourcePage from "./dashboard/pages/mystack/MyStackResources";
import MyStackAssetsmentPage from "./dashboard/pages/mystack/MyStackAssetsment";
import MyStackOverviewPage from "./dashboard/pages/mystack/MyStackOverView";
import MyStackDiscussionPage from "./dashboard/pages/mystack/MyStackDiscussion";
import BootcampLayout from "./layouts/dashboard/MyStackBootCampLayout/BootcampLayout";
// WORKLAB PAGES
import Worklabs from "./dashboard/pages/worklab/Worklabs";
import ProjectFeeds from "./dashboard/pages/worklab/projectfeeds";
import ProjectDetails from "./dashboard/pages/worklab/ProjectDetails";
import ApplyPage from "./dashboard/pages/worklab/DetailsApply";

// Certificates Pages
import CertificatesList from "./dashboard/pages/certificates/CertificatesList"
import CertificateDetail from "./dashboard/pages/certificates/CertificateDetails";

// join community
import JoinCommunity from "./dashboard/pages/community/JoinCommunity";

// 🔐 Auth Pages
import Signup from "./dashboard/pages/auth/Signup";
import Login from "./dashboard/pages/auth/Login";
import ForgotPassword from "./dashboard/pages/auth/ForgotPassword";
import Sme from "./dashboard/pages/sme/Sme";

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
        <Route path="/dashboard/ongoing-courses" element={<OngoingCoursesPage />} />
        <Route path="/dashboard/upcoming-bootcamps" element={<UpcomingBootcampsPage />} />
        <Route path="/dashboard/upcoming-courses" element={<UpcomingCoursesPage />} />
        <Route path="/dashboard/bootcampdetail" element={<BootcampDetail />} />
        <Route path="/dashboard/coursedetail" element={<CourseDetail />} />
        {/* Profile Pages */}
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />

          {/* SME Pages */}
        <Route path="/dashboard/sme" element={<Sme />} /> 
        
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
        {/* join community */}
        <Route path="/community/join" element={<JoinCommunity />} />
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
