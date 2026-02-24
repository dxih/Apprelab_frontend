import StackCompletedBootcamps_image from "../assets/images/OnGoingBootCamps/StackOnGoingBootCamp_1.png";
import StackCompletedBootCamps_img2 from "../assets/images/OnGoingBootCamps/StackOnGoingBootCamp_2.png";
import type { Bootcamp } from "../components/MyStackpage/StackBootcamps/StackOngoingBootcamps";
import avatar_1 from "../assets/images/OnGoingBootCamps/Avatar_1.png"
// PRESAVED IMPORT
import PreSavedBootCamps_img1 from "../assets/images/PreSavedBootCamp/PreSavedBootCamp_1.png";
import PreSavedBootCamps_img2 from "../assets/images/PreSavedBootCamp/PreSavedBootCamps_2.png";

// COMPLETED BOOTCAMP DATA
import stackCompletedBootCamps_img2 from "../assets/images/PreSavedBootCamp/PreSavedBootCamps_2.png";

export interface IResource {
  week: string;
  topic: string;
  title: string;
  type: "video" | "slides" | "brief" | "link";
}
export interface IAssessment {
  id: string;
  type: "Quiz" | "Project";
  title: string;
  status: "pending" | "submitted";
  deadline: string;
  number: number;
}
export interface IReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}
export interface IDiscussion {
  id: string;
  name: string;
  time: string;
  title: string;
  body: string;
  replies: number;
  trending: boolean;
}




