# AppreLab Frontend

> **Building Africa’s Learn → Work → Earn ecosystem (Frontend)**

AppreLab is a modern web application powering Africa’s first integrated **Learn → Work → Earn** platform.  
This repository contains the **frontend codebase**, built with **React + TypeScript** and focused on performance, scalability, and clean user experience.

---

## ✨ Key Features

- ⚛️ Modern React application with **TypeScript**
- 🎨 Consistent, scalable UI using **Material UI (MUI)**
- 📱 Fully responsive and mobile-friendly layouts
- 🔐 Role-based user flows (Learners, Mentors, Academies, SMEs)
- 🔄 API-driven architecture
- 🧩 Reusable and maintainable component structure
- ♿ Accessibility-focused UI patterns

---

## 🛠 Tech Stack

### Core
- **React**
- **TypeScript**
- **Material UI (MUI)**

### State & Data
- React Hooks
- Context API
- REST API integration

### Styling & UI
- MUI theming system
- Responsive design principles
- Custom reusable components

### Tooling
- Vite / CRA (depending on setup)
- ESLint & Prettier
- Git & GitHub

---

## 📁 Project Structure

```txt
src/
├── components/      # Reusable UI components
├── pages/           # Route-based pages
├── layouts/         # Shared layout components
├── hooks/           # Custom React hooks
├── context/         # Global state management
├── services/        # API services & integrations
├── theme/           # MUI theme configuration
├── utils/           # Helper & utility functions
├── assets/          # Images, icons, fonts
└── types/           # Global TypeScript types
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-org/apprelab-frontend.git
cd apprelab-frontend
npm install
```

## ▶️ Run Locally

```bash
npm run dev
```

## Run Locally
```bash
npm run dev
```
The app will be available at:
http://localhost:5173 (or the default CRA port)

## 🎨 Design System

This project uses Material UI (MUI) with a centralized theme setup:
- Consistent colors, spacing, and typography
- Easy theme customization
- Dark / Light mode ready
- Theme configuration can be found in:

```txt
src/theme/
```

## 🔌 API Integration
The frontend communicates with the AppreLab backend via REST APIs.
- Centralized API service layer
- Token-based authentication
- Global loading & error handling

### Backend Stack
- Node.js (Express)
- Supabase

## 🧪 Code Quality
- Strong typing with TypeScript
- Modular and readable components
- ESLint & Prettier enforced
- Scalable folder structure for long-term growth

## 🌍 Vision
The AppreLab frontend is built to scale across Africa and beyond — supporting millions of users while remaining fast, intuitive, and accessible.
Turning learning into real-world earning.


## 📄 License
This project is proprietary and owned by AppreLab.

