import Cert_1 from "../assets/images/components/Certificates/Cert_1.png.png";

export interface Certificate {
  id: string | number;
  title: string;
  issuer: string;
  image: string;
  userName?: string;
  duration?: string;
  certId?: string;
  tags?: string[];
}

// Fixed the array syntax: Export const name: Type[] = [...]
export const userCertificates: Certificate[] = [
  {
    id: "frontend-8",
    userName: "Oronsaye Precious Toluwalase", 
    title: "Frontend Development Bootcamp (Cohort 8)",
    duration: "4 Weeks",
    certId: "AFR-6780",
    tags: ["#HTML", "#Javascript", "#CSS", "#Frontend"],
    issuer: "Apprelab Academy",
    image: Cert_1,
  },
  {
    id: "data-analysis",
    userName: "Oronsaye Precious Toluwalase",
    title: "Data Analysis Masterclass",
    duration: "6 Weeks",
    certId: "DAT-2291",
    tags: ["#Python", "#Excel", "#SQL", "#DataViz"],
    issuer: "Apprelab Academy",
    image: Cert_1,
  },
  {
    id: "uiux-4",
    userName: "Oronsaye Precious Toluwalase",
    title: "UI/UX Bootcamp (Cohort 4)",
    duration: "8 Weeks",
    certId: "DES-9930",
    tags: ["#Figma", "#UIUX", "#Prototyping"],
    issuer: "Apprelab Academy",
    image: Cert_1,
  },
];