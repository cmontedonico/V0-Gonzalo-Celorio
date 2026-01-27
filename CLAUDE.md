# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive web experience showcasing Gonzalo Celorio's literary work. Built with Next.js 14 and v0.dev, the site features a main page with an immersive library background image and six interactive hotspots positioned around the author. Each hotspot represents a literary work and triggers audio on hover and video playback on click.

**Key Technologies:**
- Next.js 14.2.35 (App Router)
- React 18
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (New York style)
- Vercel Analytics

## Common Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Notes
- TypeScript and ESLint errors are ignored during builds (see `next.config.mjs`)
- Images are unoptimized for deployment compatibility
- This repository syncs automatically with v0.app deployments

## Architecture

### Directory Structure
```
/app                    # Next.js App Router pages
  /about               # Documentation page explaining project creation
  layout.tsx           # Root layout with metadata and analytics
  page.tsx             # Main interactive experience page
  globals.css          # Tailwind configuration and custom styles

/components            # React components
  interactive-point.tsx    # Hoverable/clickable hotspot component
  music-player.tsx         # Global background music player with volume control
  video-player.tsx         # YouTube video popup player
  theme-provider.tsx       # Theme context (currently unused)

/public
  /images              # Book covers and background images
  /audio               # MP3 files (referenced but not committed)

/lib
  utils.ts             # Tailwind utility functions (cn helper)
```

### Key Components

**InteractivePoint** (`components/interactive-point.tsx`)
- Represents each clickable literary work on the main page
- Props: id, image, title, audioSrc, videoSrc, position (top/left/right/transform)
- Hover behavior: plays audio, scales element 1.5x, triggers background blur
- Click behavior: opens video player with YouTube URL
- Audio playback uses refs to handle promise-based play/pause correctly

**MusicPlayer** (`components/music-player.tsx`)
- Fixed position (bottom-right) global audio player
- Auto-plays background music on page load
- Volume control slider with mute toggle
- Default volume: 30%
- Uses Lucide icons (Volume2, VolumeX)

**VideoPlayer** (`components/video-player.tsx`)
- Full-screen overlay for YouTube video playback
- Accepts YouTube URLs and converts them to embed format
- Close button to dismiss

### Main Page Logic (`app/page.tsx`)

The main page maintains an array of `interactivePoints` with configuration for each literary work:
- 6 total points positioned using absolute CSS (top, left, right, transform)
- Layout: 3 on left side (Tres Lindas Cubanas, El metal y la escoria, Los apóstatas), 1 centered top (Sobre la Auto-ficción), 2 on right side (Un montón de espejos rotos, Bibliografía)
- State management:
  - `hoveredPoint`: tracks which point is currently hovered (null when none)
  - `currentVideo`: tracks which video is playing (null when none)
- Background blur effect applied when any point is hovered

### Styling (`app/globals.css`)

Custom CSS classes:
- `.blur-background` - 8px blur with 300ms transition
- `.interactive-point` - hover scale to 1.5x with cubic-bezier easing
- `.secondary-amplify` / `.amplified` - 1.25x scale for secondary elements (legacy, not currently used)

Color scheme uses OKLCH color space with warm library aesthetic (reds, ambers).

## Path Aliases

TypeScript paths configured in `tsconfig.json`:
- `@/*` maps to root directory
- Common imports: `@/components/*`, `@/lib/utils`

## Deployment

- Deployed on Vercel
- Auto-syncs with v0.app project: https://v0.app/chat/projects/OiZJINeSzOa
- Vercel Analytics enabled via `@vercel/analytics`

## Important Implementation Details

### Audio Playback
- Background music auto-plays via `<audio autoPlay>` in MusicPlayer
- Interactive point audio uses `useRef` and promise handling to avoid "play() interrupted by pause()" errors
- Audio elements preload with `preload="auto"`

### Video Integration
- All videos hosted on YouTube
- URLs passed as `videoSrc` prop to InteractivePoint
- VideoPlayer component handles YouTube embed conversion
- Videos open in full-screen overlay on click

### State Management
- Component-level state using React hooks (useState, useRef, useEffect)
- No global state library
- Parent-child communication via callback props (onHover, onVideoPlay)

### Hover Interaction Flow
1. User hovers over InteractivePoint
2. Component calls `setIsHovered(true)` and `onHover(id, true)`
3. Parent updates `hoveredPoint` state
4. Background blur class applied when `hoveredPoint !== null`
5. Audio plays via ref with promise handling
6. CSS transform scales element to 1.5x

## About Page

The `/about` page documents the project creation process:
- Step-by-step prompts used with v0.dev
- Time comparison: AI (19 min) vs Traditional (19-28 hrs)
- Materials needed for similar projects
- Acknowledgments for video production team
- Tips for working with AI tools

## Metadata

- Title: "Gonzalo Celorio - Obra Literaria Interactiva"
- Language: Spanish (es)
- Generator: v0.app
- Font: Inter (variable font with --font-sans CSS variable)
