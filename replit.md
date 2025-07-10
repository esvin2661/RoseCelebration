# Replit.md - Animated Rose Bouquet Birthday App

## Overview

This is a React-based web application designed as an animated rose bouquet birthday greeting for someone named Emely. The project is built with a modern full-stack architecture using React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence. The application features beautiful CSS animations and interactive effects for displaying an animated rose bouquet.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store (connect-pg-simple)

### Component Structure
- **UI Components**: Comprehensive shadcn/ui component library including forms, dialogs, tooltips, and data display components
- **Custom Styling**: CSS custom properties for consistent theming with support for light/dark modes
- **Animation**: Custom CSS animations for rose bouquet effects

## Key Components

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Migrations**: Database schema versioning through Drizzle migrations
- **Validation**: Zod schemas for type-safe data validation

### API Layer
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **CRUD Operations**: User management operations (create, read by id/username)
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Frontend Features
- **Animated Rose Bouquet**: Custom CSS animations for displaying colorful roses
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Hover effects and smooth transitions
- **Typography**: Google Fonts integration (Dancing Script, Poppins)

## Data Flow

1. **Client Requests**: React components use React Query for API calls
2. **API Layer**: Express routes handle HTTP requests with proper error handling
3. **Data Storage**: Storage interface abstracts database operations
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Management**: React Query manages server state caching and updates

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React Query, React Hook Form
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Styling**: Tailwind CSS, class-variance-authority, clsx

### Development Tools
- **Build Tools**: Vite, ESBuild for production builds
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development**: tsx for TypeScript execution, runtime error overlay

### Utility Libraries
- **Form Handling**: React Hook Form with Hookform resolvers
- **Date Management**: date-fns for date utilities
- **Icons**: Lucide React for consistent iconography
- **Animations**: Embla Carousel for carousel components

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server for frontend, tsx for backend
- **Hot Reload**: Vite HMR for frontend, nodemon-like restart for backend
- **Database**: Neon Database with environment-based connection strings

### Production Build
- **Frontend**: Vite build to static assets in `dist/public`
- **Backend**: ESBuild bundling to `dist/index.js`
- **Database Migrations**: Drizzle push command for schema updates
- **Environment Variables**: Database URL and other config through environment

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express application
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

The application is designed to be easily deployable to platforms like Replit, Vercel, or similar services with minimal configuration requirements.