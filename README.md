# GameStore - Premium Gaming Platform

Welcome to **GameStore**, a modern, highly interactive, and visually stunning digital game distribution interface. This project features premium glassmorphism layouts, hardware-accelerated 3D effects, a custom dynamic particle background, and real-time client-side search and filtering.

🔗 **Live Website Link**: [GameStore Platform](https://ommane123.github.io/first_website/)

---

## 🌟 Key Features

*   **Premium Glassmorphism UI**: Beautiful dark-mode design built around deep space purples, neon coral accents, and smooth backdrop-blur navigation bars.
*   **Dynamic Particles Background**: An interactive HTML5 Canvas background that spawns moving nodes, connecting them with faint vector lines and reacting smoothly to mouse hovering.
*   **3D Card Parallax Tilt & Reflection**: Move your mouse over any game card to see immersive 3D tilting and dynamic lighting gloss reflection sweeps.
*   **Synthesized Web Audio Engine**: Immersive user interface sound effects (clicks, hover ticks, success chimes, and negative buzzes) generated entirely via code using the browser's native **Web Audio API**.
*   **Client-Side Search & Category Filters**: Instantly find games by typing or browse through filter tabs like *Action*, *Shooters*, *Survival*, *Strategy*, *Casual*, and *Favorites*.
*   **Interactive Game Detail Modals**: Click on any game card to trigger a full details modal displaying:
    *   High-definition thumbnail screenshots gallery
    *   Minimum and recommended PC system hardware requirements
    *   Dynamically updated tags, ratings, and descriptions
*   **Persistent Favorites Library**: Add games to your favorites list with automated sync and browser-level `localStorage` persistence.
*   **Simulated Game Downloader**: Trigger real-time, interactive notifications logging active downloads and displaying status changes via custom slide-in toast notifications.

---

## 📂 Project Architecture

*   [`index.html`](file:///d:/first_website/index.html): The main dashboard interface containing the trending sliders, game grid, filters, and modal systems.
*   [`download.html`](file:///d:/first_website/download.html): Dedicated game download landing page.
*   [`css/style.css`](file:///d:/first_website/css/style.css): Custom stylesheet hosting color tokens, layout specifications, and responsive design breakpoints.
*   [`js/main.js`](file:///d:/first_website/js/main.js): Main logic script containing audio synthesizer, tilt animations, local storage management, search/filters, and particle calculations.
*   `img/`: Holds visual assets, icons, screenshots, and custom gaming graphics.

---

## 🚀 How to Run Locally

Since this is a fully client-side static web application, no server-side compilation is needed:
1. Clone the repository:
   ```bash
   git clone https://github.com/ommane123/first_website.git
   ```
2. Open [`index.html`](file:///d:/first_website/index.html) in any modern web browser to run the application immediately.
