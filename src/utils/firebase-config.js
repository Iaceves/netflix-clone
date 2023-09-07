import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDncG_SEyAjtQWGRUjz9w3WV8msciWSmfE",
  authDomain: "netflix-project-3669d.firebaseapp.com",
  projectId: "netflix-project-3669d",
  storageBucket: "netflix-project-3669d.appspot.com",
  messagingSenderId: "80689287750",
  appId: "1:80689287750:web:688f239d8c32f2d8493047",
  measurementId: "G-HWWPL19CQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
