import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: "org.coletivomotiro",
  appName: "Amigo",
  bundledWebRuntime: false,
  npmClient: "npm",
  webDir: "www",
    "plugins": {
      "SplashScreen": {
        "launchShowDuration": 3000
    },
  }
};

export default config;
