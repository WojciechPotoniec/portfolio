# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite HMR
- `npm run build` - Build for production 
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React portfolio website built with Vite, featuring a dual-pane layout and routing for project details.

### Key Architecture Patterns

**Main Layout Structure:**
- Left pane (2/5 width): Fixed header and navigation menu (`Header.jsx`, `NavMenu.jsx`)
- Right pane (3/5 width): Dynamic content area (`MainContent.jsx`)
- Background: WebGL-powered animated gradient (`Iridescence.jsx` using OGL library)

**Routing Strategy:**
- `/` - Main portfolio page with dual-pane layout
- `/project/:projectId` - Full-screen project detail pages
- Project routing handled via `react-router-dom` with programmatic navigation

**Project System:**
- Project data defined in `Projects.jsx` as static array
- Project configurations in `ProjectDetail.jsx` with embedded components
- Interactive project previews (e.g., TicTacToe game) rendered inline
- Navigation between portfolio and project details maintains state

**Component Architecture:**
- `MainContent.jsx` renders different views based on `activeView` state
- `Projects.jsx` shows project cards with hover-triggered image preview
- `ProjectDetail.jsx` uses configuration objects to render project info and embedded demos
- Reusable `ProjectCard.jsx` for consistent project presentation

### Technology Stack

- **Framework:** React 19 with Vite
- **Styling:** TailwindCSS with custom animations
- **3D Graphics:** OGL library for WebGL background effects
- **Routing:** React Router DOM v7
- **Icons:** Lucide React
- **Forms:** Formspree for contact functionality

### Special Considerations

- The `Iridescence.jsx` component uses WebGL shaders for the animated background - handle with care as it manages canvas lifecycle
- Project components are embedded directly in `ProjectDetail.jsx` for interactive demos
- The layout uses sticky positioning and custom scroll handling - check viewport calculations when modifying
- Project images can be local files or external URLs, handled differently in the preview system