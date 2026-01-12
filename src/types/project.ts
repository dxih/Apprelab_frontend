export  interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  agency: string;
  jobType: string;
  tags: string[];
  tags2: string[];
  image: string;
  description?: string; // Optional for the feed page
  level?: string;       // Optional for the feed page
}

