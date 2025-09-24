// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC48NsrSdteL67BiBqw_q8ZW2IXnK7ACBE",
  authDomain: "chatingapp-1ea0f.firebaseapp.com",
  projectId: "chatingapp-1ea0f",
  storageBucket: "chatingapp-1ea0f.firebasestorage.app",
  messagingSenderId: "169355871501",
  appId: "1:169355871501:web:d2cce2c12a294a09cfdc44",
  measurementId: "G-72TRSV1KEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;