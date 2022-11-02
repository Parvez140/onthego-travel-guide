// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgAPchCQLvCi0O43ZhV7dhA99SSeJoaCA",
  authDomain: "onthego-traval-guide.firebaseapp.com",
  projectId: "onthego-traval-guide",
  storageBucket: "onthego-traval-guide.appspot.com",
  messagingSenderId: "102785754848",
  appId: "1:102785754848:web:8404ceed41038b33b99285",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
