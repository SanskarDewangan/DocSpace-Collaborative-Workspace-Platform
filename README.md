# DocSpace — Collaborative Workspace Platform

A modern, real-time note-taking and document workspace built with Next.js App Router, Convex, and Clerk. Create, organize, and collaborate on documents with rich-text editing powered by BlockNote, theming, and media uploads via EdgeStore.

## Features
- **Authentication**: Clerk-hosted auth flows and components
- **Realtime data**: Convex functions and subscriptions
- **Rich editor**: BlockNote editor with uploads to EdgeStore
- **File uploads**: EdgeStore public bucket integration
- **Dark mode**: System-aware theming with `next-themes`
- **Command palette**: Quick actions via `cmdk`
- **Type-safety**: End-to-end TypeScript

## Tech Stack
- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Convex 1.x
- Clerk 6.x
- BlockNote 0.37
- Tailwind CSS 4
- EdgeStore 0.5

## Prerequisites
- Node.js 18+ (recommend LTS)
- npm (or pnpm/yarn)

## Environment Variables
Create a `.env.local` in the project root:

```
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Convex
CONVEX_DEPLOYMENT=
CONVEX_SITE_URL=http://localhost:3000

# EdgeStore
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
EDGE_STORE_BUCKET=
```

Notes:
- Obtain Clerk keys from the Clerk dashboard.
- Initialize Convex with `npx convex dev` separately if needed, and configure deployment.
- Configure EdgeStore credentials and bucket as per your storage provider.

## Installation
```
npm install
```

## Development
```
npm run dev
```
App runs at `http://localhost:3000`.

If using Convex locally, run in another terminal:
```
npx convex dev
```

## Build & Run
```
npm run build
npm start
```

## Useful Scripts
- `dev`: start Next.js in development
- `build`: production build
- `start`: start production server
- `lint`: run ESLint

## Project Structure
```
app/                # Next.js App Router (marketing + main app)
components/         # UI components and editor wrappers
convex/             # Convex schema, functions, and generated API
hooks/              # Reusable React hooks
lib/                # Client utilities (EdgeStore client, helpers)
public/             # Static assets
```

## Editor and Uploads
- The editor uses BlockNote with a custom `uploadFile` handler that uploads to EdgeStore and returns a public URL.
- Update EdgeStore configuration in `app/api/edgestore/[...edgestore]/route.ts` and `lib/edgestore.ts` as needed.

## Deployment
- Recommended: Vercel for the Next.js app.
- Ensure environment variables are set in your hosting provider.
- Provision Convex deployment and update `CONVEX_DEPLOYMENT`.

## Troubleshooting
- Clear Next cache: `rm -rf .next` (macOS/Linux) or delete the `.next` folder (Windows) and rebuild.
- If dependency conflicts occur, install with `--legacy-peer-deps`.
- For editor import errors, ensure `@blocknote/react` v0.37 and import `BlockNoteViewRaw as BlockNoteView`.

## License
MIT
