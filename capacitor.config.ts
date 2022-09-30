import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nextjs-native-app',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
		url: 'http://192.168.1.37:3000',
		cleartext: true
	}
};

export default config;
