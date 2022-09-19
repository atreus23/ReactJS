import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZ44W7lT4kQw5Uu9L9iDruqD-Ia0v6Y1o",
  authDomain: "reactjs-informatica.firebaseapp.com",
  projectId: "reactjs-informatica",
  storageBucket: "reactjs-informatica.appspot.com",
  messagingSenderId: "628853195064",
  appId: "1:628853195064:web:7c5291be77f896b13bc1cd"
};

const app = initializeApp(firebaseConfig);
export default app