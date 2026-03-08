# React Native Skeleton (Expo + NativeWind, JavaScript)

This repository is a skeleton React Native project built with Expo and Expo Router.

It is preconfigured with:

- NativeWind (Tailwind-style utility classes for React Native)
- File-based routing via Expo Router
- JavaScript-only setup (no TypeScript required)

## Tech Stack

- React Native
- Expo
- Expo Router
- NativeWind
- Tailwind CSS

## Project Goal

Use this repo as a clean starting point for new mobile projects where you want:

- Fast setup
- Utility-first styling with NativeWind
- JavaScript workflow without TypeScript overhead

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npx expo start
```

You can then open the app on:

- Android emulator/device
- iOS simulator/device
- Expo Go
- Web

## Scripts

- `npm run start` - Start Expo
- `npm run android` - Start Expo for Android
- `npm run ios` - Start Expo for iOS
- `npm run web` - Start Expo for Web
- `npm run lint` - Run linting

## Styling Notes

- Global styles live in `app/global.css`
- Tailwind/NativeWind config lives in `tailwind.config.js`
- Use `className` on React Native components for NativeWind utilities

## Routing Notes

- Routes are file-based in the `app/` directory
- Shared layout and stack config is in `app/_layout.jsx`
