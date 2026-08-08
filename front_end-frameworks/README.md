# Agentic AI - Landing Page

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-violet?style=for-the-badge)](https://loic2888.github.io/holbertonschool-agentic_ai/)

A modern, responsive, and highly modular landing page built with React and Tailwind CSS. This project showcases a clean component-based architecture, focusing on the DRY (Don't Repeat Yourself) principle and UI reusability. 

Built as part of a learning journey with **Holberton School**.

## 🚀 Features

- **Modern UI/UX**: Dark mode aesthetic with beautiful violet accents, glowing effects, and smooth transitions.
- **Fully Responsive**: Adapts seamlessly perfectly to mobile, tablet, and desktop screens using Tailwind's utility classes.
- **Reusable Components**: Smart, props-driven UI components (Buttons, Badges, Logos, Titles) for a scalable codebase.
- **Scalable Architecture**: Strict separation between Layouts, Sections, and UI elements.
- **Vector Icons**: Lightweight and crisp icons provided by `lucide-react`.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/) (bootstrapped with [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Checking**: `prop-types`

## 📂 Project Structure

The codebase is organized to separate global layouts, page sections, and atomic UI components:

```text
src/
├── components/
│   ├── layout/            # Global page structures
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/          # Main landing page blocks
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   └── ...
│   │
│   └── ui/                # Reusable, atomic UI components
│       ├── brandLogo.jsx
│       ├── Button.jsx
│       ├── Badge.jsx
│       ├── SectionTitle.jsx
│       └── SocialButton.jsx
│
├── App.jsx                # Main application entry point
└── main.jsx               # React DOM rendering
