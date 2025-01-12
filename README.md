# Welcome to our ShopBack prototype app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
For this hackathon, our focus will be on improving user retention by targeting users exploring cashback or vouchers based on their geographical location. We will showcase vouchers available at specific or nearby locations. This feature will include a dedicated section on the homepage and a separate page where users can filter and search for their preferred stores and rewards.

For more details, visit <a href="https://docs.google.com/presentation/d/1OwtlCzaaoTiuFHtEZricI2BWl0aYrHl81VBjXoDaUdE/edit#slide=id.g324ca20257b_0_228">here</a>

<img src="https://github.com/user-attachments/assets/0135f9c3-329b-4556-99fd-da23429d5b1c" alt="Home Page - Light" width="200">
<img src="https://github.com/user-attachments/assets/7ee85003-438c-4de9-8129-3d20160464d6" alt="Location Based Recommendation Page - Light" width="200">
<img src="https://github.com/user-attachments/assets/7a4d770c-5956-471d-a57c-3d91b3f78da5" alt="Home Page - Dark" width="200">
<img src="https://github.com/user-attachments/assets/d3d64cdf-d5ca-4e4a-93da-6c9fc31c6ca6" alt="Location Based Recommendation Page - Dark" width="200">

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Building the app

```bash
eas build
```

For iOS

```bash
eas build -p ios --profile preview
```

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.
