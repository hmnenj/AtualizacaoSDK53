import { initializeApp } from "firebase/app";

import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from 'firebase/firestore'

// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyABLrRnmOd13pITRJ_hUhQZKVhxSRHsRgY",
  authDomain: "ddmi-66ed0.firebaseapp.com",
  projectId: "ddmi-66ed0",
  storageBucket: "ddmi-66ed0.firebasestorage.app",
  messagingSenderId: "1026910276830",
  appId: "1:1026910276830:web:3a133f00fa0e650bdd464f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');