# Sys Craft Portfolio

A developer portfolio built with [React](https://react.dev/), [Vite](https://vitejs.dev/) and [TypeScript](https://www.typescriptlang.org/).  Content for sections like skills, projects and experience is stored in [Supabase](https://supabase.com/) and loaded on the fly.  Styling uses [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/).

## Features
- Responsive landing page with sections for hero, about, experience, projects, skills and contact.
- Data-driven content powered by Supabase.
- Animated UI components built with shadcn/ui and framer-motion.
- Contact form powered by [Formspree](https://formspree.io/) for email notifications.

## Getting Started
1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Configure environment** – create a `.env` file with your Supabase project credentials, Formspree form ID and optional deployment base path:
   ```dotenv
   VITE_SUPABASE_URL=your-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   VITE_FORMSPREE_FORM_ID=your-formspree-id
   PUBLIC_URL=/
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
Set the `PUBLIC_URL` environment variable to the path your app will be served from before building (e.g., `/repo-name/` for GitHub Pages or `/` for a custom domain), then build and host the contents of the `dist` folder on any static hosting service:
```sh
npm run build
```

## Linting

To maintain code quality, lint the repository with:

```sh
npm run lint
```

Linting also runs automatically before commits via a Git pre-commit hook and on pushes and pull requests targeting the `master` branch via GitHub Actions.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
 
## Environment Variables

Copy `.env.example` to `.env` and provide values for the following variables:

```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
VITE_FORMSPREE_FORM_ID=<your-formspree-id>
PUBLIC_URL=/
```

Variables prefixed with `VITE_` are exposed to the client by Vite and can be accessed in the code via `import.meta.env`.

`PUBLIC_URL` sets the base path for the application when deployed. Use `/repo-name/` for GitHub Pages or `/` for a custom domain.

## Database Schema

The Supabase database backs the portfolio content. Key tables and fields:

- **skill_categories** – required `slug` (unique) and `name`; optional `sort_order` and `is_published`.
- **skills** – required `name`; optional `level`, `years_of_experience`, `is_featured`, `sort_order`, and `tags`.
- **skill_category_skills** – join table mapping skills to categories (`category_id` → `skill_categories.id`, `skill_id` → `skills.id`).
- **projects** – required `title`; optional `description`, `problem`, `approach`, `outcome`, `tech_stack`, `links`, `image_url`, `is_featured`, `is_lead`, `tags`, `metrics`, `sort_order`, and `is_published`.

Skill categories and skills have a many-to-many relationship through `skill_category_skills`. Projects are stored separately and can be marked as featured for highlighted display in the UI.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0a83e0df-f3fe-400d-86b7-1b9aa56b9572) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
Created with ❤️ using Vite, React, TypeScript and Supabase.