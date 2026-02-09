import StackCompletedBootcamps_image from "../assets/images/OnGoingBootCamps/StackOnGoingBootCamp_1.png";
// ADD TO CART  IMAGE
import AddToCartCourse_img1 from "../assets/images/PreSavedBootCamp/PreSavedBootCamp_1.png";
// completedcourse image
import stackCompletedCourse_img2 from "../assets/images/PreSavedBootCamp/PreSavedBootCamps_2.png";
import type { Course } from "../components/MyStackpage/MyStackCourses/StackOngoingCourses";

// ================================ONGOINGCOURSES DATA===========

export const ongoingCoursesData: Course[] = [
  {
    id: "frontend_dev_1",
    title: "Introduction to Frontend Development",
    description: "Go from beginner to intermediate frontend developer",
    length: "68 hours",
    progress: 50,
    image: StackCompletedBootcamps_image,
    currentLesson: "Part 6 of 12",
    instructor: "Dr. Sarah Johnson",
    nextLesson: "UX Deep Dive",
    timeLeft: "2h 30m remaining"
  },
  {
    id: "UI_Ux",
    title: "Introduction UI and UX",
    description: "Go from beginner to intermediate Designer",
    length: "18 hours",
    progress: 30,
    image: StackCompletedBootcamps_image,
    currentLesson: "Part 2 of 12",
    instructor: "Dr. Sarah Johnson",
    nextLesson: "UX Deep Dive",
    timeLeft: "2h 30m remaining"
  },
  {
    id: "Advanced_Content_Creation_Bootcamp",
    title: "Advanced Content Creation Bootcamp",
    description: "Go from beginner to intermediate Designer",
    length: "18 hours",
    image: StackCompletedBootcamps_image,
    currentLesson: "Part 2 of 12",
    progress: 42,
    instructor: "Prof. Michael Chen",
    nextLesson: "Content Strategy Deep Dive",
    timeLeft: "4h 15m remaining"
  },
  {
    id: "Web_Development_Bootcamp",
    title: "Web Development Bootcamp",
    description: "Go from beginner to intermediate Designer",
    length: "18 hours",
    image: StackCompletedBootcamps_image,
    currentLesson: "Part 2 of 12",
    progress: 88,
    instructor: "Emily Rodriguez",
    nextLesson: "Web Code Splitting & Lazy Loading",
    timeLeft: "45m remaining",
  }
];


// ============================CARTCOURSES DATA=============================

export const cartCoursesData: Course[] = [
  {
    id: "figma_pro_1",
    title: "Using Figma Like a Pro (Cohort 6)",
    description: "Master advanced design workflows",
    length: "4 Weeks",
    progress: 0,
    image: AddToCartCourse_img1,
    currentLesson: "Not Started",
   
  }
];



// =================================================COMPLETE COURSES DATA=========================
interface CompletedCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  image: string;
}
export const CompletedCourseData: CompletedCourse[] = [
  {
    id:"WireFraming_the_basis_of_ux_Design_{cohort_2}",
    title: "Wireframing, the basis of Ux Design (Cohort 2)",
    description: "Go from beginner to intermediate frontend developer in four weeks",
    duration: "4 Weeks",
    date: "Completed on 6th November, 2025",
    image: stackCompletedCourse_img2
  },
  {
    id:"using_figma_like_a_pro_{cohort_6}",
    title: "Using Figma Like a Pro (Cohort 6)",
    description: "Go from beginner to intermediate frontend developer in four weeks",
    duration: "4 Weeks",
    date: "Completed on 1st November, 2025",
    image: stackCompletedCourse_img2
  },
];