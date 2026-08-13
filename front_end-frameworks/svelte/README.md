# Agentic AI - Landing Page

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-violet?style=for-the-badge)](https://loic2888.github.io/holbertonschool-agentic_ai/svelte)

A modern, responsive, and highly modular landing page built with **Svelte** and Tailwind CSS. This project showcases a clean component-based architecture, focusing on the DRY (Don't Repeat Yourself) principle, UI reusability, and Svelte's elegant reactivity.

Built as part of a learning journey with **Holberton School** (Migrated from React to Svelte).

## 🚀 Features

- **Modern UI/UX**: Dark mode aesthetic with beautiful violet accents, glowing effects, and smooth transitions.
- **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop screens using Tailwind's utility classes.
- **Reusable Components**: Smart, props-driven UI components (Buttons, Badges, Logos, Titles) leveraging Svelte's concise syntax.
- **Scalable Architecture**: Strict separation between Layouts, Sections, and UI elements.
- **Vector Icons**: Lightweight and crisp icons provided by `lucide-svelte`.
- **Form Handling**: Native bidirectional data-binding for optimal performance and cleaner code.

## 🛠️ Tech Stack

- **Framework**: [Svelte](https://svelte.dev/) (bootstrapped with [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Svelte](https://lucide.dev/)
- **Type Checking**: TypeScript / Native Svelte bindings

## 📂 Project Structure

The codebase is organized to separate global layouts, page sections, and atomic UI components:

```text
src/
├── components/
│   ├── layout/            # Global page structures
│   │   ├── Header.svelte
│   │   └── Footer.svelte
│   │
│   ├── sections/          # Main landing page blocks
│   │   ├── Hero.svelte
│   │   ├── About.svelte
│   │   ├── Features.svelte
│   │   ├── Insights.svelte
│   │   └── Contact.svelte
│   │
│   └── ui/                # Reusable, atomic UI components
│       ├── brandLogo.svelte
│       ├── Button.svelte
│       ├── Badge.svelte
│       ├── SectionTitle.svelte
│       └── SocialButton.svelte
│
├── App.svelte             # Main application entry point
└── main.js                # Svelte DOM rendering & Vite mounting point
