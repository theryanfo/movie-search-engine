# Movie Search Engine

A modern, fast web application built with **React** and **Vite** that allows users to search for their favorite films, view real-time trending movies via the **TMDB API**, and save selections to a personalized favorites list.

---

## Features

* **Real-Time Movie Search:** Queries the TMDB database dynamically with encoded URL parameter mapping.
* **Persistent Favorites System:** Users can save or unsave movies. Selection states survive page refreshes using browser **LocalStorage**.
* **Global State Architecture:** Implements a single source of truth using **React Context API** to eliminate prop-drilling.
* **Responsive Layout:** Adaptive grid structure using advanced **CSS Grid (`auto-fill`)** to keep item sizing proportional on all devices.
* **Security Conscious Config:** Built using isolated **Vite Environment Variables (`.env`)** to prevent accidental credential leakage in development.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | UI components and State Management |
| **Vite** | Ultra-fast build tool and local dev server |
| **React Router** | Page navigation (`/` and `/favorites`) |
| **TMDB API** | Third-party entertainment data provider |
| **CSS3** | Custom responsive flexbox and grid layouts |

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com
cd movie-search-engine
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup your Environment Variables
Create a `.env` file in the **root** folder of your project (same directory as `package.json`). Add your TMDB credentials using the mandatory `VITE_` prefix:

```env
VITE_API_KEY=your_tmdb_api_key_here
VITE_API_READ_ACCESS_TOKEN=your_tmdb_read_access_token_here
```
*Note: Make sure your `.env` file is included in your `.gitignore` to keep your credentials safe from public commits.*

### 4. Run the development server
```bash
npm run dev
```
Open your browser to `http://localhost:5173` to see the live app.

---
