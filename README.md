# 📌 My Portfolio - Next.js & TailwindCSS

## 🚀 About the Project
This is a modern and responsive portfolio developed with **Next.js** and **TailwindCSS**, featuring **dynamic translation** support for **English** and **Portuguese**. It showcases my professional experience, academic background, and contact details in an organized and stylish way.

---

## 🎨 Technologies Used

<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" alt="ESLint" width="60" height="60"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prettier/prettier-original.svg" alt="Prettier" width="60" height="60"/>
</p>

- **Next.js** - React framework for fast and scalable applications.
- **TypeScript** - Static typing for better code security.
- **TailwindCSS** - Modern and responsive styling.
- **Context API** - State management for dynamic translations.
- **ESLint & Prettier** - Keeping code clean and standardized.

---

## 📁 Folder Structure

```
/my-portfolio
  ├── /public
  │    ├── profile.png
  ├── /src
  │    ├── /components
  │    │    ├── /Header
  │    │    │    ├── Header.tsx
  │    │    ├── /Footer
  │    │    │    ├── Footer.tsx
  │    │    ├── /Introduction
  │    │    │    ├── Introduction.tsx
  │    │    │    ├── translations.ts
  │    │    ├── /Experience
  │    │    │    ├── Experience.tsx
  │    │    │    ├── translations.ts
  │    │    ├── /Education
  │    │    │    ├── Education.tsx
  │    │    │    ├── translations.ts
  │    ├── /context
  │    │    ├── LanguageContext.tsx
  │    ├── /pages
  │    │    ├── index.tsx
  │    ├── /styles
  │    │    ├── globals.css
```

---

## ⚙️ How to Run the Project

### 🔹 **1. Clone the repository**
```sh
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

### 🔹 **2. Install dependencies**
```sh
yarn install
```

### 🔹 **3. Start the project**
```sh
yarn dev
```

The project will be running at `http://localhost:3000` 🚀

---

## 🏗️ Component Structure

Each component is placed in its own folder following the **Separation of Concerns** principle:

- **Introduction** → Portfolio's main introduction section.
- **Experience** → Work experience history.
- **Education** → Academic background and courses.
- **Footer** → Footer with contact information.
- **Header** → Navigation bar with language switching.

Each component also has a separate **translations.ts** file to manage translations efficiently.

---

## 🌎 Language Support
The project allows dynamic switching between **English** and **Portuguese** using **Context API**.

---

## 🚀 Future Enhancements
- Add animations with **Framer Motion**.
- Implement a **dark mode** toggle.
- Improve accessibility with **ARIA labels**.

---

## 📝 License
This project is licensed under the MIT License. Feel free to use and modify it! 😊