//  Use the interface to type the array, and provide actual data values
export const ongoingBootcamps: Bootcamp[] = [
  {
    id: "intro_to_frontend(c8)",
    title: "Intro to Frontend (C8)",
    description: "Go from beginner to intermediate frontend developer",
    instructor: "Sarah May",
    instructorImg: "https://link-to-john-image.jpg",
    durationLiveSession: "2hrs",
    timeSession: "2026-02-24T23:00:00",
    displayTime: "4:00 PM",
    classStep: "Week 3 - week 4",
    duration: "4 Weeks",
    progress: 50,
    nextClass: "10th November, 2025, 6PM WAT",
    image: StackCompletedBootcamps_image,
    agenda: "Our 4-week Bootcamp is a hybrid format — combining a 1-hour live class every Monday with self-paced video lessons in the week.",
    learnList: [
      "HTML, CSS, and JavaScript basics",
      "Building responsive web pages",
      "How to use AI tools for frontend design",
      "Deploying your first live project"
    ],
    audience: [
      "Beginners in tech or design",
      "Anyone looking to switch to web development",
      "Student and creatives exploring tech"
    ],
    level: "Advanced",
    nextCohort: {
      date: "Jan 2026",
      oldPrice: "₦250k",
      newPrice: "₦200k"
    },
    // actual resource data here
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
    assessments: [
      {
        id: "p1",
        type: "Project",
        title: "Build the frontend framework for a calculator app",
        status: "pending",
        deadline: "12:00 Tomorrow",
        number: 1
      },
      {
        id: "q1",
        type: "Quiz",
        title: "Test your knowledge on responsive layouts and design",
        status: "pending",
        deadline: "10:00 Tomorrow",
        number: 2
      },
      {
        id: "q1",
        type: "Quiz",
        title: "Test your knowledge on responsive layouts and design",
        status: "submitted",
        deadline: "10:00 Tomorrow",
        number: 2
      }
    ],
    reviews: [
      {
        id: "rev1",
        name: "Jenny Miu",
        rating: 5,
        avatar: avatar_1,
        date: "3 weeks ago",
        comment: "Teaching style and patterns are very extremely good. Appropriate amount of exercise to gets hands on the tool and understanding how exactly Figma works."
      },
      {
        id: "rev2",
        name: "Jenny Miu",
        rating: 5,
        avatar: avatar_1,
        date: "3 weeks ago",
        comment: "The pace of the cohort was perfect for someone starting from scratch. Highly recommended!"
      },
      {
        id: "rev3",
        name: "Jenny Miu",
        rating: 5,
        avatar: avatar_1,
        date: "3 weeks ago",
        comment: "The pace of the cohort was perfect for someone starting from scratch. Highly recommended!"
      },
      {
        id: "rev4",
        name: "Jenny Miu",
        rating: 5,
        avatar: avatar_1,
        date: "3 weeks ago",
        comment: "The pace of the cohort was perfect for someone starting from scratch. Highly recommended!"
      },
    ],

    discussions: [
      {
        id: "d1",
        name: "Cynthia E.",
        time: "2hrs ago",
        title: "How do I make my nav bar responsive?",
        body: "I’m struggling to make a responsive nav bar...",
        replies: 3,
        trending: true,
      }
    ],
    announcements: [
      "In-Cohort Competition coming up",
      "Tuesday’s class has been rescheduled"
    ]
  },
  // ------NEW ID===========
  {
    id: "ux_laws_&_principles(C1)",
    title: "UX Laws & Principles (C1)",
    description: "Deep dive into all the laws of UX and basic design principles",
    duration: "6 Weeks",
    instructor: "Shreda",
    timeSession: "2026-02-24T22:00:00",
    displayTime: "10:00 PM",
    durationLiveSession: "1hr 30mins",
    progress: 30,
    nextClass: "12th November, 2025, 2PM WAT",
    classStep: "Week 3 - class 2 of 4",
    instructorImg: "https://link-to-sarah-image.jpg",
    image: StackCompletedBootCamps_img2,
    agenda: "Our 4-weeks Bootcamp is a hybrid format — combining a 1-hour live class every Monday with self-paced video lessons in the week.",
    learnList: [
      "UI and UX Overview",
      "Ui and UX Principles",
      "How to use Ai tools for designs",
      "Deploying your first live project on Figma"
    ],
    audience: [
      "Beginners in tech or design",
      "Anyone looking to switch to UI and UX",
      "Student and creatives exploring tech"
    ],
    level: "Beginner",
    nextCohort: {
      date: "FEB 2026",
      oldPrice: "₦250k",
      newPrice: "₦200k"
    },
    //RESOURCES
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
    // =====Asseessment==========
    assessments: [
      // {
      //   id: "q_ux",
      //   type: "Quiz",
      //   title: "UX Laws and Cognitive Psychology Quiz",
      //   status: "pending",
      //   deadline: "12:00 Friday",
      //   number:1,
      // }
    ],
    reviews: [
      {
        id: "rev1",
        name: "Jenny Miu",
        rating: 5,
        date: "3 weeks ago",
        comment: "Teaching style and patterns are very extremely good. Appropriate amount of exercise to gets hands on the tool and understanding how exactly Figma works."
      },
      {
        id: "rev2",
        name: "Jenny Miu",
        rating: 4,
        avatar: avatar_1,
        date: "1 weeks ago",
        comment: "The pace of the cohort was perfect for someone starting from scratch. Highly recommended!"
      }
    ],


    discussions: [
      {
        id: "d1",
        name: "Cynthia E.",
        time: "2hrs ago",
        title: "How do I make use of figma?",
        body: "I’m struggling to make use of figma...",
        replies: 3,
        trending: true
      }
    ],
    announcements: [
      "In-Cohort Competition coming up",
      "Tuesday’s class has been rescheduled"
    ]
  },
];

// ===========PRESAVEBOOTCAMPDATA==============================================

export const preSavedBootcamps = [
  {
    title: "Using Figma Like a Pro (C6)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    startDate: "20th November, 2025",
    image: PreSavedBootCamps_img1,
  },
  {
    title: "Wireframing UX (C2)",
    description: "Go from beginner to intermediate frontend developer",
    duration: "4 Weeks",
    startDate: "25th November, 2025",
    image: PreSavedBootCamps_img2,
  },
];


//================================COMPLETED BOOTCAMP DATA=============================
export interface CompletedBootcamp {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  image: string;
}
export const CompletedBootcampData: CompletedBootcamp[] = [
  {
    id: "Wireframing_the_basis_of_us_design",
    title: "Wireframing, the basis of Ux Design (Cohort 2)",
    description: "Go from beginner to intermediate frontend developer in four weeks",
    duration: "4 Weeks",
    date: "Completed on 6th November, 2025",
    image: stackCompletedBootCamps_img2,

  },
  {
    id: "uiux-4",
    title: "Using Figma Like a Pro (Cohort 6)",
    description: "Go from beginner to intermediate frontend developer in four weeks",
    duration: "4 Weeks",
    date: "Completed on 1st November, 2025",
    image: stackCompletedBootCamps_img2,
  },
];