# Muhammad Nazih — Software Developer & Cloud Infrastructure

Personal portfolio website of **Muhammad Nazih**, Informatics & Computer Engineering graduate and Software Developer specializing in fullstack web architecture, GCP cloud computing, and DevOps systems.

🌐 **Live Site:** <https://muhnazih.azdastudio.my.id>

## ✨ Features

- Single-page portfolio built with Astro static output + React islands
- Sections: Home, Experience, Education, Projects, Skills, Contact, Footer
- Project case studies with detail modals and source / live demo links
- Appreciation (like) counter persisted via browser localStorage
- Contact form forwarding submissions to Google Sheets via Google Apps Script Web App

## 🛠 Tech Stack

- **Astro** (static site generation) + **React 19** (interactive islands) + **Tailwind CSS**
- TypeScript, pnpm

## 🚀 Getting Started

```bash
pnpm install
cp .env.example .env
# Set PUBLIC_CONTACT_FORM_ENDPOINT to your Google Apps Script Web App URL
pnpm run dev
pnpm run build
pnpm run preview
```

## 🚢 Deployment

Static output generated in `dist/`, served behind nginx reverse proxy.

## 📄 License

Design and code is Copyright &copy; 2026 Muhammad Nazih. Licensed under [MIT](LICENSE).
