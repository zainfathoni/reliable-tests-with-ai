# Demo App Implementation Plan

## Overview

This document outlines the plan for creating a React demo app with Button components that will serve as the foundation for testing examples in the "Writing Reliable Tests for React using AI" presentation.

## Objective

Create a working React demo app featuring Button and Toggle components (both class-based and hooks-based) that will be used for demonstrating testing strategies and AI-generated test writing.

## Implementation Steps

### Step 1: ✅ Create Documentation Directory and Plan File

- [x] Create `docs/plans/` directory structure
- [x] Document this plan in `docs/plans/app-demo.md` with detailed implementation steps

### Step 2: Set up React Development Environment

- [ ] Add React, ReactDOM, and Vite to the project dependencies
- [ ] Create a basic Vite configuration for development (`vite.config.js`)
- [ ] Set up a simple HTML entry point (`index.html`)

### Step 3: Create React Components Based on confident-react-testing Repository

- [ ] Create a `src/` directory structure
- [ ] Copy and adapt the **Button component** from `/Users/zain/Code/GitHub/zainfathoni/confident-react-testing/Button.js`
- [ ] Copy and adapt the **Button.css** for styling
- [ ] Create a **Toggle component** that uses the Button (similar to the reference)
- [ ] Create progressive versions for demonstration purposes

### Step 4: Create Component Variations for Testing Examples

- [ ] **Button.js** - Simple reusable button component
- [ ] **Toggle.js** - Class-based component with state management
- [ ] **ToggleHooks.js** - Hooks-based version of Toggle
- [ ] **App.js** - Main app component to render the demo

### Step 5: Set up Development Server

- [ ] Configure Vite to serve the React app
- [ ] Add npm scripts for development (`npm run dev`) and build
- [ ] Ensure the app runs in the browser at localhost:5173

### Step 6: Update Project Structure

- [ ] Update package.json with React dependencies:
  - react
  - react-dom
  - vite
  - @vitejs/plugin-react
- [ ] Create proper directory structure

### Step 7: Ensure Dual Functionality

- [ ] Maintain the existing MDX Deck presentation setup
- [ ] Add separate React demo app that can run independently
- [ ] Both should coexist: `npm start` for presentation, `npm run dev` for demo app

## Expected Directory Structure After Implementation

```
reliable-tests-with-ai/
├── docs/
│   └── plans/
│       └── app-demo.md
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── Button.css
│   │   ├── Toggle.js
│   │   └── ToggleHooks.js
│   ├── App.js
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── deck.mdx
└── README.md
```

## Component Specifications

### Button Component

- Simple reusable button component
- Accepts `onClick` prop and `children` for button text
- Styled with CSS for consistent appearance
- Based on the button from confident-react-testing repository

### Toggle Component (Class-based)

- Uses React class component with state
- Manages toggle state (on/off)
- Uses Button component for interaction
- Displays current state as text

### ToggleHooks Component (Hooks-based)

- Functional component using React hooks
- Uses `useState` for state management
- Same functionality as Toggle but with modern React patterns
- Will be used to demonstrate differences in testing approaches

## Success Criteria

- [ ] React demo app runs successfully in development mode
- [ ] All components render correctly in the browser
- [ ] Toggle functionality works as expected
- [ ] Both class-based and hooks-based versions function identically
- [ ] Presentation (MDX Deck) continues to work independently
- [ ] Code is properly structured and follows React best practices
