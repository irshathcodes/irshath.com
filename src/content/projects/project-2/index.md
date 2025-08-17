---
title: "Portfolio & Blog"
description: "A minimal portfolio and blog built with Astro. Fast, accessible, modern."
date: "Aug 15 2025"
demoURL: "https://irshath.com"
repoURL: "https://github.com/irshathcodes/irshath.com"
---

My personal portfolio and blog built with Astro. I wanted something fast, minimal, and easy to maintain while showcasing my work and writing.

## Features

- Static site generation for speed
- Dark/light mode with system preference detection
- Type-safe content collections for blogs, projects, and work experience
- Responsive design with smooth animations

## Tech Stack

**Frontend**

- Astro for static site generation
- TypeScript for type safety
- Tailwind CSS for styling

**Content**

- Astro Content Collections with Zod validation
- Markdown and MDX support
- Auto-generated RSS feed and sitemap

## Why Astro?

I chose Astro because it generates fast static sites with minimal JavaScript. The component islands architecture means I can use interactive components only when needed, keeping the bundle size small.

The Content Collections API provides type-safe content management, which is perfect for a blog and portfolio where I want to catch errors at build time.

## Performance

The site loads in under 500ms and has a total bundle size under 50KB. No client-side JavaScript frameworks are needed - just vanilla JS for theme switching and smooth scrolling.

The design focuses on readability with a clean typography hierarchy and consistent spacing.
