// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup }from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";// SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABYh0sIjZCTLRBZy5obNHr1EmV7K82JiY",
  authDomain: "pointsystem-3e0a0.firebaseapp.com",
  projectId: "pointsystem-3e0a0",
  storageBucket: "pointsystem-3e0a0.appspot.com",
  messagingSenderId: "942795957122",
  appId: "1:942795957122:web:53419682fd3ce81682659b"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);



const submit = document.getElementById('google-login-btn');
submit.addEventListener("click", function (event) {
event.preventDefault()
alert(5)
}) 