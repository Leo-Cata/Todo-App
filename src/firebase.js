// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZyZGq05OI56OG9aBq_hyi63Jdv47W2MI',
  authDomain: 'todo-app-193bd.firebaseapp.com',
  projectId: 'todo-app-193bd',
  storageBucket: 'todo-app-193bd.appspot.com',
  messagingSenderId: '171428498117',
  appId: '1:171428498117:web:5240c5a484a54017f2beac',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
