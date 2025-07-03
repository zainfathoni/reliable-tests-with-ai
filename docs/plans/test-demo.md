# Testing Infrastructure Implementation Plan

## Overview

This document outlines the plan for setting up Vitest Browser Mode testing infrastructure for the React demo app, based on the senar.ai reference implementation. This will enable reliable testing of React components in a real browser environment.

## Objective

Set up a comprehensive testing infrastructure that demonstrates:

1. Browser-based testing with Vitest Browser Mode
2. Component testing patterns for both class-based and hooks-based React components
3. Test data generation using faker
4. Coverage reporting and CI-ready test scripts
5. Foundation for AI-generated test demonstrations

## Implementation Steps

### Step 1: Install Testing Dependencies

- **Core Vitest packages**: `vitest`, `@vitest/browser`
- **Browser automation**: `playwright`, `@playwright/test`
- **React testing utilities**: `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- **Test data generation**: `@faker-js/faker`
- **Coverage reporting**: `@vitest/coverage-v8`

### Step 2: Configure Vitest Browser Mode

- Update `vite.config.js` to include Vitest browser configuration
- Set up browser provider (Playwright with Chromium)
- Configure test environment and globals
- Set up path aliases for cleaner imports (`~` for src directory)
- Enable coverage reporting with appropriate thresholds

### Step 3: Create Test Setup Files

- Create `vitest-setup.ts` with jest-dom matchers extension
- Configure test environment setup
- Set up global test utilities and custom matchers

### Step 4: Create Test Directory Structure

```
src/
└── components/
    └── __tests__/
        ├── Button.test.tsx
        ├── Toggle.test.tsx
        └── ToggleHooks.test.tsx
```

### Step 5: Write Component Tests

#### Button Component Tests

- Test rendering with different props
- Test onClick functionality
- Test TypeScript prop validation
- Test CSS class application

#### Toggle Component Tests (Class-based)

- Test initial state rendering
- Test toggle functionality
- Test state persistence
- Test Button integration

#### ToggleHooks Component Tests (Hooks-based)

- Test initial state rendering
- Test toggle functionality using hooks
- Test state persistence
- Test Button integration
- Compare behavior with class-based version

### Step 6: Update Package Scripts

Replace the placeholder test script with:

- `test`: Main test command with CI detection
- `test:watch`: Watch mode for development
- `test:coverage`: Generate coverage reports
- `test:verbose`: Detailed test output

### Step 7: Create Documentation

- Document testing strategy and patterns
- Create examples of reliable test writing
- Document AI prompting approaches for test generation
- Add testing guidelines for future components

## Expected Directory Structure After Implementation

```
reliable-tests-with-ai/
├── docs/
│   └── plans/
│       ├── app-demo.md
│       └── test-demo.md
├── src/
│   └── components/
│       ├── __tests__/
│       │   ├── Button.test.tsx
│       │   ├── Toggle.test.tsx
│       │   └── ToggleHooks.test.tsx
│       ├── Button.tsx
│       ├── Button.css
│       ├── Toggle.tsx
│       └── ToggleHooks.tsx
├── vitest-setup.ts
├── vite.config.js (updated)
└── package.json (updated)
```

## Testing Strategy

### Component Testing Patterns

1. **Render Testing**: Verify components render correctly with default props
2. **Interaction Testing**: Test user interactions like clicks and form inputs
3. **State Testing**: Verify state changes and persistence
4. **Integration Testing**: Test component interactions with each other
5. **Accessibility Testing**: Ensure components are accessible

### Test Data Generation

- Use `@faker-js/faker` for generating realistic test data
- Create consistent test data patterns
- Avoid hardcoded test values for better test reliability

### Coverage Requirements

- Set up coverage thresholds for statements, branches, functions, and lines
- Include all TypeScript files in coverage analysis
- Exclude test files and configuration from coverage

## Key Features

- **Browser-based testing**: Real DOM testing environment
- **TypeScript support**: Full type checking in tests
- **Coverage reporting**: Comprehensive test coverage analysis
- **Watch mode**: Fast feedback during development
- **CI-ready**: Automated testing in continuous integration
- **Faker integration**: Realistic test data generation
- **Jest-DOM matchers**: Enhanced assertions for DOM testing

## Testing Best Practices

1. **Test behavior, not implementation**: Focus on what the component does, not how it does it
2. **Use semantic queries**: Query by role, label, or text content
3. **Test user interactions**: Simulate real user behavior
4. **Keep tests isolated**: Each test should be independent
5. **Use descriptive test names**: Clear test descriptions for better maintenance

## Success Criteria

- [ ] All testing dependencies installed successfully
- [ ] Vitest Browser Mode configured and running
- [ ] All components have comprehensive tests
- [ ] Tests pass in both watch and CI modes
- [ ] Coverage reports generated successfully
- [ ] Documentation completed with examples
- [ ] Foundation ready for AI-generated test demonstrations

## Next Steps

After implementation, this testing infrastructure will serve as the foundation for:

1. Demonstrating AI-generated test writing
2. Creating test prompt templates
3. Showing reliable test patterns
4. Building comprehensive test suites for React applications
