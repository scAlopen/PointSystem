// main.js

// Initialize the Firebase UI Widget using Firebase.
document.getElementById('google-login-btn').addEventListener('click', function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
      .then((result) => {
          console.log(result.user);
          window.location.href = "success.html";
      }).catch((error) => {
          console.error(error);
      });
});
