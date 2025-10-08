# Google-Account-Login

A Vue 3 + Nuxt.js application with Google OAuth authentication using Supabase v2.

## Features

- 🎨 Clean and modern UI with gradient background
- 🔐 Google OAuth authentication via Supabase
- 📱 Responsive design
- 🌐 Modal dialog for authentication
- ✨ Smooth animations and transitions

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- A Supabase account with Google OAuth configured

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Configure Supabase

1. Create a project on [Supabase](https://supabase.com)
2. Enable Google OAuth provider in Authentication > Providers
3. Copy your project URL and anon key

### Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Supabase Google OAuth Configuration

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Providers
3. Enable Google provider
4. Add your Google OAuth credentials (Client ID and Client Secret)
5. Add authorized redirect URLs:
   - Development: `http://localhost:3000/auth/callback`
   - Production: `https://your-domain.com/auth/callback`

## Usage

1. Click the "註冊 / 登入" button in the top-right corner
2. A modal will appear with a Google sign-in button
3. Click "使用 Google 帳號登入" to authenticate
4. After successful authentication, you'll see your profile information

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Tech Stack

- **Framework**: Nuxt.js 4.x (Vue 3)
- **Authentication**: Supabase v2 with Google OAuth
- **Styling**: Scoped CSS with modern design
- **TypeScript**: Full type safety

## Project Structure

```
├── app/
│   ├── app.vue              # Root component
│   ├── assets/
│   │   └── css/
│   │       └── main.css     # Global styles
│   ├── components/
│   │   └── LoginModal.vue   # Login modal component
│   ├── composables/
│   │   └── useSupabaseClient.ts # Supabase client composable
│   └── pages/
│       ├── index.vue        # Home page
│       └── auth/
│           └── callback.vue # OAuth callback handler
├── nuxt.config.ts           # Nuxt configuration
└── .env.example             # Environment variables template
```

## License

MIT

