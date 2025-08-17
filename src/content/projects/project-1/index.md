---
title: "KanBased"
description: "A fast, keyboard-driven kanban app that updates instantly with real-time sync"
date: "Aug 15 2025"
demoURL: "https://kanbased.com"
repoURL: "https://github.com/irshathcodes/kanbased"
---

![KanBased app image](https://kanbased.com/public/kanbased-app-image.webp)

KanBased is a minimal kanban board application designed for speed and efficiency. Built from frustration with bloated and complex project management tools, it focuses on what matters most: fast, keyboard-driven task management with instant synchronization across all devices.

No loading spinners. No refresh buttons. No waiting. Just pure productivity.

## Key Features

- **Instant Sync** - Changes propagate in real-time across all devices using Zero sync engine
- **Keyboard Shortcuts** - Navigate and manage tasks without touching your mouse, includes CMD+K search
- **Rich Markdown** - Create detailed task descriptions with ProseMirror-powered markdown editing
- **Team Collaboration** - Invite team members and work together seamlessly with role-based access
- **Minimal Interface** - Clean, distraction-free design that keeps you focused on your work
- **Open Source** - MIT licensed and self-hostable for complete control over your data

## Why KanBased?

**Save 30+ seconds per task** - No more waiting for pages to load or data to refresh. Every action is instant.

**Stay in flow state** - Keyboard shortcuts keep your hands on the keys and your mind focused on what matters.

**Never lose work** - Real-time sync means changes are saved and shared instantly across all devices.

**Zero vendor lock-in** - Free forever, open source, and self-hostable when you need it.

## Tech Stack

### Frontend

- **React SPA** with **TanStack Router** for client-side routing
- **TypeScript** for type safety
- **ProseMirror** for rich text editing

### Backend

- **Hono** web framework on **Node.js**
- **Drizzle ORM** with **PostgreSQL** database
- **Better Auth** for authentication
- **Zero sync engine** for real-time synchronization
- **S3-compatible storage** for file handling
- **Resend** for email services

## Project Structure

The application is organized as a monorepo with three main components:

```
├── frontend/         # React SPA client application
├── backend/          # API server, sync engine, and database
└── landing-page/     # Static marketing site
```

## Design Philosophy

KanBased was built with a specific philosophy in mind:

- **Simplicity over features** - Focus on core kanban functionality done extremely well
- **Speed over complexity** - Every interaction should feel instant
- **Keyboard-first** - Power users shouldn't need to reach for their mouse
- **Open source** - Complete transparency and community ownership

## Self-Hosting

Being open source, KanBased can be fully self-hosted on your own infrastructure. This gives you:

- Complete data ownership and privacy
- Ability to customize and extend functionality
- Support for larger teams and usage patterns
- Integration with your existing infrastructure

## License

MIT License - Free for personal and commercial use
