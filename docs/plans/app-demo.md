# Demo App Implementation Plan

## Overview

This document outlines the plan for creating a React demo app with Button components that will serve as the foundation for testing examples in the "Writing Reliable Tests for React using AI" presentation.

## Objective

Create a working React demo app featuring Button and Toggle components (both class-based and hooks-based) that will be used for demonstrating testing strategies and AI-generated test writing.

## Implementation Steps

### Step 1: ✅ Create Documentation Directory and Plan File

- [x] Create `docs/plans/` directory structure
- [x] Document this plan in `docs/plans/app-demo.md` with detailed implementation steps

### Step 2: ✅ Set up React Development Environment

- [x] Add React, ReactDOM, and Vite to the project dependencies
- [x] Create a basic Vite configuration for development (`vite.config.js`)
- [x] Set up a simple HTML entry point (`index.html`)

### Step 3: ✅ Create React Components Based on confident-react-testing Repository

- [x] Create a `src/` directory structure
- [x] Create the **Button component** as `src/components/Button.tsx` (TypeScript version)
- [x] Create **Button.css** for styling
- [x] Create a **Toggle component** that uses the Button (class-based)
- [x] Create progressive versions for demonstration purposes

### Step 4: ✅ Create Component Variations for Testing Examples

- [x] **Button.tsx** - Simple reusable button component (class-based with TypeScript)
- [x] **Toggle.tsx** - Class-based component with state management
- [x] **ToggleHooks.tsx** - Hooks-based version of Toggle
- [x] **App.tsx** - Main app component to render the demo

### Step 5: ✅ Set up Development Server

- [x] Configure Vite to serve the React app
- [x] Add npm scripts for development (`npm run dev`) and build
- [x] Ensure the app runs in the browser at localhost:5173

### Step 6: ✅ Update Project Structure

- [x] Update package.json with React dependencies:
  - react
  - react-dom
  - vite
  - @vitejs/plugin-react
  - Added TypeScript support with proper type definitions
- [x] Create proper directory structure with TypeScript configuration

## ✅ Current Directory Structure (Implemented)

```
reliable-tests-with-ai/
├── docs/
│   └── plans/
│       └── app-demo.md
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   ├── Toggle.tsx
│   │   └── ToggleHooks.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.js
├── tsconfig.json
├── tsconfig.node.json
├── package.json
├── deck.md
├── deck.pdf
└── README.md
```

## Component Specifications

### Button Component (✅ Implemented)

- Simple reusable button component built as a TypeScript class component
- Accepts `onClick` prop and `children` for button text
- Styled with CSS for consistent appearance
- Uses proper TypeScript interfaces for type safety

### Toggle Component (✅ Class-based - Implemented)

- Uses React class component with TypeScript state management
- Manages toggle state (on/off) with proper typing
- Uses Button component for interaction
- Displays current state as "On" or "Off" text

### ToggleHooks Component (✅ Hooks-based - Implemented)

- Functional component using React hooks with TypeScript
- Uses `useState` for state management
- Same functionality as Toggle but with modern React patterns
- Demonstrates differences in testing approaches between class and hooks

## ✅ Success Criteria (All Met)

- [x] React demo app runs successfully in development mode
- [x] All components render correctly in the browser
- [x] Toggle functionality works as expected
- [x] Both class-based and hooks-based versions function identically
- [x] Code is properly structured and follows React best practices
- [x] TypeScript integration provides type safety
- [x] Presentation slides are maintained separately as `deck.md`
