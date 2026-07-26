# Contributing

Thank you for contributing to **Pilgrim Travels**.

## Branch Strategy
This project currently uses the **master** branch as the primary branch.

## Workflow

1. Pull latest changes.
2. Create a feature branch (recommended).
3. Make focused changes.
4. Test the application.
5. Commit using descriptive commit messages.
6. Open a Pull Request (or merge into `master` for solo development).

## Commit Message Examples

- feat: add login screen
- feat: implement JWT authentication
- fix: correct navigation issue
- refactor: simplify reusable components
- docs: update architecture

## Coding Guidelines

- Keep components small and reusable.
- Centralize colors and spacing in `src/theme`.
- Avoid duplicated UI.
- Prefer composition over inheritance.
- Keep navigation logic inside `src/navigation`.

## Testing Checklist

- App launches successfully.
- Navigation works.
- No console errors.
- UI follows the theme.
- Components remain reusable.
