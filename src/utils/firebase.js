// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF9-sY4kay08QWhKijOJSu-GDCsvCPFtA",
  authDomain: "netflixgpt-1a3ca.firebaseapp.com",
  projectId: "netflixgpt-1a3ca",
  storageBucket: "netflixgpt-1a3ca.appspot.com",
  messagingSenderId: "299121686778",
  appId: "1:299121686778:web:c3ea6b62e3d5f5c547f143",
  measurementId: "G-CMCZRC0HKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
