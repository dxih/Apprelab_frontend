import Cert_1 from "../assets/images/Certificates/Cert_1.png.png";

export interface Certificate {
  id: string | number;
  title: string;
  issuer: string;
  image: string;
  CertificateType: string
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
    CertificateType: "Bootcamp",
    image: Cert_1,
  },
  {
    id: "Wireframing_the_basis_of_us_design",
    title: "Wireframing, the basis of Ux Design (Cohort 2)",
    userName: "Oronsaye Precious Toluwalase",
    certId: "DAT-2291",
    tags: ["#Python", "#Excel", "#SQL", "#DataViz"],
    issuer: "Apprelab Academy",
    duration: "4 Weeks",
    CertificateType: "Course",
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
    CertificateType: "Bootcamp",
    image: Cert_1,
  },
  {
    id: "WireFraming_the_basis_of_ux_Design_{cohort_2}",
    userName: "Oronsaye Precious Toluwalase",
    title: "Wireframing, the basis of Ux Design (Cohort 2)",
    duration: "4 Weeks",
    certId: "FES-9930",
    tags: ["#Figma", "#UIUX", "#Prototyping"],
    issuer: "Apprelab Academy",
    CertificateType: "Course",
    image: Cert_1,
  },
  {
    id: "using_figma_like_a_pro_{cohort_6}",
    title: "Using Figma Like a Pro (Cohort 6)",
    duration: "4 Weeks",
    certId: "ffES-9930",
    tags: ["#Figma", "#UIUX", "#Prototyping"],
    issuer: "Apprelab Academy",
    CertificateType: "Course",
    image: Cert_1,
  },
];