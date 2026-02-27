// export const projects = [
//   { name: "Mobile App Development", badge: 3, active: true },
//   { name: "Dashboard Redesign", badge: 0, active: false },
//   { name: "Data Visualization", badge: 1, active: false },
// ];

// export const teamMembers = [
//   {
//     name: "John Doe",
//     role: "Developer",
//     avatar: "https://i.pravatar.cc/150?img=11",
//     online: true,
//   },
//   {
//     name: "Sarah Chen",
//     role: "Designer",
//     avatar: "https://i.pravatar.cc/150?img=47",
//     online: true,
//   },
//   {
//     name: "Mike Johnson",
//     role: "Developer",
//     avatar: "https://i.pravatar.cc/150?img=12",
//     online: false,
//   },
// ];

// export const messages = [
//   {
//     id: 1,
//     sender: "John Doe",
//     avatar: "https://i.pravatar.cc/150?img=11",
//     text: "Hey team! I've completed the authentication flow. Ready for review.",
//     time: "10:30 AM",
//     own: false,
//   },
//   {
//     id: 2,
//     text: "Great work! I'll review it this afternoon.",
//     time: "10:45 AM",
//     own: true,
//   },
//   {
//     id: 3,
//     sender: "Sarah Chen",
//     avatar: "https://i.pravatar.cc/150?img=47",
//     text: "I've uploaded the design files to the shared folder 📁",
//     time: "11:15 AM",
//     own: false,
//   },
//   {
//     id: 4,
//     text: "Perfect timing! Thanks Sarah.",
//     time: "11:20 AM",
//     own: true,
//   },
// ];

// export const milestones = [
//   { label: "Design Phase", amount: "$500", status: "done" },
//   { label: "Development Phase 1", amount: "$1,000", status: "active" },
//   { label: "Testing & QA", amount: "$500", status: "pending" },
//   { label: "Deployment", amount: "$500", status: "pending" },
// ];

// export const tasks = [
//   {
//     label: "Complete authentication flow",
//     assignee: "John Doe",
//     due: "Today",
//     done: true,
//   },
//   {
//     label: "Design onboarding screens",
//     assignee: "Sarah Chen",
//     due: "Tomorrow",
//     done: false,
//   },
//   {
//     label: "API integration for user profile",
//     assignee: "Mike Johnson",
//     due: "Dec 20",
//     done: false,
//   },
//   {
//     label: "Write unit tests",
//     assignee: "John Doe",
//     due: "Dec 22",
//     done: false,
//   },
// ];

// export const files = [
//   {
//     name: "Design_Mockups_v2.fig",
//     size: "2.4 MB",
//     date: "Today",
//     type: "fig",
//   },
//   {
//     name: "API_Documentation.pdf",
//     size: "896 KB",
//     date: "Yesterday",
//     type: "pdf",
//   },
//   {
//     name: "Sprint_Planning.docx",
//     size: "124 KB",
//     date: "2 days ago",
//     type: "doc",
//   },
// ];


export const projects = [
  { name: "Mobile App Development", badge: 3, active: true },
  { name: "Dashboard Redesign", badge: 0, active: false },
  { name: "Data Visualization", badge: 1, active: false },
];

export const teamMembers = [
  {
    name: "John Doe",
    role: "Developer",
    avatar: "https://i.pravatar.cc/150?img=11",
    online: true,
  },
  {
    name: "Sarah Chen",
    role: "Designer",
    avatar: "https://i.pravatar.cc/150?img=47",
    online: true,
  },
  {
    name: "Mike Johnson",
    role: "Developer",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: false,
  },
];

export type Message = {
  id: number;
  sender?: string;
  avatar?: string;
  text: string;
  time: string;
  own: boolean;
};

export type ProjectChat = {
  projectName: string;
  membersOnline: number;
  messages: Message[];
};

export const projectChats: Record<string, ProjectChat> = {
  "Mobile App Development": {
    projectName: "Mobile App Development",
    membersOnline: 3,
    messages: [
      {
        id: 1,
        sender: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=11",
        text: "Hey team! I've completed the authentication flow. Ready for review.",
        time: "10:30 AM",
        own: false,
      },
      {
        id: 2,
        text: "Great work! I'll review it this afternoon.",
        time: "10:45 AM",
        own: true,
      },
      {
        id: 3,
        sender: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=47",
        text: "I've uploaded the design files to the shared folder 📁",
        time: "11:15 AM",
        own: false,
      },
      {
        id: 4,
        text: "Perfect timing! Thanks Sarah.",
        time: "11:20 AM",
        own: true,
      },
    ],
  },
  "Dashboard Redesign": {
    projectName: "Dashboard Redesign",
    membersOnline: 2,
    messages: [
      {
        id: 1,
        sender: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=47",
        text: "I've shared the new Figma mockups for the dashboard. Let me know your thoughts!",
        time: "9:00 AM",
        own: false,
      },
      {
        id: 2,
        text: "Looks great! Can we tweak the sidebar colors?",
        time: "9:15 AM",
        own: true,
      },
      {
        id: 3,
        sender: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=47",
        text: "Sure, I'll push an updated version by EOD.",
        time: "9:20 AM",
        own: false,
      },
    ],
  },
  "Data Visualization": {
    projectName: "Data Visualization",
    membersOnline: 1,
    messages: [
      {
        id: 1,
        sender: "Mike Johnson",
        avatar: "https://i.pravatar.cc/150?img=12",
        text: "The bar chart component is ready. Needs data wiring from the API.",
        time: "2:00 PM",
        own: false,
      },
      {
        id: 2,
        text: "Nice! I'll connect the endpoint tomorrow.",
        time: "2:10 PM",
        own: true,
      },
      {
        id: 3,
        sender: "Mike Johnson",
        avatar: "https://i.pravatar.cc/150?img=12",
        text: "The pie chart also needs a legend toggle — added it to the backlog.",
        time: "2:12 PM",
        own: false,
      },
    ],
  },
};

export const milestones = [
  { label: "Design Phase", amount: "$500", status: "done" },
  { label: "Development Phase 1", amount: "$1,000", status: "active" },
  { label: "Testing & QA", amount: "$500", status: "pending" },
  { label: "Deployment", amount: "$500", status: "pending" },
];

export const tasks = [
  {
    label: "Complete authentication flow",
    assignee: "John Doe",
    due: "Today",
    done: true,
  },
  {
    label: "Design onboarding screens",
    assignee: "Sarah Chen",
    due: "Tomorrow",
    done: false,
  },
  {
    label: "API integration for user profile",
    assignee: "Mike Johnson",
    due: "Dec 20",
    done: false,
  },
  {
    label: "Write unit tests",
    assignee: "John Doe",
    due: "Dec 22",
    done: false,
  },
];

export const files = [
  {
    name: "Design_Mockups_v2.fig",
    size: "2.4 MB",
    date: "Today",
    type: "fig",
  },
  {
    name: "API_Documentation.pdf",
    size: "896 KB",
    date: "Yesterday",
    type: "pdf",
  },
  {
    name: "Sprint_Planning.docx",
    size: "124 KB",
    date: "2 days ago",
    type: "doc",
  },
];