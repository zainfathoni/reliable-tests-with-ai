# Writing Reliable Tests for React using AI

A comprehensive guide to building robust test suites with AI assistance. This repository contains both presentation slides and a demo React application for demonstrating testing strategies.

## Project Structure

- **Presentation**: `deck.md` - Marp-based slides
- **Demo App**: React application with TypeScript components
- **Documentation**: Comprehensive plans and guides in `docs/plans/`

## Development

### Running the Demo App

To run the React demo application:

```sh
npm run dev
```

This starts the development server at `http://localhost:5173` with:
- Button component (class-based)
- Toggle component (class-based)
- ToggleHooks component (hooks-based)

### Viewing the Presentation

The presentation slides are in `deck.md` format using [Marp](https://marp.app/). You can view the slides by:
1. Opening `deck.md` in VS Code with the Marp extension
2. Using the generated `deck.pdf` file

## Testing Infrastructure

This project demonstrates modern React testing with:
- **Vitest Browser Mode** - Real browser testing environment
- **React Testing Library** - User-focused testing utilities
- **Playwright MCP** - AI-assisted testing workflows
- **TypeScript** - Type-safe testing patterns

### Running Tests

```sh
# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests with verbose output
npm run test:verbose
```

## Key Features

- 🚀 **AI-Enhanced Testing**: Demonstrates how AI can assist in test generation
- 🛠️ **Modern Testing Stack**: Vitest + React Testing Library + Playwright MCP
- 🎯 **User-Focused Testing**: Tests user interactions, not implementation details
- 📝 **Documentation-Driven**: Comprehensive plans and patterns for reliable testing
- 🔄 **TypeScript Support**: Full type safety in both components and tests

## Documentation

- [`docs/plans/app-demo.md`](docs/plans/app-demo.md) - React app implementation plan
- [`docs/plans/test-demo.md`](docs/plans/test-demo.md) - Testing infrastructure plan
- [`CLAUDE.md`](CLAUDE.md) - Project instructions and automation approaches

## Presentation Topics

1. **Prepare React Testing Infrastructure**
2. **Write reliable tests for React components**
3. **Use AI to write the tests**
4. **Prompt AI to produce consistent tests**

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the demo app: `npm run dev`
4. Explore the components in `src/components/`
5. Review the test plans in `docs/plans/`

## Links

- 🎯 [Confident React Testing](https://confident-react-testing.netlify.app/)
- 🎭 [Playwright MCP](https://github.com/microsoft/playwright-mcp)
- 🧪 [Vitest Browser Mode](https://vitest.dev/guide/browser/)
- 📄 [Presentation Slides](https://zainf.dev/reliable-tests-with-ai)
