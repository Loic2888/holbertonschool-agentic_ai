# Agentic AI Landing Page - React to Vue 3 Migration

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-violet?style=for-the-badge)](https://loic2888.github.io/holbertonschool-agentic_ai/vue)

This project is a modern, responsive landing page exploring the concept of "Agentic AI." Originally built with React, this project has been fully migrated to **Vue 3** (Composition API) component-by-component within the same repository structure. 

This project was built for the **Holberton School Front-end Frameworks curriculum**.

## 🔄 The Migration Process

The goal of this project was to transition a React codebase into a Vue 3 codebase, mapping React concepts to their Vue equivalents while keeping the UI and features strictly identical. 

Key architectural shifts during the migration include:
*   **Single File Components (SFC):** Moving from `.jsx` files to `.vue` files, separating logic (`<script setup>`), structure (`<template>`), and style.
*   **State Management:** Transitioning from React's `useState` to Vue's `ref()` and `reactive()`.
*   **Lifecycle Hooks:** Replacing `useEffect(..., [])` with Vue's `onMounted()`.
*   **Form Handling:** Replacing manual `onChange` event handlers and state updates with Vue's powerful two-way data binding (`v-model`).
*   **Dynamic Components:** Switching from JSX variable components (e.g., `<IconComponent />`) to Vue's `<component :is="..." />`.
*   **Props & Children:** Replacing `PropTypes` with `defineProps()` and React `children` with Vue `<slot>`.

## 🛠 Tech Stack

*   **Framework:** Vue 3 (Composition API / `<script setup>`)
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide-Vue-Next

## 🚀 Features

*   **Hero Section:** Glowing background effects and responsive grid layouts.
*   **About Section:** Dynamic rendering of steps using `v-for` and conditional styling.
*   **Features Section:** Iterating over data to render dynamic SVG icons.
*   **Insights Section:** Simulated asynchronous API call using a service pattern to fetch and display data dynamically.
*   **Contact Form:** Real-time form validation leveraging Vue's `reactive()` state and `computed()` properties.

## 📂 Project Structure

```text
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 layout
 ┃ ┃ ┣ 📜 Header.vue
 ┃ ┃ ┗ 📜 Footer.vue
 ┃ ┣ 📂 sections
 ┃ ┃ ┣ 📜 Hero.vue
 ┃ ┃ ┣ 📜 About.vue
 ┃ ┃ ┣ 📜 Features.vue
 ┃ ┃ ┣ 📜 Insights.vue
 ┃ ┃ ┗ 📜 Contact.vue
 ┃ ┣ 📂 ui
 ┃ ┃ ┣ 📜 Button.vue
 ┃ ┃ ┣ 📜 Badge.vue
 ┃ ┃ ┣ 📜 SectionTitle.vue
 ┃ ┃ ┣ 📜 SocialButton.vue
 ┃ ┃ ┗ 📜 brandLogo.vue
 ┃ ┗ 📂 cards
 ┃   ┗ 📜 InsightCard.vue
 ┣ 📂 data
 ┃ ┣ 📜 features.js
 ┃ ┣ 📜 insights.js
 ┃ ┗ 📜 steps.js
 ┣ 📂 services
 ┃ ┗ 📜 insightsService.js
 ┣ 📜 App.vue
 ┗ 📜 main.js
