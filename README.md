# 📚 BookStore MERN

A modern MERN stack bookstore app with auth, course listings, and a Tailwind/DaisyUI front-end.

## ✨ Features
- 🔐 JWT-free session via client context with login/signup flows
- 📖 Browse books/courses fetched from MongoDB-backed API
- 🎨 Responsive UI with Tailwind CSS & DaisyUI
- 🌗 Light/Dark mode toggle
- 🧭 Protected route for Courses; redirects unauthenticated users to Signup

## 🗂️ Project Structure
```
bookstore/
├─ Backend/              # Express + MongoDB API
│  ├─ controller/        # auth & book controllers
│  ├─ model/             # Mongoose schemas
│  ├─ route/             # Express routes
│  ├─ index.js           # server bootstrap
│  └─ .env               # backend config (not committed)
├─ Frontend/             # Vite + React + Tailwind + DaisyUI
│  ├─ src/
│  │  ├─ components/     # UI components (Navbar, Banner, Auth, etc.)
│  │  ├─ Courses/        # Courses page
│  │  ├─ Home/           # Home page
│  │  └─ context/        # AuthProvider
│  ├─ index.html
│  └─ vite.config.js
└─ README.md
```

## 🧰 Tech Stack
- Frontend: React 18, Vite 6, Tailwind CSS, DaisyUI, React Router
- Backend: Express 4, Mongoose 8, bcryptjs
- DB: MongoDB

## 🚀 Quick Start
Prereqs: Node.js ≥ 18, npm, MongoDB running locally (or provide a URI).

### 1) Backend
```bash
cd Backend
npm install
# set your Mongo URI and port in .env
# example:
# PORT=4002
# MongoDBURI="mongodb://127.0.0.1:27017/bookStore"
npm start
```

### 2) Frontend
```bash
cd ../Frontend
npm install
npm run dev
# Vite will print the local URL (default 5173/5174). Open that in the browser.
```

## 🔑 Environment Variables (Backend)
Create `Backend/.env`:
```
PORT=4002
MongoDBURI="mongodb://127.0.0.1:27017/bookStore"
```

## 📡 API Endpoints (Backend)
- `POST /user/signup` — body: `{ fullname, email, password }`
- `POST /user/login`  — body: `{ email, password }`
- `GET  /book`        — fetch all books

## 🧭 Auth Flow
- `/Course` is protected; unauthenticated users are redirected to `/Signup`.
- Auth state persists in `localStorage` (`Users` key) via `AuthProvider`.

## 🧪 Scripts
Backend:
- `npm start` — start Express API

Frontend:
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview build
- `npm run lint` — eslint check

## 📝 Notes
- `.env` files are git-ignored. Provide your own values before running.
- If the frontend port is busy, Vite will auto-pick the next port; use the printed URL.

## 🤝 Contributing
PRs welcome. Please lint before pushing: `npm run lint` (frontend).
