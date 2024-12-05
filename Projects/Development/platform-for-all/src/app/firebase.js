// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLjnKlz5m1H_4anXqW2HMwimErLeFjrsE",
    authDomain: "aprendizajeparatodos-f9a29.firebaseapp.com",
    projectId: "aprendizajeparatodos-f9a29",
    storageBucket: "aprendizajeparatodos-f9a29.firebasestorage.app",
    messagingSenderId: "503108029209",
    appId: "1:503108029209:web:1a64e396dcdbd1f5a59388",
    measurementId: "G-JVGE30SL98"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//console.log(app);
