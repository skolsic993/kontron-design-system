# Kontron Design System

Design system and component library for Kontron eRPM UI. It provides reusable UI primitives (built on Radix UI), design tokens, and showcase pages for typography, buttons, cards, forms, modals, navigation, tables, and more.

---

## Quick start (new colleagues)

### 1. Prerequisites

- **Node.js** 18+ (recommend LTS)
- **Bun** (recommended) or **npm** / **yarn** for installing dependencies

To install Bun: <https://bun.sh>

### 2. Clone the repository

```bash
git clone <repository-url>
cd kontron-design-system
```

### 3. Install dependencies

```bash
bun install
```

If you don’t use Bun:

```bash
npm install
```

### 4. Start the development server

```bash
bun run dev
```

Or with npm:

```bash
npm run dev
```

The app runs at **http://localhost:3000** and the browser should open automatically. You’ll see the design system showcase with all components and patterns.

### 5. Build for production

```bash
bun run build
# or: npm run build
```

Output is written to the `build/` directory.

---

## What you can do

| Task                            | Command                            |
| ------------------------------- | ---------------------------------- |
| Run the dev server (hot reload) | `bun run dev` or `npm run dev`     |
| Build for production            | `bun run build` or `npm run build` |
| Install dependencies            | `bun install` or `npm install`     |

---

## Project structure

| Path                                      | Purpose                                                                                                                     |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `src/components/ui/`                      | Reusable UI primitives (button, card, dialog, form, table, etc.). Use these when building new features.                     |
| `src/components/design-system/`           | Showcase pages that demonstrate each category: Buttons, Cards, ColorPalette, Forms, Modals, Navigation, Tables, Typography. |
| `src/components/DesignSystemShowcase.tsx` | Main app that mounts the design system showcase and theme toggle.                                                           |
| `src/styles/`                             | Global styles and design tokens.                                                                                            |
| `src/index.css`                           | Global CSS (including Tailwind).                                                                                            |

Imports use the `@/` alias for `src/` (e.g. `import { Button } from '@/components/ui/button'`).

---

## Tech stack

- **React 18** + **TypeScript**
- **Vite** for dev server and builds
- **Radix UI** for accessible primitives
- **Tailwind** for styling
- **Lucide React** for icons

---

## Theme

The showcase supports light/dark mode. The theme toggle is in the top-right of the hero; the choice is stored in `localStorage` and applied via the `dark` class on the document root.
