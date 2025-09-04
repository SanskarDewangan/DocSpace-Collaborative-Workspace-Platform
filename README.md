# Notion Clone

A modern, full-stack Notion-like application built with Next.js, featuring rich text editing, document management, and collaborative workspaces.

![Notion Clone](/.github/images/img_main.png)

## 🚀 Features

- **Rich Text Editor**: Powered by BlockNote for a seamless writing experience
- **Document Management**: Create, edit, organize, and archive documents
- **Hierarchical Structure**: Support for nested documents and pages
- **Real-time Collaboration**: Built with Convex for real-time updates
- **Authentication**: Secure user authentication with Clerk
- **File Uploads**: Image and file uploads with EdgeStore
- **Dark/Light Mode**: Theme switching with next-themes
- **Search Functionality**: Global search with keyboard shortcuts (Cmd/Ctrl + K)
- **Responsive Design**: Mobile-friendly interface
- **Publishing System**: Share documents publicly
- **Trash & Restore**: Recycle bin functionality with recursive operations

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Radix UI** - Accessible component primitives

### Backend & Database
- **Convex** - Real-time database and API layer
- **Clerk** - Authentication and user management
- **EdgeStore** - File storage and uploads

### Editor & Features
- **BlockNote** - Rich text editor
- **Zustand** - State management
- **Zod** - Schema validation
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanskarDewangan/DocSpace-Collaborative-Workspace-Platform.git
   cd DocSpace-Collaborative-Workspace-Platform
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
   ```

3. **Environment Configuration**

   Create `.env.local` in the root directory:
   ```env
   # Next.js telemetry (optional)
   NEXT_TELEMETRY_DISABLED=1

   # Convex deployment
   CONVEX_DEPLOYMENT=dev:<deployment-name>
   NEXT_PUBLIC_CONVEX_URL=<your-convex-url>

   # Clerk authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   ```

   Create `convex/.env.local`:
   ```env
   # Clerk JWT issuer URL
   CLERK_ISSUER_URL=<your-clerk-issuer-url>

   # EdgeStore keys
   EDGE_STORE_ACCESS_KEY=<your-edge-store-access-key>
   EDGE_STORE_SECRET_KEY=<your-edge-store-secret-key>
   ```

4. **Convex Setup**
   - Visit [Convex Dashboard](https://dashboard.convex.dev)
   - Create a new project
   - Copy deployment details to `.env.local`

5. **Clerk Setup**
   - Visit [Clerk Dashboard](https://dashboard.clerk.dev)
   - Create a new application
   - Configure authentication settings
   - Copy API keys to environment files
   - Set up JWT template for Convex

6. **EdgeStore Setup**
   - Configure EdgeStore for file uploads
   - Add access keys to environment files

## 🚀 Usage

### Development
```bash
npm run dev
# or
yarn dev
```

### Production Build
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

### Convex Development
```bash
npx convex dev
```

## 📁 Project Structure

```
notion-clone/
├── app/                    # Next.js app directory
│   ├── (main)/            # Main application routes
│   ├── (marketing)/       # Landing page routes
│   ├── (public)/          # Public document routes
│   └── api/               # API routes
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── modals/           # Modal components
├── convex/               # Backend functions and schema
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


