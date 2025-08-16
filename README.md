# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0a83e0df-f3fe-400d-86b7-1b9aa56b9572

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0a83e0df-f3fe-400d-86b7-1b9aa56b9572) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
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
```

Variables prefixed with `VITE_` are exposed to the client by Vite and can be accessed in the code via `import.meta.env`.

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
