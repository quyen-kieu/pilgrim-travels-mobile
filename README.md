# Pilgrim Travels

A modern React Native mobile application that helps pilgrims organize and plan spiritual journeys while growing closer to God.

This project is being built using a production-ready architecture with reusable components, centralized theming, and scalable navigation.

---

## Current Progress

### ✅ Step 1 - Project Setup

Completed the initial project structure.

```text
src
├── assets
├── components
├── navigation
├── screens
├── services
└── theme
```

### ✅ Step 2 - UI Framework

Installed:

- React Native Paper

### ✅ Step 3 - Global Theme

Created a centralized theme system.

```text
src/theme
├── colors.js
├── spacing.js
├── typography.js
├── radius.js
├── shadows.js
├── paperTheme.js
└── index.js
```

The theme centralizes:

- Colors
- Typography
- Spacing
- Border Radius
- Shadows
- React Native Paper theme

### ✅ Step 4 - Reusable Components

Created reusable UI components.

```text
src/components
├── AppButton.js
├── AppCard.js
├── AppInput.js
├── AppPasswordInput.js
├── AppLogo.js
├── AuthLayout.js
└── index.js
```

Benefits:

- Consistent styling
- Less duplicated code
- Easier maintenance
- Reusable throughout the application

### ✅ Step 5 - Navigation

Implemented a scalable navigation architecture.

```text
src/navigation
├── RootNavigator.js
├── AuthStack.js
├── MainTabs.js
└── index.js
```

Navigation flow:

```text
App
│
▼
RootNavigator
├── AuthStack
└── MainTabs
```

Authentication flow:

```text
Splash
   │
   ▼
Login
 ├── Register
 └── Forgot Password
```

Main application placeholders:

- Home
- Trips
- Search
- Favorites
- Profile

Authentication switching is currently controlled by:

```javascript
const isAuthenticated = false;
```

This will later be replaced by JWT authentication.

### ✅ Step 6 (Part 1)

Completed:

- AuthLayout
- Improved reusable components
- Updated branding
- Improved keyboard behavior

Authentication screens themselves have **not yet been implemented**.

---

## Tech Stack

- React Native
- React Native Paper
- React Navigation
- JavaScript

---

## Project Structure

```text
src
├── components
├── navigation
├── screens
├── services
└── theme
```

---

## Architecture

```text
Theme
  ↓
Reusable Components
  ↓
Screens
  ↓
Navigation
  ↓
Business Logic
```

---

## Current Status

✅ Foundation Complete

The application currently includes:

- Global theme
- Reusable UI components
- Navigation architecture
- Authentication layout
- Placeholder screens

### Next Milestone

The following items have **not** been completed yet:

- Login screen UI
- Register screen UI
- Forgot Password screen UI
- Splash screen UI
- Spring Boot JWT integration

---

## Author

Quyen K.
