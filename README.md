# 🚀 Modern Web Project  
### Next.js • GSAP • Lenis • React Three Fiber • Styled-Components • Strapi (Headless CMS)

This repository showcases a **modern animated landing page** powered by a full headless CMS stack.  
It demonstrates how to integrate **advanced UI motion**, **3D WebGL elements**, and **dynamic content** using a real-world production-ready architecture.

> ✅ Great for portfolios  
> ✅ Shows real-world stack integration  
> ✅ Includes animations + smooth scroll + 3D + CMS  
> ✅ Easily adaptable for any landing page or product

---

## 🌟 Features

### 🎨 Frontend (Next.js)
- Next.js App Router architecture
- Styled-components styling system
- Smooth scroll experience using **Lenis**
- Scroll-based animations using **GSAP + ScrollTrigger**
- 3D animated background using **React Three Fiber + drei**
- Responsive layout and component structure
- Clean, reusable section model

### 🧠 Backend (Strapi Headless CMS)
- Based on **Strapi v5**
- REST API consumption
- Content types included:
  - `homepage` (single type)
  - `event` (collection type)
- Role and permission configuration
- Designed for cloud deployment (Strapi Cloud compatible)

---

## 🗂 Repository Structure
root/
├─ senior-junior-landing/ # Next.js frontend (animations + 3D + UI)
│ ├─ src/
│ │ ├─ app/ # Routing entry
│ │ └─ components/ # Hero, About, Events, Contact, 3D, etc.
│ └─ package.json
│
└─ senior-junior-cms/ # Strapi backend (content + API)
├─ src/
│ └─ api/ # Content type definitions
└─ package.json


---

## ⚙️ Tech Stack Breakdown

### ✅ Frontend Tools
| Feature | Tech |
|---------|------|
| Framework | Next.js (App Router) |
| Styling | styled-components |
| Scroll animations | GSAP + ScrollTrigger |
| Smooth scrolling | Lenis |
| 3D rendering | React Three Fiber + drei |
| Bundling | Turbopack |

### ✅ Backend Tools
| Feature | Tech |
|---------|------|
| CMS | Strapi v5 |
| API | REST |
| DB (local) | SQLite |
| DB (prod ready) | PostgreSQL |
| Deploy option | Strapi Cloud / Render / Railway |

---

## 🚀 Getting Started (Local Development)

```
1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

2. Run the frontend
cd senior-junior-landing
npm install
npm run dev

Frontend runs at:
http://localhost:3000

3. Run the Strapi CMS
cd senior-junior-cms
npm install
npm run develop

Strapi admin panel runs at:
http://localhost:1337/admin

# Optional Enhancements (Roadmap)
Image gallery with Strapi Media Library
GraphQL API version
Dark/light theme toggle
Admin-editable 3D parameters
Multi-section CMS page builder
Authentication + member area
Deploy scripts and CI/CD
