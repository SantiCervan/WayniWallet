# WayniWallet

A React Native mobile application for managing digital transactions and transfers.

## Technologies

- React Native CLI
- TypeScript
- Tanstack/react-query
- Zustand
- AsyncStorage
- React Navigation
- NativeWind

## Project Configuration

- React Native CLI (not Expo)
- TypeScript
- Hooks
- Functional Components
- ES6+

## Prerequisites

- Node.js v20.17.0
- Android Studio with Pixel 4 emulator (Android 12.0)
- JDK
- Android SDK

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/WayniWallet.git
cd WayniWallet
```

2. Install dependencies

```bash
npm install
```

## Running the App

1. Start your Android emulator (Pixel 4 with Android 12.0)

2. Start Metro bundler

```bash
npm start
```

3. Press 'a' in the Metro bundler terminal to launch on Android

## Data Source

The app fetches user data from [https://randomuser.me/] API to simulate contacts and transactions.

## Architecture

The application is built using:

- Modern React Native architecture with functional components
- TypeScript for type safety
- Zustand for state management with AsyncStorage persistence
- NativeWind for styling
- React Navigation for routing
- Tanstack Query for API data fetching
