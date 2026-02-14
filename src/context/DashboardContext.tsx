import { createContext, useContext, useState } from "react";

type Project = {
  id: number;
  title: string;
  status: string;
  category: string;
  description: string;
  tags: string[];
  duration: string;
  budget: string;
  budgetType: string;
  applications: number;
  posted: string;
};

type DashboardCounts = {
  projects: number;
};

const DashboardContext = createContext<{
  counts: DashboardCounts;
  setProjectsCount: (count: number) => void;

  projects: Project[];

  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;

  addProject: (project: Project) => void;
} | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [counts, setCounts] = useState<DashboardCounts>({
    projects: 0,
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Mobile App Development",
      status: "Open",
      category: "Development",
      description:
        "Need a React Native developer to build a fitness tracking app",
      tags: ["React Native", "JavaScript", "Firebase"],
      duration: "3 months",
      budget: "$3,000",
      budgetType: "(Fixed)",
      applications: 8,
      posted: "Posted 2 days ago",
    },
    {
      id: 2,
      title: "Dashboard Redesign",
      status: "In Progress",
      category: "Design",
      description:
        "Looking for UI/UX designer to revamp our analytics dashboard",
      tags: ["Figma", "UI/UX", "Design Systems"],
      duration: "1 month",
      budget: "$1,500",
      budgetType: "(Milestone-based)",
      applications: 4,
      posted: "Posted 1 week ago",
    },
    {
      id: 3,
      title: "Data Analysis & Visualization",
      status: "Open",
      category: "Data",
      description: "Analyze customer data and create interactive dashboards",
      tags: ["Python", "Data Analysis", "Tableau"],
      duration: "2 weeks",
      budget: "$800",
      budgetType: "(Fixed)",
      applications: 12,
      posted: "Posted 5 days ago",
    },
    {
      id: 4,
      title: "E-commerce Website Development",
      status: "Open",
      category: "Development",
      description:
        "Build a fully responsive e-commerce website with payment integration",
      tags: ["React", "Node.js", "Stripe"],
      duration: "2 months",
      budget: "$4,500",
      budgetType: "(Fixed)",
      applications: 6,
      posted: "Posted 3 days ago",
    },
    {
      id: 5,
      title: "Brand Identity Design",
      status: "Completed",
      category: "Design",
      description:
        "Create a full brand identity including logo, colors, and typography",
      tags: ["Illustrator", "Photoshop", "Branding"],
      duration: "3 weeks",
      budget: "$1,200",
      budgetType: "(Milestone-based)",
      applications: 3,
      posted: "Posted 2 weeks ago",
    },
    {
      id: 6,
      title: "AI Chatbot Integration",
      status: "Pending",
      category: "Development",
      description:
        "Integrate an AI-powered chatbot into our platform to handle customer support and onboarding queries",
      tags: ["Node.js", "OpenAI API", "Webhooks"],
      duration: "1 month",
      budget: "$2,000",
      budgetType: "(Fixed)",
      applications: 5,
      posted: "Posted 1 day ago",
    },
  ]);

  const setProjectsCount = (count: number) => {
    setCounts((prev) => ({ ...prev, projects: count }));
  };

  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project]);
    setProjectsCount(projects.length + 1);
  };

  return (
    <DashboardContext.Provider
      value={{
        counts,
        setProjectsCount,

        projects,
        setProjects,
        addProject,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx)
    throw new Error("useDashboard must be used inside DashboardProvider");
  return ctx;
};
