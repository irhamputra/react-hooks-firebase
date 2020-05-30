import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/database';

interface Config {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

interface Options {
  enableMessaging?: boolean;
  enablePerformance?: boolean;
  enableAnalytics?: boolean;
}

export type FirebaseConfig = Required<Config>;

export const useFirebase = (config: FirebaseConfig, options: Options = {}) => {
  !firebase.apps.length
    ? firebase.initializeApp({ ...config })
    : firebase.app();

  return {
    auth: firebase.auth(),
    storage: firebase.storage(),
    firestore: firebase.firestore(),
    database: firebase.database(),
    messaging: options.enableMessaging && firebase.messaging(),
    analytics: options.enableAnalytics && firebase.analytics(),
    performance: options.enablePerformance && firebase.performance(),
  };
};
