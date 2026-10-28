# Fitness App

An Expo/React Native exercise-browser app. Users choose a muscle group, retrieve exercises from API Ninjas, and open an exercise detail view. The interface includes a welcome screen, image carousel, body-part cards, and animated transitions.

## What is implemented

- File-based screens through Expo Router.
- Muscle-group selection and exercise listing.
- Exercise details based on remote API records.
- Responsive sizing, gradients, and Reanimated transitions.

This repository is an exercise-browsing prototype. It does not establish a personalized training-plan engine, activity tracking, or a production account backend.

## Stack

The manifest specifies Expo ~50.0.14, React Native 0.73.6, React 18.2, Expo Router ~3.4.8, NativeWind, Axios, and Reanimated ~3.6.2. These are the repository's versions; do not assume current Expo Go releases support the project unchanged.

## Setup

```bash
git clone https://github.com/AbdelilahNossair/Fitness-App.git
cd Fitness-App
npm install
npm start
```

Use a Node/npm version compatible with Expo SDK 50. Run on a compatible device client/development build, Android emulator, or iOS simulator. The iOS simulator requires macOS and Xcode; Android requires an Android development environment.

Additional scripts:

```bash
npm run android
npm run ios
npm run web
```

If a current client reports an SDK mismatch, use an SDK-compatible development environment or perform a deliberate Expo upgrade.

## Exercise API configuration

`api/exerciseDB.js` requests:

```text
GET https://api.api-ninjas.com/v1/exercises?muscle=<bodyPart>
X-Api-Key: <your API Ninjas key>
```

The key is imported as `ApiKey` from `constants/index.js`. Supply your own authorized configuration in a local copy and avoid committing credentials. A value bundled into a mobile/web client is visible to users; use a backend proxy if the key needs to remain private.

API access, availability, and account limits determine whether exercises load. The helper logs failures and can return undefined instead of a structured error, so an empty screen may indicate configuration or network failure.

## Code map

| Path | Responsibility |
| --- | --- |
| `app/index.jsx` | Welcome/entry screen |
| `app/home.jsx` | Main exercise-browsing interface |
| `app/exercises.jsx` | Selected-group results |
| `app/exerciseDetails.jsx` | Exercise detail presentation |
| `app/_layout.jsx` | Router layout |
| `components/BodyParts.jsx` | Muscle-group choices |
| `components/ExerciseList.jsx` | Exercise cards/list |
| `components/ImageSlider.jsx` | Carousel |
| `api/exerciseDB.js` | Axios wrapper and external requests |
| `constants/index.js` | Shared data/configuration |

## User flow and checks

Start the app, proceed through the welcome screen, choose a body part, open an exercise, and navigate back. Test both a successful API response and a failed request. Check small-screen layout and platform-specific animations.

`npm test` starts Jest in watch mode using the jest-expo preset; the presence of this script does not establish meaningful test coverage. No dependency lockfile or standalone project license is included in the reviewed tree. Useful next steps are loading/error states, validated API response handling, and a supported Expo upgrade.
