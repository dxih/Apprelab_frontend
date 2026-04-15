<p align="center">
  <img src="./src/assets/logos/apprelab_logo_light.png" alt="AppreLab Logo" width="200" />
</p>

<h1 align="center">AppreLab Frontend</h1>

<p align="center">
  <strong>Fueling Africa’s Digital Economy through an integrated Learn → Work → Earn Ecosyste.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## 🌟 Overview

AppreLab is an "S+ tier" digital infrastructure designed to bridge the gap between talent and opportunity in Africa. It provides a seamless journey for users—from learning core technical skills to working on real-world projects and eventually earning through sustainable careers or startup ventures.

This repository contains the **frontend architecture**, meticulously crafted for performance, accessibility, and high-fidelity user experiences.

---

## ✨ Key Value Propositions

### 🚀 Founder Hub
A dedicated space for entrepreneurs to manage projects, recruit talent, and scale their startups with professional tools and insights.

### 🎓 Student Dashboard
A personalized learning environment where students track their progress, access course materials, and engage in hands-on bootcamps.

### 🤝 Mentor Network
A sophisticated interface for industry experts to guide the next generation, manage sessions, and provide high-impact feedback.

### 🍱 SME & Academy Integration
Customized workflows for businesses and educational institutions to manage talent pipelines and program delivery.

---

## 🛠 Tech Stack

| Category           | Technology                                                                 |
|--------------------|----------------------------------------------------------------------------|
| **Core Framework** | React 18, TypeScript                                                      |
| **Build Tool**     | Vite                                                                       |
| **UI Library**     | Material UI (MUI) v5+                                                     |
| **Animations**     | Framer Motion                                                              |
| **State Management**| React Context API, Custom Hooks                                           |
| **Routing**        | React Router v6                                                            |
| **Styling**        | Vanilla CSS, MUI System (Emotion)                                          |

---

## 📁 Project Structure

```txt
src/
├── assets/             # Brand logos, icons, and static images
├── context/            # Global state (Auth, Theme, etc.)
├── dashboard/          # Dashboard-specific components and pages
│   ├── components/     # Widgets, cards, and UI elements for dashboards
│   └── pages/          # Full-page dashboard views (Founder, Student, Mentor)
├── layouts/            # Persistent layout wrappers (Navigation, Footers)
├── website/            # Public-facing landing pages and marketing site
│   ├── components/     # Homepage sections, CTA blocks, etc.
│   └── pages/          # Public routes (Home, About, Services, etc.)
├── types/              # Centralized TypeScript interfaces and types
├── utitls/             # (Note: Utils directory) Helper functions and constants
├── App.tsx             # Root component and Routing configuration
├── main.tsx            # Entry point
└── theme.ts            # Centralized MUI theme configuration (Colors, Typography)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DxHub-Labs/Apprelab_frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Apprelab_frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server with Vite:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production Build
Create an optimized production bundle:
```bash
npm run build
```

---

## 🎨 Design Philosophy

AppreLab follows a **Modern, Premium, and Accessible** design philosophy:
- **Glassmorphism:** Subtle use of transparency and blurs for a futuristic feel.
- **Micro-interactions:** Leveraging Framer Motion for smooth transitions and hover effects.
- **Typography-first:** Clear hierarchy using modern sans-serif fonts (e.g., Inter/Outfit).
- **Responsive-by-default:** Pixel-perfect layouts across mobile, tablet, and desktop.

---

## 🤝 Contribution

We follow a strict code quality standard:
- **Strict TypeScript:** No `any` types allowed.
- **Modular Components:** Keep components small, focused, and reusable.
- **SEO Best Practices:** Semantic HTML and proper meta-tagging.

---

## 📄 License

Proprietary. All rights reserved by **AppreLab / DxHub**.

---

<p align="center">
  Built with ❤️ by the <a href="https://dxhub.io">DxHub</a> Team
</p>
