import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAq16PDRXI5fqoM4vplA4BpLE4GU49xgbM",
  authDomain: "chat-app-2edd9.firebaseapp.com",
  projectId: "chat-app-2edd9",
  storageBucket: "chat-app-2edd9.appspot.com",
  messagingSenderId: "725025759578",
  appId: "1:725025759578:web:7ca21a7c5fff5b9f9d9363",
  measurementId: "G-5FRP6D6JG0"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();