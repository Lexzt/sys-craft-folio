# Sys Craft Portfolio

A developer portfolio built with [React](https://react.dev/), [Vite](https://vitejs.dev/) and [TypeScript](https://www.typescriptlang.org/).  Content for sections like skills, projects and experience is stored in [Supabase](https://supabase.com/) and loaded on the fly.  Styling uses [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/).

## Features
- Responsive landing page with sections for hero, about, experience, projects, skills and contact.
- Data-driven content powered by Supabase.
- Animated UI components built with shadcn/ui and framer-motion.

## Getting Started
1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Configure environment** – create a `.env` file with your Supabase project credentials:
   ```dotenv
   VITE_SUPABASE_URL=your-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
3. **Run the app**
   ```sh
   npm run dev
   ```

## Available Scripts
- `npm run dev` – start the Vite development server.
- `npm run build` – build the production bundle.
- `npm run lint` – run ESLint over the codebase.

## Database Schema
Portfolio content is stored in these Supabase tables:

### experiences
Records each role or engagement.
- `company`, `title`, `role` (`IC`, `Lead`, `Manager`, `Mixed`)
- `start_date`, `end_date`, `location`, `employment_type`
- `summary`, `highlights[]`, `tags[]`
- `sort_order`, `is_published`, timestamps

### skill_categories
Groups related skills.
- `slug` unique identifier and human-readable `name`
- `sort_order`, `is_published`, timestamps

### skills
Individual technologies or competencies.
- `name`, optional `level`, `years_of_experience`
- `is_featured`, `sort_order`, `tags[]`, timestamps

### skill_category_skills
Join table linking categories and skills.
- `category_id` → `skill_categories.id`
- `skill_id` → `skills.id`
- `sort_order`

### projects
Case studies for the portfolio.
- `title`, `subtitle`, `description`
- `problem`, `approach`, `outcome`, `metrics`
- `tech_stack[]`, `links` JSON, `image_url`
- `is_lead`, `is_featured`, `tags[]`
- `sort_order`, `is_published`, timestamps

## Deployment
Build the project and host the contents of the `dist` folder on any static hosting service:
```sh
npm run build
```

---
Created with ❤️ using Vite, React, TypeScript and Supabase.
