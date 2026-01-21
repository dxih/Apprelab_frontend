import StackCompletedBootcamps_image from "../assets/images/components/OnGoingBootCamps/StackOnGoingBootCamp_1.png";
import StackCompletedBootCamps_img2 from "../assets/images/components/OnGoingBootCamps/StackOnGoingBootCamp_2.png";
import type { Bootcamp } from "../components/dashboard/MyStackpage/StackBootcamps/StackOngoingBootcamps";

export interface IResource {
  week: string;   
  topic: string;   
  title: string;   
  type: "video" | "slides" | "brief" | "link";
}

// 1. Define an interface for the Bootcamp object so TypeScript knows what to expect


// 2. Use the interface to type the array, and provide actual data values
export const ongoingBootcamps: Bootcamp[] = [
  {
    id: "intro_to_frontend(c8)",
    title: "Intro to Frontend (C8)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    progress: 50,
    nextClass: "10th November, 2025, 6PM WAT",
    image: StackCompletedBootcamps_image,
    // Provide actual resource data here
    resources: [
      {
        week: "Week 1",
        topic: "HTML and CSS Foundations",
        title: "Lecture Video",
        type: "video",
      },
      {
        week: "Week 1",
        topic: "HTML and CSS Foundations",
        title: "Lecture slides",
        type: "slides",
      },
      {
        week: "Week 1",
        topic: "HTML and CSS Foundations",
        title: "Assigmnent Brief",
        type: "brief",
      },
      {
        week: "Week 1",
        topic: "HTML and CSS Foundations",
        title: "Assigmnent Link",
        type: "link",
      },
      //======== Week 2============
      {
        week: "Week 2",
        topic: "Responsive layout and Designs",
        title: "Lecture Slides",
        type: "slides",
      },
      {
        week: "Week 2",
        topic: "Responsive layout and Designs",
        title: "Lecture video",
        type: "video",
      },
      {
        week: "Week 2",
        topic: "Responsive layout and Designs",
        title: "Assignment brief",
        type: "brief",
      },
      {
        week: "Week 2",
        topic: "Responsive layout and Designs",
        title: "Assignment link",
        type: "link",
      },
      
    ],
  },
  {
    id: "ux_laws_&_principles(C1)",
    title: "UX Laws & Principles (C1)",
    description: "Deep dive into all the laws of UX and basic design principles",
    duration: "6 Weeks",
    progress: 30,
    nextClass: "12th November, 2025, 2PM WAT",
    image: StackCompletedBootCamps_img2,
    // Even if it's empty, use [] instead of the interface name
    resources: [
       {
        week: "Week 1",
        topic: "Introduction to UX Laws",
        title: "Hick's Law Overview",
        type: "video",
      },
      {
        week: "Week 1",
        topic: "HTML and CSS Foundations",
        title: "Lecture slides",
        type: "slides",
      },
      {
        week: "Week 1",
         topic: "Introduction to UX Laws",
        title: "Assigmnent Brief",
        type: "brief",
      },
      {
        week: "Week 1",
        topic: "Introduction to UX Laws",
        title: "Assigmnent Link",
        type: "link",
      },

      // =====WEEK 2 =========
        {
        week: "Week 2",
        topic: "Ui and Ux Principle",
        title: "Lecture Slides",
        type: "slides",
      },
      {
        week: "Week 2",
        topic: "Ui and Ux Principle",
        title: "Lecture video",
        type: "video",
      },
      {
        week: "Week 2",
      topic: "Ui and Ux Principle",
        title: "Assignment brief",
        type: "brief",
      },
      {
        week: "Week 2",
        topic: "Ui and Ux Principle",
        title: "Assignment link",
        type: "link",
      },
      
    ],
  },
];