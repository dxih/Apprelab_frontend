import { Routes, Route } from "react-router-dom";

/* ================= Layouts ================= */
import WebsiteLayout from "./layouts/website/WebsiteLayout";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import FounderDashboardLayout from "./layouts/founder-hub/FounderDashboardLayout";

/* ================= Website Pages ================= */
import Home from "./routes/website/pages/Home";
import Mentor from "./routes/website/pages/Mentor";
import Learn from "./routes/website/pages/Learn";
import Hire from "./routes/website/pages/Hire";
import Create from "./routes/website/pages/Create";
import About from "./routes/website/pages/About";
import Sme from "./routes/website/pages/Sme";

/* ================= User Dashboard Pages ================= */
import DashboardHome from "./routes/dashboard/pages/main/DashboardHome";
import Courses from "./routes/dashboard/pages/courses/Courses";
import Microbootcamps from "./routes/dashboard/pages/bootcamps/Microbootcamps";
import OngoingBootcampsPage from "./routes/dashboard/pages/bootcamps/OngoingBootcampsPage";
import OngoingCoursesPage from "./routes/dashboard/pages/courses/OngoingCoursesPage";
import UpcomingBootcampsPage from "./routes/dashboard/pages/bootcamps/UpcomingBootcampsPage";
import UpcomingCoursesPage from "./routes/dashboard/pages/courses/UpcomingCoursesPage";
import BootcampDetail from "./routes/dashboard/pages/bootcamps/BootcampDetail";
import CourseDetail from "./routes/dashboard/pages/courses/CourseDetail";
import ShoppingCart from "./routes/dashboard/pages/payment/ShoppingCart";
import Checkout from "./routes/dashboard/pages/payment/Checkout";
import MyMentor from "./routes/dashboard/pages/mentor/MyMentor";
import OurMentors from "./routes/dashboard/pages/mentor/OurMentorsPage";
import Profile from "./routes/dashboard/pages/main/Profile";
import Settings from "./routes/dashboard/pages/main/Settings";
// mystack pages
// import MyStack from "./routes/dashboard/pages/main/stack/MyStack";
// import MyStackResourcePage from "./routes/dashboard/pages/main/stack/MyStackResources";
// import MyStackAssetsmentPage from "./routes/dashboard/pages/main/stack/MyStackAssetsment";
// import MyStackOverviewPage from "./routes/dashboard/pages/main/stack/MyStackOverView";
// import MyStackDiscussionPage from "./routes/dashboard/pages/main/stack/MyStackDiscussion";
import BootcampLayout from "./layouts/website/MyStackBootCampLayout/BootcampLayout";
import Worklabs from "./routes/dashboard/pages/worklab/Worklabs";
import ProjectFeeds from "./routes/dashboard/pages/worklab/projectfeeds";
import ProjectDetails from "./routes/dashboard/pages/worklab/ProjectDetails";
import ApplyPage from "./routes/dashboard/pages/worklab/DetailsApply";

// Certificates Pages
import CertificatesList from "./routes/dashboard/pages/Certificates/CertificatesList"
import CertificateDetail from "./routes/dashboard/pages/Certificates/CertificateDetails";

// join community
import JoinCommunity from "./routes/dashboard/pages/community/JoinCommunity";

/* ================= Founder Pages ================= */
import FounderDashboard from "./layouts/founder-hub/FounderDashboard";
import FounderProjects from "./layouts/founder-hub/FounderProjects";
import FounderTalent from "./layouts/founder-hub/FounderTalent";
import FounderCollaboration from "./layouts/founder-hub/FounderCollaboration";
import FounderWallet from "./layouts/founder-hub/FounderWallet";
import FounderSettings from "./layouts/founder-hub/FounderSettings";
import FounderOverview from "./layouts/founder-hub/FounderOverview";

/* ================= Auth ================= */
import Signup from "./routes/auth/Signup";
import Login from "./routes/auth/Login";
import ForgotPassword from "./routes/auth/ForgotPassword";

/* ================= Dashboard Context ================= */
import { DashboardProvider } from "./context/DashboardContext";
import MyStack from "./routes/dashboard/pages/stack/MyStack";
// import MyStack from "./routes/dashboard/pages/stack/MyStack";

function App() {
  return (
    <Routes>
      {/* Founder Hub */}
      <Route
        path="/founder"
        element={
          <DashboardProvider>
            <FounderDashboardLayout />
          </DashboardProvider>
        }
      >
        <Route index element={<FounderDashboard />} />
        <Route path="projects" element={<FounderProjects />} />
        <Route path="talent" element={<FounderTalent />} />
        <Route path="collaboration" element={<FounderCollaboration />} />
        <Route path="wallet" element={<FounderWallet />} />
        <Route path="settings" element={<FounderSettings />} />
        <Route path="overview" element={<FounderOverview />} />
      </Route>

      {/*  Public Website */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/sme" element={<Sme />} />
      </Route>

      {/*  User Dashboard */}
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
        {/* Mentor Pages */}
        <Route path="/dashboard/mymentor" element={<MyMentor />} />
        <Route path="/dashboard/ourmentors" element={<OurMentors />} />
        <Route path="/dashboard/mystack" element={<MyStack />} />

        {/* <Route path="/bootcamp/:id/:tab" element={<BootcampLayout />}>
          <Route path="overview" element={<MyStackOverviewPage />} />
          <Route path="resources" element={<MyStackResourcePage />} />
          <Route path="assessments" element={<MyStackAssetsmentPage />} />
          <Route path="discussions" element={<MyStackDiscussionPage />} />
        </Route> */}
 
        {/* Certificate */}
        <Route path="/certificates" element={<CertificatesList />} />
        <Route path="/certificates/:id" element={<CertificateDetail />} />
        {/* join community */}
        <Route path="/community/join" element={<JoinCommunity />} />

        {/* Payment Pages */}
        <Route path="/dashboard/shoppingcart" element={<ShoppingCart />} />
        <Route path="/dashboard/checkout" element={<Checkout />} />
        <Route path="/dashboard/worklabs" element={<Worklabs />} />
        <Route path="/worklabs/project-feeds" element={<ProjectFeeds />} />
        <Route path="/project-feeds/Details/:id" element={<ProjectDetails />} />
        <Route path="/project-feeds/apply/:id" element={<ApplyPage />} />
      </Route>

      {/* Auth */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;


