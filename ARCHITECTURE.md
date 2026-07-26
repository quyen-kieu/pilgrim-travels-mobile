# Architecture

## Overview

```text
App
│
├── Theme
├── Components
├── Navigation
├── Screens
└── Services
```

## Navigation

```text
NavigationContainer
        │
        ▼
 RootNavigator
 ├─────────────┐
 │             │
 ▼             ▼
AuthStack   MainTabs
```

Current authentication flow:

```text
Splash
   │
   ▼
Login
 ├── Register
 └── Forgot Password
```

## Folder Structure

```text
src
├── assets
├── components
├── navigation
├── screens
├── services
└── theme
```

## Design Decisions

- Component-driven architecture
- Centralized theme
- React Navigation
- React Native Paper
- Authentication separated from main application
- Production-oriented project layout

## Future Architecture

The following are planned but **not implemented yet**:

- JWT authentication
- API service layer
- Persistent authentication state
- Bottom tab navigation
- Profile management
- Trip management
