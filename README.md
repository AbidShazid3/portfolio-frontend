# 🌐 Personal Portfolio Website (Frontend)

A modern, responsive personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
This project allows the portfolio owner to showcase their **About Me**, **Projects**, **Blogs**, **Skills**, **Experiences** — with a private dashboard for managing content.

---

## 🚀 Live Demo

🔗 **Frontend (Vercel):** [https://your-frontend.vercel.app](https://your-frontend.vercel.app)  
🔗 **Backend (Vercel):** [https://your-backend-api.onrender.com](https://your-backend-api.onrender.com)

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 14, React, TypeScript |
| **Styling** | Tailwind CSS, Shadcn/UI Components |
| **Backend** | Express.js, Node.js |
| **Database** | PostgreSQL (via Prisma ORM) |
| **Authentication** | JWT + bcrypt |
| **Notifications** | Shadcn/UI Sonner |
| **Deployment** | Vercel (Frontend) , (Backend) |

---

## ✨ Features

### 🏠 Public Pages
- **Home Page:** Personal introduction & call-to-action.
- **About Me:** Displays static personal details (bio, contact, skills).
- **Skills:** Displays skill category cards.
- **Projects Showcase:** Dynamic project cards with links, tech stack, and features.
- **Blogs:** View all blogs and read individual blog pages (ISR-based rendering).

### 🔐 Private (Admin) Dashboard
- **Authentication:** Secure JWT-based login system.
- **Blog Management:** Create, edit, and delete blogs.
- **Project Management:** Add or update project details.
- **About Section:** Edit your bio, experience, and skill data.

### 💬 Feedback & Validation
- Success/error handling with `sonner`.
- Proper form validation with `react-hook-form` and `zod`.
- Unauthorized actions show friendly error messages.

---
## ⚙️ Setup Instructions (Frontend)

### 1️⃣ Clone Repository
```bash
git clone https://github.com/AbidShazid3/portfolio-frontend
cd folder name
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Variables

Create a .env.local file in the root directory and add:
```bash
NEXT_PUBLIC_BACKEND_API=https://your-backend-api.onrender.com/api
```

### 4️⃣ Run Development Server

Create a .env.local file in the root directory and add:
```bash
npm run dev
```
Now visit: http://localhost:3000

---
## Folder Structure
```bash
📦 portfolio-frontend
├── frontend/ # Next.js Frontend Application
├── public/ # Static assets (images, favicon, etc.)
├── src/
│ ├── actions/ # Server actions (Next.js server functions)
│ ├── app/ # Application routes and pages (Next.js App Router)
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utilities and helpers (e.g. API clients, constants)
│ ├── services/ # API service functions (frontend-backend interaction)
│ ├── types/ # TypeScript interfaces and type definitions
│ └── utils/ # Utility functions
│
├── .env.local # Local environment variables
├── components.json # Shadcn/UI component configuration
├── eslint.config.mjs # ESLint configuration
├── next-env.d.ts # Next.js type declarations
├── next.config.ts # Next.js configuration
├── package.json # Project dependencies and scripts
├── package-lock.json # Auto-generated dependency lock file
├── postcss.config.mjs # PostCSS configuration (used with Tailwind CSS)
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation (you’re reading this!)



```
---

## 🎨 UI/UX Features

- Fully responsive across desktop and mobile  
- Dashboard protected with route guards  
- Toast notifications for success/error feedback  
- Modern, clean, and professional design using **Shadcn/UI** and **Tailwind CSS utilities**

---

## 👨‍💻 Author

**Name:** Abid Shadat Noor  
**Email:** abidshazid3@gmail.com  
**GitHub:** [AbidShazid3](https://github.com/AbidShazid3)

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
