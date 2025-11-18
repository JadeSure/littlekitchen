# CLAUDE.md - AI Assistant Guide for littlekitchen

> Last Updated: 2025-11-18
> Repository: JadeSure/littlekitchen

## 📋 Table of Contents

- [Repository Overview](#repository-overview)
- [Codebase Structure](#codebase-structure)
- [Development Workflows](#development-workflows)
- [Tech Stack](#tech-stack)
- [Key Conventions](#key-conventions)
- [Getting Started](#getting-started)
- [Testing Guidelines](#testing-guidelines)
- [Deployment](#deployment)
- [AI Assistant Guidelines](#ai-assistant-guidelines)

---

## 🏠 Repository Overview

**Project Name:** littlekitchen
**Repository:** JadeSure/littlekitchen
**Status:** Initial Setup

This repository is currently in its initial setup phase. This document serves as a comprehensive guide for AI assistants and developers working with this codebase.

---

## 📁 Codebase Structure

> **Note:** This section will be updated as the project structure develops.

```
littlekitchen/
├── .git/                  # Git repository metadata
├── CLAUDE.md             # This file - AI assistant guide
├── README.md             # Project documentation (to be created)
├── src/                  # Source code (to be created)
├── tests/                # Test files (to be created)
├── docs/                 # Additional documentation (to be created)
└── [package.json]        # Project dependencies (to be created)
```

### Directory Guidelines

When organizing the codebase, follow these conventions:

- **`/src`** - Main source code
  - `/src/components` - Reusable components
  - `/src/utils` - Utility functions and helpers
  - `/src/services` - External service integrations
  - `/src/config` - Configuration files
  - `/src/types` - TypeScript type definitions (if applicable)

- **`/tests`** - Test files mirroring src structure
  - Unit tests alongside source files or in parallel structure
  - Integration tests in `/tests/integration`
  - E2E tests in `/tests/e2e`

- **`/docs`** - Additional documentation
  - API documentation
  - Architecture decisions (ADRs)
  - User guides

---

## 🔄 Development Workflows

### Git Workflow

1. **Branching Strategy**
   - Main branch: `main` (or `master`)
   - Feature branches: `feature/description`
   - Bug fix branches: `bugfix/description`
   - AI-assisted branches: `claude/session-id` (auto-managed)

2. **Commit Conventions**
   - Use conventional commits format:
     ```
     <type>(<scope>): <subject>

     <body>
     ```
   - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
   - Example: `feat(auth): add user login functionality`

3. **Pull Request Process**
   - Create descriptive PR titles
   - Include summary of changes
   - Reference related issues
   - Ensure tests pass before requesting review

### Code Review Guidelines

- Review for clarity, maintainability, and correctness
- Check for security vulnerabilities
- Verify test coverage
- Ensure documentation is updated

---

## 🛠 Tech Stack

> **Note:** Update this section as technologies are chosen and implemented.

### Recommended Stack Options

**Frontend Options:**
- React.js + TypeScript
- Vue.js + TypeScript
- Svelte
- Next.js (for SSR/SSG)

**Backend Options:**
- Node.js + Express
- Python + FastAPI/Flask
- Go
- Rust + Actix

**Database Options:**
- PostgreSQL
- MongoDB
- SQLite
- Redis (caching)

**Testing:**
- Jest (JavaScript/TypeScript)
- Pytest (Python)
- Vitest (Vite projects)

**Build Tools:**
- Vite
- Webpack
- esbuild
- Rollup

---

## 📐 Key Conventions

### Code Style

1. **Formatting**
   - Use consistent indentation (2 or 4 spaces)
   - Configure a formatter (Prettier, Black, rustfmt)
   - Include `.editorconfig` for consistency

2. **Naming Conventions**
   - **Files:** kebab-case for files (`user-service.ts`)
   - **Classes:** PascalCase (`UserService`)
   - **Functions/Variables:** camelCase (`getUserById`)
   - **Constants:** UPPER_SNAKE_CASE (`MAX_RETRY_COUNT`)
   - **TypeScript Interfaces:** PascalCase with 'I' prefix optional (`IUser` or `User`)

3. **Comments**
   - Use JSDoc/docstrings for public APIs
   - Explain "why" not "what" in comments
   - Keep comments up-to-date with code changes

### Security Practices

- Never commit secrets or API keys
- Use environment variables for configuration
- Sanitize user inputs
- Follow OWASP Top 10 guidelines
- Regular dependency updates

### Performance

- Avoid premature optimization
- Profile before optimizing
- Use caching strategically
- Minimize bundle sizes
- Lazy load when appropriate

---

## 🚀 Getting Started

### Prerequisites

> Update with specific requirements as they're determined.

```bash
# Example for Node.js project
node --version  # v18+ recommended
npm --version   # or yarn, pnpm

# Example for Python project
python --version  # 3.9+ recommended
pip --version
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd littlekitchen

# Install dependencies (update based on actual setup)
npm install
# or
pip install -r requirements.txt
```

### Development

```bash
# Start development server (update based on actual setup)
npm run dev
# or
python main.py
```

### Environment Setup

Create a `.env` file (never commit this file):

```env
# Example environment variables
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://localhost/littlekitchen
API_KEY=your-api-key-here
```

---

## 🧪 Testing Guidelines

### Test Structure

- Write tests for all business logic
- Aim for 80%+ code coverage
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### Running Tests

```bash
# Run all tests
npm test
# or
pytest

# Run with coverage
npm run test:coverage
# or
pytest --cov

# Run specific test file
npm test -- user.test.ts
# or
pytest tests/test_user.py
```

### Test Types

1. **Unit Tests** - Test individual functions/classes
2. **Integration Tests** - Test component interactions
3. **E2E Tests** - Test full user workflows

---

## 🚢 Deployment

> Update with actual deployment process.

### Build Process

```bash
# Build for production
npm run build
# or
python setup.py build
```

### Deployment Targets

- **Development:** Auto-deploy from `develop` branch
- **Staging:** Auto-deploy from `staging` branch
- **Production:** Manual deploy from `main` branch

### Environment Variables

Ensure all required environment variables are set in deployment environment:
- Database connection strings
- API keys and secrets
- Feature flags
- Service endpoints

---

## 🤖 AI Assistant Guidelines

### General Principles

1. **Read Before Writing**
   - Always read existing files before modifying
   - Understand context before making changes
   - Check for similar patterns in the codebase

2. **Follow Existing Patterns**
   - Match the existing code style
   - Use established naming conventions
   - Follow project architecture decisions

3. **Security First**
   - Never introduce security vulnerabilities
   - Validate and sanitize inputs
   - Avoid hardcoding secrets
   - Check for OWASP Top 10 issues

4. **Test Coverage**
   - Write tests for new functionality
   - Update tests when modifying code
   - Ensure tests pass before committing

5. **Documentation**
   - Update CLAUDE.md when project structure changes
   - Add code comments for complex logic
   - Update README.md for user-facing changes

### Workflow for Changes

1. **Understand the Request**
   - Clarify ambiguous requirements
   - Ask questions if needed
   - Confirm approach before major changes

2. **Explore the Codebase**
   - Use search tools to find relevant code
   - Read related files for context
   - Identify affected areas

3. **Plan the Changes**
   - Use TodoWrite to track tasks
   - Break down complex changes
   - Consider edge cases

4. **Implement**
   - Make focused, incremental changes
   - Follow established patterns
   - Write clean, readable code

5. **Test**
   - Run existing tests
   - Add new tests for changes
   - Verify functionality manually if needed

6. **Document**
   - Update code comments
   - Update documentation files
   - Add migration notes if needed

7. **Commit and Push**
   - Write clear commit messages
   - Push to the correct branch
   - Create PR with detailed description

### Common Tasks

#### Adding a New Feature

1. Create feature branch or use assigned Claude branch
2. Implement feature with tests
3. Update documentation
4. Commit with descriptive message
5. Create pull request

#### Fixing a Bug

1. Reproduce the bug
2. Write failing test case
3. Implement fix
4. Verify test passes
5. Check for similar issues
6. Commit and push

#### Refactoring

1. Ensure tests exist
2. Make incremental changes
3. Run tests after each change
4. Maintain backward compatibility when possible
5. Document breaking changes

#### Updating Dependencies

1. Check for breaking changes
2. Update code if needed
3. Run full test suite
4. Update documentation
5. Note changes in commit message

### File References

When referencing code, use the format: `file_path:line_number`

Example: "The user authentication is handled in `src/auth/login.ts:45`"

### Error Handling

- Always check for error conditions
- Provide meaningful error messages
- Log errors appropriately
- Handle edge cases gracefully
- Don't silence errors unless intentional

### Code Quality Checklist

Before committing, verify:

- [ ] Code follows project conventions
- [ ] Tests are written and passing
- [ ] No security vulnerabilities introduced
- [ ] Documentation is updated
- [ ] No commented-out code (unless necessary)
- [ ] No console.log or debug statements
- [ ] Error handling is appropriate
- [ ] Performance is acceptable
- [ ] Code is readable and maintainable

---

## 📝 Maintenance

### Updating This Document

This CLAUDE.md should be updated whenever:

- Project structure changes significantly
- New conventions are established
- Tech stack changes
- Development workflow evolves
- New patterns are introduced

### Version History

- **2025-11-18:** Initial creation - Empty repository setup

---

## 📚 Additional Resources

### Project Documentation

- README.md - User-facing documentation
- CONTRIBUTING.md - Contribution guidelines (to be created)
- CODE_OF_CONDUCT.md - Community guidelines (to be created)

### External Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)

---

## 🆘 Support

For questions or issues:

1. Check existing documentation
2. Search closed issues/PRs
3. Ask in team communication channels
4. Create new issue with detailed description

---

**Remember:** This is a living document. Keep it updated as the project evolves!
