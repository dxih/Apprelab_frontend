import { createContext, useContext, useState } from "react";

type DashboardCounts = {
  projects: number;
};

const DashboardContext = createContext<{
  counts: DashboardCounts;
  setProjectsCount: (count: number) => void;
} | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [counts, setCounts] = useState<DashboardCounts>({
    projects: 0,
  });

  const setProjectsCount = (count: number) => {
    setCounts((prev) => ({ ...prev, projects: count }));
  };

  return (
    <DashboardContext.Provider value={{ counts, setProjectsCount }}>
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used inside DashboardProvider");
  return ctx;
};
