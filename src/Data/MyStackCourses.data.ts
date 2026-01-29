import StackCompletedBootcamps_image from "../assets/images/components/OnGoingBootCamps/StackOnGoingBootCamp_1.png";
// ADD TO CART  IMAGE
import AddToCartCourse_img1 from "../assets/images/components/PreSavedBootCamp/PreSavedBootCamp_1.png";
// completedcourse image
import stackCompletedCourse_img2 from "../assets/images/components/PreSavedBootCamp/PreSavedBootCamps_2.png";

// ================================ONGOINGCOURSES DATA===========

export const ongoingCoursesData = [
  {
    id: "frontend_dev_1",
    title: "Introduction to Frontend Development",
    description: "Go from beginner to intermediate frontend developer",
    length: "68 hours",
    progress: 50,
    image: StackCompletedBootcamps_image,
    currentLesson: "Part 6 of 12"
  },
  {
    id: "UI_Ux",
    title: "Introduction UI and UX",
    description: "Go from beginner to intermediate Designer",
    length: "18 hours",
    progress: 30,
    image: StackCompletedBootcamps_image,
    currentLesson: "Part 2 of 12"
  }
];


// ============================CARTCOURSES DATA=============================

export const cartCoursesData = [
  {
    id: "figma_pro_1",
    title: "Using Figma Like a Pro (Cohort 6)",
    description: "Master advanced design workflows",
    length: "4 Weeks",
    progress: 0,
    image:  AddToCartCourse_img1,
    currentLesson: "Not Started"
  }
];



// =================================================COMPLETE COURSES DATA=========================
export const CompletedCourseData = [
  {
    title: "Wireframing, the basis of Ux Design (Cohort 2)",
    description: "Go from beginner to intermediate frontend developer in four weeks",
    duration: "4 Weeks",
    date: "Completed on 6th November, 2025",
    image: stackCompletedCourse_img2
  },
  {
    title: "Using Figma Like a Pro (Cohort 6)",
    description: "Go from beginner to intermediate frontend developer in four weeks",
    duration: "4 Weeks",
    date: "Completed on 1st November, 2025",
    image: stackCompletedCourse_img2
  },
];