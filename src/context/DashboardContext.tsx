import { createContext, useContext, useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

type DashboardCounts = {
  projects: number;
};

export type Project = {
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

// ── Initial Data ───────────────────────────────────────────────────────────────

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Mobile App Development",
    status: "open",
    category: "Development",
    description: "Need a React Native developer to build a fitness tracking app",
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
    status: "in-progress",
    category: "Design",
    description: "Looking for UI/UX designer to revamp our analytics dashboard",
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
    status: "open",
    category: "Data",
    description: "Analyze customer data and create interactive dashboards",
    tags: ["Python", "Data Analysis", "Tableau"],
    duration: "2 weeks",
    budget: "$800",
    budgetType: "(Fixed)",
    applications: 12,
    posted: "Posted 5 days ago",
  },
];

// ── Context ────────────────────────────────────────────────────────────────────

const DashboardContext = createContext<{
  counts: DashboardCounts;
  setProjectsCount: (count: number) => void;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
} | null>(null);

// ── Provider ───────────────────────────────────────────────────────────────────

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [counts, setCounts] = useState<DashboardCounts>({ projects: 0 });
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const setProjectsCount = (count: number) => {
    setCounts((prev) => ({ ...prev, projects: count }));
  };

  return (
    <DashboardContext.Provider value={{ counts, setProjectsCount, projects, setProjects }}>
      {children}
    </DashboardContext.Provider>
  );
}

// ── Hook ───────────────────────────────────────────────────────────────────────

export const useDashboard = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used inside DashboardProvider");
  return ctx;
};