# Writing Reliable Tests for React using AI

## Introduction

This repository is meant for presenting a tech talk with this title, "Writing
Reliable Tests for React using AI"

Here are the talking points:

1.⁠ ⁠Prepare React Testing Infrastructure
2.⁠ ⁠Write reliable tests for React components
3.⁠ ⁠⁠⁠Use AI to write the tests
4.⁠ ⁠⁠Prompt AI to produce consistent tests

## Prior Works

- [Example of a proper testing infrastructure](https://github.com/zainfathoni/senar.ai)
- [GitHub Issue for previous talks](https://github.com/zainfathoni/senar.ai/issues/2)
- [Slides of writing reliable tests](https://github.com/zainfathoni/confident-react-testing)

## Todo

- [x] Initialize the talk slides using [Marp](https://marp.app/)
- [x] Prepare the demo app with a simple component rendered in the browser
- [x] Prepare the testing infrastructure demo app with
      [Vitest Browser Mode](https://vitest.dev/guide/browser/)
- [x] Write the slides based on the talking points
  - [x] 1. Prepare React Testing Infrastructure
  - [x] 2. Write reliable tests for React components
  - [x] 3. Use AI to write the tests
  - [x] 4. Prompt AI to produce consistent tests
- [ ] Prepare the AI prompts to write the tests reliably under `docs/test-plans`
      directory

## Claude Code Automation Approaches

### Documentation Approach

Whenever writing documentation in Markdown, always remember to:

- Add a new line after the first header
- Add a new line by the end of the file

### TypeScript Approach

- Use TypeScript, so it should use .tsx instead of .js whenever applicable

### Project Management Approach

- Always update the corresponding Markdown plan document with the latest state of the completed steps

### Testing Approach

- Always use case insensitive regex to assert text in testing, avoid hardcoded strings because they are case sensitive
