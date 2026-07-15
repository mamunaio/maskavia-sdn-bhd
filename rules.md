# Core Development Rules

1. **Tech Stack:** Strictly use Next.js (App Router), React, TypeScript, and Tailwind CSS.
2. **Type Safety:** TypeScript is mandatory. Avoid using `any`. Define proper interfaces for all props, API responses, and state objects.
3. **Component Structure:** Write modular, reusable, and DRY components. Use Server Components by default for better SEO and performance. Use Client Components (`"use client"`) only when interactivity (hooks, state, Framer Motion) is required.
4. **SEO & Meta Tags:** Implement semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<article>`). Ensure optimized meta tags and OpenGraph data for every page.
5. **Code Cleanliness:** No placeholder comments like `// add logic here`. Generate complete, production-ready logic. Keep files under 200 lines where possible by extracting smaller components.