// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY2EOB3GGVPOp6EVTOJkky52Pobi_WxXg",
  authDomain: "netflixgpt-de239.firebaseapp.com",
  projectId: "netflixgpt-de239",
  storageBucket: "netflixgpt-de239.appspot.com",
  messagingSenderId: "618113824415",
  appId: "1:618113824415:web:52e50edc94923f187194aa",
  measurementId: "G-ESS0Y4X7J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();