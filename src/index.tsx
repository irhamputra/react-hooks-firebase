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

export type FirebaseConfig = Required<Config>;

export const useFirebase = (config: FirebaseConfig) => {
  !firebase.apps.length
    ? firebase.initializeApp({ ...config })
    : firebase.app();

  return {
    auth: firebase.auth(),
    storage: firebase.storage(),
    firestore: firebase.firestore(),
    database: firebase.database(),
    messaging: firebase.messaging(),
  };
};
